//get the darker class color
var elem,style;
elem = document.querySelector('.VnOHwf-Tvm9db');
style = getComputedStyle(elem);
var classColor = style.color;

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

//make the tab colors white
document.getElementsByClassName("u2mfde")[1].style.color = "white";
document.getElementsByClassName("u2mfde")[3].style.color = "white";
document.getElementsByClassName("u2mfde")[5].style.color = "white";
document.getElementsByClassName("u2mfde")[3].style.opacity = "100";
document.getElementsByClassName("u2mfde")[5].style.opacity = "100";

//make sure this is last:
//If it is not last, it will throw error and void the rest of the script. MAKE IT LAST!
var classSubtitle = document.getElementsByClassName("HDsjVd")[0].innerHTML;
document.getElementsByClassName("HDsjVd")[0].style.color = "white";
document.getElementsByClassName("HDsjVd")[0].addEventListener("mouseover", function(){document.getElementsByClassName("HDsjVd")[0].style.textDecoration = "underline"; console.log("on");});
document.getElementsByClassName("HDsjVd")[0].addEventListener("mouseout", function(){document.getElementsByClassName("HDsjVd")[0].style.textDecoration = "none"; console.log("off");});
