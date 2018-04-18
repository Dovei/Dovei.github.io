function ShowPic(a){
  var newaddress=a.getAttribute("href");
  document.getElementById("pic").src=newaddress;
  var text=whichpic.getAttribute("title");
  document.getElementById("text").innerHTML=text;
}
