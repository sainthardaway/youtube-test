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

This workflow serves as a starting point for building Angular 1.x applications using Webpack. Should be noted that apart from the pre-installed angular package, this workflow is pretty much generic.

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* No gulp and no grunt, just npm scripts.
