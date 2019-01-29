// ==UserScript==
// @name         fix classroom
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://classroom.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
window.addEventListener('load', function(){
    //google seems to be doing some kind of nonsense whre they download each part of the page individually then render all of it.
    //THis means that when our script takes effect, all of the page may or may not be rendered.
    //This is a huge issue.
    //Solutions that have been tried:
    //Adding delay, does not work, reason is unknown
    //looping, causes page to crash
    //looping with delay, same as above.
    console.log("here");
    var site = document.location.href;
    if (site == "https://classroom.google.com/u/0/h" || site == "https://classroom.google.com/u/1/h" || site == "https://classroom.google.com/u/2/h"
    || site == "https://classroom.google.com/u/3/h" || site == "https://classroom.google.com/u/4/h" ||
    site == "https://classroom.google.com/u/5/h" || site == "https://classroom.google.com/u/5/h" ||
    site == "https://classroom.google.com/u/6/h" || site == "https://classroom.google.com/u/7/h"
    || site == "https://classroom.google.com/u/8/h" || site == "https://classroom.google.com/h")
    {
        //you may need to tweak the below numbers to work with you browser and computer, but these work firefox 58 on macos 10.8
        window.setTimeout(function(){delay(150); fixMain();}, 1700);
        fixMain();
        console.log("here14");
    }
	else if (site.split("/")[5] == "c")
	{
		window.setTimeout(function(){delay(150); fixStream();}, 1700);
		fixStream();
		console.log("here14");
	}
});
function delay(ms) {
    var cur_d = new Date();
    var cur_ticks = cur_d.getTime();
    var ms_passed = 0;
    while(ms_passed < ms) {
        var d = new Date();//People on stack overflow saw this causes a memory leak. I don't care right now.
        var ticks = d.getTime();
        ms_passed = ticks - cur_ticks;
        // d = null;  people also siad this may prevent the memory leak.
    }
}
function fixMain()
    {
        document.getElementsByTagName("NAV")[0].style.backgroundColor = "#4b4b4b";
        document.getElementsByClassName("XIpEib QRiHXd")[0].style.backgroundColor = "#4b4b4b";
        console.log("here1");
        var elems = document.getElementsByClassName("GmuOkf");
        console.log("here2");
        for (var i = 0; i < elems.length; i++) {
            var odd = i % 2
            if (odd == 1)
            {
                elems[i].innerHTML = '<img src="https://raw.githubusercontent.com/HugoHead/old-classroom/master/old%20Clssroom/classworkFolderIcon.png">';
            }
            else
            {
                elems[i].innerHTML = '<img src="https://raw.githubusercontent.com/HugoHead/old-classroom/master/old%20Clssroom/folder.png">';
            }
        }
        document.getElementsByClassName("sEZiv")[0].innerHTML = '<div class="PDXc1b MbhUzd" jsname="ksKsZd"></div><content class="XuQwKc"><span class="GmuOkf" style="top: -12px"><svg focusable="false" xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path></svg></span></content>';
        console.log("here3");
        document.getElementsByClassName("GmuOkf")[0].style.fill = "white";
        console.log("here4");
        document.getElementsByClassName("xSP5ic")[0].style.fill = "rgb(255,255,255)";
        console.log("here5");
        document.getElementsByClassName("yEedwb")[0].innerHTML = "<span class=\"IqJTee\"><em><strong><b>Google </em></strong></b>Classroom</span>";
        console.log("here6");
        document.getElementsByClassName("IqJTee")[0].style.color = "white";
        console.log("here7");
        document.getElementsByTagName("BODY")[0].style.backgroundColor = "#eeeeee";
        elems = document.getElementsByClassName("gHz6xd");
        console.log("here8");
        for (i = 0; i < elems.length; i++) {
            elems[i].style.borderRadius = "0";
        }
        document.getElementsByClassName("gb_kf")[0].style.opacity = "100";
        console.log("here9");
        document.getElementsByClassName("gb_kf")[0].style.fill = "rgb(255,255,255)";
        console.log("here10");
        document.getElementsByClassName("gb_lf")[0].style.opacity = "100";
        console.log("here11");
        document.getElementsByClassName("gb_lf")[0].style.fill = "rgb(255,255,255)";
        console.log("here12");
        //help button accsessor: document.getElementsByClassName("Lw7GHd")[document.getElementsByClassName("Lw7GHd").length - 1]
        document.getElementsByClassName("Lw7GHd")[document.getElementsByClassName("Lw7GHd").length - 1].innerHTML = "<img src='https://raw.githubusercontent.com/HugoHead/old-classroom/master/old%20Clssroom/helpicon.png'>";
        console.log("here13");
		for (var i = 0; i < document.getElementsByClassName("nk37z").length; i++) {
			document.getElementsByClassName("nk37z")[i].addEventListener("click", function(){
					var target = document.getElementsByClassName("nk37z")[i].href;
				});
		}
    }
function fixStream()
	{
		//unround the corrners
var elems = document.getElementsByClassName("qhnNic");
for (var i = 0; i < elems.length; i++) {
    elems[i].style.borderRadius = "0";
    //dropshadow
    elems[i].style.boxShadow = "0 1px 2px 0 rgba(60,64,67,0.302),0 2px 6px 2px rgba(60,64,67,0.149)";
}
document.addEventListener("scroll", function(){
        //unround the corrners
    var elems = document.getElementsByClassName("qhnNic");
    for (var i = 0; i < elems.length; i++) {
        elems[i].style.borderRadius = "0";
        //dropshadow
        elems[i].style.boxShadow = "0 1px 2px 0 rgba(60,64,67,0.302),0 2px 6px 2px rgba(60,64,67,0.149)";
    }
});

//get the darker class color
var elem,style;
elem = document.querySelector('.VnOHwf-Tvm9db');
style = getComputedStyle(elem);
var classColor = style.color;

//chnage the color of the navbar to the darker class color
document.getElementsByTagName("NAV")[0].style.backgroundColor = classColor;
document.getElementsByClassName("XIpEib")[0].style.backgroundColor = classColor;

document.getElementById("UGb2Qe").style.color = "white"
document.getElementsByClassName("xSP5ic")[0].style.fill = "white";

var className = document.getElementById("UGb2Qe").innerHTML;
document.getElementById("UGb2Qe").addEventListener("mouseover", function(){document.getElementById("UGb2Qe").style.textDecoration = "underline"; console.log("on");});
document.getElementById("UGb2Qe").addEventListener("mouseout", function(){document.getElementById("UGb2Qe").style.textDecoration = "none"; console.log("off");});


// fix the work to do box on the right.
document.getElementsByClassName("d4Fe0d")[0].style.borderRadius = "0";
document.getElementsByClassName("d4Fe0d")[0].style.border = "none";
document.getElementsByClassName("d4Fe0d")[0].style.opacity = "30";

//fix the help button in the lower-left
document.getElementsByClassName("Lw7GHd")[document.getElementsByClassName("Lw7GHd").length - 1].innerHTML = "<img src='https://raw.githubusercontent.com/HugoHead/old-classroom/master/old%20Clssroom/helpicon.png'>";

//unroud the corrners of the work-to-do box.
document.getElementsByClassName("zOtZye")[0].style.borderRadius = "0";

//change the icon colors
document.getElementsByClassName("gb_kf")[0].style.opacity = "100";
document.getElementsByClassName("gb_kf")[0].style.fill = "rgb(255,255,255)";
document.getElementsByClassName("gb_lf")[0].style.opacity = "100";
document.getElementsByClassName("gb_lf")[0].style.fill = "rgb(255,255,255)";

//chang the background of the post prompt to white.
document.getElementsByClassName("qk0lee")[0].style.backgroundColor = "white";

//make the tab colors white
document.getElementsByClassName("u2mfde")[1].style.color = "white";
document.getElementsByClassName("u2mfde")[3].style.color = "white";
document.getElementsByClassName("u2mfde")[5].style.color = "white";
document.getElementsByClassName("u2mfde")[3].style.opacity = "100";
document.getElementsByClassName("u2mfde")[5].style.opacity = "100";

//disable max-width for image.
//make width 2000px
//make border radius 0.
//MAKE background transparant
//to access the image element: document.getElementsByClassName("H0u2wd")[0]
var imageElement = document.getElementsByClassName("H0u2wd")[0];
imageElement.style.borderRadius = "0";
imageElement.style.backgroundColor = "transparant";
imageElement.style.width = "100%";
imageElement.style.maxWidth = "100%";
imageElement.style.marginTop = "0px";
imageElement.style.height = "240px";

//remove the stupdi arrow
document.getElementsByClassName("GmuOkf")[1].parentNode.removeChild(document.getElementsByClassName("GmuOkf")[1]);

//make sure this is last:
//If it is not last, it will throw error and void the rest of the script. MAKE IT LAST!
var classSubtitle = document.getElementsByClassName("HDsjVd")[0].innerHTML;
document.getElementsByClassName("HDsjVd")[0].style.color = "white";
document.getElementsByClassName("HDsjVd")[0].addEventListener("mouseover", function(){document.getElementsByClassName("HDsjVd")[0].style.textDecoration = "underline"; console.log("on");});
document.getElementsByClassName("HDsjVd")[0].addEventListener("mouseout", function(){document.getElementsByClassName("HDsjVd")[0].style.textDecoration = "none"; console.log("off");});
	}
})();
