# Speechify API Integration Guide

## Overview

The Thread Capacity Training System now includes Speechify Text-to-Speech API integration for automated audio generation of:
- Slide narration scripts
- Guided meditation practices
- Exercise instructions

## Setup Instructions

### 1. Get Your Speechify API Key

1. Go to [Speechify Text-to-Speech API](https://speechify.com/text-to-speech-api)
2. Sign up or log in to your account
3. Navigate to the API section in your dashboard
4. Create a new API key
5. Copy the API key (keep it secure!)

### 2. Add API Key to Environment

Open `/home/ronwr/Repos/The-Threads-of-Becoming/server/.env` and replace:

```bash
SPEECHIFY_API_KEY=your_api_key_here
```

With your actual API key:

```bash
SPEECHIFY_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxx
```

### 3. Restart the Server

After adding the API key, restart your server for changes to take effect:

```bash
cd server
pm2 restart threads-server
```

Or if running in development:

```bash
npm run start:dev
```

## Service Architecture

### SpeechifyService

Located at: `server/src/services/speechify.service.ts`

**Key Methods:**

#### `generateNarration(script: string)`
- **Purpose:** Generate audio for slide narration
- **Settings:** Moderate pace (0.9x speed), clear articulation
- **Voice:** Henry (natural male voice)
- **Returns:** Audio URL and metadata

```typescript
const result = await speechifyService.generateNarration(
  "Today we're exploring the PAUSE thread..."
);
// Returns: { audio_url: "https://...", duration_seconds: 45, ... }
```

#### `generateMeditation(script: string)`
- **Purpose:** Generate audio for guided meditation
- **Settings:** Slower pace (0.8x speed), calming tone
- **Voice:** George (calming voice)
- **Special:** Processes timing notation (`~`, `~~`, `~~~`) into actual pauses
- **Returns:** Audio URL and metadata

```typescript
const script = `
  Find a comfortable position. [~]
  Notice your breath. [~~]
  Stay with this for a moment. [~~~]
`;

const result = await speechifyService.generateMeditation(script);
// Converts [~] → 1s pause, [~~] → 2s pause, [~~~] → 4s pause
```

#### `generateExerciseInstructions(script: string)`
- **Purpose:** Generate audio for exercise instructions
- **Settings:** Normal pace (1.0x speed), clear and directive
- **Voice:** Henry
- **Returns:** Audio URL and metadata

### Timing Notation (for Meditations)

The service automatically converts meditation timing notation to SSML breaks:

- `[~]` → 1 second pause (half breath cycle)
- `[~~]` → 2 second pause (full breath cycle)
- `[~~~]` → 4 second pause (extended pause)

**Example:**

```
Begin by noticing your breath. [~]
The in-breath... [~] and the out-breath. [~~]
Stay with this sensation. [~~~]
```

Becomes:

```
Begin by noticing your breath. <break time="1s"/>
The in-breath... <break time="1s"/> and the out-breath. <break time="2s"/>
Stay with this sensation. <break time="4s"/>
```

## Voice Options

Default voices by content type:

| Content Type | Voice ID | Speed | Use Case |
|--------------|----------|-------|----------|
| Narration | henry | 0.9x | Slide presentations, teaching content |
| Meditation | george | 0.8x | Guided practices, body awareness |
| Exercise | henry | 1.0x | Instructions, setup, clear directions |

You can override these defaults by passing custom settings:

```typescript
await speechifyService.generateNarration(script, {
  voice_id: 'mia',    // Female voice
  speed: 1.0,         // Normal pace
  output_format: 'wav' // WAV format instead of MP3
});
```

### Available Voices

To see all available voices:

```typescript
const voices = await speechifyService.getAvailableVoices();
```

Common voices:
- **henry** - Natural male voice (good for teaching)
- **george** - Calm male voice (good for meditation)
- **mia** - Natural female voice
- **sara** - Warm female voice

## Usage in Training Module Creation

### Workflow for Creating Training Content:

1. **Author Content** (in markdown or database)
   - Write narration scripts for slides
   - Write meditation scripts with timing notation
   - Write exercise instructions

2. **Generate Audio** (via Speechify)
   ```typescript
   // In training module creation service
   const narrationAudio = await this.speechifyService.generateNarration(
     slideContent.narrationScript
   );

   slideContent.narrationAudioUrl = narrationAudio.audio_url;
   ```

3. **Store URLs** (in TrainingModule schema)
   - Save audio URLs in module content
   - Reference in frontend for playback

4. **Deliver to Frontend**
   - Send audio URLs to client
   - Client plays audio synchronized with slides/visuals

## API Response Format

```typescript
interface SpeechifyResponse {
  audio_url: string;           // CDN URL to generated audio file
  audio_data?: string;         // Optional: Base64 encoded audio
  duration_seconds: number;    // Length of audio in seconds
  characters_used: number;     // Character count (for billing)
}
```

## Error Handling

The service includes comprehensive error handling:

- **Missing API Key:** Throws error with clear message
- **API Failures:** Logs detailed error information
- **Network Issues:** 60-second timeout with retry logic
- **Invalid Input:** Validates text before sending

Check service configuration:

```typescript
if (!speechifyService.isConfigured()) {
  console.log('Speechify API key not configured');
}
```

## Cost Estimation

Speechify charges per character. To estimate costs:

```typescript
const estimatedSeconds = speechifyService.estimateDuration(script, 0.9);
console.log(`Estimated duration: ${estimatedSeconds} seconds`);
```

Average speaking rate: 150 words per minute at 1.0x speed

## Testing

Once your API key is configured, test the integration:

```bash
# Check server logs to verify service initialized
pm2 logs threads-server

# Look for: "Speechify API configured successfully"
# Or warning: "Speechify API key not configured"
```

## Next Steps

With Speechify integrated, you can now:

1. ✅ **Author training module content** - Write scripts in markdown
2. ✅ **Generate audio automatically** - Call Speechify service
3. ✅ **Store audio URLs** - Save in database with training modules
4. ✅ **Deliver to frontend** - Play synchronized with visuals

## Support

- **Speechify API Docs:** https://docs.speechify.com/api
- **Voice Samples:** https://speechify.com/voices
- **Pricing:** https://speechify.com/pricing

## Security Notes

⚠️ **Important:**
- Never commit your API key to version control
- Keep `.env` file in `.gitignore`
- Rotate API keys periodically
- Monitor usage to detect unauthorized access
- Use environment-specific keys (dev, staging, production)

---

**Integration Complete!**

Once you add your API key, the system will automatically generate high-quality audio narration for all training content.
