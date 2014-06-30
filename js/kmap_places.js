//Function to process kmaps places
function processPlacesData(data) {
  //Global variable to hold all the related resources count
  shantiPlaces = {
    places_id: data.feature.id,
    places_header: data.feature.header
  };

  //Removes previous binds for the show related places tab.
  $('a[href="#tab-places"]').unbind('show.bs.tab');

  //Remove previous binds for the related essays tab.
  $('a[href="#tab-essays"]').unbind('show.bs.tab');

  //Remove previous binds for related subjects
  $('a[href="#tab-subjects"]').unbind('show.bs.tab');

  //Remove previous binds for the accordion
  $("#collapseOne").unbind('show.bs.collapse');  // note: perhaps this needs expansion options for more than 2 accordions 
  $("#collapseTwo").unbind('show.bs.collapse');

  //Change the page title to that of the new page being loaded
  $(".page-title span").html(data.feature.header);

  //Make the overview tab the default tab on URL Change.
  $("a[href='#tab-overview']").click();

  //Remove all elements from Breadcrumbs and start adding them again.
  $("ol.breadCrumb li").remove();
  $("ol.breadCrumb").append('<li><a href="">Places:</a></li>');
  $.each(data.feature.parents, populatePlacesBreadcrumbs);
  $("ol.breadCrumb").append('<li>' + data.feature.header + '</li>');

  //First Hide all the elements from the left hand navigation and then show relevant ones
  $(".content-resources ul.nav-pills li").hide();

  //Get the element that we want and display to overview.
  //Show overview tab on the left hand column
  var $tabOverview = $("#tab-overview");
  $tabOverview.empty();
  if (data.feature.summaries.length > 0) {
    $tabOverview.append('<div class="summary-overview">' + data.feature.summaries[0].content + '</div>');
  }
  if (data.feature.feature_types.length > 0) {
    var featureTitle = '<p><h6 class="custom-inline">FEATURE TYPE &nbsp;&nbsp;</h6>';
    $.each(data.feature.feature_types, function(ind, val) {
      featureTitle += '<a href="' + Settings.subjectsPath + "#features/" + val.id + '">';
      featureTitle += val.title;
      featureTitle += '</a>';
      if (ind < (data.feature.feature_types.length - 1)) {
        featureTitle += '; ';  
      }
    });
    featureTitle += '</p>';
    $tabOverview.append(featureTitle);
  }

  var overviewContent = '';

  if (data.feature.illustrations.length > 0) {
    overviewContent += '<div>';
    overviewContent += '<img class="img-responsive img-thumbnail" src="' + data.feature.illustrations[0].url + '">';
    overviewContent += '</div>';
  }

  if (data.feature.closest_fid_with_shapes) {
    shantiPlaces.fid = data.feature.closest_fid_with_shapes;
    overviewContent += '<div class="google-maps">';
    overviewContent += '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=http:%2F%2Fplaces.thlib.org%2Ffeatures%2Fgis_resources%2F' + data.feature.closest_fid_with_shapes + '.kmz&amp;ie=UTF8&amp;t=p&amp;output=embed"></iframe>';
    overviewContent += '</div>';
    overviewContent += '<div>';
    overviewContent += '<button type="button" class="btn btn-primary renderGmaps active">Google Map</button>';
    overviewContent += '<button type="button" class="btn btn-primary renderOpenLayerMaps">Custom Map</button>';
    overviewContent += '</div>';
  }
  overviewContent += '<aside class="panel-group" id="accordion">';
  overviewContent += '<section class="panel panel-default">';
  overviewContent += '<div class="panel-heading">';
  overviewContent += '<h6>';
  overviewContent += '<a href="#collapseOne" data-toggle="collapse" data-parent="#accordion" class="accordion-toggle">';
  overviewContent += '<i class="glyphicon glyphicon-plus"></i> Names';
  overviewContent += '</a>';
  overviewContent += '</h6>';
  overviewContent += '</div>';
  overviewContent += '<div id="collapseOne" class="panel-collapse collapse">';
  overviewContent += '<div class="panel-body">';
  overviewContent += '</div>';
  overviewContent += '</div>';
  overviewContent += '</section>';

  if (data.feature.associated_resources.etymology_count > 0) {
    overviewContent += '<section class="panel panel-default">';
    overviewContent += '<div class="panel-heading">';
    overviewContent += '<h6>';
    overviewContent += '<a href="#collapseTwo" data-toggle="collapse" data-parent="#accordion" class="accordion-toggle">';
    overviewContent += '<i class="glyphicon glyphicon-plus"></i> ETYMOLOGY';
    overviewContent += '</a>';
    overviewContent += '</h6>';
    overviewContent += '</div>';
    overviewContent += '<div id="collapseTwo" class="panel-collapse collapse">';
    overviewContent += '<div class="panel-body">';
    overviewContent += '</div>';
    overviewContent += '</div>';
    overviewContent += '</section>';
  }

  overviewContent += '</aside>';
  $tabOverview.append(overviewContent);

  //Render the maps based on what is clicked.
  $(".renderGmaps").click(function() {
    var googleMapsRender = '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=http:%2F%2Fplaces.thlib.org%2Ffeatures%2Fgis_resources%2F' + shantiPlaces.fid + '.kmz&amp;ie=UTF8&amp;t=p&amp;output=embed"></iframe>';
    $(".google-maps").html(googleMapsRender);
    $(this).addClass('active');
    $('.renderOpenLayerMaps').removeClass('active');
  });

  $(".renderOpenLayerMaps").click(function() {
    var openLayerMapsRender = '<div id="inset_map" class="fid-' + shantiPlaces.fid + ' language-roman.popular olMap" style="width:100%; height:550px"></div>';
    $(".google-maps").html(openLayerMapsRender);
    InsetMap.init();
    $(this).addClass('active');
    $('.renderGmaps').removeClass('active');
  });

	
	// *** NAVIGATION *** accordion toggle
	$.fn.accordionFx = function() {
	    return this.each(function(i, accordion) {
	        $(".accordion-toggle", accordion).click(function(ev) {
	            var link = ev.target;
	            var header = $(link).closest(".panel-heading");
	            var chevState = $("i.glyphicon", header)
	                .toggleClass('glyphicon-minus glyphicon-plus');
	            $("i.glyphicon", accordion)
	                .not(chevState)
	                .removeClass("glyphicon-minus")
	                .addClass("glyphicon-plus");
	        });
	    });
	};
	$('#accordion').accordionFx();

 


  //Trigger remote call for overview accordion Names
  $("#collapseOne").one('show.bs.collapse', function() {
    var namesURL = Settings.baseUrl + "/features/" + data.feature.id + "/names.json";
    $.get(namesURL, function(data) {
      var namesContent = '<ul>';
      $.each(data.names, function(ind1, val1) {
        namesContent += '<li>';
        namesContent += val1.name + ' (' + val1.language + ', ' + val1.writing_system + ', ' + val1.relationship + ')';
        if(val1.names.length > 0) {
          namesContent += '<ul>';
          $.each (val1.names, function(ind2, val2) {
            namesContent += '<li>';
            namesContent += val2.name + ' (' + val2.language + ', ' + val2.writing_system + ', ' + val2.relationship + ')';
            if(val2.names.length > 0) {
              namesContent += '<ul>';
              $.each (val2.names, function(ind3, val3) {
                namesContent += '<li>';
                namesContent += val3.name + ' (' + val3.language + ', ' + val3.writing_system + ', ' + val3.relationship + ')';

                namesContent += '</li>';
              });
              namesContent += '</ul>';
            }
            namesContent += '</li>';
          });
          namesContent += '</ul>';
        }
        namesContent += '</li>';
      });
      namesContent += '</ul>';
      $("#collapseOne .panel-body").append(namesContent);
    });
  });

  //Trigger remote call for overview accordion Etymology
  $("#collapseTwo").one('show.bs.collapse', function() {
    var namesURL = Settings.baseUrl + "/features/" + data.feature.id + "/names.json";
    $.get(namesURL, function(data) {
      var etycontent = '';
      if(data.names[0].etymology) {
        etycontent += '<strong class="custom-inline">Etymology for ' + data.names[0].name + ': </strong>';
        etycontent += data.names[0].etymology;
      } else {
        etycontent += '';
      }
      $("#collapseTwo .panel-body").append(etycontent);
    });
  });

  $(".content-resources ul.nav-pills li.overview").show();

  //Related places within places.
  if (data.feature.associated_resources.related_feature_count > 0) {
    $("ul.nav li a[href='#tab-places'] .badge").text(data.feature.associated_resources.related_feature_count);
    $(".content-resources ul.nav-pills li.places").show();
    $('a[href="#tab-places"]').one('show.bs.tab', function(e) {
      var $tabPlaces = $("#tab-places");
      $tabPlaces.empty();
      var placesURL = Settings.baseUrl + "/features/" + data.feature.id + "/related.json";
      $.get(placesURL, placesWithinPlaces);
    });
  }

  //Related essays (descriptions) section
  if (data.feature.associated_resources.description_count > 0) {
    $("ul.nav li a[href='#tab-essays'] .badge").text(data.feature.associated_resources.description_count);
    $(".content-resources ul.nav-pills li.essays").show();
    $('a[href="#tab-essays"]').one('show.bs.tab', function(e) {
      var $tabEssays = $("#tab-essays");
      $tabEssays.empty();
      var essaysURL = Settings.baseUrl + '/features/' + data.feature.id + '/descriptions/' + data.feature.descriptions[0].id + '.json';
      $.get(essaysURL, relatedPlacesEssays);
    });
  }

  //Related subjects (descriptions) section
  if (data.feature.associated_resources.subject_count > 0) {
    $("ul.nav li a[href='#tab-subjects'] .badge").text(data.feature.associated_resources.subject_count);
    $(".content-resources ul.nav-pills li.subjects").show();
    $('a[href="#tab-subjects"]').one('show.bs.tab', function(e) {
      $("#tab-subjects").empty();
      var subjectsURL = Settings.baseUrl + '/features/' + data.feature.id + '/topics.json';
      $.get(subjectsURL, relatedPlacesSubjects);
    });
  }
}

//Populate Breadcrumbs
function populatePlacesBreadcrumbs(bInd, bVal) {
  $breadcrumbOl = $("ol.breadCrumb");
  $breadcrumbOl.append('<li><a href="#features/' + bVal.id + '">' + bVal.header + '</a><i class="fa fa-angle-right"></i></li>');
}

//Function to show related subjects in places
function relatedPlacesSubjects(data) {
  var subjectsContent = '';
  var $tabSubjects = $('#tab-subjects');
  $tabSubjects.empty();
  $tabSubjects.append('<h6 class="center-me">RELATED SUBJECTS</h6>');
  if (data.feature.feature_types.length > 0) {
    var subjectsContent = '<h6 class="custom-inline">FEATURE TYPES:</h6>';
    subjectsContent += '<ul>';
    $.each(data.feature.feature_types, function(ind, val) {
      subjectsContent += '<li><a href="' + Settings.subjectsPath + "#features/" + val.id + '">';
      subjectsContent += val.title;
      subjectsContent += '</a></li>';
    });
    subjectsContent += '</ul>';
  }

  if (data.feature.category_features.length > 0) {
    subjectsContent += '<div><h6>SUBJECTS</h6><ul>';
    $.each(data.feature.category_features, function(ind, val) {
      subjectsContent += '<li>';
      subjectsContent += val.root.title + ' > ' + '<a href="' + Settings.subjectsPath + '#features/' + val.category.id + '">' + val.category.title + '</a>';
      if (val.numeric_value) {
        subjectsContent += ': ' + val.numeric_value;
      }
      if (val.string_value) {
        subjectsContent += ': ' + val.string_value;
      }
      subjectsContent += '</li>';
    });
    subjectsContent += '</ul></div>';
  }

  $tabSubjects.append(subjectsContent);
}

//Function to show the related places within kmap places
function placesWithinPlaces(data) {
  var contentPlaces = '<h6 class="center-me">RELATED PLACES</h6>';
  $.each(data.feature_relation_types, function(ind1, val1) {
    contentPlaces += '<h6>' + shantiPlaces.places_header + ' ' + val1.label + ' (' + val1.count + '):</h6>';
    contentPlaces += '<ul>';
    $.each(val1.categories, function(ind2, val2) {
      contentPlaces += '<li>' + val2.header + ' (' + val2.features.length + ')';
      contentPlaces += '<ul>';
      $.each(val2.features, function(ind3, val3) {
        contentPlaces += '<li><a href="' + Settings.placesPath + '#features/' + val3.id + '">';
        contentPlaces += val3.header;
        contentPlaces += '</a></li>';
      });
      contentPlaces += '</ul>';
      contentPlaces += '</li>';
    });
    contentPlaces += '</ul>';
  });

  $("#tab-places").append(contentPlaces);
}

//Function to show related places Essays
function relatedPlacesEssays(data) {
  var contentES = '<div class="related-essays">';

  var monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];
  var createdDate = new Date(Date.parse(data.description.created_at));
  var showDate = monthNames[createdDate.getMonth()] + ' ' + createdDate.getDate() + ', ' + createdDate.getFullYear();
  if (data.description.title) {
    contentES += '<h6>' + (data.description.title ? data.description.title : "") + ' <small>by ' + (data.description.author ? data.description.author.fullname : "") + ' (' + showDate + ')</small>' + '</h6>';
  }
  if (!data.description.title) {
    contentES += '<div class="summary-overview">' + data.description.content + '</div>';
  } else {
    contentES += data.description.content;
  }

  contentES += '</div>';

  $("#tab-essays").append(contentES);
}

//Recursive function to build and return nested names
function buildNames(obj) {
  var retContent = '';
  if(obj.names && obj.names.length > 0) {
    retContent += '<ul>';
    $.each(obj.names, function(ind, val) {
      retContent += '<li>';
      retContent += val.name + ' (' + val.language + ', ' + val.writing_system + ', ' + val.relationship + ')';
      retContent += '</li>';
    });
    retContent += '</ul>';
    return retContent;
  } else {
    return retContent;
  }
}

//Initiate open layer maps
jQuery(function ($) {
  $( document ).ready(function() {
    InsetMap.init();
  });
});















