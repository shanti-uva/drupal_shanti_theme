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

  //Remove all elements from Breadcrumbs and start adding them again.
  $("ol.breadcrumb li").remove();
  $("ol.breadcrumb").append('<li><span class="tag-before-breadcrumb">Subjects:</span></li>');
  $(".breadcrumbs a", $subData).each(function(bIndex, bElement) {
    bElement.href = "#" + bElement.href.substring(bElement.href.indexOf("features"));
    $("ol.breadcrumb").append(
      $('<li>').append(bElement)
    );
  });

  //First Hide all the elements from the left hand navigation and then show relevant ones
  $(".content-sidebar ul.nav-pills li").hide();

  //Get the element that we want and display to overview.
  //Show overview tab on the left hand column
  $(".content-sidebar ul.nav-pills li.overview").show();
  $("#tab-overview").empty();
  $("#tab-overview").append(
    $('<h6>').append($subData.find("> h2").contents())
  );

  //Remove unwanted elements and display wanted elements for the overview page
  $(">h2, .breadcrumbs", $subData).remove();
  $("#tab-overview").append($subData);

  //console.log($(">ul li", $subData))

  //Create left subnavigation elements to be used to fulfill various sections
  $(">ul li", $subData).each(function(i, elem) {
    var mtext = $(this).text();
    if(mtext.indexOf("Picture") !== -1) {
      processPhotos(mtext);
    }
    if(mtext.indexOf("Video") !== -1) {
      processVideos(mtext);
    }
    if(mtext.indexOf("Texts") !== -1) {
      processTexts(mtext);
    }
  });
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
































