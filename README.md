This is the basic boilerplate I use for my design prototypes. It includes all the stuff I like to use:
- [Bundler](http://bundler.io): easy way to manage assets and dependencies
- [Jekyll](http://jekyllrb.com): set up for github pages
- [Guard](http://guardgem.org): wonderful tool to automate precompiling/workflows.
- [SASS](http://sass-lang.com) & [Compass](http://compass-style.org): life didn't really begin on planet earth until there were CSS preprocessors.
- [Bourbon mixin library](http://bourbon.io): requires SASS. Lots of nice mixins for special effects and polyfills.
- [Singularity.gs grid system](http://singularity.gs): my current favorite grid framework. It's lightweight, incredibly configurable, and uses the "[isolation method](http://palantir.net/blog/responsive-design-s-dirty-little-secret)" by default, solving annoying bugs with sub-pixel rendering in many browsers.
- [HTML5 Boilerplate](http://html5boilerplate.com): the best front-end template ever. I've integrated it into the Jekyll layouts and SASS stylesheets.
- The CSS organization and (most) naming conventions are based on the [MVCSS framework](http://mvcss.github.io/library/), which is a great scheme for keeping CSS not only organized but maintainable and reusable on projects of any scale.

## To install:
1. Make a new folder and initialize a new git repo:

````
    git init
    touch README
    git add README
  	git commit -m 'first commit, added README'
  	git remote add origin { remote SSL }
  	git push origin master
````


2. Then clone this repo and copy the files into your new folder

3. Run [sudo] bundle install

4. Check through the config files and adjust stuff as needed: _config.yaml, Gemfile, Guardfile, config.rb

5. Finally, run the jekyll/guard commands:

###### for github pages:

  	bundle exec jekyll serve --w

in another terminal tab:

  	bundle exec guard

_or_

###### for non-github pages sites:

in the Gemfile:
- comment out "gem github-pages" 
- uncomment "gem guard-jekyll-plus"

  	bundle exec guard

