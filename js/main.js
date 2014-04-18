var Settings = {
     baseUrl: "http://dev-subjects.kmaps.virginia.edu",
     mmsUrl: "http://dev-mms.thlib.org"
}


// *** NAVIGATION *** top drilldown menu
jQuery(function ($) {
  $( '#menu' ).multilevelpushmenu({
    menuWidth: 250,
    menuHeight: '32em', // this height set by longest menu length, preferences
    mode: 'cover',
    direction: 'rtl',
    backItemIcon: 'fa fa-angle-left',
    groupIcon: 'fa fa-angle-right',
    collapsed: true
  });
  
  $('.navbar-default .navbar-nav>li.lang, .navbar-default .navbar-nav>li:last').addClass('highlight');
  // $('.multilevelpushmenu_wrapper>div>ul>li').append($("<a class=\"link-blocker\"></a>"));  
  
  // --- expand
  $( '.menu-toggle' ).click(function(){
    $('.menu-toggle').toggleClass('show-topmenu');
    $('#menu').multilevelpushmenu( 'expand' );    
  
    if($('.menu-toggle').hasClass('show-topmenu')) {
      $(this).multilevelpushmenu( 'collapse' );         
    }
  });
  // --- align the text
  $('#menu ul>li, #menu h2').css('text-align','left');
  $('#menu ul>li.levelHolderClass.rtl').css('text-align','right');


  // --- close the menu on outside click except button
  $('.menu-toggle').click( function(event){
      event.stopPropagation();
      $('#menu').toggle();
  });
  $(document).click( function(){
      $('#menu').hide();
      $('.menu-toggle').removeClass('show-topmenu');
      $('#menu').multilevelpushmenu( 'collapse' );
  });
});



// jQuery(function ($) {

  // var menulist = $('#menu ul').css('display') == 'block'
  
  // $(menulist).filter(function() {
    // return $(menulist).css('display') == 'block';
  // })
  // .css('box-shadow','none');

// });




// *** SEARCH *** initiate sliding container, toggle collections & search options
jQuery(function ($) {
  // --- prevent flash onload
  $(".input-section, .view-section, .view-section .nav-tabs>li>a").css("display","block");
  
  $("#kmaps-search").buildMbExtruder({
      positionFixed: false,
      position: "right",
      width: 295,
      top: 0
  });

  // --- collections toggle
  $("li.explore").addClass("closed");
  $(".explore>a, .closecollection").click(function(){
      $(".opencollect").slideToggle('fast');
      $(".closed").toggleClass("open", 'fast');
      // $("#kmaps-search").toggleClass("hidden", 300);
      $("#kmaps-search").toggleClass("open-collections", 200);
  });

  // --- advanced search toggle icons, open/close, view change height
  $(".advanced-link").click(function () {
      $(this).toggleClass("show-advanced",'fast');
      $(".advanced-view").slideToggle('fast');
      $(".advanced-view").toggleClass("show-options");
      $(".view-wrap").toggleClass("short-wrap"); // ----- toggle class for managing view-section height
  });
});



// *** SEARCH *** adapt search panel height to viewport
jQuery(function($) { 
  var winHeight = $(window).height(); 
  var panelHeight = winHeight -100; // ----- height of container for search panel - minus length above and below in px
  var viewHeight = winHeight -217; // ----- height for view-section & search options - CLOSED
  var shortHeight = winHeight -485; // ----- height for view-section & search options - OPEN      

  // set initial div height
  $("div.text").css({ "height": panelHeight });
  $(".view-wrap").css({ "height": viewHeight });
  $("#kmaps-search .view-wrap.short-wrap").css({ "height": shortHeight });
  // make sure div stays full width/height on resize
  $(window).resize(function(){
    $("div.text").css({ "height": panelHeight });
    $(".view-wrap").css({ "height": viewHeight });
    $("#kmaps-search .view-wrap.short-wrap").css({ "height": shortHeight });
  });
  // toggle heights with search options
  $(".advanced-link").click(function () {
    var winHeight = $(window).height();
    $(".view-wrap").css({ "height": viewHeight });
    $("#kmaps-search .view-wrap.short-wrap").css({ "height": shortHeight });
  });

    if($("#btnResetSearch").hasClass("show")){ 
      $("#kmaps-search .view-wrap.short-wrap").css({ "height": "518px" });
    } 
    
});



// *** SEARCH *** corrections for widths
jQuery(function($) {

  $("#kmaps-search div.text").resizable({ handles: "w",
          resize: function (event, ui) {
              $('.title-field').trunk8({ tooltip:false });
          }
      }); // --- initiate jquery resize

  function checkWidth() {
  var panelWidth = $(".text").width();

    if( panelWidth > 275 ) {
        $(".extruder-content").css("width","100%");
      } else
    if( panelWidth <= 275 ) {
        $(".extruder-content").css("width","100% !important");
      }
  }

  // Execute on load
  checkWidth();
  // Bind event listener
  $(".extruder-content").resize(checkWidth);

  // $(window).on("resize",function(){ location.reload(); } ); // forces height refersh on browser-size change

  // $(".ui-resizable-w").mousedown(function() {
  //      $(window).mousemove(function() {
  //        $(window).on("resize",function(){ location.reload(); } );
  //      });
  // })

  if (!$(".extruder.right").hasClass("isOpened")) {
        $(".flap").click( function() {
          $(".extruder .text").css("width","100%");
        });
  }
   
});





// *** SEARCH *** toggle button
jQuery(function($) {
  if (!$(".extruder.right").hasClass("isOpened")) {
        $(".flap").prepend("<span style='font-size:20px; position:absolute; left:19px; top:13px; z-index:10;'><i class='icon km-search'></i></span>");
        $(".flap").addClass("on-flap");
  }

  // --- set class on dropdown menu for icon
  $(".extruder.right .flap").hover( function() {
      $(this).addClass('on-hover');
      },
        function () {
      $(this).removeClass('on-hover');
      }
  );
});

function decorateElementWithPopover(elem, node) {
    jQuery(elem).attr('rel', 'popover');
    var path = "/" + $.makeArray(node.getParentList(false, true).map(function (x) {
        return x.title;
    })).join("/");
    var caption = "<blockquote>" + ((node.data.caption)?node.data.caption:"") + "</blockquote>";
    var kmapid = "<span class='kmapid-display'>" + node.key + "</span>";
    var lazycounts = "<div class='counts-display'>...</div>";
    jQuery(elem).attr('data-content', path + caption + "<div class='info-wrap'>" + lazycounts + "</div>");
    jQuery(elem).attr('title', node.title + kmapid);
    jQuery(elem).popover();
    jQuery(elem).on('shown.bs.popover', function(x) {

        var counts = jQuery(elem.parentNode||elem[0].parentNode).find('.info-wrap .counts-display');
        // alert(node.key + counts);
        $.ajax({
            type: "GET",
            url: Settings.baseUrl + "/features/" + node.key + ".xml",
            dataType: "xml",
            timeout: 5000,
            beforeSend: function(){
                counts.html("<span class='assoc-resources-loading'>loading...</span>");
            },
            error: function(e) {
                counts.html("<i class='glyphicon glyphicon-warning-sign' title='"+ e.statusText);
            },
            success: function (xml) {
                // force the counts to be evaluated as numbers.
                var related_count = Number($(xml).find('related_feature_count').text());
                var description_count = Number($(xml).find('description_count').text());
                var place_count = Number($(xml).find('place_count').text());
                var picture_count = Number($(xml).find('picture_count').text());
                var video_count = Number($(xml).find('video_count').text());
                var document_count = Number($(xml).find('document_count').text());

                // perhaps instead of vertical bars this should be done as spans then styled via css
                if (related_count) counts.html("<span class='associated'><i class='icon km-places'></i><span class='badge' + (related_count)?' alert-success':''>" + related_count + "</span></span>");
                if (description_count) counts.append("<span class='associated'><i class='icon km-essays'></i><span class='badge' + (description_count)?' alert-success':'>" + description_count + "</span></span>");
                if (place_count) counts.append("<span class='associated'><i class='icon km-texts'></i><span class='badge' + (place_count)?' alert-success':'>" + place_count + "</span></span>");
                if (picture_count) counts.append("<span class='associated'><i class='icon km-photos'></i><span class='badge' + (picture_count)?' alert-success':'>" + picture_count + "</span></span>");
                if (video_count) counts.append("<span class='associated'><i class='icon km-audiovideo'></i><span class='badge' + (video_count)?' alert-success':'>" + video_count + "</span></span>");
                if (document_count) counts.append("<span class='associated'><i class='icon km-essays'></i><span class='badge' + (document_count)?' alert-success':'>" + document_count + "</span></span>");

            }
        });
    });
    return elem;
};

var searchUtil = {
    clearSearch: function() {
        $('#tree').fancytree('getActiveNode').setActive(false);
        $('#tree').fancytree('getTree').clearFilter();
        $('#tree').fancytree("getRootNode").visit(function (node) {
            node.setExpanded(false);
        });
        $('table.table-results').dataTable().fnDestroy();
        $('div.listview div div.table-responsive table.table-results tr').not(':first').remove();
        $('table.table-results').dataTable();

        // "unwrap" the <mark>ed text
        $('span.fancytree-title').each(
            function () {
                $(this).text($(this).text());
            }
        );

    }
};

var notify = {
    warn: function (warnid, warnhtml) {
        var wonk = function () {
            if ($('div#' + warnid).length) {
                $('div#' + warnid).fadeIn();
            } else {
                jQuery('<div id="' + warnid + '" class="alert alert-danger fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' + warnhtml + '</div>').fadeIn().appendTo('#notification-wrapper');
            }
        }

        if ($('#notification-wrapper div#' + warnid).length) {
            $('#notification-wrapper div#' + warnid).fadeOut('slow', wonk);
        } else {
            wonk();
        }
    },

    clear: function (warnid) {

        if (warnid) {
            $('#notification-wrapper div#' + warnid).fadeOut('slow').remove()
        } else {
            $('#notification-wrapper div').fadeOut('slow').remove()
        }
    }
}

// *** SEARCH *** sliding panel
jQuery(function ($) {

    // search min length
    const SEARCH_MIN_LENGTH = 3;

    // set the popover defaults
    $.fn.popover.Constructor.DEFAULTS.trigger = 'hover';
    $.fn.popover.Constructor.DEFAULTS.placement = 'left';
    $.fn.popover.Constructor.DEFAULTS.html = true;
    $.fn.popover.Constructor.DEFAULTS.delay.hide = '5000'

    // set the dataTable defaults
    $.extend( true, $.fn.dataTable.defaults,        {
        "sDom": "<'row'<'col-xs-6'i><'col-xs-6'p>>" +
            "t" +
            "<'row'>",
        "iTabIndex": 1,
        "oLanguage": {
            "sEmptyTable": "No results.  Enter new search query above.",
            "oPaginate": {
                "sPrevious": "&lt;",
                "sNext": "&gt;"
            }
        },
        // this hides the pagination navigation when there is only one page.
        "fnDrawCallback": function() {
            var dtable = $('table.table-results').dataTable();
            if (dtable.fnSettings().fnRecordsDisplay() <= dtable.fnSettings()._iDisplayLength) {
                $('div.dataTables_paginate').hide();
            } else {
                $('.dataTables_paginate').show();
            }
            $('.title-field').trunk8({ tooltip:false });// .popover();
        },
        "fnInitComplete": function() {
            $('.title-field').trunk8({ tooltip:false }); // .popover();
        }
    });

    $("#tree").fancytree({
      extensions: ["glyph", "filter"],
      checkbox: false,
      selectMode: 2,
      debugLevel: 0,
      autoScroll: true,
      closeOnExternalClick:false,
      flapMargin:0,
      filter: { mode: 'hide' },
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
//              loading: "icon-spinner icon-spin"
          }
      },
      source: {
        url: Settings.baseUrl + "/features/fancy_nested.json",
        dataType: "json"
      },
      activate: function(event, data) {
        //alert(JSON.stringify(data.node.title));
        window.location.hash = "features/" + data.node.key;
      },
      focus: function(event, data){ data.node.scrollIntoView(true); },
      renderNode: function(event,data) {
        if (!data.node.isStatusNode) {
          decorateElementWithPopover(data.node.span, data.node);
        }
      },
      cookieId: "kmaps1tree", // set cookies for search-browse tree, the first fancytree loaded
      idPrefix: "kmaps1tree"
   });

    var handleSearch = function handleSearch() {
      // clear previous styling
      // (can't simply unwrap because that leaves text nodes in extraneous chunks)
      $('span.fancytree-title').each(
          function () {
              $(this).text($(this).text());
          }
      );

      var txt = $("#searchform").val();
        if (!txt) {
            searchUtil.clearSearch();
            notify.clear();
        } else if (txt.length < SEARCH_MIN_LENGTH) {
            notify.clear();
            notify.warn('warntooshort', 'Search string must be ' + SEARCH_MIN_LENGTH + ' characters or longer.');
        } else {
            notify.clear();
            $('table.table-results').dataTable().fnDestroy();
            var tree = $('#tree').fancytree('getTree').applyFilter(txt);
            // $('span.fancytree-match').removeClass('fancytree-match');
            $('span.fancytree-title').highlight(txt, { element: 'mark' });
            // Retrieve matches
            var list = $('#tree').fancytree('getRootNode').findAll(function (n) {
                return n.match;
            });

            if (list.length === 0) {
                notify.warn("warnnoresults", "There are no matches.  <br>Try to modify your search.");
            }
            // clear the current list.

            $('div.listview div div.table-responsive table.table-results tr').not(':first').remove();
            // populate list
            var table = $('div.listview div div.table-responsive table.table-results');
            $.each(list, function (x, y) {
//                var path = "/" + $.makeArray(y.getParentList(false,true).map(function(n) {
//                    return n.title;
//                })).join("/");

                table.append(
                    $('<tr>')
                        .append(decorateElementWithPopover($('<td>'), y)
                            .append(
                                $('<span class="title-field">').text(y.title).attr('kid', y.key)
                                    .highlight(txt, { element: 'mark' }).trunk8({ tooltip: false })
                            )
                        )

                );

//                table.append(
//                   $("<tr>" +
//                        "<td><span rel='popover' title='" + y.title + "' data-content='" + path + (y.data.caption?("<blockquote>" + y.data.caption + "</blockquote>"):"") + "' class='title-field'>" + y.title + "</span></td>" +
//                        "</tr>").highlight(txt,{ element: 'mark' })
//                )
            });



            $("table.table-results tbody tr").click(function (event) {

                var kid = $(event.target).closest('.title-field').attr('kid') || $($(event.target).find('.title-field')[0]).attr('kid');

                // notify.warn('debug',"kid: " +  kid);

                $('.row_selected').removeClass('row_selected');
                $(event.target).closest('tr').addClass('row_selected');
                $("#tree").animate({ scrollTop: 0 }, "slow");
                $('#tree')
                    .fancytree('getTree')
                    .activateKey(
                        kid
                    ).scrollIntoView();
            });

            $('table.table-results').dataTable();

        }
        return false;
  };
  $("#searchbutton").click(handleSearch);
  $('#searchform').attr('autocomplete','off'); // turn off browser autocomplete
  $("form.form").submit(handleSearch);
  $("#searchform").keyup( function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code === 13) {
        e.preventDefault();
  handleSearch();
    }
  });

  //    $('.table-v').on('shown.bs.tab', function() { $('.title-field').trunk8(); });
    $('.listview').on('shown.bs.tab', function() {
        $(".title-field").trunk8({ tooltip:false });
    });
    $('.treeview').on('shown.bs.tab', function () {

        // This doesn't always scroll correctly
        var activeNode = $('#tree').fancytree("getTree").getActiveNode();
        if (activeNode) {
            activeNode.makeVisible();
        }
    });
    $('#tree').on('click', '.fancytree-statusnode-error', function () {
        $('#tree').fancytree();
    });


  // untruncate on mouseover
  //    $('.listview').on({
  //       'mouseenter': function () { $(this).trunk8('revert'); },
  //        'mouseout': function () { $(this).trunk8({ tooltip:false }).popover(); }
  //    },'.title-field');

});


// *** SEARCH *** clear search input & support for placeholder
jQuery(function($) {        
  // Initialize Fancytree
  $("#feature-tree").fancytree({
    extensions: ["glyph", "edit", "filter"],
    checkbox: true,
    selectMode: 2,
    glyph: {
      map: {
        // doc: "glyphicon glyphicon-file",
        // docOpen: "glyphicon glyphicon-file",
        checkbox: "glyphicon glyphicon-unchecked",
        checkboxSelected: "glyphicon glyphicon-check",
        checkboxUnknown: "glyphicon glyphicon-share",
        error: "glyphicon glyphicon-warning-sign",
        expanderClosed: "glyphicon glyphicon-plus-sign",
        expanderLazy: "glyphicon glyphicon-plus-sign",
        // expanderLazy: "glyphicon glyphicon-expand",
        expanderOpen: "glyphicon glyphicon-minus-sign",
        // expanderOpen: "glyphicon glyphicon-collapse-down",
        // folder: "glyphicon glyphicon-folder-close",
        // folderOpen: "glyphicon glyphicon-folder-open",
        loading: "glyphicon glyphicon-refresh"
        // loading: "icon-spinner icon-spin"
      }
    },
        // source: {url: "ajax-tree-plain.json", debugDelay: 1000},
    
    filter: {
        //  mode: "hide"
    },
    activate: function(event, data) {
        //  alert("activate " + data.node);
    },      
    lazyLoad: function(event, ctx) {
        ctx.result = {url: "ajax-sub2.json", debugDelay: 1000};
     },
    click: function(e, data) {
      // We should not toggle, if target was "checkbox", because this
      // would result in double-toggle (i.e. no toggle)
      if( $.ui.fancytree.getEventTargetType(e) == "title" ){
        data.node.toggleSelected();
      }
    },
    keydown: function(e, data) {
      if( e.which === 32 ) {
        data.node.toggleSelected();
        return false;
      }
    },
    cookieId: "kmaps2tree", // set cookies for features, the second fancytree
    idPrefix: "kmaps2tree"
  });
  

  var tree2 = $("#feature-tree").fancytree("getTree");
    
  var fsname = $("#feature-name");  // feature type id 
  $(fsname).data("holderf",$(fsname).attr("placeholder"));      
  
  // --- everything below is for the main searchform with the clear all button
    
  $(fsname).focusin(function(){
      $(this).dropdown();
      $(this).attr("placeholder","");
      $("button.feature-reset").css("text-indent","0").show(100); // switched to negative indent since hide() not working consistently
      $(".feature-treeButtons").slideDown( 300 );
      $(this).dropdown();
  }); 
  $(fsname).focusout(function(){
      $(this).attr("placeholder",$(fsname).data("holderf"));  
      $("button.feature-reset").hide();
      $(this).dropdown();
  });
  $("button.feature-reset").click(function(){
    $(fsname).attr("placeholder",$(fsname).data("holderf"));
    $("#feature-tree").fancytree();
    $(this).css("text-indent","-9999px"); // switched to negative indent since hide() not working consistently
  }); 
  $(fsname).focusout(function(){
      var strf = "Filter by Feature Name";
      var txtf = $(fsname).val();
  
      if (strf.indexOf(txtf) > -1) {
        $("button.feature-reset").hide();
        $(".feature-treeButtons").slideUp( 300 );
      return true;
      } else {
        $("button.feature-reset").show(100);
        $(".feature-treeButtons").slideDown( 300 );
      return false;
      }   
  });
  // --- feature type id
  var kms = $("#searchform"); // the main search input
  $(kms).data("holder",$(kms).attr("placeholder"));     
  
  // --- everything below is for the main searchform with the clear all button
  $(kms).focusin(function(){
      $(kms).attr("placeholder","");
      $("button.searchreset").show("fast");
  });
  $(kms).focusout(function(){
      $(kms).attr("placeholder",$(kms).data("holder")); 
      $("button.searchreset").hide();        
  }); 
  $("button.searchreset").click(function(){
    $(kms).attr("placeholder","");
    $(kms).attr("placeholder",$(kms).data("holder"));
    $("button.searchreset").hide();
        searchUtil.clearSearch();
  });   
  $(kms).focusout(function() {
    var str = "Enter Search...";
    var txt = $(kms).val();

    if (str.indexOf(txt) > -1) {
      $("button.searchreset").hide();
    return true;
    } else {
      $("button.searchreset").show(100);
    return false;
    }
  });



  
  
  /*
   * Event handlers for input interface
   */
  $("input[name=features]").keyup(function(e){
    var match = $(this).val();
    if(e && e.which === $.ui.keyCode.ESCAPE || $.trim(match) === ""){
      $("button#btnResetSearch, .feature-reset").click();
      return;
    }
    // Pass text as filter string (will be matched as substring in the node title)
    var n = tree2.applyFilter(match);
      $("button#btnResetSearch, .feature-reset").attr("disabled", false); 
      $("span#matches").text("(" + n + " matches)"); 
  }).focus();

  $("input#hideMode").change(function(e){
    tree2.options.filter.mode = $("div.icheckbox_minimal-red").hasClass("checked") ? "hide" : "dimm";
    tree2.clearFilter();
    $("input[name=features]").keyup();
    //  tree2.render();
  });
  
  $("button#btnResetSearch, .feature-reset").click(function(event){
    $("input[name=features]").val("");
    $("span#matches").text("");
    
    $("#feature-tree").fancytree();
    $(".feature-treeButtons").slideUp( 300 ); 
    $("button.feature-reset").css("text-indent","-9999px"); // switched to negative indent since hide() not working consistently
    $(this).addClass("show");
  });
  
});





// *** SEARCH *** Select-Form & iCheck form graphics
jQuery(function ($) {
  $("input[type='checkbox'], input[type='radio']").each(function () {
      var self = $(this),
          label = self.next(),
          label_text = label.text();

      label.remove();
      self.iCheck({
          checkboxClass: "icheckbox_minimal-red",
          radioClass: "iradio_minimal-red",
          insert: "<div class='icheck_line-icon'></div>" + label_text
      });
  });

  $(".selectpicker").selectpicker(); // initiates jq-bootstrap-select

});



// *** CONTENT *** top link
jQuery(function ($) {
  var offset = 220;
  var duration = 500;
  jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > offset) {
          jQuery('.back-to-top').fadeIn(duration);
      } else {
          jQuery('.back-to-top').fadeOut(duration);
      }
  });

  jQuery('.back-to-top').click(function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
  })
});


// *** SEARCH *** feature types
jQuery(function ($) {
  // manually initiate dropdown w/bstrap
  $(".dropdown-toggle").dropdown();
  // controls clicking in dropdown & feature input
  $(function () { 
    $(document).on('click', '#feature-name, .dropdown-menu.features-open', function(e) {
       e.stopPropagation()
    })
  }); 
  $(".feature-help").toggle( 
    function () {
          $(".feature-message").slideDown( 300 ).delay( 9000 ).slideUp( 300 );  
      },
    function () {
          $(".feature-message").slideUp( 300 ); 
      }
  );
});
  


// *** GLOBAL ** conditional IE message
jQuery(function ($) { 
  // show-hide the IE message for older browsers
  // this could be improved with conditional for - lte IE7 - so it does not self-hide
  $(".progressive").delay( 2000 ).slideDown( 400 ).delay( 5000 ).slideUp( 400 );
});

/* Additions by Gerard Ketuma */

// *** Hash Change events ***
jQuery(function($) {
  $(window).hashchange( function() {
    var mHash = location.hash.split("#")[1] || 'features/2823';
    var mUrl = Settings.baseUrl + "/" + mHash + ".json";

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

  //Removes previous binds for the show related audio-video tab.
  $('a[href="#tab-audio-video"]').unbind('show.bs.tab');

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
  var $tabOverview = $("#tab-overview");
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
      var $tabRelated = $("#tab-related");
      $tabRelated.empty();
      $tabRelated.append('<h6>' + data.feature.header + '</h6>');
      var relatedUrl = Settings.baseUrl + "/features/" + data.feature.id + "/related.json";
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
      var $tabPhotos = $("#tab-photos");
      $tabPhotos.empty();
      $tabPhotos.append('<h6>Photographs in ' + data.feature.header + '</h6>');
      var photosURL = Settings.mmsUrl + "/topics/" + data.feature.id + "/pictures.json";
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
    $('a[href="#tab-audio-video"]').one('show.bs.tab', function(e) {
      var $tabAudioVideo = $("#tab-audio-video");
      $tabAudioVideo.empty();
      $tabAudioVideo.append('<h6>' + 'Videos in ' + data.feature.header + '</h6>');
      var audioVideoUrl = Settings.mmsUrl + "/topics/" + data.feature.id + "/videos.json";
      $.get(audioVideoUrl, relatedVideos);
    });
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
  var $tabRelated = $("#tab-related");
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
  var paginatedContent = $("#tab-photos .related-photos");

  var contentPh = '';
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
    contentPh += '<p><strong>Photographer:</strong> ' + (rElm.hasOwnProperty('photographer') ? rElm.photographer.fullname : "") + '</p>';
    contentPh += '</div>';
    contentPh += '</div>';
    contentPh += '</div>';
    contentPh += '</div>';
  });
  paginatedContent.empty().html(contentPh);
}

//Function to process and show related videos
function relatedVideos(data) {
  var contentAV = '<div class="related-audio-video">';

  $.each(data.topic.media, function(rInd, rElm) {
    contentAV += '<div class="each-av">';
    contentAV += '<a href="#pid' + rElm.id + '" class="thumbnail" data-toggle="modal">';
    contentAV += '<img src="' + rElm.images[0].url + '" alt="Flash video">';
    contentAV += '</a>';
    contentAV += '</div>';

    //Modal for each video
    contentAV += '<div class="modal fade" tabindex="-1" role="dialog" id="pid' + rElm.id + '">';
    contentAV += '<div class="modal-dialog">';
    contentAV += '<div class="modal-content">';
    contentAV += '<div class="modal-header">';
    contentAV += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
    contentAV += '<h4 class="modal-title" id="myModalLabel">' + (rElm.descriptions.length > 0 ? rElm.descriptions[0].title : "") + '</h4>';
    contentAV += '</div>';
    contentAV += '<div class="modal-body">';
    contentAV += '<video id="video_file_' + rElm.id + '" class="video-js vjs-default-skin vjs-big-play-centered" ' +
                 'controls preload="auto" width="' + rElm.images[2].width + '" height="' + rElm.images[2].height + '" ' + 
                 'poster="' + rElm.images[1].url + '" ' + 
                 'data-setup=\'{"controls" : true, "autoplay" : true, "preload" : "auto"}\'>';
    contentAV += '<source src="' + rElm.images[2].url + '" type="video/x-flv" />';
    contentAV += '</video>';
    contentAV += '</div>';
    contentAV += '</div>';
    contentAV += '</div>';
    contentAV += '</div>';
  });

  contentAV += '</div>';

  $("#tab-audio-video").append(contentAV);
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







