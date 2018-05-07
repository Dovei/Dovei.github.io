



window.onload = prepareGallery;
function prepareGallery(){
    var jss=document.getElementById("js");
    var links=jss.getElementsByTagName("a");
    for(var i=0; i<links.length;i++){
        links[i].onclick=function(){
            ShowPic(this);
            return false;
        }
    }
}
function ShowPic(a){
  var newaddress=a.getAttribute("href");

  document.getElementById("pic").src=newaddress;
  var text=a.getAttribute("title");
  document.getElementById("text").innerHTML=text;
  }
/*window.onload = prepareLinks;
function prepareLinks()
{
var links = document.getElementsByTagName("a");
for(var i=0; i<links.length; i++)
{
if(links[i].getAttribute("class")=="popup")
{
links[i].onclick = function()
{
popUp(this.getAttribute("href"));
return false;
}
}
}
}
function popUp(winURL)
{
window.open(winURL,"popup");
}*/


/*function ShowPic(a){
  var newaddress=a.getAttribute("href");
  document.getElementById("pic").src=newaddress;
  var text=a.getAttribute("title");
  document.getElementById("text").innerHTML=text;
}*/







