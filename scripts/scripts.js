(function ($){

  $(document).ready(function () {

    initRotate(5, 1);

    function initRotate(numberTabs, currentTabIndex) {
      var n = numberTabs, // Number of tabs
          i = currentTabIndex; // Current tab

      var intervalId = setInterval(function() {
          i = (++i < n ? i : 1);

          $('[data-tab='+i+']').prop( "checked", true );
      }, 5000);

      $('#demo-tab').on('mouseover', function () {
        clearInterval(intervalId);
      });

    }


    $('#demo-tab').on('mouseout', function () {
      current_tab = $('.tab:visible').data('tab');
      initRotate(5, current_tab);
    });


  });

})(jQuery || window.jQuery);
