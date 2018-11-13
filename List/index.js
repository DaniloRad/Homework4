checkCookie();
var itemi=document.getElementsByClassName("list-group-item");

var paren11 =document.getElementsByClassName("nevidljivi")[0];
paren11.innerHTML="";
for(let i=0;i<itemi.length;i++) {

    //napravim ovo gore 
    var li2=document.createElement("li");
    li2.setAttribute("class","list-item");
    li2.innerHTML=itemi[i].firstChild.textContent.trim();
    paren11.append(li2);


}

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
// Form submit event
form.addEventListener("submit", addItem);
filter.addEventListener("keyup",filterItems);
// Delete event
itemList.addEventListener("click", removeItem);
var bodi=document.getElementsByTagName("body")[0];
// Filter event
filter.addEventListener("keyup",filtriranjesearcha);
filter.addEventListener("click",prikazsearch);
bodi.addEventListener("keyup",biraseprvi);

function prikazsearch() {

  var parnt1=document.getElementsByClassName("nevidljivi")[0];
  parnt1.style.display="block";


}

function filtriranjesearcha(e) {

  


  var text = e.target.value.toLowerCase(); var parnt1=document.getElementsByClassName("nevidljivi")[0];
  if (text.length!==0) {

   
      parnt1.style.display="block";
  }
  else {
    parnt1.style.display="none";

  }
  var items = document.getElementsByClassName("list-item");
 for(let i=0;i<items.length;i++){ 

    var itemName= items[i].firstChild.textContent.trim();
    if (itemName.toLowerCase().indexOf(text) != -1) {
      items[i].style.display = "block";
    } else {

      items[i].style.display = "none";
    }
  }
}












prviput=true;
  //biramo prvi sa strelicom
    var brojac=0;

  function biraseprvi(e) {
    itemiliste = document.getElementsByClassName("list-group-item");

    if(((e.keyCode===40) || (e.keyCode===38)) && (prviput)) {

          itemiliste[0].style.backgroundColor="green";
          itemiliste[0].setAttribute("name","selekt");
prviput=false;

    }
   else if(((e.keyCode===40) )) {
    //obrise sve selekt prvo
    for (let i=0;i<itemiliste.length;i++) {

      itemi[i].setAttribute("name","da");
      itemi[i].style.backgroundColor="white";



    }



     brojac++;
    if (brojac===itemiliste.length) {
      brojac=0;
    }
       itemiliste[brojac].style.backgroundColor="green";
       itemiliste[brojac].setAttribute("name","selekt");


}
else if(e.keyCode===38) {
  for (let i=0;i<itemiliste.length;i++) {

    itemiliste[i].setAttribute("name","da");
    itemiliste[i].style.backgroundColor="white";



  }
  brojac--;
  if (brojac===-1) {
    brojac=itemiliste.length-1;
  }
  itemiliste[brojac].style.backgroundColor="green";
  itemiliste[brojac].setAttribute("name","selekt");



}
else if (e.keyCode===13){
  //filter.value=itemi[brojac].firstChild.textContent.trim(); ne moze zbg sledecih fja
  //kliknem enter i vidim koji je selekt
  for(let i=0;i<itemiliste.length;i++) {

      if((itemiliste[i].getAttribute("name")==="selekt")) {

          filter.value=itemiliste[brojac].firstChild.textContent.trim();

      }

  }

}

  }
  
  



// Dodavanje value kliknutog li-a


document.getElementsByClassName("list-group")[0].addEventListener("click",fokusiraj);



//Fokusiraj

  function fokusiraj (e) {
  var itemi=document.getElementsByClassName("list-group-item")

      if(e.target.classList.contains("list-group-item")) {

        console.log(e.target.firstChild.textContent.trim())
          filter.value=e.target.firstChild.textContent.trim();


      }


  }



// Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById("item").value;
  var postoji=false;
    var itemListq=document.getElementsByClassName("list-group-item");
  for(let i=0;i<itemListq.length;i++) {
    if(itemListq[i].firstChild.textContent.trim().toLowerCase()===newItem.trim().toLowerCase()){
        console.log(itemListq[i].firstChild.textContent.trim().toLowerCase())
        postoji=true;
        break;

    }
  }
  console.log(postoji)
  if(newItem.length!==0) {
  if(!postoji) {
  // Create new li element
  var li = document.createElement("li");

  // Add class
  li.className = "list-group-item";

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);





  //da dodamo i u search item
  var paren11 =document.getElementsByClassName("nevidljivi")[0];
  paren11.innerHTML="";
for(let i=0;i<itemi.length;i++) {

      //napravim ovo gore 
      var li2=document.createElement("li");
      li2.setAttribute("class","list-item");
      li2.innerHTML=itemi[i].firstChild.textContent.trim();
      paren11.append(li2);


}
//samo append sad i kraj
var staralista= document.getElementsByClassName("list-group-item");
var novalista="";
for (let i=0;i<staralista.length;i++) {

  novalista+=staralista[i].outerHTML;
}


  





setCookie("lista",novalista,360);

}
else {
  alert("Vec postoji")
}
  }

  else alert("Ne prazne.")

}


// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }

//i kad se remove provjerim
var itemi=document.getElementsByClassName("list-group-item");

var paren11 =document.getElementsByClassName("nevidljivi")[0];
  paren11.innerHTML="";
for(let i=0;i<itemi.length;i++) {

      //napravim ovo gore 
      var li2=document.createElement("li");
      li2.setAttribute("class","list-item");
      li2.innerHTML=itemi[i].firstChild.textContent.trim();
      paren11.append(li2);


}
var staralista= document.getElementsByClassName("list-group-item");
var novalista="";
for (let i=0;i<staralista.length;i++) {

  novalista+=staralista[i].outerHTML;
}


setCookie("lista",novalista,360);
}

// Filter items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();

  // Get list items
  var items = itemList.getElementsByTagName("li");

  // Convert HTMLCollection to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
//da probamo cookie
function setCookie(cname, cvalue, exdays) {
  
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = 'expires='+d.toUTCString();
  
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("lista");        

  if (user != "") {

        var staralista=document.getElementById("items");
        staralista.innerHTML=user;

  } else {
      console.log("uzivaj");
  }
}
