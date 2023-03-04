# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- SASS/SCSS

### What I learned

I spent quite some time thinking how to organize this part, because it was the first time that I made something with an image like that. Also, the background image was confusing me a little bit because I thought it would inside some container, not that it would overlay all containers.

This was my solution to this problem and I am quite proud of it.

```html
<section id="humanizing">
  <div class="top dark-violet-bg">
    <div class="container">
      <div class="img-container">
        <picture>
          <source
            srcset="./images/image-intro-desktop.jpg"
            media="(min-width: 45em)"
          />
          <img src="./images/image-intro-mobile.jpg" alt="" />
        </picture>
      </div>
      <div class="content-container separate-space-2">
        <div class="line"></div>
        <h1 class="big-title">Humanizing your insurance.</h1>
        <p class="light-gray-text">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <a class="btn primary-btn"> View plans </a>
      </div>
    </div>
  </div>
  <div class="blank">
    <div class="container">
      <div class="line"></div>
    </div>
  </div>
  <div class="back-img no-event"></div>
</section>
```

-

This time I tried to use as many utility classes as I could and even made a media query especially for them.

```scss
.btn {
  display: inline-block;
  padding: 0.9em 2em 0.75em;

  font-size: 0.9em;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 100%;
  letter-spacing: 1px;

  transition-property: color, border-color, border, background-color;
  transition-duration: 0.4s;
}
.primary-btn {
  border: 1px solid white;
  color: white;
}
.primary-btn:hover {
  background-color: white;
  color: $dark-violet;
}

.dark-violet-bg {
  background-color: $dark-violet;
}

.line {
  width: 150px;
  border-top: 1px solid $very-grayish-violet;
}

.flex {
  display: flex;
}
.column-to-row {
  @extend .flex;
  flex-direction: column;
}

.gray-text {
  color: $very-grayish-violet;
}
.light-gray-text {
  color: $very-light-gray;
}
.big-title {
  font-size: 2.6em;
}

.separate-space-1 {
  > * + * {
    margin-top: 1em;
  }
}
.separate-space-2 {
  > * + * {
    margin-top: 2em;
  }
}

.no-event {
  pointer-events: none;
}

/* media for utility classes */
@media (min-width: 55em) {
  .big-title {
    font-size: 4.3em;
  }

  .column-to-row {
    flex-direction: row;
  }

  .space-between-dk {
    justify-content: space-between;
  }
}
```

I liked this navigation I made.
```scss
ul {
    position: fixed;
    inset: 80px 0 0 0;
    z-index: 1000;

    padding: 1.8em 15%;
    background: $dark-violet;

    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

    background:
      url("../images/bg-pattern-mobile-nav.svg") bottom right no-repeat,
      $dark-violet;

    a {
      display: block;
      padding: 1.1em;

      text-align: center;
      text-transform: uppercase;
      font-size: 1em;
      font-weight: 700;
      color: white;

      transition-property: color, background-color;
      transition-duration: 0.3s;
    }

    a:hover {
      background-color: white;
      color: $dark-violet;
    }

    .active {
      @extend .primary-btn;
    }
  }
  ul[data-hidden="false"] {
    transform: translateX(0%);
  }
}
nav:has(ul[data-hidden="false"]) .toggle-nav {
  background-image: url("../images/icon-close.svg");
}
```
This part means "When nav has a ul is not hidden, show this background image".

-

I liked this function because it is short and simple. I used _hidden == "false"_ so that when it is hidden it will show up because this expression returns true.

```js
const navList = document.querySelector("#nav-list");

document.querySelector(".toggle-nav").addEventListener("click", () => {
  let hidden = navList.getAttribute("data-hidden");

  navList.setAttribute("data-hidden", hidden == "false");
});
```

### Continued development
I want to improve my responsive design skills.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@rafaeldevvv](https://www.frontendmentor.io/profile/rafaeldevvv)
- Instagram - [@rafaeldevvv](https://www.instagram.com/rafaeldevvv)
