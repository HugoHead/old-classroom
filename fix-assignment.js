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
    var i=parseInt,r=Math.round,h=from.length>9,h=typeof(to)=="string"?to.length>9?true:to=="c"?!h:false:h,b=p<0,p=b?p*-1:p,to=to&&to!="c"?to:b?"#000000":"#FFFFFF",f=this.pSBCr(from),t=this.pSBCr(to);
    if(!f||!t)return null; //ErrorCheck
    if(h)return "rgb"+(f[3]>-1||t[3]>-1?"a(":"(")+r((t[0]-f[0])*p+f[0])+","+r((t[1]-f[1])*p+f[1])+","+r((t[2]-f[2])*p+f[2])+(f[3]<0&&t[3]<0?")":","+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*10000)/10000:t[3]<0?f[3]:t[3])+")");
    else return "#"+(0x100000000+r((t[0]-f[0])*p+f[0])*0x1000000+r((t[1]-f[1])*p+f[1])*0x10000+r((t[2]-f[2])*p+f[2])*0x100+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*255):t[3]>-1?r(t[3]*255):f[3]>-1?r(f[3]*255):255)).toString(16).slice(1,f[3]>-1||t[3]>-1?undefined:-2);
}

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

