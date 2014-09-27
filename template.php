<?php
/**
 * Preprocess functions
 */
function shanti_theme_preprocess_page(&$variables) {
  $variables['theme_path'] = drupal_get_path('theme', 'shanti_theme');
  $variables['subject'] = preg_match('/subjects/', $_SERVER['REQUEST_URI']) === 1 ? true : false;

  $options = array(
    'group' => CSS_THEME,
  );

  if (!$variables['subject']) {
    drupal_add_css($variables['theme_path'] . '/css/shanti-places.css', $options);
    drupal_add_css($variables['theme_path'] . '/css/openlayers.css', $options);
  }

  $options = array(
    'group' => JS_THEME,
    'scope' => 'footer'
  );

  drupal_add_js($variables['theme_path'] . '/js/vendor/jquery.min.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/vendor/jquery-ui.min.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/vendor/bootstrap.min.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/menus/jquery.multilevelpushmenu.min.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/extruder/mbExtruder.js', $options);
  drupal_add_js($variables['theme_path'] . '/src/jquery.fancytree.js', $options);
  drupal_add_js($variables['theme_path'] . '/src/jquery.fancytree.glyph.js', $options);
  drupal_add_js($variables['theme_path'] . '/src/jquery.fancytree.filter.js', $options);
  drupal_add_js($variables['theme_path'] . '/src/jquery.fancytree.edit.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/menus/metisMenu.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/forms/check/icheck.min.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/forms/select/bootstrap-select.min.js', $options);
  drupal_add_js($variables['theme_path'] . '/src/jquery.highlight.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/vendor/jquery.tablesorter.min.js', $options);
//   drupal_add_js($variables['theme_path'] . '/src/dataTables.bootstrap.js', $options);
   drupal_add_js($variables['theme_path'] . '/src/trunk8.min.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/menus/jbreadcrumb.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/equalHeights.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/vendor/jquery.ba-bbq.min.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/vendor/bootstrap-paginator.min.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/vendor/bootstrap-paginator.min.js', $options);
    drupal_add_js($variables['theme_path'] . '/js/ajax-solr/core/Core.js', $options);
    drupal_add_js($variables['theme_path'] . '/js/ajax-solr/core/AbstractManager.js', $options);
    drupal_add_js($variables['theme_path'] . '/js/ajax-solr/core/AbstractWidget.js', $options);
    drupal_add_js($variables['theme_path'] . '/js/ajax-solr/core/AbstractTextWidget.js', $options);
    drupal_add_js($variables['theme_path'] . '/js/ajax-solr/managers/Manager.jquery.js', $options);
    drupal_add_js($variables['theme_path'] . '/js/ajax-solr/core/ParameterStore.js', $options);
    drupal_add_js($variables['theme_path'] . '/js/ajax-solr/core/Parameter.js', $options);
    drupal_add_js($variables['theme_path'] . '/js/ajax-solr/widgets/jquery/PagerWidget.js', $options);
    drupal_add_js($variables['theme_path'] . '/js/ajax-solr/widgets/jquery/TextWidget.js', $options);
    drupal_add_js($variables['theme_path'] . '/js/ajax-solr/widgets/jquery/FancyTreeUpdatingWidget.js', $options);


    if (!$variables['subject']) {
    drupal_add_js('//maps.googleapis.com/maps/api/js?key=AIzaSyAXpnXkPS39-Bo5ovHQWvyIk6eMgcvc1q4&amp;sensor=false', 'external');
    drupal_add_js('http://openlayers.org/api/OpenLayers.js', 'external');
    drupal_add_js('http://www.thlib.org/places/maps/interactive/scripts/THLWMS.js', 'external');
    drupal_add_js($variables['theme_path'] . '/js/inset-map.js', $options);
  }

  drupal_add_js($variables['theme_path'] . '/js/inset-map.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/shanti-main-sj.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/shanti-main.js', $options);
  drupal_add_js($variables['theme_path'] . '/js/vendor/modernizr-2.6.2.min.js', $options);

  if (!$variables['subject']) {
    drupal_add_js($variables['theme_path'] . '/js/shanti-main-pl.js', $options);
  }

    drupal_add_js($variables['theme_path'] . '/js/shanti-search.js', $options);
//    drupal_add_js($variables['theme_path'] . '/src/jquery.dataTables.min.js', $options);

}
