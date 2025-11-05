# Preloader Testing Guide

## Overview

The preloader now has two modes:

- **First Visit**: Full 8-second animation with words "Vision → Code → Design → Impact → Upright"
- **Return Visit**: Quick 2-second animation showing only "Upright"

## How to Test

### Test 1: First Visit Experience

1. **Clear Browser Storage**
   - Open Developer Tools (F12 or Right-click → Inspect)
   - Go to the **Application** tab (Chrome) or **Storage** tab (Firefox)
   - Find **Local Storage** in the left sidebar
   - Click on your site's domain
   - Find the key `upright_has_visited` and delete it (or click "Clear All")
2. **Hard Refresh the Page**
   - Windows/Linux: `Ctrl + Shift + R` or `Ctrl + F5`
   - Mac: `Cmd + Shift + R`
3. **Expected Result**
   - You should see the full word animation: Vision → Code → Design → Impact → Upright
   - Loading should take approximately 8 seconds
   - Percentage counter in bottom-right corner
   - Yellow background (#FCEF91)
   - Black text with smooth character-by-character animation

### Test 2: Return Visit Experience

1. **Simply Refresh the Page**
   - Windows/Linux: `F5` or `Ctrl + R`
   - Mac: `Cmd + R`
2. **Expected Result**
   - You should see only "Upright" word
   - Loading should take approximately 2 seconds
   - Much faster transition to homepage
   - Same visual style but shorter duration

### Test 3: Verify localStorage Flag

1. **Open Developer Tools** (F12)
2. **Go to Application/Storage tab**
3. **Check Local Storage**
4. **Look for the key**: `upright_has_visited`
5. **Expected Value**: `"true"`

### Test 4: Simulate New User

To test the first-visit experience again:

**Option A: Clear localStorage**

```javascript
// In browser console (F12 → Console tab)
localStorage.removeItem("upright_has_visited");
// Then refresh the page
```

**Option B: Use Incognito/Private Mode**

- Chrome: `Ctrl + Shift + N` (Windows) or `Cmd + Shift + N` (Mac)
- Firefox: `Ctrl + Shift + P` (Windows) or `Cmd + Shift + P` (Mac)
- Safari: `Cmd + Shift + N`
- Navigate to your site - it will always show first-visit experience

**Option C: Clear All Site Data**

- Chrome: Settings → Privacy → Clear browsing data → Select "Cookies and site data"
- Or use Developer Tools → Application → Clear storage → "Clear site data"

### Test 5: Cross-Browser Testing

Test in multiple browsers to ensure consistency:

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari (Mac)
- ✅ Mobile browsers (Chrome Mobile, Safari iOS)

### Test 6: Performance Testing

1. **Open Network Tab** in Developer Tools
2. **Throttle Network** (optional)
   - Click "No throttling" dropdown
   - Select "Fast 3G" or "Slow 3G"
3. **Refresh and observe**
   - First visit should give enough time for assets to load
   - Return visit should be quick but smooth

## Troubleshooting

### Issue: Always showing first-visit animation

**Solution**: Check if localStorage is working

```javascript
// In console
localStorage.setItem("test", "value");
localStorage.getItem("test"); // Should return 'value'
```

### Issue: Always showing return-visit animation

**Solution**: The flag might be stuck

```javascript
// In console
localStorage.removeItem("upright_has_visited");
// Then hard refresh
```

### Issue: Animation not smooth

**Solution**:

- Check if GSAP is loaded properly
- Verify motion/framer-motion is installed
- Check browser console for errors

## Manual Override (For Development)

### Force First Visit Mode

```javascript
// In browser console
localStorage.removeItem("upright_has_visited");
location.reload();
```

### Force Return Visit Mode

```javascript
// In browser console
localStorage.setItem("upright_has_visited", "true");
location.reload();
```

### Reset Everything

```javascript
// In browser console
localStorage.clear();
location.reload();
```

## Expected Timings

| Visit Type   | Duration  | Words Shown                           | Use Case                          |
| ------------ | --------- | ------------------------------------- | --------------------------------- |
| First Visit  | 8 seconds | Vision, Code, Design, Impact, Upright | Brand introduction, asset loading |
| Return Visit | 2 seconds | Upright                               | Quick access, cached assets       |

## Technical Details

### localStorage Key

- **Key**: `upright_has_visited`
- **Value**: `"true"`
- **Scope**: Per domain/subdomain
- **Persistence**: Until manually cleared or browser data cleared

### Files Modified

- `components/preloader/index.tsx` - Main logic
- `components/preloader/loader.tsx` - Word display
- `components/word-loader.tsx` - Animation component

## Best Practices for Testing

1. **Always test in Incognito first** - Ensures clean slate
2. **Test on actual devices** - Mobile behavior may differ
3. **Check different network speeds** - Ensure 8 seconds is enough
4. **Verify smooth transitions** - No jarring jumps or flashes
5. **Test with cache disabled** - Simulates worst-case scenario

## Quick Test Checklist

- [ ] First visit shows 5 words (Vision, Code, Design, Impact, Upright)
- [ ] First visit takes ~8 seconds
- [ ] Return visit shows 1 word (Upright)
- [ ] Return visit takes ~2 seconds
- [ ] localStorage flag is set after first visit
- [ ] Clearing localStorage resets to first-visit mode
- [ ] Incognito mode always shows first-visit
- [ ] Animation is smooth and professional
- [ ] Percentage counter works correctly
- [ ] No console errors
- [ ] Works across different browsers
- [ ] Mobile experience is smooth

## Support

If you encounter issues:

1. Check browser console for errors (F12 → Console)
2. Verify localStorage is enabled in browser settings
3. Try in a different browser
4. Clear all site data and test again
