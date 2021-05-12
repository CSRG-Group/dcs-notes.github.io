var col = document.getElementsByClassName("collapsible")
var i;

for (i = 0; i < col.length; i++) {
    col[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display == "grid") {
            content.style.display = "none";
        } else {
            content.style.display = "grid";
        }
    });
}