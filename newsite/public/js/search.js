var urlParams=''
var myParam=''
var dataState=''
$(document).ready(function () {
  $("#navBar").load("/components/navbar");
   $("#footer").load("/components/footer");
    urlParams = new URLSearchParams(window.location.search);
	 myParam = urlParams.get('id');

	 $.ajax('https://api.covidtracking.com/v1/states/current.json',{
	 	success:function(data){
	 		console.log(data)
	 		    for(var i=0;i<data.length;i++){
      	if (data[i]['state']==myParam.toUpperCase()){
           dataState=data[i]
            $('#data').append(
            	'<p>Positive cases:'
            	+dataState['positive']
            	+'</br>Deaths:'
            	+dataState['death']
            	+'</br>State:'
            	+dataState['state']
            	+'</br>Negative Cases:'
            	+dataState['negative']
            	+'</p>')
      	}
    }
	 	}
	 });
});