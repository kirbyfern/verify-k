# Simple implementation of a personal website

### Overview

- This guide provides a ready-to-use Vuejs template; alternatively, you can use your own front-end resources developed with React, Angular, HTML/CSS, etc.

### Requirements
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [Bitvise SSH client](https://www.bitvise.com/download-area) _(Alternatively, any FTP client will work)_

## Setup

### Instructions
1. Clone the repository in a directory of your choice with the following command:

   ```Console
   git clone git@github.com:kirbyfern/kirbyfern.github.io.git
   ```
2. Fill in your details at `../assets/details.js` for a quick start.

## Usage

### Development
- Navigate to the project's root directory in a console and run, `npm run serve`, to spin up a development server which will host your current code in-browser at http://localhost:8080/ .

### Deploy to gh-pages

1. Create a new repository in your GitHub account, then clone this repository and push its content to your newly created repository.
2. In `../assets/details.js`, add the name of your repository in place of your RepoID. If your repository is named `Kirby_Template` then it would be:

   ```JavaScript
   repoId: "Kirby_Template"
   ```
3. In the root directory run, `npm run build` followed by `npm run deploy`. Your website will be hosted at `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/#/`


## Technical Details

### About the template
- The provided template uses the Vuejs 2.X framework in conjunction with the Vuetify 2.X component framework.
- The template has a file, `..assets\utility.js`, that'll handle basic changes to support people who are unfamiliar with web development. Simply plug in your information, and it will automatically make the necessary changes for you.
- The project is organized in a standard Vuejs layout:

  ```Console
  \App
  ├── babel.config.js
  ├── jsconfig.json
  ├── package-lock.json
  ├── package.json
  ├── public
  │   └── index.html
  ├── src
  │   ├── App.vue         # App injection point
  │   ├── assets          # Resource files
  │   │   ├── utility.js  # Easy-to-use, auto fill-in
  │   │   └── ...
  │   ├── components      # UI component logic
  │   │   └── ...
  │   ├── main.js         # Project entry point
  │   ├── plugins         # Plugin configuration
  │   │   └── ...
  │   ├── router          # Routing to navigate to webpages logic
  │   │   └── index.js
  │   ├── store
  │   │   └── index.js
  │   ├── styles.scss
  │   │   └── main.scss
  │   └── views           # Webpage logic
  │       └── ...
  └── vue.config.js
  ```

### Growing from the template
The template is written in Vuejs because it has a low entry point for beginners. If you understand basic JavaScript then I recommend [this course](https://www.udemy.com/course-dashboard-redirect/?course_id=995016) when it's on sale for under $20. You can do a lot with only a few hours of this content and by looking at [Veutify's interactive examples](https://v2.vuetifyjs.com/en/).
