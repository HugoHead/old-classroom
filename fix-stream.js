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

//remvoe the stupid white bar
document.getElementsByClassName("joJglb")[0].style.borderBottom = ".1rem solid " + classColor;

//make sure this is last:
//If it is not last, it will throw error and void the rest of the script. MAKE IT LAST!
var classSubtitle = document.getElementsByClassName("HDsjVd")[0].innerHTML;
document.getElementsByClassName("HDsjVd")[0].style.color = "white";
document.getElementsByClassName("HDsjVd")[0].addEventListener("mouseover", function(){document.getElementsByClassName("HDsjVd")[0].style.textDecoration = "underline"; console.log("on");});
document.getElementsByClassName("HDsjVd")[0].addEventListener("mouseout", function(){document.getElementsByClassName("HDsjVd")[0].style.textDecoration = "none"; console.log("off");});
