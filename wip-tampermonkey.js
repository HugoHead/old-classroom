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
    var site = document.location.href;
    console.log("here");
    console.log("here15");
    console.log(site);
    console.log(site.split("/"));
    console.log(site.split("/")[site.split("/").length - 1]);
    console.log(site.split("/")[site.split("/").length - 1] == "details")
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
	else if (site.split("/")[5] == "c" || site == "https://classroom.google.com/c")
	{
		window.setTimeout(function(){delay(150); fixStream();}, 1700);
		fixStream();
		console.log("here14");
	}
    else if (site.split("/")[site.split("/").length - 1] == "details")
    {
        console.log("here16")
        window.setTimeout(function(){delay(150); fixAssignment();}, 1700);
		fixAssignment();
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
const pSBC = function (p, from, to) {
if(typeof(p)!="number"||p<-1||p>1||typeof(from)!="string"||(from[0]!='r'&&from[0]!='#')||(to&&typeof(to)!="string"))return null; //ErrorCheck
if(!this.pSBCr)this.pSBCr=(d)=>{
    let l=d.length,RGB={};
    if(l>9){
        d=d.split(",");
        if(d.length<3||d.length>4)return null;//ErrorCheck
        RGB[0]=i(d[0].split("(")[1]),RGB[1]=i(d[1]),RGB[2]=i(d[2]),RGB[3]=d[3]?parseFloat(d[3]):-1;
    }else{
        if(l==8||l==6||l<4)return null; //ErrorCheck
        if(l<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(l>4?d[4]+""+d[4]:""); //3 or 4 digit
        d=i(d.slice(1),16),RGB[0]=d>>16&255,RGB[1]=d>>8&255,RGB[2]=d&255,RGB[3]=-1;
        if(l==9||l==5)RGB[3]=r((RGB[2]/255)*10000)/10000,RGB[2]=RGB[1],RGB[1]=RGB[0],RGB[0]=d>>24&255;
    }
    return RGB;}
var i=parseInt,
    r=Math.round,
    h=from.length>9;
    h=typeof(to)=="string"?to.length>9?true:to=="c"?!h:false:h;
    var b = p<0;
    p=b?p*-1:p;
    to=to&&to!="c"?to:b?"#000000":"#FFFFFF";
    var f = this.pSBCr(from);
    var t = this.pSBCr(to);
if(!f||!t)return null; //ErrorCheck
if(h)return "rgb"+(f[3]>-1||t[3]>-1?"a(":"(")+r((t[0]-f[0])*p+f[0])+","+r((t[1]-f[1])*p+f[1])+","+r((t[2]-f[2])*p+f[2])+(f[3]<0&&t[3]<0?")":","+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*10000)/10000:t[3]<0?f[3]:t[3])+")");
else return "#"+(0x100000000+r((t[0]-f[0])*p+f[0])*0x1000000+r((t[1]-f[1])*p+f[1])*0x10000+r((t[2]-f[2])*p+f[2])*0x100+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*255):t[3]>-1?r(t[3]*255):f[3]>-1?r(f[3]*255):255)).toString(16).slice(1,f[3]>-1||t[3]>-1?undefined:-2);
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
		for (i = 0; i < document.getElementsByClassName("nk37z").length; i++) {
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
document.getElementsByClassName("gb_mf")[0].style.opacity = "100";
document.getElementsByClassName("gb_mf")[0].style.fill = "rgb(255,255,255)";
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

//remvoe the stupid white bar
document.getElementsByClassName("joJglb")[0].style.borderBottom = ".1rem solid " + classColor;

//change the background color of the class
console.log(pSBC(0.87,classColor));
document.getElementsByTagName("BODY")[0].style.backgroundColor = pSBC(0.87,classColor);

//make the work to do box transparant but with an opacity
document.getElementsByClassName("d4Fe0d")[0].style.backgroundColor = "";

//make sure this is last:
//If it is not last, it will throw error and void the rest of the script. MAKE IT LAST!
var classSubtitle = document.getElementsByClassName("HDsjVd")[0].innerHTML;
document.getElementsByClassName("HDsjVd")[0].style.color = "white";
document.getElementsByClassName("HDsjVd")[0].addEventListener("mouseover", function(){document.getElementsByClassName("HDsjVd")[0].style.textDecoration = "underline"; console.log("on");});
document.getElementsByClassName("HDsjVd")[0].addEventListener("mouseout", function(){document.getElementsByClassName("HDsjVd")[0].style.textDecoration = "none"; console.log("off");});
	}
function fixAssignment()
    {
        console.log("here17");
        //get the darker classColor
var elem,style,classColor;
elem = document.querySelector(".p0oLxb:not(.RDPZE).Rp4yn");
style = getComputedStyle(elem);
classColor = style.color;


//chnage the navbar color
document.getElementsByTagName("NAV")[0].style.backgroundColor = classColor;
document.getElementsByClassName("XIpEib")[0].style.backgroundColor = classColor;

//change the color of the class name
document.getElementById("UGb2Qe").style.color = "white"

//change the color of the three dots
document.getElementsByClassName("xSP5ic")[0].style.fill = "white";

//add an underline on hover for the class
var className = document.getElementById("UGb2Qe").innerHTML;
document.getElementById("UGb2Qe").addEventListener("mouseover", function(){document.getElementById("UGb2Qe").style.textDecoration = "underline"; console.log("on");});
document.getElementById("UGb2Qe").addEventListener("mouseout", function(){document.getElementById("UGb2Qe").style.textDecoration = "none"; console.log("off");});

//flip the color sceme of the help icon
document.getElementsByClassName("Lw7GHd")[document.getElementsByClassName("Lw7GHd").length - 1].innerHTML = "<img src='https://raw.githubusercontent.com/HugoHead/old-classroom/master/old%20Clssroom/helpicon.png'>";

//change the icon colors
document.getElementsByClassName("gb_kf")[0].style.opacity = "100";
document.getElementsByClassName("gb_kf")[0].style.fill = "rgb(255, 255,255)";
document.getElementsByClassName("gb_lf")[0].style.opacity = "100";
document.getElementsByClassName("gb_lf")[0].style.fill = "rgb(255,255,255)";

//chnage the color of the middle bar.
document.getElementsByClassName("nl5VRd")[0].style.backgroundColor = pSBC(0.17, classColor);

//make all the text on the middle bar white
document.getElementsByClassName("ktcYN")[0].childNodes[0].style.color = "white";
document.getElementsByClassName("fOvfyc")[0].style.color = "white";
document.getElementsByClassName("z4oNBf")[0].style.color = "white";
document.getElementsByClassName("Socxke")[1].style.color = "white";
document.getElementsByClassName("Socxke")[1].style.color = "white";
document.getElementsByClassName("VMvujb")[0].style.color = "white";

//remove the stupid white bar
document.getElementsByClassName("joJglb")[0].style.borderBottom = ".1rem solid " + classColor;

//add a box shadow to the card
document.getElementsByClassName("yckQJf")[0].style.boxShadow = "0 1px 2px 0 rgba(60,64,67,0.302),0 2px 6px 2px rgba(60,64,67,0.149)";

//fix the border radius of the submit button
document.getElementsByClassName("U26fgb")[3].style.backgroudColor = "0";

document.getElementsByClassName("u155de")[1].style.backgroundColor = pSBC(0.9, classColor);
document.getElementsByTagName("BODY")[0].style.backgroundColor = pSBC(0.9, classColor);

document.getElementsByClassName("gMIble")[0].remove();

//keep at bottom
document.getElementsByClassName("HDsjVd")[0].style.color = "white";
document.getElementsByClassName("HDsjVd")[0].addEventListener("mouseover", function(){document.getElementsByClassName("HDsjVd")[0].style.textDecoration = "underline"; console.log("on");});
document.getElementsByClassName("HDsjVd")[0].addEventListener("mouseout", function(){document.getElementsByClassName("HDsjVd")[0].style.textDecoration = "none"; console.log("off");});

document.getElementsByClassName("uqZtlf")[0].style.backgroundColor = "white";
    }
})();
