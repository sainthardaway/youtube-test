### Quick start

> Clone/Download the repo

```bash
# clone our repo
$ git clone https://github.com/preboot/angular-webpack.git my-app

# change directory to your app (youtube-test by default)
$ cd youtube-test

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8887](http://localhost:8887) in your browser.

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

### Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## File Structure

```
client
⋅⋅app/
⋅⋅⋅⋅app.js * app entry file
⋅⋅⋅⋅app.html * app template
⋅⋅⋅⋅components/ * where components live
⋅⋅⋅⋅⋅⋅components.js * components entry file
⋅⋅⋅⋅⋅⋅somecomponent/ * home component
⋅⋅⋅⋅⋅⋅⋅⋅somecomponent.js * somecomponent entry file (routes, configurations, and declarations occur here)
⋅⋅⋅⋅⋅⋅⋅⋅somecomponent.component.js * somecomponent "directive"
⋅⋅⋅⋅⋅⋅⋅⋅somecomponent.controller.js * somecomponent controller
⋅⋅⋅⋅⋅⋅⋅⋅somecomponent.styl * somecomponent styles
⋅⋅⋅⋅⋅⋅⋅⋅somecomponent.html * somecomponent template
```

This workflow serves as a starting point for building Angular 1.x applications using Webpack. Should be noted that apart from the pre-installed angular package, this workflow is pretty much generic.

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* No gulp and no grunt, just npm scripts.

# Demo
(https://www.youtube.com/watch?v=5ZMo1EZaSJA&feature=youtu.be)
