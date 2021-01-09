var urlParams=''
var myParam=''
$(document).ready(function () {
  $("#navBar").load("/components/navbar");
   $("#footer").load("/components/footer");
    urlParams = new URLSearchParams(window.location.search);
	 myParam = urlParams.get('id');
});