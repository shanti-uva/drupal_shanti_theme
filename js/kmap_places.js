//Function to process kmaps places
function processPlacesData(data) {
  //Global variable to hold all the related resources count
  shantiPlaces = {
    places_id: data.feature.id,
    places_header: data.feature.header
  };

  //Removes previous binds for the show related places tab.
  $('a[href="#tab-places"]').unbind('show.bs.tab');

  //Change the page title to that of the new page being loaded
  $(".page-title span").html(data.feature.header);

  //Make the overview tab the default tab on URL Change.
  $("a[href='#tab-overview']").click();

  //Remove all elements from Breadcrumbs and start adding them again.
  $("ol.breadCrumb li").remove();
  $("ol.breadCrumb").append('<li><a href=""><span class="tag-before-breadcrumb">Places:</span></a></li>');
  $.each(data.feature.parents, populatePlacesBreadcrumbs);

  //First Hide all the elements from the left hand navigation and then show relevant ones
  $(".content-resources ul.nav-pills li").hide();

  //Get the element that we want and display to overview.
  //Show overview tab on the left hand column
  var $tabOverview = $("#tab-overview");
  $tabOverview.empty();
  $tabOverview.append('<h6>' + data.feature.header + '</h6>');
  if (data.feature.feature_types.length > 0) {
    var featureTitle = '<p><strong>Feature Type: </strong>';
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
  }

  //Related subjects (descriptions) section
  if (data.feature.associated_resources.subject_count > 0) {
    $("ul.nav li a[href='#tab-subjects'] .badge").text(data.feature.associated_resources.description_count);
    $(".content-resources ul.nav-pills li.subjects").show();
  }

}

//Populate Breadcrumbs
function populatePlacesBreadcrumbs(bInd, bVal) {
  $breadcrumbOl = $("ol.breadCrumb");
  $breadcrumbOl.append('<li><a href="#features/' + bVal.id + '">' + bVal.header + '</a></li>');
}

//Function to show the related places within kmap places
function placesWithinPlaces(data) {
  var $tabPlaces = $("#tab-places");
  var relationTree = {};
  $.each(data.feature_relation_types, function(ind1, val1) {
    $.each(val1.features, function(ind2, val2) {
      $.each(val2.feature_types, function(ind3, val3) {
        if (relationTree.hasOwnProperty(val3.title)) {
          relationTree[val3.title][val2.id] = val2.header;
        } else {
          relationTree[val3.title] = {
            'id': val3.id
          };
          relationTree[val3.title][val2.id] = val2.header;
        }
      });
    });
  });

  console.log(relationTree);
  var contentPlaces = '<h6>' + shantiPlaces.places_header + ' ' + data.feature_relation_types[0].label + ' the following features:</h6>';

  $tabPlaces.append(contentPlaces);
}

























