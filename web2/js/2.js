function insertAfter (newElement,targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
function preparePlaceholder () {
    if(!document.createElement)return false;
    if(!document.createTextNode)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("js"))return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","img/3.jpg");
    placeholder.setAttribute("alt","大局已定");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("高举荣冠大旗");
    description.appendChild(desctext);
    var gallery = document.getElementById("js");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}
function prepareGallery(){
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("js"))return false;
    var gallery=document.getElementById("js");
    var links=gallery.getElementsByTagName("a");
    for(var i=0; i<links.length;i++){
        links[i].onclick=function(){
            return ShowPic(this);
        }
        links[i].onkeypress = links[i].onclick;
    }
}
function ShowPic(whichpic){
  if(!document.getElementById("placeholder"))return false;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  if(!document.getElementById("description"))return false;
  if(whichpic.getAttribute("title")){
    var text = whichpic.getAttribute("title");
  }else{
    var text = "";
  }
  var description = document.getElementById("description");
  if(description.firstChild.nodeType == 3){
    description.firstChild.nodeValue = text;
  }
  return false;
 }
 addLoadEvent(preparePlaceholder);
 addLoadEvent(prepareGallery);