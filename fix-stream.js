//change navbar color
document.getElementsByTagName("NAV")[0].style.backgroundColor = "rgb(75,75,75)";
document.getElementsByClassName("XIpEib")[0].style.backgroundColor = "rgb(75,75,75)";

var elems = document.getElementsByClassName("qhnNic");
for (var i = 0; i < elems.length; i++) {
    elems[i].style.borderRadius = "0";
}

var elem,style;
elem = document.querySelector('.VnOHwf-Tvm9db');
style = getComputedStyle(elem);
var classColor = style.color;
