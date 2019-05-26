function openForm() {
  document.getElementById("myForm").style.display = "block";

}

//https://codepen.io/lanesalaman/pen/fgdpI//
//https://www.dummies.com/programming/java/adding-comments-to-java-code///

  window.onclick = function(e)
  {   var id =  e.target.id;
   if (id === 'sent')
   { var txt = document.getElementById('example').value
     $( "#para" ).empty().append( txt );
   }
  }
