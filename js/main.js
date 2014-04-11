// *** SEARCH **************
jQuery(function ($) {
    // --- search panel
    $("#kmaps-search").buildMbExtruder({
        positionFixed: false,
        position: "right",
        width: 320,
        top: 0
    });

    // --- collections toggle
    $("li.explore").addClass("closed");
    $("#toggle-collections, .closecollection").click(function () {
        $("#opencollect").slideToggle('fast');
        $(".closed").toggleClass("open", 'fast');
    });

    // --- advanced search toggle icons, open/close, view change height
    $(".advanced-link").click(function () {
        $(".advanced-trigger").toggleClass("show-advanced", 'fast');
        $(".advanced-view").slideToggle('100');
        
        $(".long-wrap").toggleClass("short-wrap", '100'); // adjusts for height diff w/advanced panel
    });

});

// *** SEARCH *** sliding panel
jQuery(function ($) {
    $("#tree").fancytree({
        extensions: ["glyph", "filter"],
        checkbox: false,
        selectMode: 2,
        autoCollapse: true,
        closeOnExternalClick:false,
        flapMargin:5,
        filter: {
            mode: 'hide'
        },
        glyph: {
            map: {
                doc: "",
                docOpen: "",
                error: "glyphicon glyphicon-warning-sign",
                expanderClosed: "glyphicon glyphicon-plus-sign",
                expanderLazy: "glyphicon glyphicon-plus-sign",
                // expanderLazy: "glyphicon glyphicon-expand",
                expanderOpen: "glyphicon glyphicon-minus-sign",
                // expanderOpen: "glyphicon glyphicon-collapse-down",
                folder: "",
                folderOpen: "",
                loading: "glyphicon glyphicon-refresh"
                // loading: "icon-spinner icon-spin"
            }
        },
        source: {
            url: "http://dev-subjects.kmaps.virginia.edu/features/fancy_nested.json",
            dataType: "json"
        },
        activate: function(event, data) {
            //alert(JSON.stringify(data.node.title));
            window.location.hash = "features/" + data.node.key;
        }
    });

    handleSearch = function handleSearch() {

        // clear previous styling
        // (can't simply unwrap because that leaves text nodes in extraneous chunks)
        $('span.fancytree-title').each(
            function () {
                $(this).text($(this).text());
            }
        );
        var txt = $("#searchform").val();
        var tree = $('#tree').fancytree('getTree').applyFilter(txt);
        // $('span.fancytree-match').removeClass('fancytree-match');
        $('span.fancytree-title').highlight(txt, { element: 'em', className: 'fancytree-highlight' });



        // Retrieve matches
        var list = $('#tree').fancytree('getRootNode').findAll(function (n) {
            return n.match;
        });

        // clear the current list.
        $('div#listview div div.table-responsive table.table-results tr').not(':first').remove();

        // populate list
        var table = $('div#listview div div.table-responsive table.table-results');
        $.each(list, function (x, y) {
            table.append(
                "<tr>" +
                    "<td>" + y.title + "</td>" +
                    "<td>"+ y.data.id + "</td>" +
                    "<td>" + (y.data.caption?y.data.caption:"<em>n/a</em>") +  "</td>" +
                    "</tr>"
            );
        });

        $('table.table-results').tablesorter();

        return false;
    };

    $("#searchbutton").click(handleSearch);

    $("form.form").submit(handleSearch);

});



// *** SEARCH *** toggle button
jQuery(function($) {
    if (!$(".extruder.right").hasClass("isOpened")) {
      $(".flap").prepend("<span style='font-size:21px; position:absolute; left:19px; top:12px; z-index:10;'><i class='icon km-search'></i></span>");
      $(".flap").addClass("on-flap");     
    }
      
  // --- set class on dropdown menu for icon
  $(".extruder.right .flap").hover( function () {
      $(this).addClass('on-hover');
      },                 
        function () {              
      $(this).removeClass('on-hover');
      }
  );
});


// *** SEARCH *** call function iCheck for form graphics
jQuery(function ($) {
    $('input[type="checkbox"], input[type="radio"]').each(function () {
        var self = $(this),
            label = self.next(),
            label_text = label.text();

        label.remove();
        self.iCheck({
            checkboxClass: 'icheckbox_minimal-red',
            radioClass: 'iradio_minimal-red',
            insert: '<div class="icheck_line-icon"></div>' + label_text
        });
    });
});


// *** SEARCH *** remove watermark on focus
jQuery(function($) {    
  var searchBox = $("input#searchform");
  var searchButton = $("input#searchbutton");
  var searchBoxDefault = "Enter Search...";
  
  searchBox.focus(function(){
    if($(this).attr("placeholder") == searchBoxDefault) $(this).attr("placeholder", "");
  });
  searchBox.blur(function(){
    if($(this).attr("placeholder") == "") $(this).attr("placeholder", searchBoxDefault);
  });
});


// *** Hash Change events ***
jQuery(function($) {
  $(window).hashchange( function() {
    var mHash = location.hash.split("#")[1] || 'features/2823';
    var mUrl = "http://dev-subjects.kmaps.virginia.edu/" + mHash + ".json";

    $.get(mUrl, processData);
  });

  $(window).trigger('hashchange');
});

/**
 * Function that will process the returned data and create the various sections of the page.
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function processData(data) {
  //Global variable to hold all the related resources count
  shanti = {
    shanti_related_counts: data.feature.associated_resources,
    shanti_id: data.feature.id
  };

  //Removes previous binds for the show related tabs.
  $('a[href="#tab-related"]').unbind('show.bs.tab');

  //Removes previous binds for the show related photos tab.
  $('a[href="#tab-photos"]').unbind('show.bs.tab');

  //Make the overview tab the default tab on URL Change.
  $("a[href='#tab-overview']").click();

  //Remove all elements from Breadcrumbs and start adding them again.
  $("ol.breadcrumb li").remove();
  $("ol.breadcrumb").append('<li><span class="tag-before-breadcrumb">Subjects:</span></li>');
  $.each(data.feature.ancestors, populateBreadcrumbs);

  //First Hide all the elements from the left hand navigation and then show relevant ones
  $(".content-sidebar ul.nav-pills li").hide();

  //Get the element that we want and display to overview.
  //Show overview tab on the left hand column
  $tabOverview = $("#tab-overview");
  $tabOverview.empty();
  $tabOverview.append('<h6>' + data.feature.header + '</h6>');
  if (data.feature.summaries.length > 0) {$tabOverview.append(data.feature.summaries[0].content)}
  if (data.feature.illustrations.length > 0) {
    $.get(data.feature.illustrations[0].url, showOverviewImage);
  }
  $(".content-sidebar ul.nav-pills li.overview").show();

  //Related content section
  if (data.feature.associated_resources.related_feature_count > 0) {
    $("ul.nav li a[href='#tab-related'] .badge").text(data.feature.associated_resources.related_feature_count);
    $(".content-sidebar ul.nav-pills li.related").show();
    $('a[href="#tab-related"]').one('show.bs.tab', function(e) {
      $tabRelated = $("#tab-related");
      $tabRelated.empty();
      $tabRelated.append('<h6>' + data.feature.header + '</h6>');
      var relatedUrl = "http://dev-subjects.kmaps.virginia.edu/features/" + data.feature.id + "/related.json";
      $.get(relatedUrl, relatedResources);
    });
  }

  //Related essays (descriptions) section
  if (data.feature.associated_resources.description_count > 0) {
    $("ul.nav li a[href='#tab-essays'] .badge").text(data.feature.associated_resources.description_count);
    $(".content-sidebar ul.nav-pills li.essays").show();
  }

  //Related Places section
  if (data.feature.associated_resources.place_count > 0) {
    $("ul.nav li a[href='#tab-places'] .badge").text(data.feature.associated_resources.place_count);
    $(".content-sidebar ul.nav-pills li.places").show();
  }

  //Related Photos (picture) section
  if (data.feature.associated_resources.picture_count > 0) {
    $("ul.nav li a[href='#tab-photos'] .badge").text(data.feature.associated_resources.picture_count);
    $(".content-sidebar ul.nav-pills li.photos").show();
    $('a[href="#tab-photos"]').one('show.bs.tab', function(e) {
      $tabPhotos = $("#tab-photos");
      $tabPhotos.empty();
      $tabPhotos.append('<h6>Photographs in ' + data.feature.header + '</h6>');
      var photosURL = "http://dev-mms.thlib.org/topics/" + data.feature.id + "/pictures.json";
      shanti.photosURL = photosURL;
      //$.get(photosURL, relatedPhotos);
      $.ajax({
        url: photosURL,
        beforeSend: function(xhr) {
          $('li.photos i').removeClass('icon km-photos').addClass('fa fa-spinner fa-spin');
        }
      })
      .done(relatedPhotos)
      .always(function() {
        $('li.photos i').removeClass('fa fa-spinner fa-spin').addClass('icon km-photos');
      });
    });
  }

  //Related Audio-Video (videos) section
  if (data.feature.associated_resources.video_count > 0) {
    $("ul.nav li a[href='#tab-audio-video'] .badge").text(data.feature.associated_resources.video_count);
    $(".content-sidebar ul.nav-pills li.audio-video").show();
  }

  //Related Texts section
  if (data.feature.associated_resources.document_count > 0) {
    $("ul.nav li a[href='#tab-texts'] .badge").text(data.feature.associated_resources.document_count);
    $(".content-sidebar ul.nav-pills li.texts").show();
  }
}

function populateBreadcrumbs(bInd, bVal) {
  $breadcrumbOl = $("ol.breadcrumb");
  $breadcrumbOl.append('<li><a href="#features/' + bVal.id + '">' + bVal.header + '</a></li>');
}

function showOverviewImage(data) {
  var retString = '<figure class="cap-bot">';
  retString += '<img src="' + data.picture.images[3].url + '" class="img-responsive img-thumbnail" alt="' + 
    (data.picture.captions.length > 0 ? data.picture.captions[0].title : "") + '">';
  retString += '<figcaption>' + (data.picture.captions.length > 0 ? "<div class=\"center-caption\">" + data.picture.captions[0].title + "</div>" : "") + 
    (data.picture.descriptions.length > 0 ? data.picture.descriptions[0].title : "") + '</figcaption>';
  retString += '</figure>';

  $("#tab-overview").append(retString);
}

//Function to populate related tab
function relatedResources(data) {
  $tabRelated = $("#tab-related");
  var contentR = '<ul>';
  $.each(data.feature_relation_types, function(rInd, rElm) {
    contentR += '<li>' + rElm.label + ' the following ' + 
    (rElm.features.length == 1 ? "subject (1):" : "subjects (" + rElm.features.length + "):");
    contentR += '<ul>';
    $.each(rElm.features, function(rrInd, rrElm) {
      contentR += '<li><a href="#features/' + rrElm.id + '">' + rrElm.header + ' (From the General Perspective)</a></li>';
    });
    contentR += '</ul>';
    contentR += '</li>';
  });
  contentR += '</ul>';
  $tabRelated.append(contentR);
}

//Function to populate photos tab
function relatedPhotos(data) {
  var contentPh = '<div class="related-photos">';
  $.each(data.topic.media, function(rInd, rElm) {
    contentPh += '<div class="each-photo">';
    contentPh += '<a href="#pid' + rElm.id + '" class="thumbnail" data-toggle="modal">';
    contentPh += '<img src="' + rElm.images[0].url + '" alt="' + (rElm.captions.length > 0 ? rElm.captions[0].title : "") + '">';
    contentPh += '</a>';
    contentPh += '</div>';

    //Modal for each photo
    contentPh += '<div class="modal fade" tabindex="-1" role="dialog" id="pid' + rElm.id + '">';
    contentPh += '<div class="modal-dialog">';
    contentPh += '<div class="modal-content">';
    contentPh += '<div class="modal-header">';
    contentPh += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    contentPh += '<h4 class="modal-title" id="myModalLabel">' + (rElm.captions.length > 0 ? rElm.captions[0].title : "") + '</h4>';
    contentPh += '</div>';
    contentPh += '<div class="modal-body">';
    contentPh += '<img src="' + rElm.images[4].url + '" alt="' + (rElm.captions.length > 0 ? rElm.captions[0].title : "") + '">';
    contentPh += '<p><strong>Resource #:</strong> ' + rElm.id + '</p>';
    contentPh += '<p><strong>Description:</strong></p>';
    contentPh += (rElm.descriptions.length > 0 ? rElm.descriptions[0].title : "");
    contentPh += '<p><strong>Copyright holder:</strong> ' + (rElm.copyrights.length > 0 ? rElm.copyrights[0].copyright_holder.title : "") + '</p>';
    contentPh += '<p><strong>Photographer:</strong> ' + (rElm.photographer.hasOwnProperty('fullname') ? rElm.photographer.fullname : "") + '</p>';
    contentPh += '</div>';
    contentPh += '</div>';
    contentPh += '</div>';
    contentPh += '</div>';
  });

  contentPh += '</div>';
  contentPh += '<ul id="photo-pagination"></ul>';
  contentPh += '<div class="paginated-spin"><i class="fa fa-spinner"></i></div>';
  $("#tab-photos").append(contentPh);
  $("#photo-pagination").bootstrapPaginator({
    size: "large",
    bootstrapMajorVersion: 3,
    currentPage: 1,
    numberOfPages: 5,
    totalPages: Math.ceil(shanti.shanti_related_counts.picture_count / (data.topic.media.length + 0.0)),
    pageUrl: function(type, page, current) {
      return shanti.photosURL + '?page=' + page;
    },
    onPageClicked: function(e, origEvent, type, page) {
      origEvent.preventDefault();
      e.stopImmediatePropagation();
      var currentTarget = $(e.currentTarget);
      $.ajax({
        url: shanti.photosURL + '?page=' + page,
        beforeSend: function(xhr) {
          $('.paginated-spin i.fa').addClass('fa-spin');
          $('.paginated-spin').show();
        }
      })
      .done(paginatedPhotos)
      .always(function() {
        $('.paginated-spin i').removeClass('fa-spin');
        currentTarget.bootstrapPaginator("show", page);
        $('.paginated-spin').hide();
      });
    }
  });
}

//Function to process and show the paginated photos
function paginatedPhotos(data) {
  
}

function processPhotos(mtext) {
  $("ul.nav li a[href='#tab-photos'] .badge").text(mtext.match(/(\d+)/)[1]);
  $(".content-sidebar ul.nav-pills li.photos").show();
  /*$("#tab-photos").empty();
  $("#tab-photos").append(
    '<p>This is a new test</p>'
  );*/
}

function processVideos(mtext) {
  $("ul.nav li a[href='#tab-audio-video'] .badge").text(mtext.match(/(\d+)/)[1]);
  $(".content-sidebar ul.nav-pills li.audio-video").show();
  /*$("#tab-photos").empty();
  $("#tab-photos").append(
    '<p>This is a new test</p>'
  );*/
}

function processTexts(mtext) {
  $("ul.nav li a[href='#tab-texts'] .badge").text(mtext.match(/(\d+)/)[1]);
  $(".content-sidebar ul.nav-pills li.texts").show();
  /*$("#tab-photos").empty();
  $("#tab-photos").append(
    '<p>This is a new test</p>'
  );*/
}
































