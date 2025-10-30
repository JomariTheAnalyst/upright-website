# Upright Systems Preloader

A sophisticated, modern preloader animation that appears before the main website loads.

## Features

### 1. **Logo Animation** (`preloader-logo.tsx`)
- Animated company logo with rotation and scale effects
- Gradient background with pulsing glow
- Company name with animated underline
- Duration: ~2 seconds

### 2. **Loading Counter** (`loading-counter.tsx`)
- Dynamic percentage counter (0-100%)
- Smooth counting animation with realistic loading curve
- Status text that changes based on progress:
  - 0-30%: "INITIALIZING"
  - 30-60%: "LOADING ASSETS"
  - 60-90%: "PREPARING EXPERIENCE"
  - 90-100%: "ALMOST READY"
  - 100%: "COMPLETE"
- Animated progress bar
- Pulsing loading dots

### 3. **Slice Transition** (`preloader.tsx`)
- Horizontal center line appears at 100%
- Screen splits into top and bottom halves
- Top half slides up, bottom half slides down
- Reveals main website underneath
- Smooth easing curve: `[0.76, 0, 0.24, 1]`
- Duration: 1.2 seconds

## Animation Timeline

```
0ms     - Preloader appears
0-2000ms - Logo animation
2000ms   - Logo fades out, counter fades in
2000-4000ms - Loading counter (0-100%)
4000ms   - Center line appears
4300ms   - Slice animation begins
5500ms   - Preloader removed, main site visible
```

## Styling

- **Colors**: Yellow/Amber gradient matching brand
- **Typography**: Bold, modern fonts
- **Effects**: Blur, glow, smooth transitions
- **Responsive**: Works on all screen sizes

## Integration

The preloader is integrated in `app/page.tsx`:

```tsx
import { Preloader } from "@/components/preloader"

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)
  
  return (
    <>
      {showPreloader && <Preloader />}
      <div className="relative min-h-screen">
        {/* Main content */}
      </div>
    </>
  )
}
```

## Customization

### Adjust Loading Duration
In `preloader.tsx`, modify the interval timing:
```tsx
const interval = setInterval(() => {
  // Change 150 to adjust speed
}, 150)
```

### Change Slice Direction
Modify the `clipPath` and animation direction in `preloader.tsx`:
- Horizontal: `clipPath: "inset(0 0 50% 0)"` / `clipPath: "inset(50% 0 0 0)"`
- Vertical: `clipPath: "inset(0 50% 0 0)"` / `clipPath: "inset(0 0 0 50%)"`

### Adjust Colors
Update gradient colors in all components:
```tsx
className="bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500"
```

## Performance

- Uses `AnimatePresence` for smooth mount/unmount
- Optimized animations with GPU acceleration
- Minimal re-renders
- Cleans up timers and intervals properly
