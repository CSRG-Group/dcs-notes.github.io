function setDark(){
    sheet=document.getElementById("mainCS");
    current=sheet.getAttribute("href");

    path=current.split("/")
    path[path.length-1] = "styleDark.css";
    console.log("a"+path.join("/"))
    console.log("a"+path)
    sheet.setAttribute("href",path.join("/"));

    var date=new Date;
    date.setFullYear(date.getFullYear()+1);
    document.cookie = 'Dark=true; expires='+date.toUTCString()+';  path = /;'
}
function setLight(){
    sheet=document.getElementById("mainCS");
    current=sheet.getAttribute("href");

    path=current.split("/")
    path[path.length-1]= "style.css"
    console.log(path.join("/"))
    sheet.setAttribute("href",path.join("/"));

    var date=new Date;
    date.setFullYear(date.getFullYear()+1);
    document.cookie = 'Dark=false; expires='+date.toUTCString()+';  path = /;'
}



dark=false;
DarkMode=document.cookie.split('; ').find(row => row.startsWith('Dark='));                           
if (DarkMode){
    dark=JSON.parse( DarkMode.split('=')[1]);
}
if (dark){
    setDark();
    window.addEventListener('load', function () {
        var checkBoxes = document.getElementById("darkToggle");
        checkBoxes.checked=true;
    });
}
window.addEventListener('load', function () {
    var checkBoxes = document.getElementById("darkToggle");
    checkBoxes.addEventListener("click", function () {
        if (checkBoxes.checked){
            setDark();
        }
        if (!checkBoxes.checked){
            setLight();
        }
    });
});