#Strongarm

Making starting a project easier (especially if you don't have Codekit). Strongarm uses Grunt to compile your LESS and Javascript files into production ready, minified files, making life easier for you to just go!

##Features
####LESS
Strongarm uses LESS because, well it's the best. I'll release a build for SASS in the future. But hey, I teach my students LESS because they aren't Rails pros, so I build in LESS.

I've included a typography, branding (variables), and mixins files for your additions. 

The file structure is as follows

	- less
		- _brand.less
		- _grid.less
		- _mixins.less
		- _typography.less
		- main.less
		- print.less
		
Using Grunt watch, the files are compiled to __public/styles/main.css__

To minify the resulting CSS file, run `grunt cssmin`

####Semantic Grid System
I LOVE grid systems but I HATE all the extra classes that come along with them. I've fallen in love with [semantic.gs/](http://semantic.gs/) and the use of mixins and functions to create a flexible grid system.

The main.less file includes variables to define the build of your grid, and the grid.less contains the math to make all the magic happen.

To define the grid, change the variables below

	@column-width: 60;
	@gutter-width: 20;
	@columns: 12;
	// Remove the bottom variable and wrap in a container for a pixel based layout
	@total-width: 100%;
	
####Javacript
Just to make sure you can be modern, Strongarm comes with the lovely HTML5Shiv included. As well, because everyone uses it, JQuery 1.10.2 is included. Provided for all the extra fun is an app.js file for your custom code. 

If any of these aren't needed, just remove them! Same goes for anything new, just add them! They'll be processed automagically.

##How to use it

1. Make sure your in the strongarm directory you've cloned.

2. Install node.js if you don't have it [nodejs.org](http://nodejs.org), this will install NPM

3. Install the awesome Grunt globally using this command `sudo npm install -g grunt-cli`

4. Install Grunt Plugins via NPM `npm install`

5. Run grunt on the directory with the following command `grunt watch`

6. Minify your CSS files with `grunt cssmin`

7. Create, code, win.

8. Deploy your public file and rake in the cash!
