# Strongarm Starter Template

Created by Drew Minns
[drewminns.com](drewminns.com)
[@drewisthe](http://twitter.com/drewisthe)

## Main Structure

	- javascript
		- app.js
	- node_modules
	- public
		- css
			-fonts
			main.css
			normalize.css
		- images
			favicon.ico
		- scripts
			jquery.1.11.0.min.js
			main.min.js
		index.html
	- styles
		main.scss
		_mixins.scss
		_functions.scss
	Gruntfile.js
	package.json
	readme.md

##How to use Strongarm

####Public Folder
The public folder is obviously your public folder. This is what you will launch to your live site. This folder contains your compiled JS in the scripts folder, CSS includes [Normalize.css](http://necolas.github.io/normalize.css/) and your compiled SCSS files as CSS, and images contains a standard favicon that you can change as needed.

####Javascript Folder
Anything you put in the app.js file and any new files your create, will be concatenated via Grunt into public/scripts/main.min.js. The load order is set in the index.html file, where jQuery is loaded prior to the main.min.js. Add new plugins to the public/scripts/ folder, rather than the production folder.

####Styles Folder
Same as above, anything you write in the main.scss folder will be compiled as CSS and added to the public/css/main.css file. If you want to have seperate stylesheets, create them with the following convention - _filename.scss, and @import them to your main.scss where needed.

####Grunt Features
__Grunt rules. Seriously.__

This grunt package will automatically start a local server `localhost:9001` that supports [Live Reload](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions). Any changes made to asset files, such as styles and javascript will automatically reload the browser.

Do not worry about writing prefixes for your code to support older browsers. The Grunt file has [Autoprefixer](https://github.com/ai/autoprefixer) included, and is set to target the last 5 versions of major browsers and ie7, ie8, and ie9 support. The values will be added based on information from [Can I Use](http://caniuse.com).

To run grunt features. Use the command line to navigate to the project folder. Ensure that you have Node and NPM installed; if not, download it from [nodejs.org](http://nodejs.org/). Then run `npm install` to download all necessary dependencies. Once you've done that, run `grunt` and you've got it all going.

####What is Grunt doing?

- Watching your scss and js files, compiling, minifying and adding prefixes where needed.
- Running a local server that you can access at `localhost:9001` that supports LiveReload.
- Alert you of JS and CSS errors
- Subliminaly making you love black metal and have a need to listen to Dimmu Borgir






