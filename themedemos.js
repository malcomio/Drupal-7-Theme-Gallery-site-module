jQuery(document).ready(function(){
  
  var regions = jQuery('.line .unit');

    // if the page region is narrow, adjust the left panel width 
    if(jQuery('.panel-2col').is('div')) {
      panel_selector = '.panel-2col';
      main_panel_selector = '.panel-col-first'
    }
    else {
      panel_selector = '.unit.size-1of2';
      main_panel_selector = '.size-1of2:not(.last-unit)';
    }

    // if the page region is narrow, adjust the left panel width
    var panel_parent_width = jQuery(panel_selector).parent().width();
    
  if(regions.length == 2) {
    if(panel_parent_width <= 940) {
      jQuery(main_panel_selector).css('width', (panel_parent_width - 200));
    }       
  }
  else if(regions.length == 3) {
    main_panel_selector = '.size-1of4.unit-pull';
    if(panel_parent_width <= 940) {
      jQuery('.size-1of2').css('width', 160);
      jQuery(main_panel_selector).css('width', (panel_parent_width - 400));
    }       
  }

  
  // add a background to the current theme on the theme gallery view
  var current_theme = jQuery('#current-theme').html();
  jQuery('.view-theme-gallery-new .view-content .views-field-field-theme-name .selected').closest('.views-row').addClass('selected');
   
   jQuery('#switchtheme-submit').hide();
   
  // auto submit the theme change dropdown
  jQuery('.form-item #edit-theme, .input #edit-theme').change(function(){
    this.form.submit();
  });
   
})