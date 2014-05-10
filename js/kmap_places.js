//Function to process kmaps places
function processPlacesData(data) {
  //Change the page title to that of the new page being loaded
  $(".page-title span").html(data.feature.header);

  //Make the overview tab the default tab on URL Change.
  $("a[href='#tab-overview']").click();

  //Remove all elements from Breadcrumbs and start adding them again.
  $("ol.breadCrumb li").remove();
  $("ol.breadCrumb").append('<li><a href=""><span class="tag-before-breadcrumb">Places:</span></a></li>');
  $.each(data.feature.parents, populateBreadcrumbs);
}

//Populate Breadcrumbs
function populateBreadcrumbs(bInd, bVal) {
  $breadcrumbOl = $("ol.breadCrumb");
  $breadcrumbOl.append('<li><a href="#features/' + bVal.id + '">' + bVal.header + '</a></li>');
}

