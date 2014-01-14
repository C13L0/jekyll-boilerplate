This is the basic boilerplate I use for my design prototypes. It includes all the stuff I like to use:
- Bundler (easy way to manage assets and dependencies)
- Jekyll (set up for github pages)
- Guard (automates precompiling, concatenates stuff)
- SASS/Compass
- Bourbon mixin library
- Singularity.js grid system
- HTML5 Boilerplate (helper classes translated to SASS, HTML translated to Jekyll layouts)

## To install:
1. Make a new folder and initialize a new git repo:
  
    git init
    touch README
    git add README
  	git commit -m 'first commit, added README'
  	git remote add origin { remote SSL }
  	git push origin master


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

