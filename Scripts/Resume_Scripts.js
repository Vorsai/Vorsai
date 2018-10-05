function getID(ID) //Too lazy to type this out all the time
{
	return document.getElementById(ID);
}

function type(text, time)  //Typing effect
{
	var string = text.split("");
	var t = time;
	var s = time / text.length;  //Divide the set time by length of array to smooth effect
	var i = 0;
	
	var wait = setInterval(character, s);  //Wait delay creates the effect
	
	function character()
	{
		if ( i == text.length )
		{
			clearInterval(wait);
			getID("script").innerHTML += "<br>";
			getID("script").scrollTop = getID("script").scrollHeight;
		}
		else
		{
			getID("script").innerText += string[i];
			i++;
		}
	}
}

function resume(text, time, element)
{
	var string = text.split("");
	var t = time;
	var s = time / text.length;  //Divide the set time by length of array to smooth effect
	var i = 0;
	var newElement = document.createElement(element);  //Create new element
	
	var wait = setInterval(character, s);  //Wait delay creates the effect
	
	function character()
	{
		if ( i == text.length )
		{
			clearInterval(wait);
			//getID("resume").innerHTML += "<br>";
		}
		else
		{
			//Makes no sense to do it this way, just kept it this way in case I want to use the type effect in this div
			var temp= document.createTextNode(string[i]);  //Create a node with a single character
			newElement.appendChild(temp);  //Append to new element
			getID("resume").appendChild(newElement);  //Move the new element to the resume div
			i++;
		}
	}
}

function sleep(t)  //Just waits
{
	return new Promise( (resolve) => setTimeout(resolve, t));
}

document.addEventListener("DOMContentLoaded", function(event)  //Wait for load and run all scripts
{	
	var allElements = document.getElementsByTagName("*");
	var editable = getID("script");  //The editable pre
	
	editable.addEventListener("DOMSubtreeModified", function()  //Check for changes by user
	{
		var changes = getID("script").innerText;  //Get changes to editable div
		var style = getID("edit_style");  //The inline stylesheet
		
		style.innerText = changes;  //Move changes to inline stylesheet
	});
	
	editable.style.outline = "0";  //Get rid of outline on focus
	editable.style.fontFamily = "monospace";  //More typewriter looking
	
	//Javascript is single threaded, can't think of a better way to get the timing right without keeping a tally of seconds.  All the sleeps are executed on page load.
	//Since all the sleeps are executed on page load, I can't think of a clever way to have a global millisecond variable to make timing easier since the type functions
	//Also take time, but are not executed until it's parent sleep function has finished.
	//I realize now that I could've put all the text into a delimited line and have it put all into an array that can be called by the type function, but it's too late to fix now.
	//Now I'm stuck with this mess of code.
	//To be unfubar'd later
	
	type("/**", 500);
	sleep(500).then(() =>
	{
	type("*Hi", 500);
	})
	sleep(1500).then(() =>
	{
	type("*I'm Dallas Van Leeuwen", 500);
	})
	sleep(2500).then(() =>
	{
	type("*And this is my resume", 500);
	})
	sleep(3500).then(() =>
	{
	type("*...", 500);
	})
	sleep(4500).then(() =>
	{
	type("*Not very impressive I know", 500);
	})
	sleep(5500).then(() =>
	{
	type("*But let's try and make it better", 500);
	})
	sleep(6500).then(() =>
	{
	type("**/", 500);
	})
	sleep(7500).then(() =>
	{
	type("", 500);
	})
	sleep(8500).then(() =>
	{
	type("* {", 500);
	})
	sleep(9500).then(() =>
	{
	type("-webkit-transition: all 1s;", 500);
	})
	sleep(10500).then(() =>
	{
	type("}", 500);
	})
	sleep(11500).then(() =>
	{
	type("", 500);
	})
	sleep(12500).then(() =>
	{
	type("body {", 500);
	})
	sleep(13500).then(() =>
	{
	type("background-color: #05386B;", 500);
	})
	sleep(14500).then(() =>
	{
	type("color: #EDF5E1;", 500);
	})
	sleep(15500).then(() =>
	{
	type("}", 500);
	})
	sleep(16500).then(() =>
	{
	type("", 500);
	})
	sleep(17500).then(() =>
	{
	type("/**", 500);
	})
	sleep(18500).then(() =>
	{
	type("*Okay, that was cool right?", 500);
	})
	sleep(19500).then(() =>
	{
	type("*We can do better though, hold on", 500);
	})
	sleep(20500).then(() =>
	{
	type("**/", 500);
	})
	sleep(21500).then(() =>
	{
	type("", 500);
	})
	sleep(22500).then(() =>
	{
	type("#script {", 500);
	})
	sleep(23500).then(() =>
	{
	type("background-color: #379683;", 500);
	})
	sleep(24500).then(() =>
	{
	type("border: 1px solid #5CDB95;", 500);
	})
	sleep(25500).then(() =>
	{
	type("max-height: 92%;", 500);
	})
	sleep(26500).then(() =>
	{
	type("width: 49%;", 500);
	})
	sleep(27500).then(() =>
	{
	type("overflow: auto;", 500);
	})
	sleep(28500).then(() =>
	{
	type("padding: 10px 10px 10px 10px;", 500);
	})
	sleep(29500).then(() =>
	{
	type("white-space: pre-wrap;", 500);
	})
	sleep(30500).then(() =>
	{
	type("-webkit-transform: translateX(95%);", 500);
	})
	sleep(31500).then(() =>
	{
	type("position: absolute;", 500);
	})
	sleep(32500).then(() =>
	{
	type("}", 500);
	})
	sleep(33500).then(() =>
	{
	type("", 500);
	})
	sleep(34500).then(() =>
	{
	type("/**", 500);
	})
	sleep(35500).then(() =>
	{
	type("*Alright, now we're getting somewhere", 500);
	})
	sleep(36500).then(() =>
	{
	type("**/", 500);
	})
	sleep(37500).then(() =>
	{
	type("", 500);
	})
	sleep(38500).then(() =>
	{
	type("#script {", 500);
	})
	sleep(39500).then(() =>
	{
	type("box-shadow: 2px 2px 10px;", 500);
	})
	sleep(40500).then(() =>
	{
	type("}", 500);
	})
	sleep(41500).then(() =>
	{
	type("", 500);
	})
	sleep(42500).then(() =>
	{
	type("/**", 500);
	})
	sleep(43500).then(() =>
	{
	type("*Ok, this looks nice", 500);
	})
	sleep(44500).then(() =>
	{
	type("*Now a bit about me", 500);
	})
	sleep(45500).then(() =>
	{
	type("**/", 500);
	})
	sleep(46500).then(() =>
	{
	type("", 500);
	})
	sleep(47500).then(() =>
	{
	type("#resume {", 500);
	})
	sleep(48500).then(() =>
	{
	type("background-color: #379683;", 500);
	})
	sleep(49500).then(() =>
	{
	type("border: 1px solid #5CDB95;", 500);
	})
	sleep(50500).then(() =>
	{
	type("max-height: 92%;", 500);
	})
	sleep(51500).then(() =>
	{
	type("width: 45%;", 500);
	})
	sleep(52500).then(() =>
	{
	type("overflow: auto;", 500);
	})
	sleep(53500).then(() =>
	{
	type("padding: 10px 10px 10px 10px;", 500);
	})
	sleep(54500).then(() =>
	{
	type("white-space: pre-wrap;", 500);
	})
	sleep(55500).then(() =>
	{
	type("position: absolute;", 500);
	})
	sleep(56500).then(() =>
	{
	type("box-shadow: -2px 2px 10px;", 500);
	})
	sleep(57500).then(() =>
	{
	type("}", 500);
	})
	sleep(58500).then(() =>
	{
	resume("Dallas Van Leeuwen", 0, "h1");
	})
	sleep(59500).then(() =>
	{
	resume("Aspiring Professional", 0, "h2");
	})
	sleep(60500).then(() =>
	{
	resume("", 0, "br");
	})
	sleep(61500).then(() =>
	{
	resume("I am going to school at the University of North Carolina at Charlotte", 0, "h4");
	})
	sleep(62500).then(() =>
	{
	resume("For Software and Information Systems, with a focus in security", 0, "h4");
	})
	sleep(63500).then(() =>
	{
	resume("However I took a liking to front and back end web development", 0, "h4");
	})
	sleep(64500).then(() =>
	{
	resume("And did further studies at the University of Google", 0, "h4");
	})
	sleep(65500).then(() =>
	{
	resume("(That was a joke, I'm largely self taught though)", 0, "h4");
	})
	sleep(66500).then(() =>
	{
	resume("With more than 15 years in the service industry", 0, "h4");
	})
	sleep(67500).then(() =>
	{
	resume("I'm ready to move on and start a career in the tech industry", 0, "h4");
	})
	sleep(68500).then(() =>
	{
	resume("", 0, "br");
	})
	sleep(69500).then(() =>
	{
	resume("Thanks  for taking the time to watch this!", 0, "h4");
	})
	sleep(70500).then(() =>
	{
	resume("I look forward to working for you!", 0, "h4");
	})
	sleep(71500).then(() =>
	{
	resume("You can contact me at", 0, "h4");
	})
	sleep(72500).then(() =>
	{
	resume("dallas dot chong at gmail dot com", 0, "h4");
	})
	sleep(73500).then(() =>
	{
	type("", 500);
	})
	sleep(74500).then(() =>
	{
	type("/**", 500);
	})
	sleep(75500).then(() =>
	{
	type("*This was inpired by Samuel Reed at STRML.net", 500);
	})
	sleep(76500).then(() =>
	{
	type("*But written entirely by me (though not nearly as well as him)", 500);
	})
	sleep(77500).then(() =>
	{
	type("*By the way", 500);
	})
	sleep(78500).then(() =>
	{
	type("*This CSS section is all editable!", 500);
	})
	sleep(79500).then(() =>
	{
	type("*Go ahead and give it a try", 500);
	})
	sleep(80500).then(() =>
	{
	type("**/", 500);
	})
});