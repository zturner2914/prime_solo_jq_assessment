$(document).ready(function () {
	var numberOfClicks = 0;
	var lineNumber = 0;
	$(".addDivButton").on('click', function(){
		//numberOfClicks++;
		//lineNumber++;
		//var $myContent = $("<li>" + "Line #" + lineNumber + " " + "clicked" + " " + numberOfClicks + " " + "times" + " " + "<button class='changeColor'>Change Color</button>" + " " +
		//	"<button class='removeButton'>Remove</removeButton>" + "<li>");
		//$("ul").append($myContent);

		//document.createElementbyId("myDIV");
		//function myDivCreator () {
		numberOfClicks++;
		lineNumber++;
		var $newDiv  = document.createElement('DIV');
		var $myContent = document.createTextNode ($("<li>" + "Line #" + lineNumber + " " + "clicked" + " " + numberOfClicks + " " + "times" + " " + "<button class='changeColor'>Change Color</button>" + " " +
			"<button class='removeButton'>Remove</removeButton>" + "<li>"));
		$newDiv.appendChild($myContent);
		document.body.append($newDiv);
			
	});
});