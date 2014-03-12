(function($) {
  
  // ================================================================
  // SITE_NAME behaviors
  // ================================================================

  var SITE_NAME = { // namespace setup

    config : {

      // Settings
      // -> global vars go here
      // --------------------------------------------------------------- 

    },

    // Setup
    // ---------------------------------------------------------------
    init : function(config) {
      $.extend(SITE_NAME.config, config);

      // fall back to .animate() frame animation is CSS transitions are not supported
      // -> for transit.js
      if (!$.support.transition) {
        $.fn.transition = $.fn.animate;
      }
      
      // if SVG isn't supported, swap out SVGs for corresponding PNGs
      // if (!Modernizr.svg) {
      //   $("SELECTOR").attr("src", "assets/images/FILENAME.png");
      // }

      SITE_NAME.registerBreakpoints();

    },

    // Methods
    // ---------------------------------------------------------------

    // --- Enquire.js breakpoints --------------------------------------
    // -> http://wicky.nillia.ms/enquire.js/
    registerBreakpoints : function() {

      // iPad screens and up: > 768px
      // ---------------------------------------------------------------------
      enquire.register("only screen and (min-width: 48em)", {

        deferSetup : true, // if true, do not call "setup" until the media query is matched. otherwise, called immediately on pageload.

        setup : function() {
          // called once, the first time the media query is matched
        },

        match : function() {
          // match behaviors
        },

        unmatch : function() {
          // unmatch behaviors
        }
      });
    },
    
  };

  
  $(window).load(function() {
    SITE_NAME.init();
  });
})(jQuery);
