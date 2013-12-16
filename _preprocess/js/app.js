(function($) {
  
  // ================================================================
  // SITE_NAME behaviors
  // ================================================================

  var SITE_NAME = { // namespace setup

    config : {

      // Settings
      // -> global vars go here
      // --------------------------------------------------------------- 

      // grab breakpoint values from a JSON file, shared by JS and SASS
      // -> this is just for convenience during development
      // -> when deploying to prod, paste in the actual values so we don't have to load an extra http request
      breakpoints : 'config/breakpoints.json'

    },

    // Setup
    // ---------------------------------------------------------------
    init : function(config) {
      $.extend(SITE_NAME.config, config);

      // handler that will be called when breakpoints.json loads successfully
      $.get(fa.config.breakpoints).done(function (response, textStatus, jqXHR){
          console.log("breakpoints: " + response);
      });


    },

    // Methods
    // ---------------------------------------------------------------

    
  };

  
  $(window).load(function() {
    SITE_NAME.init();
  });
})(jQuery);
