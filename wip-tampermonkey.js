// ==UserScript==
// @name         fix classroom
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://classroom.google.com/u/*/h*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function(){
    var site = window.location;
    console.log("here");
    if (site == "https://classroom.google.com/u/0/h" || site == "https://classroom.google.com/u/1/h" || site == "https://classroom.google.com/u/2/h" || site == "https://classroom.google.com/u/3/h" || site == "https://classroom.google.com/u/4/h" || site == "https://classroom.google.com/u/5/h" || site == "https://classroom.google.com/u/5/h" || site == "https://classroom.google.com/u/6/h" || site == "https://classroom.google.com/u/7/h" || site == "https://classroom.google.com/u/8/h")
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
        }
    }//end of window.onload.
})();
