<div class="wrap-all">
  <span class="sr-only"><a href=".main-content">Skip to main content</a> <a href="#kmaps-search">Skip to search</a></span>
  <header class="header-banner">
    <div class="navbar navbar-default" role="navigation">  
      <nav class="menu-buttons">
        <span class="shanti-searchtoggle menu-icon"><a href="#"><i class='icon shanticon-search'></i></a></span><!-- mobile < 400 : search -->
        <span class="menu-toggle menu-icon"><a href="#"><i class="icon shanticon-menu"></i></a></span><!-- desktop > 768 drilldown menu : main-menu -->
        <span class="menu-maintoggle menu-icon"><a href="#"><i class="icon shanticon-menu"></i></a></span><!-- mobile < 768 : main-menu -->
        <span class="menu-exploretoggle menu-explore"><a href="#"><span>Explore </span>Collections<i class="icon shanticon-directions"></i></a></span><!-- mobile < 768 : collections -->
      </nav>

      <div class="navbar-header">
        <h1 class="navbar-title"><a href="#" class="navbar-brand" title="SHANTI Homepage"><i class="icon shanticon-logo"></i><em>SHANTI</em>
          <span>Scholarly Collections at the University of Virginia</span></a>
        </h1>
      </div>

      <nav class="navbar-collapse collapse navtop"> <!-- desktop display > 768 -->
       <form class="form">
       <fieldset>         
        <ul class="nav navbar-nav navbar-right">
          <li class="explore"><a href="#">Explore Collections<i class="icon shanticon-directions"></i></a></li>
          <li class="dropdown lang highlight" id="lang"> 
            <form>                  
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Eng<i class="icon shanticon-arrowselect"></i></a>
              <ul class="dropdown-menu">
                <li class="form-group"><label class="radio-inline" for="optionlang1">
                    <input type="radio" name="radios" id="optionlang1" value="" checked>English</label>
                </li>
                <li class="form-group"><label class="radio-inline" for="optionlang2">
                    <input type="radio" name="radios" id="optionlang2" value="simp.chi">Tibetan</label>
                </li>
              </ul> 
            </form>            
          </li>
        </ul>
       </fieldset>  
       </form>           
     </nav><!-- END navbar-collapse -->
    </div><!-- END navbar -->

    <!-- BEGIN navigation dropdown panel -->  
    <section class="container opencollect collections" role="navigation">
      <nav class="row"> 
         <div class="col-sm-12 col-md-10 col-md-offset-1">          
            <h4>EXPLORE COLLECTIONS</h4>
            <div id="kmaps-collections"> 
              <!-- load ajax menu --> 
            </div>
         </div>
          <button><i class="icon shanticon-cancel"></i></button>
      </nav>
    </section><!-- END dropdown panel -->
  </header><!-- END container -->

  <!-- BEGIN Content -->
  <main class="main-wrapper container">
    <article class="main-content" role="main">
     
      <div class="row">   
        <header class="col-xs-12 titlearea">
          <div role="banner">
            <h1 class="page-title"><em><i class="icon <?php print $subject ? "shanticon-subjects" : "shanticon-places"; ?>"></i></em><span><?php print $subject ? "Collections" : "Earth"; ?></span></h1>
            <nav class="breadwrap" role="navigation">
              <ol class="breadcrumb">
               <li><a href=""><?php print $subject ? "Subjects:" : "Places"; ?></a></li>
              </ol>
            </nav>
          </div>
        </header>
      </div>
    
      <!-- Two Columns: content-resources and content-section -->
      <div class="row row-offcanvas row-offcanvas-left">
      
        <!-- Column Resources  -->              
        <aside class="content-resources col-xs-6 col-sm-3 sidebar-offcanvas equal-height">
          <ul class="nav nav-pills nav-stacked">
            <li class="overview"><a href="#tab-overview" data-toggle="pill">
              <i class="icon shanticon-overview"></i>Overview</a>
            </li>
            <li class="subjects"><a href="#tab-subjects" data-toggle="pill">
              <i class="icon shanticon-subjects"></i>Subjects<span class="badge">5</span></a>
            </li>
            <li class="essays"><a href="#tab-essays" data-toggle="pill">
              <i class="icon shanticon-essays"></i>Essays<span class="badge">1</span></a>
            </li>
            <li class="places"><a href="#tab-places" data-toggle="pill">
              <i class="icon shanticon-places"></i>Places<span class="badge">3</span></a>
            </li>
            <li class="agents"><a href="#tab-agents" data-toggle="pill">
              <i class="icon shanticon-agents"></i>Agents<span class="badge">3</span></a>
            </li>
            <li class="events"><a href="#tab-events" data-toggle="pill">
              <i class="icon shanticon-events"></i>Events<span class="badge">3</span></a>
            </li>
            <li class="photos"><a href="#tab-photos" data-toggle="pill">
              <i class="icon shanticon-photos"></i>Photos<span class="badge">3</span></a>
            </li>
            <li class="audio-video"><a href="#tab-audio-video" data-toggle="pill">
              <i class="icon shanticon-audio-video"></i>Audio-Video<span class="badge">3</span></a>
            </li>
            <li class="visuals"><a href="#tab-visuals" data-toggle="pill">
              <i class="icon shanticon-visuals"></i>Visuals<span class="badge">3</span></a>
            </li>
            <li class="texts"><a href="#tab-texts" data-toggle="pill">
              <i class="icon shanticon-texts"></i>Texts<span class="badge">3</span></a>
            </li>
            <li class="maps"><a href="#tab-maps" data-toggle="pill">
              <i class="icon shanticon-maps"></i>Maps<span class="badge">3</span></a>
            </li>
            <li class="community"><a href="#tab-community" data-toggle="pill">
              <i class="icon shanticon-community"></i>Community<span class="badge">3</span></a>
            </li>
            <li class="terms"><a href="#tab-terms" data-toggle="pill">
              <i class="icon shanticon-terms"></i>Terms<span class="badge">3</span></a>
            </li>
            <li class="sources"><a href="#tab-sources" data-toggle="pill">
              <i class="icon shanticon-sources"></i>Sources<span class="badge">3</span></a>
            </li>
          </ul> 
        </aside> 
      
        <!-- Column Main  -->                   
        <section  class="content-section col-xs-12 col-sm-9 equal-height">
          <!-- button for responsive menu toggle -->
          <button type="button" class="btn btn-default btn-xs visible-xs view-resources" data-toggle="offcanvas">
            <i class="fa"></i>
            <span class="header">RESOURCES</span>
            <span class="badge">13489</span>
            <i class="icon"></i>
          </button>
          
          <div class="tab-content">
          
            <article class="tab-pane" id="tab-overview">
            </article>

            <article class="tab-pane" id="tab-subjects"> 
            </article>

            <article class="tab-pane" id="tab-essays">
            </article>

            <article class="tab-pane" id="tab-places">
            </article>
                            
            <article class="tab-pane" id="tab-agents">
            </article>

            <article class="tab-pane" id="tab-events">
            </article>

            <article class="tab-pane" id="tab-photos">
            </article>

            <article class="tab-pane" id="tab-audio-video">
            </article>

            <article class="tab-pane" id="tab-visuals">
            </article>

            <article class="tab-pane" id="tab-texts">
            </article>

            <article class="tab-pane" id="tab-maps">
            </article>

            <article class="tab-pane" id="tab-community">
            </article>

            <article class="tab-pane" id="tab-terms">
            </article>

            <article class="tab-pane" id="tab-sources">
            </article>

            <article class="show-related-pages">
            </article>
          
          </div><!-- END tab-content -->
        </section><!-- END content-section -->                
      </div><!-- END row -->    
    </article><!-- END main-content -->
 
 
 
 
 
      <!-- BEGIN Search Panel --> 
      <section id="kmaps-search" role="search">               
          <!-- BEGIN Input section -->                    
          <section class="input-section" style="display:none;">                   
            <form class="form">
             <fieldset>                       
                <div class="search-group">                        
                    <div class="input-group" id="searcharea">
                        <input type="text" class="form-control kms" id="searchform" placeholder="Enter Search...">
                        <span class="input-group-btn">
                          <button type="button" class="btn btn-default" id="searchbutton"><i class="icon"></i></button>
                          <button type="reset" class="btn searchreset"><i class="icon"></i></button>
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
                      <div class="form-group" id="searchScopeGroup">
                        <label class="radio-inline" for="scopeAll">
                          <input type="radio" name="scope" id="scopeAll" value="all" checked="checked">
                            All Text</label> 
                        <label class="radio-inline" for="scopeName">
                          <input type="radio" name="scope" id="scopeName" value="name">
                            Name </label> 
                      </div>
                                                  
                      <div class="form-group" id="searchAnchorGroup">
                        <label class="radio-inline" for="anchorContains">
                          <input type="radio" name="anchor" id="anchorContains" value="contains" checked="checked">
                            Contains</label> 
                        <label class="radio-inline" for="anchorStartsWith">
                          <input type="radio" name="anchor" id="anchorStartsWith" value="startsWith">
                            Starts With</label>
                        <label class="radio-inline" for="anchorExact">
                          <input type="radio" name="anchor" id="anchorExact" value="exact">
                            Exactly</label>                             
                      </div>
 
   
 
                      <!-- feature 1 type -->
                      <div class="form-group advanced-input feature-group dropdown" style="display:none;">
                            <span class="filter type"><label>Filter:</label> <span id="matches1"></span></span>                                               
                            <input class="form-control feature-type" id="feature-type" name="feature-type" type="text" placeholder="Filter by Feature Type">  
                            <button id="feature1a-reset" class="feature-reset"><i class="icon"></i></button>
                                                  
                            <div class="dropdown-menu feature-menu dropdown-type">
                                <div class="tree-wrap"> 
    
                                  <div class="feature-container">                             
                                    <div id="feature-tree1"></div> <!-- features tree, under construction -->                              
                                  </div> 
                                                              
                                  <div class="feature-submit">
                                    <button type="button" id="feature1-select" class="btn btn-default">Select</button>
                                    <button type="reset" id="feature1b-reset" class="btn btn-default clear-form">Cancel<i class="icon"></i></button>
                                  </div>
                                                              
                                </div>                      
                            </div> <!-- END dropdown-menu -->                        
                      </div> <!-- END feature-group -->
    
    
                      <!-- feature 2 subject -->
                      <div class="form-group advanced-input feature-group dropdown" style="border-top:none;display:none;">
                            <span class="filter subject"><label>Filter:</label> <span id="matches2"></span></span>                                               
                            <input class="form-control feature-subject" id="feature-subject" name="feature-subject" type="text" placeholder="Filter by Feature Subject">  
                            <button id="feature2a-reset" class="feature-reset"><i class="icon"></i></button>
                                                  
                            <div class="dropdown-menu feature-menu dropdown-subject">
                                <div class="tree-wrap"> 
    
                                  <div class="feature-container">                             
                                    <div id="feature-tree2"></div> <!-- features tree, under construction -->                              
                                  </div> 
                                                              
                                  <div class="feature-submit">
                                    <button type="button" id="feature2-select" class="btn btn-default">Select</button>
                                    <button type="reset" id="feature2b-reset" class="btn btn-default clear-form">Cancel<i class="icon"></i></button>
                                  </div>
                                                              
                                </div>                      
                            </div> <!-- END dropdown-menu -->                       
                      </div> <!-- END feature-group -->
                      
    
                      <!-- feature 3 region -->
                      <div class="form-group advanced-input feature-group dropdown" style="border-top:none;display:none;">
                            <span class="filter region"><label>Filter:</label> <span id="matches3"></span></span>                                               
                            <input class="form-control feature-region" id="feature-region" name="feature-region" type="text" placeholder="Filter by Feature Region">  
                            <button id="feature3a-reset" class="feature-reset"><i class="icon"></i></button>
                                                  
                            <div class="dropdown-menu feature-menu dropdown-region">
                                <div class="tree-wrap"> 
    
                                  <div class="feature-container">                             
                                    <div id="feature-tree3"></div> <!-- features tree, under construction -->                              
                                  </div> 
                                                              
                                  <div class="feature-submit">
                                    <button type="button" id="feature3-select" class="btn btn-default">Select</button>
                                    <button type="reset" id="feature3b-reset" class="btn btn-default clear-form">Cancel<i class="icon"></i></button>
                                  </div>
                                                              
                                </div>                      
                            </div> <!-- END dropdown-menu -->                        
                      </div> <!-- END feature-group -->
 
                  
                      <div class="form-group advanced-input select-type"> 
                          <span>Show only results containing:</span>
                            <select class="selectpicker" id="selector1" name="selector1" data-selected-text-format="count>2" data-header="Select one or more..." data-width="100%" multiple >                         
                              <option data-icon="shanticon-essays">Essays</option>
                              <option data-icon="shanticon-places">Places</option>
                              <option data-icon="shanticon-agents">Agents</option>
                              <option data-icon="shanticon-events">Events</option>
                              <option data-icon="shanticon-photos">Photos</option>
                              <option data-icon="shanticon-audio-video">Audio-Video</option>
                              <option data-icon="shanticon-visuals">Visuals</option>
                              <option data-icon="shanticon-texts">Texts</option>
                              <option data-icon="shanticon-terms">Terms</option>
                              <option data-icon="shanticon-sources">Sources</option>
                            </select>
                      </div>
                                        
               </section><!-- END advanced section -->
             </fieldset>         
           </form>
          </section> <!-- END input section -->
    
          <!-- BEGIN view section -->                                  
          <section class="view-section">             
            <ul class="nav nav-tabs">
              <li class="treeview active"><a href=".treeview" data-toggle="tab"><i class="icon shanticon-tree"></i>Tree</a></li>
              <li class="listview"><a href=".listview" data-toggle="tab"><i class="icon shanticon-list"></i>List</a></li>
            </ul>
              <div class="tab-content">
                  <!-- TAB - tree view -->
                  <div class="treeview tab-pane active">
                      <div id="tree" class="view-wrap"><!-- view-wrap controls tree container height --></div>
                  </div>
                  <!-- TAB - list view -->
                  <div class="listview tab-pane">
                      <div id="pager" class="pagination"></div>

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
                              <div id="pager-header"></div>
                          </div>
                      </div>
                  </div>
              </div>

          </section><!-- END view section -->
      </section><!-- END kmaps-search -->
   
    <a href="#" class="back-to-top"><i class="icon"></i></a>    
  </main><!-- END container -->

  <!-- LOAD menus -->
  <section id="menu-main" role="navigation" class="{ url:'<?php print $theme_path; ?>/js/menus/menu-ajax.php'} menu-accordion"></section>  
  <section id="menu-collections" role="navigation" class="{ url:'<?php print $theme_path; ?>/js/menus/menu-ajax.php'} menu-accordion"></section>

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
                  <input type="radio" name="option2" id="option2a" value="undefined" checked>English</label>
              </li>
              <li class="form-group"><label class="radio-inline" for="option2b">
                  <input type="radio" name="option2" id="option2b" value="simp.chi">Chinese Characters (simplified)</label>
              </li>
              <?php if(!$subject): ?>
              <li class="form-group"><label class="radio-inline" for="option2c">
                  <input type="radio" name="option2" id="option2c" value="trad.chi">Chinese Characters (traditional)</label>
              </li>
              <?php endif ?>
              <li class="form-group"><label class="radio-inline" for="option2d">
                  <input type="radio" name="option2" id="option2d" value="deva">Devangiri Script</label>
              </li>
              <li class="form-group"><label class="radio-inline" for="option2e">
                  <input type="radio" name="option2" id="option2e" value="roman.popular">Popular Standard (romanization)</label>
              </li>
              <li class="form-group"><label class="radio-inline" for="option2f">
                  <input type="radio" name="option2" id="option2f" value="roman.scholar">Scholarly Standard (romanization)</label>
              </li>
              <li class="form-group"><label class="radio-inline" for="option2g">
                  <input type="radio" name="option2" id="option2g" value="pri.tib.sec.chi">Tibetan Script (simplified)</label>
              </li>
              <li class="form-group"><label class="radio-inline" for="option2h">
                  <input type="radio" name="option2" id="option2h" value="pri.tib.sec.roman">Tibetan Script (romanization)</label>
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

</div><!-- End wrap-all -->

<footer class="container footer">
  <div class="row">
    <div class="col-xs-12">
      <p>&copy; COPYRIGHT 2014</p>
    </div>
  </div>
</footer>
