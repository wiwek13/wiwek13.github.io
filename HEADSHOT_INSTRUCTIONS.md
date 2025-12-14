# How to Add Your Headshot

## Quick Instructions

1. **Prepare your headshot image:**
   - Format: JPG or PNG
   - Recommended size: 800x800 pixels (square)
   - File size: Keep under 500KB for best performance
   - Name it: `headshot.jpg` or `headshot.png`

2. **Add to the project:**
   - Place your headshot image in the `public` folder
   - Name it exactly: `headshot.jpg` (or `headshot.png`)

3. **That's it!** The website will automatically use your headshot.

## File Location

```
public/
  ├── headshot.jpg  ← Add your image here
  └── headshot-placeholder.svg  ← Fallback (don't delete)
```

## Image Requirements

- **Format**: JPG or PNG
- **Size**: 800x800px (square) recommended
- **File size**: Under 500KB
- **Background**: Transparent or solid color works best
- **Quality**: High resolution for crisp display

## Example

If your image is named `my-photo.jpg`:
1. Copy it to `public/headshot.jpg`
2. The website will automatically display it

## Fallback

If `headshot.jpg` is not found, the website will automatically show a placeholder SVG. This ensures the site always looks good even if the image is missing.
