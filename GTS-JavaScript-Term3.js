  function openForm() {
    document.getElementById("myForm").style.display = "block";

}

  function closeForm() {
    document.getElementById("myForm").style.display = "none"
    if (x === "") {
      alert("Name must be filled out");
      return false;

}

  var i = 0; 
  var images = [];
  var time = 1000;

images[0] = 'Images/image1.jpg';
images[1] = 'Images/GTSportVR.jpg';
images[2] = 'Images/image3.jpg';
images[3] = 'Images/image4.jpg';
    
  function changeImg(){
    document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

  window.onload = changeImg;
}
