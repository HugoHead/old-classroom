// ==UserScript==
// @name         fix classroom
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://classroom.google.com/u/0/h
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByTagName("NAV")[0].style.backgroundColor = "#4b4b4b";
    document.getElementsByClassName("XIpEib QRiHXd")[0].style.backgroundColor = "#4b4b4b";
    document.getElementsByClassName("GmuOkf")[0].style.fill = "white"
    document.getElementsByClassName("xSP5ic")[0].style.fill = "rgb(255,255,255)"
    document.getElementsByClassName("yEedwb")[0].innerHTML = "<span class=\"IqJTee\"><em><strong><b>Google </em></strong></b>Classroom</span>"
    document.getElementsByClassName("IqJTee")[0].style.color = "white";
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "#eeeeee"
    var elems = document.getElementsByClassName("gHz6xd");
    for (var i = 0; i < elems.length; i++) {
        elems[i].style.borderRadius = "0";
    }
    document.getElementsByClassName("gb_kf")[0].style.opacity = "100";
    document.getElementsByClassName("gb_kf")[0].style.fill = "rgb(255,255,255)";
    document.getElementsByClassName("gb_lf")[0].style.opacity = "100";
    document.getElementsByClassName("gb_lf")[0].style.fill = "rgb(255,255,255)";
    //help button accsessor: document.getElementsByClassName("Lw7GHd")[document.getElementsByClassName("Lw7GHd").length - 1]
    document.getElementsByClassName("Lw7GHd")[document.getElementsByClassName("Lw7GHd").length - 1].innerHTML = "<img src='https://raw.githubusercontent.com/HugoHead/old-classroom/master/old%20Clssroom/helpicon.png'>";

})();