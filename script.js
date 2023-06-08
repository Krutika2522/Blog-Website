var button = document.getElementById("submit");
button.addEventListener("click", btn);

function btn() {
    var imglink = document.getElementById("input-link").value;
    var title = document.getElementById("input-title").value;
    var date = document.getElementById("input-date").value;
    var desc = document.getElementById("input-desc").value;

    document.getElementById("img").src = imglink;
    document.getElementById("title").innerHTML = title;
    document.getElementById("date").innerHTML = date;
    document.getElementById("desc").innerHTML = desc;
}
// To Create Read More Button
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }