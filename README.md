# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
    - [CSS](#css)
    - [JavaScript](#javascript)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Advice-App Screenshot](images/advice-app.png)


### Links

- Solution URL: [Advice-App Github Repository](https://github.com/efecollins/advice-app)
- Live Site URL: [Advice-App Live Site](https://efecollins.github.io/advice-app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Media Query
- Google Fonts
- CSS Variables
- Vanilla JavaScript
- Fetch API

### What I learned

When I began the challenge, I listed every language/tech to use for this project. I thought it would require stuffs like NodeJS, Express and the likes. So, I did a little digging and I figured that **FOR SMALL PROJECTS, USE SMALL THINGS** and this is the [end result](https://efecollins.github.io/advice-app) with only HTML, CSS & JavaScript.

#### CSS
For the dice button hover state, creating the glow effect was difficult and trickish for me and I was King Kong joyful when I did it. I am proud of this piece of code:

```css
:root {
  --l_cyan: hsl(193, 38%, 86%);
  --n_green: hsl(150, 100%, 66%);
  --g_blue: hsl(217, 19%, 38%);
  --dg_blue: hsl(217, 19%, 24%);
  --d_blue: hsl(218, 23%, 16%);
}

.dice-bg:hover {
  box-shadow: 0px 0px 40px 0px var(--n_green);
  cursor: pointer;
}
```

#### JavaScript
This is my first time using the Fetch API for a GET request. I learnt APIs with NodeJS so this was tough. Cheers to Fetch API, Async and Await and Promises. I'm proud of you!

```js
// store async function in a variable
const getAdvice = async () => {
    // get request through fetch
    const response = await fetch('https://api.adviceslip.com/advice');
    // parse json
    const adviceJSON = await response.json();
    // console.log(adviceJSON);
    document.querySelector('.id').innerHTML = adviceJSON.slip.id;
    document.querySelector('.quote').innerHTML = '"'+ adviceJSON.slip.advice +'"';
}
```

### Continued development
In future projects, I'd love to know how to use jQuery to make get/post requests. See all my projects on [Github](https://github.com/efecollins).

Yeah, I'd also have to sharpen my knowledge of promises, asynchronous functions & callbacks, async & await and many more.

### Useful resources

- [Flavio Copes JavaScript E-Book](https://www.flaviocopes.com) - This is Flavio Copes' website. You can find e-books on various subjects which includes JavaScript. His book helped me understand arrow functions together with the Fetch API. I really liked this pattern and will use it going forward.

- [Rapid API Guides](https://rapidapi.com/guides/fetch-api-async-await) - This is an amazing article which helped me finally understand Fetch API with Async-Await. I'd recommend it to anyone still learning this concept.

- [Dmitri Pavlutin](https://dmitripavlutin.com/javascript-fetch-async-await/) - This article explains everything Fetch API from A-(Z)X. Not Z, because I have to improve.


## Author

- Website - [Efosa Collins EVBOWE](https://efecollins.github.io/new-pweb/dist)
- Frontend Mentor - [@efecollins](https://www.frontendmentor.io/profile/efecollins)
- Twitter - [@EfeCollins7](https://www.twitter.com/EfeCollins7)
- Github - [@efecollins](https://github.com/efecollins)
