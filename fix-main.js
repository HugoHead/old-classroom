//navbar color
document.getElementsByTagName("NAV")[0].style.backgroundColor = "#4b4b4b";
//google classroom logo background color changer
document.getElementsByClassName("XIpEib QRiHXd")[0].style.backgroundColor = "#4b4b4b";
//icons in class card every other class.
var elems = document.getElementsByClassName("GmuOkf");
for (var i = 0; i < elems.length; i++) {
    var odd = i % 2
    if (odd == 1) {
        elems[i].innerHTML = '<img src="https://raw.githubusercontent.com/HugoHead/old-classroom/master/old%20Clssroom/classworkFolderIcon.png">';   
    }
    else {
        elems[i].innerHTML = '<img src="https://raw.githubusercontent.com/HugoHead/old-classroom/master/old%20Clssroom/folder.png">';        } 
}
//update plus sign(new class) transparency.
document.getElementsByClassName("sEZiv")[0].innerHTML = '<div class="PDXc1b MbhUzd" jsname="ksKsZd"></div><content class="XuQwKc"><span class="GmuOkf" style="top: -12px"><svg focusable="false" xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path></svg></span></content>';
//plus sign color = white
document.getElementsByClassName("GmuOkf")[0].style.fill = "white"
//globa classroom menu | three lines menu color = white
document.getElementsByClassName("xSP5ic")[0].style.fill = "rgb(255,255,255)"
//change classroom logo to text
document.getElementsByClassName("yEedwb")[0].innerHTML = "<span class=\"IqJTee\"><em><strong><b>Google </em></strong></b>Classroom</span>"
// make classroom logo text color white
document.getElementsByClassName("IqJTee")[0].style.color = "white";
//background color
document.getElementsByTagName("BODY")[0].style.backgroundColor = "#eeeeee"
//make class boxes squares
elems = document.getElementsByClassName("gHz6xd");
for (var i = 0; i < elems.length; i++) {
    elems[i].style.borderRadius = "0";
}
//top right google apps icon 100 opacity
document.getElementsByClassName("gb_kf")[0].style.opacity = "100";
//top right google apps icon white color
document.getElementsByClassName("gb_kf")[0].style.fill = "rgb(255,255,255)";
//notification bell opacity
document.getElementsByClassName("gb_lf")[0].style.opacity = "100";
//change notification bell color
document.getElementsByClassName("gb_lf")[0].style.fill = "rgb(255,255,255)";
//help button accsessor: document.getElementsByClassName("Lw7GHd")[document.getElementsByClassName("Lw7GHd").length - 1]
document.getElementsByClassName("Lw7GHd")[document.getElementsByClassName("Lw7GHd").length - 1].innerHTML = "<img src='https://raw.githubusercontent.com/HugoHead/old-classroom/master/old%20Clssroom/helpicon.png'>";
