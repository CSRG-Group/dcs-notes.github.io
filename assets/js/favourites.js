
var shown=false;
window.addEventListener('load', function () {
    readCookies();
    

    var body = document.getElementsByTagName("BODY")[0];
    var except = document.getElementById("favoriteBox");
    body.addEventListener("click", function () {
        close();
    });
    except.addEventListener("click", function (ev) {
        ev.stopPropagation(); //this is important! If removed, you'll get both alerts
    });

    var x = document.getElementById("favoriteImage");
    x.addEventListener("click", function (ev) {
        var favoriteBox= document.getElementById("favoriteBox");
        if (shown){
            favoriteBox.style.display="none";
            shown=false;
        }
        else {
            favoriteBox.style.display="block";
            shown=true;
        }
        ev.stopPropagation();
    });

})

var store=[]


function readCookies(){
    
    favoriteTemp=document.cookie.split('; ').find(row => row.startsWith('favorite='));
                                
    if (!favoriteTemp){
        favorite=[];
    }
    else{
        favorite=JSON.parse( favoriteTemp.split('=')[1]);
    }

    var title = document.getElementsByClassName("project-name");
    var favoriteBox= document.getElementById("favoriteBox");
    var content =favoriteBox.getElementsByClassName("fav-contnet");

    for (var item of favorite){
        store.push(item);
        content[0].innerHTML+=(
            `
            <a href=`+item.url+`>
                <div class="fav-link">
                    `+item.title+`
                </div>
            </a>
            `
        );
        if (item.url == window.location.href){
            document.getElementById("fav-button").innerHTML="Remove";
            document.getElementById("fav-button").onclick=removeFromFavorites;
            document.getElementsByClassName("fav-star")[0].src="/assets/img/star2.svg";
        }

    }

}

function addToFavorites(){
    var title = document.getElementsByClassName("project-name");
    var favoriteBox= document.getElementById("favoriteBox");
    
    var content =favoriteBox.getElementsByClassName("fav-contnet");
    var found=false;
    
    favoriteTemp=document.cookie.split('; ').find(row => row.startsWith('favorite='));
                                
    if (!favoriteTemp){
        favorite=[];
    }
    else{
        favorite=JSON.parse( favoriteTemp.split('=')[1]);
    }

    for (var item of favorite){
        if (item.url == window.location.href){
            found=true;
        }
    }
    if (!found){

        content[0].innerHTML+=(
            `
            <a href=`+window.location.href+`>
                <div class="fav-link">
                    `+title[0].innerHTML+`
                </div>
            </a>
            `
        );
        store.push({url: window.location.href , title: title[0].innerHTML} );
        var data = JSON.stringify(store);

        var date=new Date;
        date.setFullYear(date.getFullYear()+1);
        document.cookie = "favorite=" + data + '; expires='+date.toUTCString()+';  path = /;';

        var favoriteBox = document.getElementById("fav-button").innerHTML="Remove";
        document.getElementById("fav-button").onclick=removeFromFavorites;
        document.getElementsByClassName("fav-star")[0].src="/assets/img/star2.svg";
    }

}
function removeFromFavorites(){
    var title = document.getElementsByClassName("project-name");
    var favoriteBox= document.getElementById("favoriteBox");
    
    var content =favoriteBox.getElementsByClassName("fav-contnet")[0].childNodes;
    var found=false;
    
    store=JSON.parse( document.cookie   .split('; ')
                                .find(row => row.startsWith('favorite='))
                                .split('=')[1]);
    store=store.filter(fav => fav.url!=window.location.href);
    for (var item of content){
        if (item.href == window.location.href){
            item.remove();
        }
    }
        var favoriteBox = document.getElementById("fav-button").innerHTML="Add";
        document.getElementById("fav-button").onclick=addToFavorites;
        document.getElementsByClassName("fav-star")[0].src="/assets/img/star1.svg";
        var data = JSON.stringify(store);

        var date=new Date;
        date.setFullYear(date.getFullYear()+1);
        document.cookie = "favorite=" + data + '; expires='+date.toUTCString()+';  path = /;';

}


function close(){
    if (shown){
        var favoriteBox= document.getElementById("favoriteBox");
        if (shown){
            favoriteBox.style.display="none";
            shown=false;
        }
    }
}

