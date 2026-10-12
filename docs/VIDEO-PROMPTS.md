# Video Scrubbing Source Prompts & Compression Guide

For operators wishing to re-render or re-encode custom hero background footage to complement `bg2.mp4` / `bg-scrub.mp4`:

## Recommended Video Prompts (for RunWay Gen-3, Luma Dream Machine, Sora)

### Prompt 1 (Sangli Vineyard Dawn - Primary)
> Ultra-realistic 4K drone slow glide forward under a lush grape vineyard trellis pergola in Sangli Maharashtra at dawn. Soft dewy mist hanging between vines, deep canopy green foliage, ripe translucent Thomson green grape clusters gently hanging. Moody, overcast morning lighting with quiet cinematic atmosphere, slow consistent dolly motion forward, no camera jitter, no humans, no text, no modern equipment.

### Prompt 2 (Solapur Pomegranate Orchard)
> Cinematic 35mm steadycam slow forward tracking shot through rows of Bhagwa pomegranate trees in rural Solapur. Ripe crimson fruits hanging among dark green waxy leaves, early morning diffused sunlight, dust motes in gentle golden rays, calm steady pace, no people, no camera shake.

### Prompt 3 (Mandi Packhouse Arrival)
> Macro 50mm cinematic slow tracking shot over wooden harvesting crates filled with freshly picked grapes in a shaded collection shed, natural diffused lighting, soft atmospheric dust, rustic timber textures, serene pacing, no faces, no camera shake.

## FFmpeg Optimal Encoding Command for Scrubbing
To ensure frame-accurate instant seeking on mobile browsers and desktop without jitter, encode with every frame as an I-frame or keyframe interval of 2:

```bash
ffmpeg -i source.mp4 -an -vf "scale=1280:-2,fps=30" -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -g 2 -keyint_min 2 -sc_threshold 0 -movflags +faststart public/backgrounds/bg-scrub.mp4
```

Portrait version for mobile devices:
```bash
ffmpeg -i source.mp4 -an -vf "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,fps=24" -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -g 2 -keyint_min 2 -sc_threshold 0 -movflags +faststart public/backgrounds/bg-scrub-m.mp4
```
