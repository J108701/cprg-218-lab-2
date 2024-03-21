document.addEventListener('DOMContentLoaded', function () {
    var starBtn = document.getElementById('star-btn');
    var contentContainer = document.querySelector('.content-container');
  
    starBtn.addEventListener('click', function (event) {
      event.stopPropagation();
      contentContainer.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(event) {
      event.stopPropagation(); 
  
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  
var currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = "&copy; " + currentYear + " Cheese Delights. All rights reserved.";
