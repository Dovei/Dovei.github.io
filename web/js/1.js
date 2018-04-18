function ShowPic(a){
  var newaddress=a.getAttribute("href");
  document.getElementById("pic").src=newaddress;
  var text=a.getAttribute("title");
  document.getElementById("text").innerHTML=text;
}
