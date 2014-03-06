# Jekyll Boilerplate
##### Assembled & configured by [Jay Perry Works](http://jayperryworks.com)

This is the basic boilerplate I use for my design prototypes. It includes all my favorite tools:

### Precompiling/build tools:

- [Jekyll](http://jekyllrb.com): set up for github pages
- [Bundler](http://bundler.io): easy way to manage assets and dependencies
- [Guard](http://guardgem.org): wonderful tool to automate precompiling/workflows.


### Markup template:
- [HTML5 Boilerplate](http://html5boilerplate.com): the best front-end template ever. I've integrated it into the Jekyll layouts and SASS stylesheets.

### CSS
- [SASS](http://sass-lang.com) & [Compass](http://compass-style.org): life didn't really begin on planet earth until there were CSS preprocessors.
- [Bourbon library](http://bourbon.io): requires SASS. Lots of nice mixins for special effects and polyfills.
- [Singularity.gs grid system](http://singularity.gs): my current favorite grid framework. It's lightweight, incredibly configurable, and uses the "[isolation method](http://palantir.net/blog/responsive-design-s-dirty-little-secret)" by default, solving annoying bugs with sub-pixel rendering in many browsers.
- The CSS organization and (most) naming conventions are based on the [MVCSS framework](http://mvcss.github.io), which is a great scheme for making CSS more maintainable and reusable on projects of any scale.

#### Naming conventions
I use slightly different CSS naming conventions than MVCSS, which feel cleaner/easier to me:
- **Component/module:** ".module_name", ex. ".tile"
- **Modifier:** ".module_name.modifier", ex. ".tile.well" (inherits the properties of the module but modifies them)
- **State:** Use an operator prefix, ".module_name.is-[state]" or ".module_name.has-[state]" or "module_name.for-[state]", ex. ".tile.is-highlighted" (a modified "state" usually applied with javascript. Inherits the properties of the base module)
- **Submodule:** ".module_name-submodule" ex. ".tile-headline" (a part of the module, and therefore "namespaced" to it, but does not inherit the module's properties)
- **Javascript-only:** ".js-property" or "#js-property", ex. ".js-show_mobile" (a class or ID used exclusively as a hook for javascript.)
- Finally, I cautiously recommend using HTML-based selectors over class selectors when practical (such as global contexts), just to enhance semantics and to reduce redundancy. For instance, instead of always adding the class ".nav" to your menu, try the aria-role selector: "[role='navigation']." Likewise, "[role='main']" is more semantic than ".content" or ".wrapper". You can increase specificity with class names: "[role='navigation'].global.is-hidden". Nonetheless, use cautiously because you can run into issues with inheritance/overgeneralization. But for your baselines and reset styles, the HTML is a good place to start before going crazy with class names.

For really big projects, the SMACSS-based conventions MVCSS recommends probably work better. But for my typical project scale, this basic scheme is easier for me to write and certainly cleaner. Either way, I enthusiastically recommend the practice of abstracted, reusable CSS selectors. Instead of naming a container ".news," for instance, call it ".feed" and apply it to any collection of listings. This reduces CSS bloat, encourages consistency, and more clearly separates presentation from content.

### JS
- [JQuery](http://jquery.com): Though I like [MooTools](http://mootools.net) for bigger projects.
- [Enquire.js](http://wicky.nillia.ms/enquire.js/): sync your JS with your media queries, calling and killing scripts based on screen size. Check out a [tutorial from Chris Coyer](http://css-tricks.com/enquire-js-media-query-callbacks-in-javascript/).
- [Transit.js](http://ricostacruz.com/jquery.transit/): CSS transition-driven animation that falls back to $.animate()
- [Typography.js](http://justinhileman.info/article/more-jquery-typography/): "Widon't" and other great scripts to help with typesetting.

****

## Installation:
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

#### To preview locally w/github pages:

````
    jekyll serve --baseurl '' --w
````
