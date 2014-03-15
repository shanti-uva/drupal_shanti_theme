
// *** SEARCH **************
jQuery(function($) {
  // --- search panel
  $("#kmaps-search").buildMbExtruder({
        positionFixed:false,
        position:"right",
        width:320,
        top:0
  });
  
  // --- collections toggle
  $("li.explore").addClass("closed");
  $("#toggle-collections, .closecollection, .km-ul a").click(function() {
    $("#opencollect").slideToggle('slow');
    $(".closed").toggleClass("open", 200);
  });
  
  // --- advanced search toggle
  $(".advanced-link").click(function() {
		$(".advanced-trigger").toggleClass("show-advanced", 200);
    $(".advanced-link-view").slideToggle('fast');
  });

});

// *** SEARCH *** manage sliding panel
jQuery(function($) {
		$("#tree").fancytree({
			extensions: ["glyph"],
			checkbox: false,
			selectMode: 2,
			autoCollapse: true,
			closeOnExternalClick:false,
			flapMargin:5,
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
        url: "http://subjects.kmaps.virginia.edu/features/nested.json",
        dataType: "json"
      },
      postProcess: function(event, data) {
        //console.log(data);
        var dataString = JSON.stringify(data.response.features);
        data.result = JSON.parse(dataString, function(k, v) {
          if (k==="id") {
            this.key = v;
          } else if (k==="feature") {
            this.children = v;
          } else {
            return v;
          }
        });
      },
      activate: function(event, data) {
        //alert(JSON.stringify(data.node.title));
        window.location.hash = "features/" + data.node.key;
      }
		});
});


// *** SEARCH *** manage toggle button
jQuery(function($) {
		if (!$(".extruder.right").hasClass("isOpened")) {
			$(".flap").prepend("<span style='font-size:47px; position:absolute; left:7px; top:-4px; z-index:10;'><i class='icon km-search'></i></span>");
			$(".flap").addClass("on-flap");
		}
});



// *** SEARCH *** set class on dropdown menu for icon
jQuery(function($) {
	$(".dropdown-menu li").find("a").hover( function () {
	    $(this).addClass('on');
	    },                 
	      function () {              
	    $(this).removeClass('on');
	    }
	);

	// ---- on hover for search icon button if needed, darkens black bg
	// $(".flap").find("span").hover( function () {
	//    $(".flap").addClass('on-hover');
	//    },                 
	//      function () {              
	//    $(".flap").removeClass('on-hover');
	//    }
	// );
});

// *** Hash Change events ***
jQuery(function($) {
  $(window).hashchange( function() {
    var mHash = location.hash.split("#")[1];
    var mUrl = "http://subjects.kmaps.virginia.edu/" + mHash;

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
  var $subData = $(data).find("#FeatureDetails");
  //$("#tab-overview").html($subData);

  //Create Breadcrumbs

  //Remove all elements and start adding them again.
  $("ol.breadcrumb li").remove();
  $("ol.breadcrumb").append('<li><span class="tag-before-breadcrumb">Places:</span></li>');
  $(".breadcrumbs a", $subData).each(function(bIndex, bElement) {
    bElement.href = "#" + bElement.href.substring(bElement.href.indexOf("features"));
    $("ol.breadcrumb").append(
      $('<li>').append(bElement)
    );
  });

  //Get the element that we want and display to overview.
  $("#tab-overview").empty();
  $("#tab-overview").append(
    $('<h6>').append($subData.find("> h2").contents())
  );
}




