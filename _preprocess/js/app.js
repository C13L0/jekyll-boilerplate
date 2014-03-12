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


    },

    // Methods
    // ---------------------------------------------------------------

    
  };

  
  $(window).load(function() {
    SITE_NAME.init();
  });
})(jQuery);
