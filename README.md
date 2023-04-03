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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot/screenshot.png)

### Links

- Solution URL: [https://github.com/xapzx/advice-generator-app]
- Live Site URL: [https://xapzx.github.io/advice-generator-app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
In this project, I learnt how to request data from an API and extracting the data from a JSON format to put onto the webpage. Another important factor that I learn is the response cache, where when requesting from a random generator API, the browser will cache the response and will return the same data unless specifying "cache: no-cache".


```js
  const response = await fetch('https://api.adviceslip.com/advice', {cache: "no-cache"});
  const myJson = await response.json(); //extract JSON from the http response
```
