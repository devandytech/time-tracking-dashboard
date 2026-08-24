# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](src/images/mobile-screenshot.jpg)
![](src/images/desktop-screenshot.jpg)

### Links

- Solution URL: [Solution](https://github.com/devandytech/time-tracking-dashboard)
- Live Site URL: [Live Site](https://time-tracking-dashboard-two-omega.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- javaScript
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwindcss](https://tailwindcss.com)

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

```js
async function fetchData() {
    const response = await fetch("data.json");
    console.log(response)
    // check for errors
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`)
    }
    const jsonData = await response.json();
    return jsonData;
  }
```
Not kidding :) omitting the defer in the script tag cost me almost an hour, never failing to add one on next project i learnt my lesson.
```
<script src="src/script/script.js" defer></script>
```

### Continued development

Well i have planned on using timeframes and deadlines to be productive, deeping my javascrit skills has also being one of my goals to make workflow become seamless by using best practices.

### Useful resources
Well am really gratefull on how the mdn docs has refurbished my learning on using JSON and the javascript FetchAPI.
- [JSON MDN DOCS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON) - This helped me in getting a good grasp on the JSON topic
- [PROMISES](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises) - Wow this doc was a lifesaver in putting me through on the promises, asynchronous and the FetchAPI.


## Author

- Frontend Mentor - [@andy](https://www.frontendmentor.io/profile/devandytech)
- Twitter - [Andy](https://www.twitter.com/devandytech)
