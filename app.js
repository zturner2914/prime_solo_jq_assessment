$(document).ready(function () {
	var numberOfClicks = 0;
	var lineNumber = 0;
	$(".addDivButton").on('click', function(){
		numberOfClicks++;
		lineNumber++;
		var $myContent = $("<div>" + "Line #" + lineNumber + " " + "clicked" + " " + 
			numberOfClicks + " " + "times" + " " + "<br>" + 
			"<button class='changeColor'>Change Color</button>" + " " +
			"<button class='removeButton'>Remove</removeButton>" + "</div>");
		$("body").append($myContent);
	});

		$(document).on("click", '.removeButton', function () {
			$(this).parent().remove();

		});

		$(document).on('click', '.changeColor', function () {

		});

			
	});
