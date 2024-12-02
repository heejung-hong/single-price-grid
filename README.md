# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![Screenshot 2024-11-30 at 4 57 30 PM](https://github.com/user-attachments/assets/9bbf53b9-1225-4498-ba3a-51905196f7f1)


### Links

- [Solution URL](https://github.com/heejung-hong/single-price-grid)
- [Live Site URL](https://heejung-hong.github.io/single-price-grid/)

## My process

### Built with

- Mobile-first workflow
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind](https://tailwindcss.com/) - For styles

### What I learned

I learned to deploy a static Next.js website on GitHub pages.  The folder structure in the GitHub repository matters and I needed to create the repository from the VS Code terminal and push up the code.  I also had to add the output: 'export' line in the next.config.mjs file and then run npm run build in the terminal in order to create the out folder which creates the HTML, CSS, JS assets for my website.  After the code has been committed, I would go to the pages section and use GitHub actions to automatically build and deploy the website.

To see how you can add code snippets, see below:

```js
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
}
 
module.exports = nextConfig
```



### Continued development

Next.js is becoming a popular framework and I would like to continue to practice creating more websites using Next.js.  I might try using one of Vercel's templates to start a project to get a better understaning of how this framework works.


### Useful resources

- [How to host Next.js website on GitHub pages](https://youtu.be/WoL3xbkAfOU?si=w4R-rZBmWeGVnC2N) - This video helped to learn how to use GitHub actions to deploy the static website. I also learned that the folder structure is important to deploy the website and I needed to create a repository from the vs code terminal.
- [Ways to host Next.js website](https://youtu.be/wIkn3aG3rr8?si=RLPGESjqhcwfOVjw) - This video helped to understand that I need to run npm run build to create the out folder containing the html, css, etc files for the static website.


## Author

- Website - [Heejung Hong](https://heejunghong.com/)
- Frontend Mentor - [@heejung-hong](https://www.frontendmentor.io/profile/heejung-hong)
- LinkedIn - [heejung-hong](https://www.linkedin.com/in/heejung-hong/)
