 

$(window).on("orientationchange", function (event) { initPage("orient") });
$(document).ready(function (event) { initPage("ready") });

function initPage(how) {
    // alert(how);
    // $(".menu>li>a").on("click", function () {lightButton(this)});
    $(".menu>li>a").mouseenter(function() {enterButton(this,1)});
    $(".menu>li>a").mouseleave(function() {leaveButton(this,1)});
    $(".menu2>li>a").on("click", function () {lightButton(this)});
    $(".menu2>li>a").mouseenter(function() {enterButton(this,2)});
    $(".menu2>li>a").mouseleave(function() {leaveButton(this,2)});
    $(".menu2").mouseover(function () { doShow(this) });
    $(".menu2").mouseout(function () { noShow(this) });
    
    var setWidth = window.innerWidth;
    var setHeight = window.innerHeight;
    var pxWidth = String(setWidth) + "px";
    var pxHeight = String(setHeight) + "px";

    var ourBody = document.getElementById("wrapper");
    ourBody.style.width = pxWidth;
    ourBody.style.height = pxHeight;

    if (how != "resize") {
        var canvas = document.getElementById("adhcSprite");
        var ctx = canvas.getContext("2d");
        var w = canvas.width;
        // alert(w);
        var h = canvas.height;
        // alert(h);
        ctx.clearRect(0, 0, w, h);

        ctx.font = "66px Comic Sans MS";
        ctx.fontWeight = "900";
        ctx.textAlign = "center";
        var gradient = ctx.createLinearGradient(.1 * w, .9 * h, .9 * w, .1 * h);
        gradient.addColorStop(0, "red");
        gradient.addColorStop(0.4, "orange");
        gradient.addColorStop(0.8, "yellow");
        ctx.fillStyle = gradient;
        ctx.rotate(-Math.PI / 8);
        ctx.fillText("AdH.Code", 0.4 * w, 1 * h);
    } 

    return;
    
}
function lightButton(e) {       
    
    e.parentElement.style.backgroundColor = "Yellow";
    e.style.color = "Red";
    e.style.fontSize = "Larger";

    e.parentElement.style.backgroundSize = "cover";
    e.parentElement.style.backgroundRepeat = "no-repeat";
    e.parentElement.style.backgroundPosition = "center";
    e.parentElement.style.backgroundImage = "url('Button.png')";
    //e.parentElement.style.background = "Yellow url('/LightButton.png') no-repeat center cover";
    
    setTimeout(function () { var x = 1; }, 1500);
}
function enterButton(e,level) {
    //alert("enter");
    if (level == 1) 
    {
        //alert(e.parentElement.tagName);
        var chs = e.parentElement.children;
        //alert(chs.length);
        for (var i = 0; i < chs.length; i++)  
        {
            var c = chs[i];
            //alert(c.tagName.substr(0,2));
            if (c.tagName.substr(0,2) == "UL") 
            {
                //alert("set block");
                c.style.display = "block";
            }
        }
    }
    // alert(level); 
    e.parentElement.style.backgroundImage = "";
    e.parentElement.style.boxShadow = "4px 4px 4px 0px #000000 inset";
    e.parentElement.style.backgroundColor = "Lightseagreen";  
    e.style.fontSize = "Larger";
    e.style.color = "White";
}
function leaveButton(e,level) {
    //alert("leave");
    if (level == 1) 
    {
        //alert(e.parentElement.tagName);
        var chs = e.parentElement.children;
        //alert(chs.length);
        for (var i = 0; i < chs.length; i++)  
        {
            var c = chs[i];
            //alert(c.tagName.substr(0,2));
            if (c.tagName.substr(0,2) == "UL") 
            {
                //alert("set none");
                c.style.display = "none";
            }
        }
    }
    // alert(level);
    e.parentElement.style.backgroundImage = "";
    e.parentElement.style.boxShadow = "4px 4px 4px 0px #000000";
    e.parentElement.style.backgroundColor = "Blue";  
    e.style.fontSize = "16px";
    e.style.color = "White"
}
function doShow(e) {
    //alert("disp");
    e.style.display = "block";
}
function noShow(e) {
    //alert("nodisp");
    e.style.display = "none";
}