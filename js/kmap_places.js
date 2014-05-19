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
  $tabOverview.append('<h6>OVERVIEW:</h6>');
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

  var overviewContent = '';
  overviewContent += '<h6>Map</h6>';
  overviewContent += '<div class="google-maps"><iframe src="https://mapsengine.google.com/map/embed?mid=zCEqriyJd8A0.kM1pQfphj0Ns" width="640" height="480" style="border:0"></iframe></div>';
  overviewContent += '<aside class="panel-group" id="accordion">';
  overviewContent += '<section class="panel panel-default">';
  overviewContent += '<div class="panel-heading">';
  overviewContent += '<h6>';
  overviewContent += '<a href="#collapseOne" data-toggle="collapse" data-parent="#accordion" class="accordion-toggle">';
  overviewContent += '<i class="icon km-fw km-minus"></i> Names';
  overviewContent += '</a>';
  overviewContent += '</h6>';
  overviewContent += '</div>';
  overviewContent += '<div id="collapseOne" class="panel-collapse collapse in">';
  overviewContent += '<div class="panel-body">';
  overviewContent += '<ol>';
  $.each(data.feature.names, function(ind, val) {
    overviewContent += '<li>' + val.name + '</li>';
  });
  overviewContent += '</ol>';
  overviewContent += '</div>';
  overviewContent += '</div>';
  overviewContent += '</section>';
  overviewContent += '</aside>';
  $tabOverview.append(overviewContent);

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
    var subjectsContent = '';
    var $tabSubjects = $('#tab-subjects');
    $tabSubjects.empty();
    $tabSubjects.append('<h6>Subjects associated with feature ' + data.feature.header + ':</h6>');
    if (data.feature.feature_types.length > 0) {
      var subjectsContent = '<p><strong>Feature Types: </strong>';
      $.each(data.feature.feature_types, function(ind, val) {
        subjectsContent += '<a href="' + Settings.subjectsPath + "#features/" + val.id + '">';
        subjectsContent += val.title;
        subjectsContent += '</a>';
        if (ind < (data.feature.feature_types.length - 1)) {
          subjectsContent += '; ';  
        }
      });
      subjectsContent += '</p>';
      $tabSubjects.append(subjectsContent);
    }
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
    relationTree[ind1] = {};
    $.each(val1.features, function(ind2, val2) {
      $.each(val2.feature_types, function(ind3, val3) {
        if(Object.prototype.toString.call(relationTree[ind1][val3.title]) === '[object Array]') {
          relationTree[ind1][val3.title].push({
            'header_id': val2.id,
            'header': val2.header
          });
        } else {
          relationTree[ind1][val3.title] = [];
          relationTree[ind1][val3.title].push({
            'header_id': val2.id,
            'header': val2.header
          });
        }
      });
    });
    relationTree[ind1]['label'] = val1.label;
  });

  var contentPlaces = '';
  $.each(relationTree, function(ind1, val1) {
    contentPlaces += '<h6>' + shantiPlaces.places_header + ' ' + val1.label + ' the following features:</h6>';
    delete val1.label;
    contentPlaces += '<ul class="list-unstyled list-group">';
    $.each(val1, function(ind2, val2) {
      contentPlaces += '<li class="list-group-item">' + ind2;
      contentPlaces += '<ul class="list-group">';
      $.each(val2, function(ind3, val3) {
        contentPlaces += '<li class="list-group-item"><a href="' + Settings.placesPath + '#features/' + val3.header_id + '">';
        contentPlaces += val3.header;
        contentPlaces += '</a></li>';
      });
      contentPlaces += '</ul>';
      contentPlaces += '</li>';
    });
    contentPlaces += '</ul>';
  });

  $tabPlaces.append(contentPlaces);
}

//Function to show related places Essays
function relatedPlacesEssays(data) {
  var contentES = '<div class="related-essays">';

  var monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];
  var createdDate = new Date(Date.parse(data.description.created_at));
  var showDate = monthNames[createdDate.getMonth()] + ' ' + createdDate.getDate() + ', ' + createdDate.getFullYear();
  contentES += '<h6>' + data.description.title + ' <small>by ' + data.description.author.fullname + ' (' + showDate + ')</small>' + '</h6>';
  contentES += data.description.content;

  contentES += '</div>';

  $("#tab-essays").append(contentES);
}





















