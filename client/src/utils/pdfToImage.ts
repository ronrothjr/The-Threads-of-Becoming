import * as pdfjsLib from 'pdfjs-dist';

// Configure worker - use local worker from node_modules in dev, CDN in production
// The worker must be loaded as a separate file for security reasons
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export interface PdfPageInfo {
  totalPages: number;
  pageNumber: number;
  width: number;
  height: number;
}

/**
 * Extract a specific page from a PDF and convert to PNG blob
 * @param pdfFile - PDF file to extract from
 * @param pageNumber - Page number (1-indexed)
 * @param scale - Render scale (default 2.0 for high quality)
 * @returns PNG blob and page metadata
 */
export async function extractPageToPng(
  pdfFile: File,
  pageNumber: number,
  scale: number = 2.0
): Promise<{ blob: Blob; info: PdfPageInfo }> {
  // Load PDF
  const arrayBuffer = await pdfFile.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  // Validate page number
  if (pageNumber < 1 || pageNumber > pdf.numPages) {
    throw new Error(`Invalid page number. PDF has ${pdf.numPages} pages, requested page ${pageNumber}`);
  }

  // Get specific page (1-indexed)
  const page = await pdf.getPage(pageNumber);

  // Set up canvas
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Failed to get canvas 2D context');
  }

  canvas.width = viewport.width;
  canvas.height = viewport.height;

  // Render page to canvas
  await page.render({
    canvasContext: context,
    viewport: viewport,
    canvas: canvas,
  } as any).promise;

  // Convert canvas to PNG blob
  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('Failed to convert canvas to blob'));
      }
    }, 'image/png', 1.0);
  });

  return {
    blob,
    info: {
      totalPages: pdf.numPages,
      pageNumber,
      width: viewport.width,
      height: viewport.height,
    },
  };
}

/**
 * Get total number of pages in a PDF
 */
export async function getPdfPageCount(pdfFile: File): Promise<number> {
  const arrayBuffer = await pdfFile.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  return pdf.numPages;
}

/**
 * Create object URL from blob (remember to revoke when done)
 */
export function createPreviewUrl(blob: Blob): string {
  return URL.createObjectURL(blob);
}

/**
 * Revoke object URL to free memory
 */
export function revokePreviewUrl(url: string): void {
  URL.revokeObjectURL(url);
}
