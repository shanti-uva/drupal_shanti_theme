<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
  <?php
    $theme_path = drupal_get_path('theme', 'shanti_theme');
    $subject =  preg_match('/subjects/', $_SERVER['REQUEST_URI']) === 1 ? true : false;
  ?>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Shanti Kmaps</title>
  <meta name="description" content="template">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/css/bootstrap.min.css">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/fonts/font-awesome-4.0.3/css/font-awesome.min.css">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/src/skin-bootstrap/ui.fancytree.css">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/css/utils.css">
  <link href="//vjs.zencdn.net/4.5/video-js.css" rel="stylesheet">  
  <link rel="stylesheet" href="<?php print $theme_path; ?>/css/search-panel.css">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/css/main.css">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/css/additional.css">
  
  <?php if(!$subject): ?>
  <link rel="stylesheet" href="<?php print $theme_path; ?>/css/places.css">
  <?php endif ?>  
  <link rel="icon" href="<?php print $theme_path; ?>/favicon.ico">
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/vendor/modernizr-2.6.2.min.js"></script>
</head>
<body>
  <!--[if lte IE 8]><p class="progressive">It appears you are using an older browser. Please consider a upgrading to a modern version of your browser to best appreciate this website. Thank you -<i class="icon km-close"></i></p><![endif]-->
  <div class="wrap-all">
  		<span class="sr-only"><a href=".main-content">Skip to main content</a> <a href="#kmaps-search">Skip to search</a></span>
  <header class="header-banner">
    <div class="navbar navbar-default navbar-static-top" role="navigation">  
      
      <nav class="menu-buttons">
        <span class="kmaps-searchtoggle menu-icon"><a href="#"><i class='icon km-search-kmaps'></i></a></span><!-- mobile < 400 -->
        <span class="menu-toggle menu-icon"><a href="#"><i class="icon km-menu"></i></a></span><!-- desktop > 768 drilldown menu -->
        <span class="menu-maintoggle menu-icon"><a href="#"><i class="icon km-menu"></i></a></span><!-- mobile < 768 -->
        <span class="menu-exploretoggle menu-explore"><a href="#"><span>Explore </span>Collections<i class="icon km-directions"></i></a></span><!-- mobile < 768 -->
      </nav>

      <div class="navbar-header">
        <h1 class="navbar-title"><a href="#" class="navbar-brand" title="SHANTI Homepage"><i class="icon km-logo-kmaps"></i><em>SHANTI</em>
          <span>Scholarly Collections at the University of Virginia</span></a>
        </h1>
      </div>

      <nav class="navbar-collapse collapse navtop"> <!-- desktop display > 768 -->
       <form class="form">
       <fieldset>         
        <ul class="nav navbar-nav navbar-right">
          <li class="explore"><a href="#">Explore Collections<i class="icon km-directions"></i></a></li>
          <li class="dropdown lang highlight" id="lang">                    
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Eng<i class="icon km-arrowselect"></i></a>
              <ul class="dropdown-menu">
                <li class="form-group"><label class="radio-inline" for="optionlang1">
                    <input type="radio" name="radios" id="optionlang1" value="lang1">Tibetan</label>
                </li>
                <li class="form-group"><label class="radio-inline" for="optionlang2">
                    <input type="radio" name="radios" id="optionlang2" value="lang2" checked>English</label>
                </li>
                <li class="form-group"><label class="radio-inline" for="optionlang3">
                    <input type="radio" name="radios" id="optionlang3" value="lang3">French</label>
                </li>
                <li class="last form-group"><label class="radio-inline" for="optionlang4">
                    <input type="radio" name="radios" id="optionlang4" value="lang4">Chinese</label>
                </li>
              </ul>              
          </li>
        </ul>
       </fieldset>  
       </form>           
     </nav><!-- END navbar-collapse -->
    </div><!-- END navbar -->

    <!-- BEGIN navigation dropdown panel -->  
    <section class="container collapse opencollect collections">
      <nav class="row" role="navigation"> 
         <div class="col-sm-12 col-md-10 col-md-offset-1">          
            <h4>EXPLORE COLLECTIONS</h4>
            <div id="kmaps-collections"> 
            	<!-- load ajax menu --> 
            </div>
         </div>
          <span class="closecollection"> <i class="icon km-close"></i> </span>
      </nav>
    </section><!-- END dropdown panel -->
  </header><!-- END container -->




  
  <!-- BEGIN content -->
  <main class="main-wrapper container">
    <article class="main-content" role="main">
     
    <div class="row">   
	    <header class="col-xs-12 titlearea">
	      <div role="banner">
		      <h1 class="page-title"><i class="icon <?php print $subject ? "km-subjects" : "km-places"; ?>"></i><span><?php print $subject ? "Collections" : "Earth"; ?></span></h1>
		      <nav class="breadwrap" role="navigation">
		        <ol class="breadCrumb">
		          <li><a href=""><?php print $subject ? "Subjects:" : "Places"; ?></a></li>
		        </ol>
		      </nav>
        </div>
			</header>
    </div>
    
    <!-- CONTENT SECTION: Two Columns: content-resources and content-section -->
    <div class="row row-offcanvas row-offcanvas-left">              
    <aside class="content-resources col-xs-6 col-sm-3 sidebar-offcanvas">
     <div class="main-col active">
      <ul class="nav nav-pills nav-stacked">
        <li class="overview active"><a href="#tab-overview" data-toggle="pill">
        	<i class="icon"></i>Overview</a>
        </li>
        <li class="subjects"><a href="#tab-subjects" data-toggle="pill">
        	<i class="icon"></i>Subjects<span class="badge">5</span></a>
        </li>
        <li class="essays"><a href="#tab-essays" data-toggle="pill">
        	<i class="icon"></i>Essays<span class="badge">1</span></a>
        </li>
        <li class="places"><a href="#tab-places" data-toggle="pill">
        	<i class="icon"></i>Places<span class="badge">3</span></a>
        </li>
        <li class="agents"><a href="#tab-agents" data-toggle="pill">
        	<i class="icon"></i>Agents<span class="badge">3</span></a>
        </li>
        <li class="events"><a href="#tab-events" data-toggle="pill">
        	<i class="icon"></i>Events<span class="badge">3</span></a>
        </li>
        <li class="photos"><a href="#tab-photos" data-toggle="pill">
        	<i class="icon"></i>Photos<span class="badge">3</span></a>
        </li>
        <li class="audio-video"><a href="#tab-audio-video" data-toggle="pill">
        	<i class="icon"></i>Audio-Video<span class="badge">3</span></a>
        </li>
        <li class="visuals"><a href="#tab-visuals" data-toggle="pill">
        	<i class="icon"></i>Visuals<span class="badge">3</span></a>
        </li>
        <li class="texts"><a href="#tab-texts" data-toggle="pill">
        	<i class="icon"></i>Texts<span class="badge">3</span></a>
        </li>
        <li class="maps"><a href="#tab-maps" data-toggle="pill">
        	<i class="icon"></i>Maps<span class="badge">3</span></a>
        </li>
        <li class="community"><a href="#tab-community" data-toggle="pill">
        	<i class="icon"></i>Community<span class="badge">3</span></a>
        </li>
        <li class="terms"><a href="#tab-terms" data-toggle="pill">
        	<i class="icon"></i>Terms<span class="badge">3</span></a>
        </li>
        <li class="sources"><a href="#tab-sources" data-toggle="pill">
        	<i class="icon"></i>Sources<span class="badge">3</span></a>
        </li>
      </ul> 
     </div>
    </aside> 
                      
    <section  class="content-section col-xs-12 col-sm-9">
	    <!-- button for responsive menu toggle -->
	    <button type="button" class="btn btn-default btn-xs visible-xs view-resources" data-toggle="offcanvas"><i class="fa"></i><span class="header">RESOURCES</span><span class="badge">13489</span><span class="hide-panel">&times;</span></button>
	    
      <div class="tab-content">
      
        <article class="tab-pane main-col active" id="tab-overview">
        </article>
        <!-- END tab-pane active -->

        <article class="tab-pane main-col" id="tab-subjects">
        </article>

        <article class="tab-pane main-col" id="tab-essays">
        </article>

        <article class="tab-pane main-col" id="tab-places">
        </article>
                        
        <article class="tab-pane main-col" id="tab-agents">
        </article>

        <article class="tab-pane main-col" id="tab-events">
        </article>

        <article class="tab-pane main-col" id="tab-photos">
        </article>

        <article class="tab-pane main-col" id="tab-audio-video">
        </article>

        <article class="tab-pane main-col" id="tab-visuals">
        </article>

        <article class="tab-pane main-col" id="tab-texts">
        </article>

        <article class="tab-pane main-col" id="tab-maps">
        </article>

        <article class="tab-pane main-col" id="tab-community">
        </article>

        <article class="tab-pane main-col" id="tab-terms">
        </article>

        <article class="tab-pane main-col" id="tab-sources">
        </article>
      
      </div><!-- END tab-content -->
    </section><!-- END content-page -->    

                  
    </div><!-- END row -->    
    </article><!-- END main-content -->
 
 
 
 
 
  <!-- BEGIN Search Panel --> 
  <section id="kmaps-search" role="search">               
      <!-- BEGIN input section -->                    
      <section class="input-section">                   
        <form class="form">
         <fieldset>                       
            <div class="search-group">                        
		            <div class="input-group">
				            <input type="text" class="form-control kms" id="searchform" placeholder="Enter Search...">
				            <span class="input-group-btns">
				              <button type="button" class="btn btn-default" id="searchbutton"><i class="icon"></i></button>
				              <button type="reset" class="searchreset">&times;</button>
				            </span>
		            </div>
		            
		           <!-- search scope -->
		           <div class="form-group">
		               <label class="checkbox-inline"><input type="checkbox" id="summaryscope" name="summary-scope" checked="checked" data-value="summaries">Summaries</label>
		               <label class="checkbox-inline" ><input type="checkbox" id="essayscope" name="essay-scope" data-value="essays">Essays</label>            
									 <a href="#" class="advanced-link toggle-link"><i class="icon"></i>Advanced</a>					  
							 </div>
					 </div><!-- END search group -->
					 
           <div id="notification-wrapper"></div>
                
           <section class="advanced-view" style="display:none;">                                              
                  <div class="form-group"> 
                    <label class="radio-inline" for="radios-0">
                      <input type="radio" name="radios" id="radios-0" value="1" checked="checked">
                        All Text</label> 
                    <label class="radio-inline" for="radios-1">
                      <input type="radio" name="radios" id="radios-1" value="2">
                        Name </label> 
                  </div>
                                              
                  <div class="form-group">
                    <label class="radio-inline" for="radios-2">
                      <input type="radio" name="radios2" id="radios-2" value="3" checked="checked">
                        Contains</label> 
                    <label class="radio-inline" for="radios-3">
                      <input type="radio" name="radios2" id="radios-3" value="4">
                        Starts With</label>
                    <label class="radio-inline" for="radios-4">
                      <input type="radio" name="radios2" id="radios-4" value="5">
                        Exactly</label>                             
                  </div>
                  
                  <div class="form-group">
                    <label class="checkbox-inline" for="checkbox-1">
                      <input type="checkbox" name="checkbox" id="checkbox-1" value="6">
                        Show only entries with essays</label> 
                  </div>

                  <div class="form-group">                                    
                    <label class="checkbox-inline" for="checkbox-2">
                      <input type="checkbox" name="checkbox" id="checkbox-2" value="7" checked="checked">
                        Show feature details</label>                              
                  </div>
                  
                                    
                  <!-- feature 1 type -->
                  <div class="form-group km-input feature-group dropdown">
                        <span class="filter"><label>Filter:</label> <span id="matches"></span></span>                                               
                        <input class="form-control feature-type" id="feature-type" name="feature-type" type="text" placeholder="Filter by Feature Type">  
                        <button id="feature1b-reset" class="feature-reset">&times;</button>
                                              
                        <div class="dropdown-menu feature-menu">
                            <div class="tree-wrap"> 

                              <div class="feature-container">                             
                                <div id="feature-tree1"></div> <!-- features tree, under construction -->                              
                              </div> 
                                                          
                              <div class="feature-submit">
                                <button type="button" id="feature1-select" class="btn btn-default">Select</button>
                                <button type="reset" id="feature1a-reset" class="btn btn-default clear-form">Cancel<span>&times;</span></button>
                              </div>
                                                          
                            </div>                      
                        </div> <!-- END dropdown-menu -->                        
                  </div> <!-- END feature-group -->


                  <!-- feature 2 subject -->
                  <div class="form-group km-input feature-group dropdown" style="border-top:none;">
                        <span class="filter"><label>Filter:</label> <span id="matches"></span></span>                                               
                        <input class="form-control feature-subject" id="feature-subject" name="feature-subject" type="text" placeholder="Filter by Feature Subject">  
                        <button id="feature2b-reset" class="feature-reset">&times;</button>
                                              
                        <div class="dropdown-menu feature-menu">
                            <div class="tree-wrap"> 

                              <div class="feature-container">                             
                                <div id="feature-tree2"></div> <!-- features tree, under construction -->                              
                              </div> 
                                                          
                              <div class="feature-submit">
                                <button type="button" id="feature2-select" class="btn btn-default">Select</button>
                                <button type="reset" id="feature2a-reset" class="btn btn-default clear-form">Cancel<span>&times;</span></button>
                              </div>
                                                          
                            </div>                      
                        </div> <!-- END dropdown-menu -->                       
                  </div> <!-- END feature-group -->
                  

                  <!-- feature 3 region -->
                  <div class="form-group km-input feature-group dropdown" style="border-top:none;">
                        <span class="filter"><label>Filter:</label> <span id="matches"></span></span>                                               
                        <input class="form-control feature-region" id="feature-region" name="feature-region" type="text" placeholder="Filter by Feature Region">  
                        <button id="feature3b-reset" class="feature-reset">&times;</button>
                                              
                        <div class="dropdown-menu feature-menu">
                            <div class="tree-wrap"> 

                              <div class="feature-container">                             
                                <div id="feature-tree3"></div> <!-- features tree, under construction -->                              
                              </div> 
                                                          
                              <div class="feature-submit">
                                <button type="button" id="feature3-select" class="btn btn-default">Select</button>
                                <button type="reset" id="feature3a-reset" class="btn btn-default clear-form">Cancel<span>&times;</span></button>
                              </div>
                                                          
                            </div>                      
                        </div> <!-- END dropdown-menu -->                        
                  </div> <!-- END feature-group -->
                  
           </section><!-- END advanced section -->
         </fieldset>         
       </form>
      </section> <!-- END input section -->

      <!-- START view section -->                                  
      <section class="view-section">             
        <ul class="nav nav-tabs">
          <li class="treeview active"><a href=".treeview" data-toggle="tab"><i class="icon km-tree"></i>Tree</a></li>
          <li class="listview"><a href=".listview" data-toggle="tab"><i class="icon km-list"></i>List</a></li>
        </ul>           
        <div class="tab-content">
                          
          <!-- TAB - tree view -->
          <div class="treeview tab-pane active">        
              <div id="tree" class="view-wrap"><!-- view-wrap controls tree container height --></div>              
          </div>          
          <!-- TAB - list view -->
          <div class="listview tab-pane">   
            <div class="view-wrap"> <!-- view-wrap controls container height -->              
              <div class="table-responsive">
                 <table class="table table-condensed table-results">
                  <thead>
                      <tr>
                        <th>Name</th>
                        <th>Feature Type</th>
                      </tr>
                  </thead>
                  <tbody></tbody>
                 </table>                                   
              </div>
            </div>
          </div>
        </div>                        
      </section><!-- END view section -->
  </section><!-- END kmaps-search -->
   
    <a href="#" class="back-to-top"><i class="icon"></i></a>    
  </main><!-- END container -->


	<!-- LOAD menus -->
  <section id="menu-main" role="navigation" class="{ url:'<?php print $theme_path; ?>/js/menus/menu-ajax.html'} menu-accordion">   </section>  
  <section id="menu-collections" role="navigation" class="{ url:'<?php print $theme_path; ?>/js/menus/menu-ajax.html'} menu-accordion">    </section>
   
  <section id="menu" role="navigation" style="display:none;">
    <nav id="menu-drill">                
     <ul>
       <li><h3><em>Main Menu</em></h3> 
          <a class="link-blocker"></a>
       </li>
       <li class="myaccount">
          <a href="#">My Account</a>
          <h2>My Account</h2>       
          <ul>
            <li><a href="#">Logout</a></li>  
            <li>
              <a href="#">Edit Account Details</a>              
              <h2>Account Details</h2>               
                 <ul class="myaccount-details">
                  <li><a href="#">Account Settings</a></li>  
                  <li><a href="#">Profile</a></li>   
                  <li><a href="#">Related Link</a></li>
                  <li><a href="#">Another Link</a></li>
                </ul>           
            </li>
            <li><a href="#">Community Networks</a></li>
          </ul>
          
       </li>                  
       <li>
          <a href="#">Preferences</a>
          <h2>Preferences</h2>
          <ul>          
            <!-- header -->              
            <li class="drop-hdr"><em>Perspective</em></li>
              <li class="form-group"><label class="radio-inline" for="option1a">
                <input type="radio" name="option1" id="option1a" value="option1a" checked>General</label>
              </li>
              <li class="form-group"><label class="radio-inline" for="option1b">
                <input type="radio" name="option1" id="option1b" value="option1b">Tibetan</label>
              </li>
              <li class="form-group last"></li>
            
            <!-- header -->
            <li class="drop-hdr"><em>Subject Language</em></li>
              <li class="form-group"><label class="radio-inline" for="option2a">
                <input type="radio" name="option2" id="option2a" value="option2a">Chinese Characters (simplified)</label>
              </li>
              <li class="form-group"><label class="radio-inline" for="option2b">
                <input type="radio" name="option2" id="option2b" value="option2b">Chinese Characters (traditional)</label>
              </li>
              <li class="form-group"><label class="radio-inline" for="option2c">
                <input type="radio" name="option2" id="option2c" value="option2c">Devangiri Script</label>
              </li>
              <li class="form-group"><label class="radio-inline" for="option2d">
                <input type="radio" name="option2" id="option2d" value="option2d" checked>Popular Standard (romanization)</label>
              </li>
              <li class="form-group"><label class="radio-inline" for="option2e">
                <input type="radio" name="option2" id="option2e" value="option2e">Scholarly Standard (romanization)</label>
              </li>                   
              <li class="form-group"><label class="radio-inline" for="option2f">
                <input type="radio" name="option2" id="option2f" value="option2f">Tibetan Script (simplified)</label>
              </li>                   
              <li class="form-group"><label class="radio-inline" for="option2g">
                <input type="radio" name="option2" id="option2g" value="option2g">Tibetan Script (romanization)</label>
              </li>
              <li class="form-group last"></li>
            
            <!-- header -->
            <li class="drop-hdr"><em>Show Subject Details</em></li>                     
              <li class="form-group"><label class="radio-inline" for="option3a">
                <input type="radio" name="option3" id="option3a" value="option3a" checked>Yes</label>
              </li>
              <li class="form-group"><label class="radio-inline" for="option3b">
                <input type="radio" name="option3" id="option3b" value="option3b">No</label>
              </li>
              <li class="form-group last"></li>
          </ul>                         
        </li>   
         
        <li><a href="#">Help</a></li>
        
        <li><a href="#">Contact Us</a></li>
     </ul>    
    </nav>
  </section><!-- END menu -->
  </div><!-- END wrap-all -->


  <footer class="container footer">
  	<div class="row">
	    <div class="col-xs-12">
	      <p>&copy; COPYRIGHT 2014</p>
	    </div>
    </div>
  </footer>

  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
  <script type="text/javascript">window.jQuery || document.write('<script src="<?php print $theme_path; ?>/js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js"></script>
  
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/vendor/bootstrap.min.js"></script> 
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/menus/jquery.multilevelpushmenu.min.js"></script>
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/menus/jquery.jBreadCrumb.1.1.js"></script>
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/extruder/mbExtruder.js"></script><!-- searchpanel(3) --> 
  <script type="text/javascript" src="<?php print $theme_path; ?>/src/jquery.fancytree.js"></script><!-- tree -->
  <script type="text/javascript" src="<?php print $theme_path; ?>/src/jquery.fancytree.glyph.js"></script><!-- tree -->  
  <script type="text/javascript" src="<?php print $theme_path; ?>/src/jquery.fancytree.filter.js"></script><!-- tree -->

  <script type="text/javascript" src="<?php print $theme_path; ?>/src/jquery.fancytree.edit.js"></script> <!-- is this needed ? -->
  
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/menus/metisMenu.js"></script>
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/equalHeights.js"></script> <!-- sidecolumn resources full-height -->
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/forms/check/icheck.min.js"></script><!-- forms -->
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/forms/select/bootstrap-select.min.js"></script><!-- forms -->  
  <script type="text/javascript" src="<?php print $theme_path; ?>/src/jquery.highlight.js"></script><!-- highlight -->
  <script type="text/javascript" src="http://tablesorter.com/__jquery.tablesorter.min.js"></script> <!-- tablesorter -->    
  <script type="text/javascript" src="<?php print $theme_path; ?>/src/jquery.dataTables.min.js"></script>
  <script type="text/javascript" src="<?php print $theme_path; ?>/src/dataTables.bootstrap.js"></script>
  <script type="text/javascript" src="<?php print $theme_path; ?>/src/trunk8.min.js"></script>
  <!-- Hashchange event -->
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/vendor/jquery.ba-hashchange.min.js"></script>
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/vendor/bootstrap-paginator.min.js"></script>
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/main.js"></script> <!-- kmaps fx -->
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/kmap_places.js"></script>
  <script>
  jQuery(function ($) {
		$( "#kmaps-collections").load( "<?php print $theme_path; ?>/js/menus/menu-ajax.html .menu-collections ul");
	});
	</script>
</body>
</html>
