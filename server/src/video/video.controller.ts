import { Controller, Get, Req, Res, HttpStatus } from '@nestjs/common';
import type { FastifyRequest, FastifyReply } from 'fastify';
import * as fs from 'fs';
import * as path from 'path';

@Controller('video')
export class VideoController {
  @Get('intro')
  async getIntroVideo(
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply,
  ) {
    const videoPath = path.join(
      process.cwd(),
      '..',
      'Video - The Argument That Never Ends.mp4',
    );

    if (!fs.existsSync(videoPath)) {
      return reply.status(HttpStatus.NOT_FOUND).send('Video not found');
    }

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = end - start + 1;
      const file = fs.createReadStream(videoPath, { start, end });

      reply
        .status(HttpStatus.PARTIAL_CONTENT)
        .headers({
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4',
        })
        .send(file);
    } else {
      reply
        .status(HttpStatus.OK)
        .headers({
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4',
        })
        .send(fs.createReadStream(videoPath));
    }
  }
}
