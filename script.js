(function(){
    var heading=document.querySelector("h1")
		var paragraph=document.querySelector("p")
		var form1=document.getElementById("convert")
		var input1=document.getElementById("distance")
		var special="miles";
		
		document.addEventListener("keydown",function(event){
			var key=event.code;
			
			if (key==="KeyK"){
				special="kilometers";
				heading.innerHTML="Kilometers to Miles Converter";
				paragraph.innerHTML="Type in a number of Kilometers and click the button to convert the distance to Miles.";

			}
		
			else if (key==="KeyM"){
				special="miles";
				heading.innerHTML="Miles to Kilometers Converter";
				paragraph.innerHTML="Type in a number of Miles and click the button to convert the distance to kilometers.";
				
			}
		});
		
		form1.addEventListener("submit",function(event){
			event.preventDefault();
			var new1=parseFloat(input1.value);
			var div1=document.getElementById("answer");
			if (new1){
				if (special==="miles"){
					var new2= (new1*1.60934).toFixed(3)
					div1.innerHTML=`<h2> ${new1} miles has been converted to ${new2} kilometers </h2>`
			}
				else if (special==="kilometers"){
					var new2= (new1*0.621371).toFixed(3)
					div1.innerHTML=`<h2> ${new1} Kilometers has been converted to ${new2} Miles </h2>`

				}}
				
			else {
				div1.innerHTML=`<h2> Please enter a Valid Number</h2>`
			}
			
		});
})();