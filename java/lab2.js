document.addEventListener('DOMContentLoaded', function () {
  var starBtn = document.getElementById('star-btn');
  var contentContainer = document.querySelector('.content-container');

  starBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    contentContainer.scrollIntoView({ behavior: 'smooth' });
  });

  var accTitles = document.querySelectorAll(".accordion-title");
  accTitles.forEach(function(title) {
    title.addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      panel.classList.toggle("collapsed");
    });
  });

  var currentYear = new Date().getFullYear();
  document.getElementById("copyright").innerHTML = "&copy; " + currentYear + " Keto Hero. All rights reserved.";
});
