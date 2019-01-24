//unround the corrners
var elems = document.getElementsByClassName("qhnNic");
for (var i = 0; i < elems.length; i++) {
    elems[i].style.borderRadius = "0";
}

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
