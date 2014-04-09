<!DOCTYPE html>
<!--[if IE 8]><html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> 
<html class="no-js"> <!--<![endif]-->
<head>
  <?php $theme_path = drupal_get_path('theme', 'shanti_theme'); ?>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Shanti App</title>
  <meta name="description" content="template">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/fonts/font-awesome-4.0.3/css/font-awesome.css">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/fonts/kmaps-icons/css/kmaps-icons.css">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/css/bootstrap.min.css">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/src/skin-bootstrap/ui.fancytree.css" class="skinswitcher">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/css/search-panel.css" media="all">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/js/forms/check/skins/minimal/red.css">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/css/main.css">
  <link rel="stylesheet" href="<?php print $theme_path; ?>/css/additional.css">
  <!-- IE HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>
<body>
  <a href="#main-content" class="sr-only">Skip to main content</a>
  <div class="navbar navbar-default navbar-static-top" role="navigation">
    <div class="container-fluid">  
       <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navtop">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>        
        <h1 class="navbar-title"><a href="" class="navbar-brand" title="SHANTI homepage link"><img src="<?php print $theme_path; ?>/images/shanti_logo.png" alt="shanti logo" />
          <span><span class="hidden">SHANTI</span>Scholarly Collections at the University of Virginia</span></a></h1>
      </div>
      
      <div class="navbar-collapse collapse" id="navtop">
      <form role="form" class="form">
       <fieldset>         
        <ul class="nav navbar-nav navbar-right">
          <li class="explore"><a href="#" id="toggle-collections">EXPLORE<i class="icon km-directions"></i></a></li>
          <li class="login"><a href="">LOGIN</a></li>
          <li class="dropdown options">
              <a href="" class="dropdown-toggle" data-toggle="dropdown">OPTIONS<i class="icon km-arrowselect"></i></a>
                <ul class="dropdown-menu dropdown-features">
                  
                  <li class="drop-hdr">Perspective</li>
                    <li class="form-group"><label class="radio-inline" for="options1a">
                        <input type="radio" name="options1" id="options1a" value="options1a" checked>General</label>
                    </li>
                    <li class="last form-group"><label class="radio-inline" for="options1b">
                        <input type="radio" name="options1" id="options1b" value="options1b">Tibetan</label>
                    </li>
                    
                  <li class="drop-hdr">Subject Language</li>
                    <li class="form-group"><label class="radio-inline" for="options2a">
                        <input type="radio" name="options2" id="options2a" value="options2a">Chinese Characters (simplified)</label>
                    </li>
                    <li class="form-group"><label class="radio-inline" for="options2b">
                        <input type="radio" name="options2" id="options2b" value="options2b">Chinese Characters (traditional)</label>
                    </li>
                    <li class="form-group"><label class="radio-inline" for="options2c">
                        <input type="radio" name="options2" id="options2c" value="options2c">Devangiri Script</label>
                    </li>
                    <li class="form-group"><label class="radio-inline" for="options2d">
                        <input type="radio" name="options2" id="options2d" value="options2d" checked>Popular Standard (romanization)</label>
                    </li>
                    <li class="form-group"><label class="radio-inline" for="options2e">
                        <input type="radio" name="options2" id="options2e" value="options2e">Scholarly Standard (romanization)</label>
                    </li>                   
                    <li class="form-group"><label class="radio-inline" for="options2f">
                        <input type="radio" name="options2" id="options2f" value="options2f">Tibetan Script (simplified)</label>
                    </li>                   
                    <li class="last form-group"><label class="radio-inline" for="options2g">
                        <input type="radio" name="options2" id="options2g" value="options2g">Tibetan Script (romanization)</label>
                    </li>
                  
                  <li class="drop-hdr">Show Subject Details</li>                        
                    <li class="form-group"><label class="radio-inline" for="options3a">
                        <input type="radio" name="options3" id="options3a" value="options3a" checked>Yes</label>
                    </li>
                    <li class="last form-group"><label class="radio-inline" for="options3b">
                        <input type="radio" name="options3" id="options3b" value="options3b">No</label>
                    </li>
                </ul> 
          </li>
          <li class="dropdown lang">                    
                  <a href="" class="dropdown-toggle" data-toggle="dropdown">ENG<i class="icon km-arrowselect"></i></a>
                  <ul class="dropdown-menu dropdown-features">
                    <li class="form-group"><label class="radio-inline" for="optionslang1">
                        <input type="radio" name="radios" id="optionslang1" value="lang1">Tibetan</label>
                    </li>
                    <li class="form-group"><label class="radio-inline" for="optionslang2">
                        <input type="radio" name="radios" id="optionslang2" value="lang2" checked>English</label>
                    </li>
                    <li class="form-group"><label class="radio-inline" for="optionslang3">
                        <input type="radio" name="radios" id="optionslang3" value="lang3">French</label>
                    </li>
                    <li class="last form-group"><label class="radio-inline" for="optionslang4">
                        <input type="radio" name="radios" id="optionslang4" value="lang4">Chinese</label>
                    </li>
                  </ul>      
          </li>
        </ul>
       </fieldset>  
       </form>           
      </div><!-- END navbar-collapse -->
      
    </div>
  </div><!-- END navbar -->
  
  <div class="container-fluid"> <!-- BEGIN dropdown panel -->
    <div class="row collections collapse" id="opencollect">
      <div class="lightblue-bg">
        <div class="col-sm-8 col-sm-offset-2 lightblue-bg">
          <h4>EXPLORE COLLECTIONS</h4>
          <div class="four-collections">
            <div class="col-sm-3">
              <ul>
                <li><a href="#"><i class="icon km-subjects"></i>Subjects</a></li>
                <li><a href="#"><i class="icon km-places"></i>Places</a></li>
                <li><a href="#"><i class="icon km-agents"></i>Agents</a></li>
                <li><a href="#"><i class="icon km-events"></i>Events</a></li>
              </ul>
            </div>
            <div class="col-sm-3">
              <ul>
                <li><a href="#"><i class="icon km-photos"></i>Photos</a></li>
                <li><a href="#"><i class="icon km-audiovideo"></i>Audio-Video</a></li>
                <li><a href="#"><i class="icon km-visuals"></i>Visuals</a></li>
              </ul>
            </div>
            <div class="col-sm-3">
              <ul>
                <li><a href="#"><i class="icon km-essays"></i>Essays</a></li>
                <li><a href="#"><i class="icon km-texts"></i>Texts</a></li>
                <li><a href="#"><i class="icon km-maps"></i>Maps</a></li>
              </ul>
            </div>
            <div class="col-sm-3">
              <ul class="last">
                <li><a href="#"><i class="icon km-community"></i>Community</a></li>
                <li><a href="#"><i class="icon km-terms"></i>Terms</a></li>
                <li><a href="#"><i class="icon km-sources"></i>Sources</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="closecollection">
          <i class="icon km-close"></i>
        </div>
      </div>
    </div><!-- END dropdown panel -->
  
    <div class="row titlearea">
      <div class="col-sm-12">
        <div class="page-title"><i class="icon km-subjects km-lg"></i>Subjects</div>
        <div class="breadcrumbs-wrapper">
          <ol class="breadcrumb"></ol>
        </div>
      </div>
    </div>
  </div> <!-- END header-banner -->
  
  <!-- BEGIN content -->
  <div class="container-fluid">
    <div class="row" id="main-content">
    
      <div class="col-sm-2 content-sidebar">
        <ul class="nav nav-pills nav-stacked">
          <li class="active overview"><a href="#tab-overview" data-toggle="pill"><i class="icon km-overview"></i>Overview</a></li>
          <li class="related"><a href="#tab-related" data-toggle="pill"><i class="icon km-sources"></i>Related<span class="badge">396</span></a></li>
          <li class="essays"><a href="#tab-essays" data-toggle="pill"><i class="icon km-essays"></i>Essays<span class="badge">1</span></a></li>
          <li class="subjects"><a href="#tab-subjects" data-toggle="pill"><i class="icon km-subjects"></i>Subjects<span class="badge">3</span></a></li>
          <li class="places"><a href="#tab-places" data-toggle="pill"><i class="icon km-places"></i>Places<span class="badge">396</span></a></li>
          <li class="agents"><a href="#tab-agents" data-toggle="pill"><i class="icon km-agents"></i>Agents<span class="badge">396</span></a></li>
          <li class="events"><a href="#tab-events" data-toggle="pill"><i class="icon km-events"></i>Events<span class="badge">396</span></a></li>
          <li class="photos"><a href="#tab-photos" data-toggle="pill"><i class="icon km-photos"></i>Photos<span class="badge">396</span></a></li>
          <li class="audio-video"><a href="#tab-audio-video" data-toggle="pill"><i class="icon km-audiovideo"></i>Audio-Video<span class="badge">396</span></a></li>
          <li class="visuals"><a href="#tab-visuals" data-toggle="pill"><i class="icon km-visuals"></i>Visuals<span class="badge">396</span></a></li>
          <li class="texts"><a href="#tab-texts" data-toggle="pill"><i class="icon km-texts"></i>Texts<span class="badge">396</span></a></li>
          <li class="maps"><a href="#tab-maps" data-toggle="pill"><i class="icon km-maps"></i>Maps<span class="badge">396</span></a></li>
          <li class="community"><a href="#tab-community" data-toggle="pill"><i class="icon km-community"></i>Community<span class="badge">396</span></a></li>
          <li class="terms"><a href="#tab-terms" data-toggle="pill"><i class="icon km-terms"></i>Terms<span class="badge">396</span></a></li>
          <li class="sources"><a href="#tab-sources" data-toggle="pill"><i class="icon km-sources"></i>Sources<span class="badge">396</span></a></li>
        </ul>
      </div>
       
      <div class="col-sm-10 content-section">
        <div class="tab-content">
          <div class="tab-pane active" id="tab-overview">
          </div>

          <div class="tab-pane" id="tab-related">
            <h6>Essays</h6>
            <p>Lorem ipsum Cupidatat nostrud qui do in commodo laborum aliquip pariatur id cupidatat non esse ad dolor quis id mollit non quis sint elit aliquip incididunt sint eiusmod irure consequat deserunt incididunt laboris incididunt occaecat cillum aute incididunt magna sed deserunt proident occaecat Ut officia dolor ea Excepteur in minim deserunt adipisicing ullamco voluptate Ut consectetur cillum enim qui aute commodo officia consequat Ut nostrud adipisicing et adipisicing aliquip consequat sit sint dolor irure cupidatat cupidatat dolor id in fugiat culpa fugiat consectetur esse sed dolor fugiat nisi consequat labore ea aliquip in irure occaecat magna veniam reprehenderit sit sit tempor est adipisicing consequat sint ut amet anim cupidatat in labore ullamco qui magna officia quis fugiat dolore consectetur do proident ex sunt sint consectetur cupidatat consectetur cillum dolor ut consequat Excepteur et incididunt qui exercitation cupidatat sit laboris sit anim consequat Ut eu dolore amet cillum proident sint minim ea laboris elit Excepteur.</p>
          </div>

          <div class="tab-pane" id="tab-essays">
            <h6>Essays</h6>
            <p>Lorem ipsum Cupidatat nostrud qui do in commodo laborum aliquip pariatur id cupidatat non esse ad dolor quis id mollit non quis sint elit aliquip incididunt sint eiusmod irure consequat deserunt incididunt laboris incididunt occaecat cillum aute incididunt magna sed deserunt proident occaecat Ut officia dolor ea Excepteur in minim deserunt adipisicing ullamco voluptate Ut consectetur cillum enim qui aute commodo officia consequat Ut nostrud adipisicing et adipisicing aliquip consequat sit sint dolor irure cupidatat cupidatat dolor id in fugiat culpa fugiat consectetur esse sed dolor fugiat nisi consequat labore ea aliquip in irure occaecat magna veniam reprehenderit sit sit tempor est adipisicing consequat sint ut amet anim cupidatat in labore ullamco qui magna officia quis fugiat dolore consectetur do proident ex sunt sint consectetur cupidatat consectetur cillum dolor ut consequat Excepteur et incididunt qui exercitation cupidatat sit laboris sit anim consequat Ut eu dolore amet cillum proident sint minim ea laboris elit Excepteur.</p>
          </div>

          <div class="tab-pane" id="tab-subjects">
            <h6>Subjects</h6>
            <p>Lorem ipsum Excepteur enim nisi in esse sint deserunt enim pariatur incididunt incididunt magna do deserunt aute pariatur deserunt non eiusmod nisi cupidatat commodo irure sit eiusmod elit sed et Ut esse cupidatat occaecat adipisicing eu sunt dolore sed labore in in tempor laborum irure aliquip amet cupidatat mollit do nisi magna pariatur nostrud Ut ex aliqua consequat in incididunt magna nulla Duis culpa mollit Ut culpa occaecat sunt ea cupidatat nostrud ex cupidatat amet esse aliquip aliqua est laborum minim in tempor dolore officia fugiat nisi dolor Duis occaecat reprehenderit incididunt est veniam anim adipisicing in ut nostrud cupidatat in irure quis enim commodo quis officia adipisicing cupidatat nisi incididunt anim dolor sed tempor aliquip esse voluptate aute in exercitation nulla non nostrud in aliquip sed officia sint minim eiusmod voluptate consectetur dolore veniam sint sed in pariatur cillum ad Duis mollit in anim amet enim dolor Duis laboris Duis deserunt Duis ex non eiusmod laborum commodo cupidatat aliqua aute veniam minim sint veniam officia aute Excepteur eiusmod ex adipisicing cillum minim ut non eu voluptate enim ex pariatur ad Duis Ut aliqua et reprehenderit est dolore labore Excepteur laboris deserunt Excepteur officia fugiat do nisi exercitation cupidatat eu non velit veniam quis tempor magna in ut enim fugiat laborum Excepteur aliqua cupidatat consectetur commodo sit quis occaecat anim ullamco id do nulla anim quis proident et cupidatat adipisicing aute quis occaecat ad consequat anim in dolore.</p>
          </div>

          <div class="tab-pane" id="tab-places">
            <h6>Places</h6>
            <p>Lorem ipsum Aute consequat anim cupidatat proident pariatur sed esse tempor est magna culpa minim id proident consectetur officia aliquip in dolore sint occaecat tempor magna minim exercitation consectetur dolor amet elit dolore et nostrud sint amet pariatur sint sint dolor tempor est et dolor reprehenderit dolor pariatur laboris dolore esse laborum occaecat dolor voluptate sed esse in veniam in consequat sed ut laboris cupidatat irure deserunt cillum laborum voluptate eiusmod enim Excepteur veniam proident ut in Duis aute adipisicing minim ex voluptate adipisicing deserunt ex anim amet eu tempor nostrud dolor ut sunt elit do sint dolore ex labore officia fugiat quis exercitation fugiat et nulla velit occaecat enim voluptate est id sed labore eu do deserunt amet id sit laboris dolore dolore ex cupidatat quis laboris aute ut pariatur cillum deserunt aliqua veniam esse eu dolore laboris occaecat esse dolor enim laboris sit deserunt commodo deserunt dolor commodo Excepteur eu ut dolore dolore enim amet deserunt fugiat ut in est dolor nostrud id labore aliquip nisi dolore laborum ut sed do cillum magna officia culpa fugiat laborum laboris sit nostrud esse exercitation commodo dolore dolore proident aliquip ut magna voluptate non exercitation sint adipisicing nostrud est cillum sint nostrud esse ullamco voluptate magna ullamco pariatur sint eu aute consectetur nisi dolor in Duis enim dolore ex et sed elit deserunt non velit proident amet culpa commodo est elit culpa id adipisicing est exercitation dolor nulla commodo sint Duis non incididunt reprehenderit do dolore ad et ad in commodo amet occaecat laborum aliqua sed commodo in in laboris sit et incididunt consectetur sed Duis ut.</p>
          </div>

          <div class="tab-pane" id="tab-agents">
            <h6>Agents</h6>
            <p>Lorem ipsum Consequat Ut tempor culpa ut consequat incididunt dolore sit qui tempor consectetur quis anim culpa non ad dolore adipisicing reprehenderit dolor Ut irure exercitation incididunt ex consequat in eiusmod irure ut ut eu id amet Ut velit proident ad ea consectetur non aliqua Duis tempor ut dolore in magna dolor consectetur proident cillum elit cupidatat cillum dolore commodo cillum tempor quis Ut in in consectetur non ad enim veniam pariatur ad ut aliquip consequat in velit est ut consequat dolor pariatur nisi labore elit aute commodo nisi elit amet laboris pariatur dolore quis sed aliquip Ut laborum cupidatat ea eiusmod ut sed ex enim Duis ex anim reprehenderit pariatur aute dolore deserunt magna esse adipisicing in sit dolor ut minim ut elit ut officia minim pariatur non commodo tempor ut laborum ut adipisicing enim Duis veniam sint dolore dolore esse nostrud velit quis adipisicing aliqua consectetur adipisicing aliquip Duis aute ea ut eiusmod Duis incididunt incididunt quis Ut id enim elit elit id sint adipisicing elit non commodo officia labore culpa ea sed tempor adipisicing id aute ex aliquip reprehenderit ut consequat Excepteur sint et Ut mollit do fugiat ad eiusmod velit labore fugiat fugiat mollit eu cillum eu officia aute enim sint et dolor aliquip voluptate.</p>
          </div>

          <div class="tab-pane" id="tab-events">
            <h6>Events</h6>
            <p>Lorem ipsum Do exercitation enim ea deserunt incididunt ut labore ullamco cupidatat in fugiat mollit officia eu mollit sit sint elit ullamco id aute ad cillum officia irure irure sint in non irure nisi ad pariatur eu veniam mollit culpa dolore eu amet adipisicing in do et esse aliqua tempor dolor velit ex nulla irure nulla nisi tempor sint ad sint ullamco in tempor ut ea sit dolore fugiat pariatur esse dolore consequat esse sunt amet eu ex laboris quis anim nisi ut ut Excepteur nisi do labore commodo ea in officia cillum esse sunt in mollit deserunt nulla irure dolore et Duis ut ea nulla consectetur nostrud nulla magna sit magna consequat irure adipisicing culpa minim Ut do adipisicing mollit culpa sint Duis dolore aliquip nostrud consectetur est proident id sint labore sed nulla irure qui amet pariatur proident minim est proident pariatur consequat irure et in sunt laborum pariatur officia Excepteur pariatur velit do aliquip anim sint labore adipisicing eiusmod quis ut id non consectetur enim adipisicing laboris Duis culpa aliqua ut Excepteur deserunt sunt nostrud velit ea voluptate enim qui non cupidatat reprehenderit dolor anim esse commodo qui laboris id et anim velit minim ut incididunt enim laborum et nisi elit consequat velit deserunt do ex ex aliquip in incididunt commodo Duis laboris non voluptate ea qui mollit enim aliqua esse consectetur Excepteur elit in laboris occaecat nisi Ut deserunt sed aliqua eu esse.</p>
          </div>

          <div class="tab-pane" id="tab-photos">
            <h6>Photos</h6>
            <p>Lorem ipsum Cillum in aliquip culpa commodo nisi non ad cillum eu ullamco laborum do voluptate in voluptate quis in amet ad sunt Ut dolore in ea do sed cillum quis aliquip Duis est officia incididunt pariatur aliqua eiusmod sed in ad consequat eiusmod id mollit voluptate est adipisicing pariatur fugiat id magna ut sunt ea aute ullamco id adipisicing sit ex ea eiusmod cupidatat eiusmod cupidatat id sed amet irure consectetur in tempor ut esse voluptate ut dolore enim commodo ea irure laborum minim veniam commodo consectetur adipisicing enim voluptate ad in officia commodo sed dolor id ut exercitation cillum sint culpa commodo ea deserunt mollit eiusmod laborum do qui sunt do anim cupidatat quis pariatur ut mollit do labore mollit in magna amet elit id dolore nisi non sit amet velit quis in Ut incididunt ut quis proident qui reprehenderit sint id consequat sunt consectetur anim ea qui aliquip magna ex culpa sunt ut sint adipisicing Excepteur aliquip et reprehenderit in aute voluptate aliqua magna laborum laborum Duis anim pariatur amet Excepteur consequat nisi irure aliquip quis voluptate enim elit commodo ad magna eu veniam esse dolor consequat velit esse in.</p>
          </div>

          <div class="tab-pane" id="tab-audio-video">
            <h6>Audio-Video</h6>
            <p>Lorem ipsum Qui veniam ullamco ut sit eu esse eu eiusmod nisi pariatur qui et dolor deserunt amet sed est reprehenderit culpa aliquip dolore fugiat adipisicing Excepteur veniam ea laboris proident et dolore deserunt pariatur sed Duis labore aliquip in sed laboris minim tempor id officia id ut aute officia ullamco eu sit minim sunt commodo ut sint commodo ad Ut eiusmod minim laboris eiusmod minim aute aute veniam enim dolore pariatur minim esse sit dolore nulla in laboris amet esse esse sit sint ullamco elit ad nostrud officia quis dolore in officia nostrud irure sit eiusmod nulla laboris reprehenderit ut Ut nulla sint sunt est sint cillum commodo consequat nulla aute dolor ad esse anim cupidatat commodo in dolor culpa incididunt Duis Ut in tempor Ut in id Duis nisi consectetur ut ut in enim tempor sunt nostrud labore do sint culpa irure labore cupidatat do irure sit minim et aliquip elit enim amet occaecat laboris mollit amet sint sint adipisicing in incididunt cillum tempor aute laborum cupidatat Duis officia nisi aliquip sed id reprehenderit ullamco exercitation dolor incididunt ullamco dolore ullamco eiusmod et sed labore deserunt dolore tempor quis occaecat aliquip culpa cupidatat nulla aliquip amet eiusmod velit eiusmod sit cupidatat dolore irure reprehenderit ut consequat anim quis incididunt enim aute ut veniam mollit esse Excepteur magna anim mollit eiusmod laboris sint amet in consequat eiusmod quis ut quis sit ea ex aliquip nostrud officia et Ut consequat in enim dolore laboris eu ea id qui nisi veniam dolor sint in aliquip labore aliquip occaecat sint dolore.</p>
          </div>

          <div class="tab-pane" id="tab-visuals">
            <h6>Visuals</h6>
            <p>Lorem ipsum Laborum minim dolore qui consequat non enim fugiat in adipisicing consectetur aliquip ut dolore mollit sed nulla irure occaecat exercitation veniam eiusmod in non anim anim consequat magna in minim dolore in aliquip dolore irure qui fugiat mollit laboris anim nulla in mollit elit do dolore exercitation do et elit ad nulla ea laborum Excepteur eiusmod nostrud aute culpa occaecat velit eiusmod nulla dolor irure consectetur mollit fugiat pariatur tempor consectetur Excepteur dolor dolore est exercitation enim Excepteur occaecat proident anim in ut id quis in enim esse mollit aliqua dolore dolor quis eu enim aliquip dolor in laborum consectetur occaecat in tempor ea dolore do non deserunt ad proident laboris esse enim labore commodo laboris incididunt ullamco consequat ut deserunt in nisi velit aliqua officia proident amet nulla aliquip et cupidatat enim culpa tempor dolore ullamco ad qui labore.</p>
          </div>

          <div class="tab-pane" id="tab-texts">
            <h6>Texts</h6>
            <p>Lorem ipsum Laboris cillum magna nulla Excepteur nostrud dolore irure do aute officia eu eu incididunt tempor laborum adipisicing ut dolore culpa veniam nostrud magna eiusmod do officia Excepteur nisi commodo Duis exercitation occaecat deserunt sit in sed esse sit eu dolor ex aliquip occaecat cupidatat commodo Duis fugiat nostrud nulla eu elit id dolore anim dolore veniam amet quis nisi amet aliquip labore aute sit consequat laboris commodo ullamco sed consectetur anim commodo elit ex mollit culpa reprehenderit sit ea amet anim in nulla ad occaecat in minim adipisicing ea quis dolor ut Duis nisi irure dolore pariatur pariatur enim quis Duis veniam aliqua nostrud dolore dolor eu dolor sit commodo dolor reprehenderit magna consequat minim ullamco mollit labore aliquip laborum veniam nulla enim esse et reprehenderit anim officia ad reprehenderit pariatur proident deserunt officia labore exercitation exercitation ad eu consequat enim commodo quis nostrud pariatur proident laborum mollit dolor nulla elit fugiat enim Duis ut pariatur eiusmod sint consequat dolore Excepteur cillum sint nostrud ex cupidatat in ullamco dolore sint commodo cupidatat occaecat pariatur Duis Duis esse velit velit amet est enim cillum ullamco dolore cillum nulla voluptate dolore minim qui eu dolore consequat exercitation culpa in fugiat esse est dolor velit in id nostrud in qui Duis amet ex consectetur deserunt minim id irure fugiat dolor Ut voluptate Duis ullamco ea in aliqua enim eiusmod dolor dolore proident ad cupidatat.</p>
          </div>

          <div class="tab-pane" id="tab-maps">
            <h6>Maps</h6>
            <p>Lorem ipsum Mollit adipisicing adipisicing anim officia sit commodo fugiat enim pariatur dolore eiusmod labore aliquip sit amet labore proident labore mollit dolore do nulla laborum id in elit sit nulla adipisicing esse reprehenderit incididunt anim sunt commodo aliquip dolore adipisicing voluptate proident non in et aute occaecat et fugiat ut nulla dolor fugiat voluptate esse commodo aliquip est aliquip sint mollit sit voluptate voluptate culpa velit nisi in id velit minim id deserunt et proident incididunt aliquip eu velit laboris commodo do sint incididunt eu dolor consectetur ad exercitation voluptate Ut veniam irure in dolore ut ea et sed officia sed aliquip consectetur dolore proident mollit eu nulla minim cillum do ad quis enim incididunt in anim eu incididunt ea enim adipisicing cupidatat dolore ad dolore ut nisi do voluptate deserunt elit proident in Duis culpa ut voluptate est sed occaecat in tempor dolor dolore magna ut minim in id elit est magna.</p>
          </div>

          <div class="tab-pane" id="tab-community">
            <h6>Community</h6>
            <p>Lorem ipsum Dolor velit ad culpa occaecat minim sint reprehenderit fugiat qui minim ut tempor elit dolor sit id do ex fugiat deserunt consectetur consectetur nisi Duis magna aliqua veniam adipisicing ut eiusmod amet adipisicing eu Duis exercitation occaecat qui laborum elit cupidatat cupidatat Duis fugiat esse dolor ut irure in cupidatat laboris consectetur quis enim Ut consequat deserunt commodo consequat nisi aliquip eu ex Duis sint labore minim nostrud adipisicing irure Ut aute esse sit et sit exercitation dolor consectetur proident Excepteur do dolor minim irure laborum cillum incididunt sit velit dolore reprehenderit eiusmod dolor do eu irure ex id tempor mollit eiusmod laborum non amet aliquip enim est incididunt qui dolore sunt esse irure dolore qui consectetur deserunt in dolor ea Excepteur reprehenderit laboris in ea aliquip minim veniam occaecat aute mollit dolor aliqua qui irure tempor reprehenderit nisi do et dolor dolore irure aliquip deserunt dolore consequat minim reprehenderit minim irure dolor dolor Duis.</p>
          </div>

          <div class="tab-pane" id="tab-terms">
            <h6>Terms</h6>
            <p>Lorem ipsum Nulla in ullamco pariatur velit occaecat cupidatat in ex reprehenderit incididunt elit nostrud laboris id pariatur irure cillum dolor exercitation magna laborum proident in nostrud fugiat mollit nulla dolore qui deserunt fugiat esse est ut anim eiusmod cillum dolore officia sed elit laborum id incididunt dolor do id sed do pariatur proident ut pariatur aliqua enim veniam eiusmod anim nisi magna cupidatat reprehenderit aute cupidatat Duis in id nisi sit do et anim dolore elit quis laboris velit amet consectetur reprehenderit ut Ut magna qui cillum est nulla deserunt tempor in fugiat quis consequat magna adipisicing commodo consectetur in exercitation occaecat cupidatat fugiat consequat et incididunt laboris nulla velit nulla aute exercitation ea nisi tempor culpa ea qui elit qui deserunt Duis aliquip consectetur deserunt laboris voluptate mollit enim irure Excepteur ut Excepteur exercitation consequat cupidatat in aliquip minim esse consectetur magna nulla elit quis id dolore labore est pariatur ad ad anim exercitation consectetur commodo ex sunt occaecat non incididunt laborum Duis qui magna dolor sit dolore tempor consequat ullamco nostrud nostrud adipisicing nulla proident aliqua ut non anim in sint amet ut commodo enim consectetur nostrud officia eiusmod eiusmod enim cillum Excepteur mollit do esse velit dolore est reprehenderit nostrud proident aute nisi deserunt do laboris velit ut quis dolore magna amet consequat et aliquip magna adipisicing fugiat Excepteur consectetur dolore veniam mollit veniam occaecat in dolor enim dolor mollit dolor sed id elit reprehenderit officia Duis ut voluptate.</p>
          </div>

          <div class="tab-pane" id="tab-sources">
            <h6>Sources</h6>
            <p>Lorem ipsum Et in et magna qui qui occaecat sunt do Ut magna in eu nulla minim ad sit nulla nisi commodo et proident est reprehenderit sunt culpa aliqua tempor laborum enim elit amet et do sunt officia nulla ut nisi ullamco mollit incididunt tempor laboris sed consequat sed pariatur deserunt tempor aute qui in culpa ut nulla irure officia laboris commodo cillum consequat Duis incididunt aliqua Ut adipisicing cillum proident eu consequat sit velit adipisicing aute Duis do esse incididunt reprehenderit consectetur dolore et Excepteur velit dolore exercitation in aute velit occaecat commodo enim quis sit minim sunt in occaecat ea pariatur elit ullamco Excepteur ut sed sunt eu Ut pariatur dolor qui aliqua proident sunt non consequat est elit incididunt quis officia aliqua veniam consequat pariatur anim nostrud mollit est mollit incididunt ad ut anim minim anim sint commodo quis cillum sed officia esse exercitation nisi velit qui enim sed ullamco aliqua dolore laboris laboris sunt quis dolor voluptate cupidatat aute in ad Ut ex nulla nisi enim tempor non fugiat in et pariatur ex tempor officia aute velit quis eu ea cillum mollit ut est in tempor eu deserunt amet Excepteur aute incididunt irure enim in ullamco adipisicing sed incididunt nisi velit tempor reprehenderit consectetur commodo dolore dolore est magna qui ullamco sunt dolore sit labore veniam esse Duis qui tempor in ea amet commodo elit dolore occaecat mollit elit nostrud cupidatat deserunt ea consectetur exercitation dolor culpa do ad pariatur.</p>
          </div>
        </div><!-- END tab-content -->
      </div><!-- END content-page --> 

          

          
            
        <!-- BEGIN Search Panel --> 
        <div id="kmaps-search">               
            <!-- BEGIN search section -->                   
            <div id="input-section" style="display:none;">                    
              <form role="form" class="form">
               <fieldset>                       
                <legend class="hidden">Search Form</legend>                 
                                          
                  <div class="input-group">
                      <input id="searchform" class="form-control" type="text" placeholder="Enter Search...">
                      <span class="input-group-btn">
                        <button id="searchbutton" type="button" class="btn btn-default"><i class="glyphicon glyphicon-chevron-right"></i></button>
                      </span>
                  </div>
                  
                  <div><a href="#" class="advanced-link advanced-trigger" title="advanced search options"><i class="icon"></i>Advanced</a></div>                    
                      
                     <!-- advanced search hidden ontent -->
                     <div class="advanced-view" style="display:none;">                              
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
                              <div class="form-group last">                                   
                                <label class="checkbox-inline" for="checkbox-2">
                                  <input type="checkbox" name="checkbox" id="checkbox-2" value="7">
                                    Show feature details</label>                              
                              </div>
                              </div>                                                  
               </fieldset>
             </form>                          
            </div>  <!-- END search section -->
                
                
                <!-- START TABS / View section -->                                  
                <div id="view-section">            
                  <ul class="nav nav-tabs" id="search-tabs">
                    <li class="treeview active"><a href="#treeview" data-toggle="tab"><i class="icon km-tree"></i>Tree</a></li>
                    <li class="listview"><a href="#listview" data-toggle="tab"><i class="icon km-list"></i>List</a></li>
                  </ul>
                  
                  
                  <div class="tab-content">
                    
                    <!-- TAB - tree view -->
                    <div id="treeview" class="tab-pane active">       
                        <div id="tree" class="long-wrap"></div><!-- tree nav container -->              
                    </div>
                    
                    <!-- TAB - list view -->
                    <div id="listview" class="tab-pane">    
                      <div class="long-wrap">               
                        <div class="table-responsive">
                         <table class="table table-condensed table-results">
                          <thead>
                              <tr>
                                <th>Name</th>
                                <th>Id</th>
                                <th>Caption</th>
                              </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td><a href="#" title="">Jokhang</a></td>
                            <td><span>Temple</span></td>
                            <td><span></span></td>
                          </tr>
                          <tr>
                            <td><a href="#" title="">Khartrak</a></td>
                            <td><span>Council</span></td>
                            <td><span></span></td>
                          </tr>
                          <tr>
                            <td><a href="#" title="">Lhasa</a></td>
                            <td><span>Cultural Region</span></td>
                            <td><span></span></td>
                          </tr>
                            <tr>
                            <td><a href="#" title="">Lhasa</a></td>
                            <td><span>City</span></td>
                            <td><span></span></td>
                          </tr>
                          <tr>
                            <td><a href="#" title="">Lhasa</a></td>
                            <td><span>ADM2</span></td>
                            <td><span></span></td>
                          </tr>
                          <tr>
                            <td><a href="#" title="">Lhasa</a></td>
                            <td><span>Township (without urban registered population)</span></td>
                            <td><span></span></td>
                          </tr>
                            <tr>
                            <td><a href="#" title="">Lhasa Stream</a></td>
                            <td><span>Large Stream</span></td>
                            <td><span></span></td>
                          </tr>
                          <tr>
                            <td><a href="#" title="">Lhasa Yerpa</a></td>
                            <td><span>Sacred Places</span></td>
                            <td><span></span></td>
                          </tr>
                                                    <tr>
                            <td><a href="#" title="">Lhasa</a></td>
                            <td><span>Cultural Region</span></td>
                            <td><span></span></td>
                          </tr>
                            <tr>
                            <td><a href="#" title="">Lhasa</a></td>
                            <td><span>City</span></td>
                            <td><span></span></td>
                          </tr>
                          <tr>
                            <td><a href="#" title="">Lhasa</a></td>
                            <td><span>ADM2</span></td>
                            <td><span></span></td>
                          </tr>
                          <tr>
                            <td><a href="#" title="">Lhasa</a></td>
                            <td><span>Township (without urban registered population)</span></td>
                            <td><span></span></td>
                          </tr>
                            <tr>
                            <td><a href="#" title="">Lhasa Stream</a></td>
                            <td><span>Large Stream</span></td>
                            <td><span></span></td>
                          </tr>
                          <tr>
                            <td><a href="#" title="">Lhasa Yerpa</a></td>
                            <td><span>Sacred Places</span></td>
                            <td><span></span></td>
                          </tr>
                          <tbody>
                        </table>                                    
                       </div>
                     </div>
                   </div>                     
                   
                 </div> 
              </div><!-- END view section -->
        </div><!-- END kmaps-search --> 
        
    </div><!-- END main-content row -->
  </div><!-- END container-fluid -->
  
  <div class="footer">
    <div>
      <p>&copy; COPYRIGHT 2014</p>
    </div>
  </div>  
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script> 
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
  <script type="text/javascript">window.jQuery || document.write('<script src="<?php print $theme_path; ?>/js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/vendor/jquery-ui.min.js"></script>
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/vendor/bootstrap.min.js"></script>
  <!-- searchpanel -->
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/extruder/mbExtruder.js"></script> 
  <!-- tree -->
  <script type="text/javascript" src="<?php print $theme_path; ?>/src/jquery.fancytree.js"></script>
  <script type="text/javascript" src="<?php print $theme_path; ?>/src/jquery.fancytree.glyph.js"></script>  
  <script type="text/javascript" src="<?php print $theme_path; ?>/src/jquery.fancytree.filter.js"></script>
  <!-- input -->
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/forms/check/icheck.js"></script>

  <!-- highlight -->
  <script type="text/javascript" src="<?php print $theme_path; ?>/src/jquery.highlight.js"></script>

  <!-- tablesorter -->
  <script type="text/javascript" src="http://tablesorter.com/__jquery.tablesorter.min.js"></script>

  <!-- Hashchange event -->
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/vendor/jquery.ba-hashchange.min.js"></script>

  <!-- kmaps -->
  <script type="text/javascript" src="<?php print $theme_path; ?>/js/main.js"></script> 
  
  <script>
  jQuery(function ($) {
      $("#input-section").css("display","block");
  });
  </script>
    
</body>
</html>
