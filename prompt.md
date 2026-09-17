# Task: Rebuild Homepage Loader + Hero From Reference

Rebuild the existing homepage **loading animation + hero section** to match the supplied Crisp Loading Animation reference as closely as possible in:

- composition
- sequencing
- image movement
- timing
- easing
- scale transition
- hero reveal
- slideshow transitions
- thumbnail behavior
- overall visual feel

Follow `AGENTS.md`.

The supplied reference is the visual and behavioral source of truth.

Do **not** implement the previously discussed global scaling system yet.

---

## Scope

Only modify what is necessary for:

- homepage loader
- homepage hero
- hero slideshow
- loader/hero GSAP lifecycle
- necessary integration with existing navbar and Lenis

Do not redesign later homepage sections.

Do not refactor unrelated code.

---

# 1. Important: Adapt, Do Not Copy Branding

Reproduce the reference experience, but adapt it to Upright.

Do not copy:

- Osmo logo
- Osmo text
- external demo images
- demo marketing copy

Use:

- existing Upright branding
- existing approved homepage/company/project imagery
- existing homepage hero copy unless a small structural adjustment is necessary
- existing public navigation

The final result should feel like **Upright using this interaction system**, not an Osmo clone.

---

# 2. Replace Existing Preloader

Remove the current old homepage/global preloader behavior for this experience.

Do not retain the existing artificial:

- 3-second minimum delay
- 1-second returning delay

The new loader animation itself becomes the opening experience.

Do not stack the old loader underneath or above the new one.

If the existing preloader is globally mounted, change its behavior carefully so other routes are not broken.

This premium loader should primarily belong to the homepage hero.

---

# 3. Hero Structure

Match the reference architecture conceptually:

```txt
Homepage Hero
├── fullscreen slideshow background
├── loader overlay
│   ├── duplicate image group
│   └── primary image group
│       └── center/current image expands into hero
│
└── hero content
    ├── existing Upright navbar/top UI
    ├── centered hero H1
    └── bottom area
        ├── slideshow thumbnails
        └── small supporting label/copy
```

Use semantic React/Next.js markup.

Do not reproduce the reference's raw Webflow markup literally.

---

# 4. Media Selection

The reference uses **5 images**.

Use 5 strong existing Upright/company/project images already in the repository.

Requirements:

- visually high quality
- suitable for full-screen `object-cover`
- representative of Upright
- no unverified external stock imagery
- optimized delivery

The first/current slideshow image must be the same image that becomes the expanding center loader image.

The loader order should wrap around the active image so the active hero image sits visually in the center of the five-tile loader.

Conceptually:

```txt
previous previous
previous
CURRENT
next
next next
```

Duplicate the visual group only where required by the reference animation.

Do not duplicate actual large media downloads unnecessarily.

---

# 5. Initial State

The homepage hero initially behaves like the reference:

- loader visible
- slideshow hidden behind loading state
- main hero content initially concealed
- center loader group visible
- page interaction temporarily prevented while intro animation is running

Do not use arbitrary CSS timers.

The animation timeline owns the transition.

---

# 6. Loader Appearance

Match the reference loader closely.

The loader begins centered in the viewport.

Each image tile should approximately reproduce:

- square cards
- rounded corners
- even horizontal spacing
- cropped `object-cover` images
- side gradient fades
- duplicated moving group
- centered current image

The loader should feel extremely clean and precise.

Avoid introducing unnecessary decorations.

---

# 7. Loader Animation Sequence

Reproduce the supplied GSAP sequence closely.

### Phase 1 — Image Strip Sweep

The loader images sweep horizontally across the viewport.

Reference behavior:

```ts
xPercent: 500
→
xPercent: -500

duration: 2.5
stagger: 0.05
ease: expo.inOut
```

Preserve this visual rhythm unless React/DOM structure requires a technically equivalent implementation.

---

### Phase 2 — Surrounding Images Scale Down

The non-current images scale down while the center/current image remains dominant.

Reference target:

```ts
scale: 0.5;
duration: 2;
```

Use edge-originating stagger behavior equivalent to the reference.

The surrounding imagery should visually recede while attention converges on the center image.

---

### Phase 3 — Current Image Becomes Hero

This transition is the most important part.

The current center loader image expands smoothly from approximately:

```txt
10em × 10em
```

to:

```txt
100vw × 100dvh
```

Match the reference overlap:

- expansion starts before the previous phase completely finishes
- corners progressively transition from rounded tile to full-screen media
- transformation should feel continuous
- there must be no visible cut between loader image and hero image

The final expanded image becomes the initial hero slideshow background.

Avoid flashing, replacement flicker, layout jumps, or duplicate visible frames.

---

# 8. Hero Content Reveal

Once the image is becoming full-screen, reveal the hero UI following the reference timing.

Order:

1. slideshow thumbnails
2. hero heading
3. navbar/top elements
4. supporting bottom text

Use overlapping GSAP timeline positions rather than sequential waits.

The whole sequence should feel like one continuous choreography.

---

# 9. Hero Heading

Use GSAP SplitText if it is supported by the currently installed GSAP package.

Do not load GSAP or plugins from a CDN.

Use local package imports only.

Split the main H1 into **words** with masked overflow equivalent to the reference.

Initial state:

```ts
yPercent: 110;
```

Reveal approximately:

```ts
yPercent: 0;
stagger: 0.075;
ease: expo.out;
duration: 1;
```

Preserve semantic `<h1>` content.

Ensure SplitText is reverted during cleanup.

If plugin availability requires a package/version change, report it rather than silently introducing another animation library.

---

# 10. GSAP

Use the existing local GSAP installation.

Use:

- GSAP
- `@gsap/react`
- SplitText where available
- CustomEase where appropriate

Do NOT use CDN script tags.

Register plugins through the project's canonical GSAP registration boundary if one now exists.

Create the reference wipe ease equivalent to:

```txt
0.625, 0.05, 0, 1
```

Keep animation code scoped to the hero component.

Cleanup must only affect animations owned by this hero.

---

# 11. Slideshow

Implement the reference slideshow behavior.

Use the same 5 hero images as the loader.

The slideshow should NOT autoplay unless the supplied reference explicitly does so.

Thumbnail click/tap changes the active slide.

Transition should reproduce the reference directional wipe.

Outgoing slide:

```ts
xPercent: -direction * 100;
```

Outgoing inner image:

```ts
xPercent: direction * 75;
```

Incoming slide:

```ts
direction * 100 → 0
```

Incoming inner image:

```ts
-direction * 75 → 0
```

Use approximately:

```txt
duration: 1.5s
ease: reference custom wipe ease
```

Prevent new navigation while the transition is active.

---

# 12. Thumbnail Navigation

Match the visual interaction of the reference:

- bottom-centered thumbnail row
- 5 square thumbnails
- active thumbnail outlined
- elegant hover scaling
- active state clearly visible

However, use accessible:

```tsx
<button>
```

elements rather than clickable `div`s.

Each thumbnail must have an accessible label.

Keyboard interaction must work.

Do not sacrifice accessibility to reproduce invalid markup.

---

# 13. Navbar

Keep the existing Upright navigation content and functionality.

Do not replace it with the reference Osmo logo/hamburger.

Integrate the existing navbar visually with the new hero.

During intro:

- navbar can initially be hidden
- reveal it at approximately the same point as the reference top elements

After the intro it must behave like the normal Upright navigation.

Do not duplicate two navbars.

---

# 14. Lenis Integration

The site now has global public-site Lenis.

During the loader animation:

```ts
lenis.stop();
```

When the intro is complete:

```ts
lenis.start();
```

Also restore Lenis if:

- component unmounts
- navigation occurs
- animation is interrupted
- cleanup executes

Do not leave the page permanently scroll-locked.

Reduced-motion users should not be trapped waiting for the full intro.

---

# 15. Scroll Lock

Do not reproduce this reference rule blindly:

```css
main:has(.is--loading) {
  height: 100dvh;
}
```

Use the cleanest architecture for the existing Next.js app and Lenis setup.

While loading:

- prevent user page scrolling
- avoid layout shift
- keep viewport stable

After completion:

- restore normal document flow
- do not modify later sections

---

# 16. Hero Height

Use:

```txt
100dvh
```

rather than relying only on legacy `100vh`.

The hero must work correctly on:

- desktop
- tablet
- mobile portrait
- mobile landscape

Avoid mobile browser chrome height issues.

---

# 17. Performance

This must look premium without recreating the current site's performance problems.

Requirements:

- only hero-critical image(s) eager/priority load
- later slideshow imagery should use appropriate loading strategy
- avoid downloading duplicate copies for duplicated loader DOM
- use `next/image` where it does not interfere with required GSAP transforms
- preserve intrinsic sizing
- avoid React state updates every animation frame
- use refs/GSAP for animation
- no arbitrary runtime intervals

Do not wait for every site asset before starting.

Only wait for what this hero genuinely requires.

---

# 18. React / Next.js Architecture

Keep the page itself server-rendered where possible.

Only the interactive hero should require a client boundary.

Prefer:

```txt
page Server Component
└── Hero Client Component
```

Do not turn the entire homepage into `"use client"` because the hero uses GSAP.

Keep the implementation concise.

Avoid unnecessary hooks/providers.

---

# 19. Reduced Motion

Respect `prefers-reduced-motion`.

For reduced motion:

- skip the long loader choreography
- show the first hero image immediately
- reveal heading/navbar/content with either no motion or a very short opacity transition
- slideshow must still work
- Lenis must not remain stopped

The content must never depend on the animation finishing.

---

# 20. Responsive Adaptation

The desktop composition should match the reference closely.

For mobile:

- preserve the same visual idea
- keep the loader centered
- reduce tile dimensions/spacing where necessary
- ensure thumbnails fit
- simplify only where needed for usability/performance

Do not completely replace the mobile experience with an unrelated design.

The design language should remain recognizably the same across breakpoints.

---

# 21. Exactness Standard

The supplied reference is not merely inspiration.

Treat it as a recreation target.

Pay close attention to:

- spatial proportions
- loader position
- image spacing
- rounded corners
- fade gradients
- overlap timing
- easing
- heading reveal
- thumbnail scale behavior
- slideshow wipe direction
- full-screen expansion
- timing between image expansion and UI reveal

Do not approximate the sequence with generic fade-ins.

Do not simplify the centerpiece transition.

The final result should immediately remind someone of the supplied reference interaction.

---

# 22. Preserve Upright Identity

Although interaction should match the reference, the result must still feel like Upright through:

- logo
- typography
- color treatment
- photography
- copy
- navigation
- content

Reference interaction system + Upright brand.

---

# 23. Remove Superseded Code

Once the new hero is verified:

Remove old hero/preloader implementation code that is genuinely replaced.

Do not leave:

- unused GSAP timelines
- unused loader CSS
- duplicate hero components
- dead imports
- arbitrary timeout logic

Do not delete unrelated experimental components elsewhere.

---

# 24. Verification

Verify at minimum:

### Intro

- initial loader state
- horizontal sweep
- surrounding tile scale-down
- center image expansion
- border-radius transition
- heading reveal
- navbar reveal
- thumbnails reveal
- scroll restoration

### Slideshow

- next/previous direction
- clicking every thumbnail
- rapid repeated clicks
- current state
- image parallax
- keyboard navigation

### Runtime

- refresh homepage
- navigate away during/after intro
- navigate back
- no duplicate timelines
- no duplicate GSAP listeners
- Lenis resumes correctly
- no hydration warnings
- no console errors

### Responsive

Check at least:

```txt
1440
1024
834
768
550
390
375
```

### Accessibility

- reduced motion
- keyboard thumbnails
- meaningful alt text
- heading semantics

---

# Output

Return only:

## Implemented

Concise description.

## Files

Files changed/removed.

## Media Used

List the five chosen Upright images.

## Animation Architecture

Briefly explain the loader → hero transition and slideshow lifecycle.

## Verification

Exactly what was checked.

## Differences From Reference

List only differences that were technically unavoidable or required to preserve Upright functionality/accessibility.

If there are no meaningful differences, say:

`None.`
