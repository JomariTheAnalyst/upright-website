Setup: External Scripts

Copy

<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/CustomEase.min.js"></script>

‍

Step 1: Add HTML

Copy

<section data-slideshow="wrap" class="crisp-header is--loading is--hidden">
  <div class="crisp-header__slider">
    <div class="crisp-header__slider-list">
      <div data-slideshow="slide" class="crisp-header__slider-slide is--current"><img class="crisp-header__slider-slide-inner" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b241_green-headphone-close-up.avif" alt="Close-up of textured green headphones focusing on the ear cup and headband connection." data-slideshow="parallax" draggable="false"></div>
      <div data-slideshow="slide" class="crisp-header__slider-slide"><img class="crisp-header__slider-slide-inner" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b278_orange-leather-case.avif" width="Auto" alt="Close-up of a rounded corner of a brown leather phone case with textured surface." data-slideshow="parallax" draggable="false"></div>
      <div data-slideshow="slide" class="crisp-header__slider-slide"><img class="crisp-header__slider-slide-inner" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b258_modern-device-close-up.avif" width="Auto" alt="Close-up of a corner of a tablet with a smooth glass screen and rounded edges on a purple surface." data-slideshow="parallax" draggable="false" ></div>
      <div data-slideshow="slide" class="crisp-header__slider-slide"><img class="crisp-header__slider-slide-inner" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b287_sleek-device-close-up.avif" width="Auto" alt="Close-up of a curved corner of a sleek, modern device with a smooth dark surface." data-slideshow="parallax" draggable="false" ></div>
      <div data-slideshow="slide" class="crisp-header__slider-slide"><img class="crisp-header__slider-slide-inner" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b268_minimalist-teal-design.avif" width="Auto" alt="Close-up view of a rounded corner of a textured, dark gray-blue rectangular object against a matching background." data-slideshow="parallax" draggable="false" ></div>
    </div>
  </div>
  <div class="crisp-loader">
    <div class="crisp-loader__wrap">
      <div class="crisp-loader__groups">
        <div class="crisp-loader__group is--duplicate">
          <div class="crisp-loader__single">
            <div class="crisp-loader__media"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b287_sleek-device-close-up.avif" alt="Close-up of a curved corner of a sleek, modern device with a smooth dark surface." class="crisp-loader__cover-img"></div>
          </div>
          <div class="crisp-loader__single">
            <div class="crisp-loader__media"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b268_minimalist-teal-design.avif" alt="Close-up view of a rounded corner of a textured, dark gray-blue rectangular object against a matching background." class="crisp-loader__cover-img"></div>
          </div>
          <div class="crisp-loader__single">
            <div class="crisp-loader__media"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b241_green-headphone-close-up.avif" alt="Close-up of textured green headphones focusing on the ear cup and headband connection." class="crisp-loader__cover-img"></div>
          </div>
          <div class="crisp-loader__single">
            <div class="crisp-loader__media"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b278_orange-leather-case.avif" alt="Close-up of a rounded corner of a brown leather phone case with textured surface." class="crisp-loader__cover-img"></div>
          </div>
          <div class="crisp-loader__single">
            <div class="crisp-loader__media"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b258_modern-device-close-up.avif" alt="Close-up of a corner of a tablet with a smooth glass screen and rounded edges on a purple surface." class="crisp-loader__cover-img"></div>
          </div>
        </div>
        <div class="crisp-loader__group is--relative">
          <div class="crisp-loader__single">
            <div class="crisp-loader__media"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b287_sleek-device-close-up.avif" alt="Close-up of a curved corner of a sleek, modern device with a smooth dark surface." class="crisp-loader__cover-img is--scale-down"></div>
          </div>
          <div class="crisp-loader__single">
            <div class="crisp-loader__media"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b268_minimalist-teal-design.avif" alt="Close-up view of a rounded corner of a textured, dark gray-blue rectangular object against a matching background." class="crisp-loader__cover-img is--scale-down"></div>
          </div>
          <div class="crisp-loader__single">
            <div class="crisp-loader__media is--scaling is--radius"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b241_green-headphone-close-up.avif" alt="Close-up of textured green headphones focusing on the ear cup and headband connection." class="crisp-loader__cover-img"></div>
          </div>
          <div class="crisp-loader__single">
            <div class="crisp-loader__media"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b278_orange-leather-case.avif" alt="Close-up of a rounded corner of a brown leather phone case with textured surface." class="crisp-loader__cover-img is--scale-down"></div>
          </div>
          <div class="crisp-loader__single">
            <div class="crisp-loader__media"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b258_modern-device-close-up.avif" alt="Close-up of a corner of a tablet with a smooth glass screen and rounded edges on a purple surface." class="crisp-loader__cover-img is--scale-down"></div>
          </div>
        </div>
      </div>
      <div class="crisp-loader__fade"></div>
      <div class="crisp-loader__fade is--duplicate"></div>
    </div>
  </div>
  <div class="crisp-header__content">
    <div class="crisp-header__top">
      <a href="#" target="_blank" class="osmo-logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewbox="0 0 110 25" fill="none" class="osmo-logo__svg"><path d="M38.6535 24.1686C42.7849 24.1686 46.4296 22.0917 48.6049 18.9263C49.8544 22.1497 53.0867 24.1686 57.3663 24.1686C60.4495 24.1686 63.0501 23.1833 64.721 21.5632L64.4802 23.6683H69.7007L70.9503 12.7679L73.8514 23.6683H79.0769L81.978 12.7679L83.2268 23.6683H88.4473L87.8882 18.7885C90.0514 22.0313 93.7421 24.1686 97.933 24.1686C104.597 24.1686 110 18.766 110 12.1016C110 5.43732 104.596 0.0346429 97.9314 0.0346429C92.7608 0.0346429 88.3515 3.28785 86.6338 7.85749L85.7903 0.499502H80.0211L76.4625 13.8708L72.904 0.499502H67.1348L66.3243 7.56906C66.226 5.51224 65.3817 3.64878 63.9251 2.29932C62.3017 0.795175 60.0338 0 57.3655 0C54.8656 0 52.7113 0.712193 51.1354 2.06004C49.9737 3.05421 49.2131 4.33761 48.9191 5.76119C46.793 2.32429 42.9919 0.0346429 38.6535 0.0346429C31.9892 0.0346429 26.5865 5.43732 26.5865 12.1016C26.5865 18.766 31.9892 24.1686 38.6535 24.1686ZM97.9314 5.46471C101.597 5.46471 104.568 8.43594 104.568 12.1016C104.568 15.7673 101.597 18.7386 97.9314 18.7386C94.2657 18.7386 91.2945 15.7673 91.2945 12.1016C91.2945 8.43594 94.2657 5.46471 97.9314 5.46471ZM57.3663 5.05786C59.6318 5.05786 61.0223 6.10681 61.0852 7.86393L61.1045 8.39808H66.23L65.7015 13.0128C65.4389 12.5899 65.1271 12.1991 64.7637 11.8438C63.5682 10.6773 61.8151 9.88289 59.552 9.48328L56.501 8.93706C54.4797 8.5729 54.0656 7.94127 54.0656 7.10501C54.0656 6.89554 54.1582 5.05705 57.3663 5.05705V5.05786ZM55.1757 14.0094L58.7705 14.6837C61.0916 15.1293 61.4042 16.0711 61.4042 16.9339C61.4042 18.2963 59.8565 19.1422 57.3647 19.1422C54.4055 19.1422 53.2873 17.4729 53.2285 16.0437L53.2067 15.5128H50.2275C50.5457 14.4308 50.7197 13.2868 50.7197 12.1016C50.7197 12.0452 50.7165 11.9889 50.7157 11.9325C51.7872 12.95 53.2833 13.6598 55.1749 14.0094H55.1757ZM38.6535 5.46471C42.3192 5.46471 45.2904 8.43594 45.2904 12.1016C45.2904 15.7673 42.3192 18.7386 38.6535 18.7386C34.9878 18.7386 32.0166 15.7673 32.0166 12.1016C32.0166 8.43594 34.9878 5.46471 38.6535 5.46471Z" fill="currentColor"></path><path d="M16.3506 9.9554L21.6985 4.6075L19.5619 2.47092L14.214 7.81882C13.986 8.04762 13.5953 7.88569 13.5953 7.56262V0H10.5741V9.12397C10.5741 9.92478 9.92476 10.5741 9.12395 10.5741H0V13.5953H7.56261C7.88567 13.5953 8.04761 13.9861 7.8188 14.2141L2.47172 19.5619L4.6083 21.6985L9.95618 16.3506C10.1842 16.1226 10.5749 16.2838 10.5749 16.6068V24.1694H13.5961V15.0455C13.5961 14.2447 14.2454 13.5953 15.0463 13.5953H24.1702V10.5741H16.6076C16.2845 10.5741 16.1226 10.1834 16.3514 9.9554H16.3506Z" fill="currentColor" fill-opacity="0.75"></path></svg>
      </a>
      <div class="crisp-header__hamburger">
        <div class="crisp-header__hamburger-bar"></div>
        <div class="crisp-header__hamburger-bar"></div>
        <div class="crisp-header__hamburger-bar"></div>
      </div>
    </div>
    <div class="crisp-header__center">
      <h1 class="crisp-header__h1">We just love pixels</h1>
    </div>
    <div class="crisp-header__bottom">
      <div class="crisp-header__slider-nav">
        <div data-slideshow="thumb" class="crisp-header__slider-nav-btn is--current"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b241_green-headphone-close-up.avif" alt="Close-up of textured green headphones focusing on the ear cup and headband connection." class="crisp-loader__cover-img"></div>
        <div data-slideshow="thumb" class="crisp-header__slider-nav-btn"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b278_orange-leather-case.avif" alt="Close-up of a rounded corner of a brown leather phone case with textured surface." class="crisp-loader__cover-img"></div>
        <div data-slideshow="thumb" class="crisp-header__slider-nav-btn"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b258_modern-device-close-up.avif" alt="Close-up of a corner of a tablet with a smooth glass screen and rounded edges on a purple surface." class="crisp-loader__cover-img"></div>
        <div data-slideshow="thumb" class="crisp-header__slider-nav-btn"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b287_sleek-device-close-up.avif" alt="Close-up of a curved corner of a sleek, modern device with a smooth dark surface." class="crisp-loader__cover-img"></div>
        <div data-slideshow="thumb" class="crisp-header__slider-nav-btn"><img loading="eager" src="https://cdn.prod.website-files.com/69158db916f2854de7fae735/69158e74238022f91976b268_minimalist-teal-design.avif" alt="Close-up view of a rounded corner of a textured, dark gray-blue rectangular object against a matching background." class="crisp-loader__cover-img"></div>
      </div>
      <p class="crisp-header__p">Crisp Loading Animation</p>
    </div>
  </div>
</section>
Step 2: Add CSS

Copy
/_ Disable Scroll on Loading _/
main:has(.crisp-header.is--loading) {
height: 100dvh;
}

/_ Loader _/

.crisp-loader {
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
font-size: 1vw;
display: flex;
position: absolute;
top: 0;
left: 0;
overflow: hidden;
}

.crisp-loader\_\_wrap {
font-size: var(--size-font);
justify-content: center;
align-items: center;
display: flex;
position: relative;
}

.crisp-loader\_\_groups {
position: relative;
overflow: hidden;
}

.crisp-loader\_\_group {
border-radius: .5em;
justify-content: center;
align-items: center;
display: flex;
position: relative;
}

.crisp-loader\_\_single {
padding-left: 1em;
padding-right: 1em;
position: relative;
}

.crisp-loader\_\_media {
border-radius: .5em;
justify-content: center;
align-items: center;
width: 10em;
height: 10em;
display: flex;
position: relative;
}

.crisp-loader\_\_media.is--scaling {
will-change: transform;
border-radius: 0;
transition-property: border-radius;
transition-duration: .5s;
transition-timing-function: cubic-bezier(1, 0, 0, 1);
display: flex;
}

.crisp-loader\_\_cover-img {
object-fit: cover;
border-radius: inherit;
width: 100%;
height: 100%;
position: absolute;
}

.crisp-loader\_\_media.is--scaling.is--radius {
border-radius: .5em;
}

.crisp-loader\_\_group.is--relative {
position: relative;
left: 100%;
}

.crisp-loader\_\_group.is--duplicate {
position: absolute;
}

.crisp-loader\_\_cover-img.is--scale-down {
will-change: transform;
}

.crisp-loader**fade {
pointer-events: none;
background-image: linear-gradient(90deg, #eaeaea 20%, #0000);
width: 5em;
height: calc(100% + 2px);
position: absolute;
top: -1px;
left: -1px;
}
.crisp-loader**fade.is--duplicate {
left: auto;
right: -1px;
transform: scaleX(-1);
}

/_ Header _/

.crisp-header {
background-color: #eaeaea;
justify-content: center;
align-items: center;
display: flex;
position: relative;
overflow: hidden;
}

/_ Loading: Hidden _/
.crisp-header.is--loading.is--hidden {
display: none;
}

/_ Loading: is Loading _/
.crisp-header.is--loading .crisp-header\_\_slider {
display: none;
}

.crisp-header.is--loading .crisp-loader {
display: flex;
}

/_ Loading: Loading Done _/
.crisp-loader {
display: none;
}

.crisp-header\_\_content {
color: #f4f4f4;
flex-flow: column;
justify-content: center;
align-items: center;
width: 100%;
min-height: 100dvh;
padding: 2.5em;
display: flex;
position: relative;
}

.crisp-header\_\_top {
justify-content: space-between;
align-items: center;
width: 100%;
display: flex;
}

.crisp-header\_\_center {
width: 100%;
padding: 1.5em;
position: absolute;
left: 0;
}

.crisp-header\_\_bottom {
grid-column-gap: 2em;
grid-row-gap: 2em;
flex-flow: column;
align-items: center;
margin-top: auto;
display: flex;
}

.osmo-logo {
color: unset;
width: 8em;
text-decoration: none;
display: flex;
}

.osmo-logo\_\_svg {
display: block;
}

.crisp-header\_\_hamburger {
grid-column-gap: .375em;
grid-row-gap: .375em;
flex-flow: column;
justify-content: center;
align-items: center;
width: 2em;
height: 2em;
display: flex;
}

.crisp-header\_\_hamburger-bar {
background-color: currentColor;
width: 1.875em;
height: .125em;
}

.crisp-header\_\_slider-list {
grid-template-rows: 100%;
grid-template-columns: 100%;
place-items: center;
width: 100%;
height: 100%;
display: grid;
overflow: hidden;
}

.crisp-header\_\_slider-nav {
grid-column-gap: .5em;
grid-row-gap: .5em;
padding: 1em;
display: flex;
position: relative;
overflow: hidden;
}

.crisp-header**slider-nav-btn {
cursor: pointer;
border: 1px solid #0000;
border-radius: .25em;
width: 3.5em;
height: 3.5em;
position: relative;
transition: border-color 0.75s cubic-bezier(0.625, 0.05, 0, 1);
}
.crisp-header**slider-nav-btn img {
transform: scale(1) rotate(0.001deg);
transition: transform 0.75s cubic-bezier(0.625, 0.05, 0, 1);
}

.crisp-header**slider-nav:has(.crisp-header**slider-nav-btn:hover) img {
transform: scale(0.825) rotate(0.001deg);
}

.crisp-header**slider-nav:has(.crisp-header**slider-nav-btn:hover) .crisp-header\_\_slider-nav-btn:hover img {
transform: scale(1) rotate(0.001deg);
}

.crisp-header\_\_slider-nav-btn.is--current {
border-color: #f4f4f4;
}

.crisp-header\_\_p {
text-align: center;
font-size: 1.125em;
}

.crisp-header\_\_slider {
grid-column-gap: 1rem;
grid-row-gap: 1rem;
border-radius: .5em;
justify-content: center;
align-items: flex-end;
width: 100%;
height: 100%;
display: flex;
position: absolute;
}

.crisp-header\_\_slider-slide {
opacity: 0;
pointer-events: none;
will-change: transform, opacity;
grid-area: 1 / 1 / -1 / -1;
place-items: center;
width: 100%;
height: 100%;
display: grid;
position: relative;
overflow: hidden;
}

.crisp-header\_\_slider-slide.is--current {
opacity: 1;
pointer-events: auto;
}

.crisp-header\_\_slider-slide-inner {
object-fit: cover;
will-change: transform;
width: 100%;
height: 100%;
position: absolute;
}

.crisp-header\_\_a {
color: inherit;
text-decoration: none;
}

.crisp-header\_\_h1 {
text-align: center;
letter-spacing: -.04em;
margin-top: 0;
margin-bottom: .125em;
font-family: Haffer XH, Arial, sans-serif;
font-size: calc(5vw + 5dvh);
font-weight: 400;
line-height: .95;
}

.crisp-header\_\_h1 > \* {
margin: -0.1em -0.05em;
padding: 0.1em 0.05em;
}
Step 3: Add Javascript

Copy
gsap.registerPlugin(SplitText, CustomEase);
CustomEase.create("slideshow-wipe", "0.625, 0.05, 0, 1");

// Loading Animation
function initCrispLoadingAnimation() {

const container = document.querySelector(".crisp-header");
const heading = container.querySelectorAll(".crisp-header**h1");
const revealImages = container.querySelectorAll(".crisp-loader**group > _");
const isScaleUp = container.querySelectorAll(".crisp-loader**media");
const isScaleDown = container.querySelectorAll(".crisp-loader**media .is--scale-down");
const isRadius = container.querySelectorAll(".crisp-loader**media.is--scaling.is--radius");
const smallElements = container.querySelectorAll(".crisp-header**top, .crisp-header**p");
const sliderNav = container.querySelectorAll(".crisp-header**slider-nav > _");

/_ GSAP Timeline _/
const tl = gsap.timeline({
defaults: {
ease: "expo.inOut",
},
onStart: () => {
container.classList.remove('is--hidden');
}
});

/_ GSAP SplitText _/
let split;
if (heading.length) {
split = new SplitText(heading, {
type: "words",
mask: "words"
});

    gsap.set(split.words, {
      yPercent: 110,
    });

}

/_ Start of Timeline _/
if (revealImages.length) {
tl.fromTo(revealImages, {
xPercent: 500
}, {
xPercent: -500,
duration: 2.5,
stagger: 0.05
});
}

if (isScaleDown.length) {
tl.to(isScaleDown, {
scale: 0.5,
duration: 2,
stagger: {
each: 0.05,
from: "edges",
ease: "none"
},
onComplete: () => {
if (isRadius) {
isRadius.forEach(el => el.classList.remove('is--radius'));
}
}
}, "-=0.1");
}

if (isScaleUp.length) {
tl.fromTo(isScaleUp, {
width: "10em",
height: "10em"
}, {
width: "100vw",
height: "100dvh",
duration: 2
}, "< 0.5");
}

if (sliderNav.length) {
tl.from(sliderNav, {
yPercent: 150,
stagger: 0.05,
ease: "expo.out",
duration: 1
}, "-=0.9");
}

if (split && split.words.length) {
tl.to(split.words, {
yPercent: 0,
stagger: 0.075,
ease: "expo.out",
duration: 1
}, "< 0.1");
}

if (smallElements.length) {
tl.from(smallElements, {
opacity: 0,
ease: "power1.inOut",
duration: 0.2
}, "< 0.15");
}

tl.call(function () {
container.classList.remove('is--loading');
}, null, "+=0.45");
}

// Initialize Crisp Loading Animation
document.addEventListener('DOMContentLoaded', () => {
document.fonts.ready.then(() => {
initCrispLoadingAnimation();
});
});

// Slideshow
function initSlideShow(el) {
const ui = {
el,
slides: Array.from(el.querySelectorAll('[data-slideshow="slide"]')),
inner: Array.from(el.querySelectorAll('[data-slideshow="parallax"]')),
thumbs: Array.from(el.querySelectorAll('[data-slideshow="thumb"]'))
};

let current = 0;
const length = ui.slides.length;
let animating = false;
const animationDuration = 1.5;

ui.slides.forEach((slide, index) => slide.setAttribute('data-index', index));
ui.thumbs.forEach((thumb, index) => thumb.setAttribute('data-index', index));

ui.slides[current].classList.add('is--current');
ui.thumbs[current].classList.add('is--current');

function navigate(direction, targetIndex = null) {
if (animating) return;
animating = true;

    const previous = current;
    current =
      targetIndex !== null && targetIndex !== undefined
        ? targetIndex
        : direction === 1
          ? (current < length - 1 ? current + 1 : 0)
          : (current > 0 ? current - 1 : length - 1);

    const currentSlide = ui.slides[previous];
    const currentInner = ui.inner[previous];
    const upcomingSlide = ui.slides[current];
    const upcomingInner = ui.inner[current];

    gsap.timeline({
      defaults: { duration: animationDuration, ease: 'slideshow-wipe' },
      onStart() {
        upcomingSlide.classList.add('is--current');
        ui.thumbs[previous].classList.remove('is--current');
        ui.thumbs[current].classList.add('is--current');
      },
      onComplete() {
        currentSlide.classList.remove('is--current');
        animating = false;
      }
    })
      .to(currentSlide, { xPercent: -direction * 100 }, 0)
      .to(currentInner, { xPercent: direction * 75 }, 0)
      .fromTo(upcomingSlide, { xPercent: direction * 100 }, { xPercent: 0 }, 0)
      .fromTo(upcomingInner, { xPercent: -direction * 75 }, { xPercent: 0 }, 0);

}

ui.thumbs.forEach(thumb => {
thumb.addEventListener('click', event => {
const targetIndex = parseInt(event.currentTarget.getAttribute('data-index'), 10);
if (targetIndex === current || animating) return;
const direction = targetIndex > current ? 1 : -1;
navigate(direction, targetIndex);
});
});
}

// Initialize Slideshow
document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('[data-slideshow="wrap"]').forEach(wrap => initSlideShow(wrap));
});
Implementation
Loading Animation
For the loading animation we use a GSAP timeline with different kinds of easings, directional movement and class toggles. To split the Heading H1 into words we use GSAP SplitText. We use classes .is--hidden and .is--loading so the header only becomes visible once every motion has been orchestrated into a smooth entrance.

Slideshow
Note: The slideshow is an optional part of the resource.

Slideshow wrapper
Use [data-slideshow=“wrap”] on the main container to initialize a slideshow instance.

Slide
Use [data-slideshow=“slide”] on each slide element so the script can track them in order, animate them horizontally with GSAP and toggle the .is--current class when a slide becomes active.

Parallax inner
Use [data-slideshow=“parallax”] inside each slide to create the inner layer that moves at a reduced xPercent, giving the parallax offset relative to the outer slide during each transition.

Thumbnail
Use [data-slideshow=“thumb”] on clickable elements that should act as slide thumbnails so the script can assign matching [data-index] values, listen for click events and navigate to the corresponding slide while updating the .is--current state.
