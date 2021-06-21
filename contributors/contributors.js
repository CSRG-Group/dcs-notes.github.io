$( document ).ready(function() {
    //obtain the module code form the url
    let params = (new URL(document.location)).searchParams;
    let id = params.get('name').toLowerCase();
    //make an ajax request for the json data file
    $.get("contributors.json", function(data){
        for (const user of data) {
            if (user.github.toLowerCase()==id){
                displayUser(user);
            }
        }
    });
    $(".project-tagline").remove();
    $(".btn").remove();
    $(".project-name").html(params.get('name'));

});

var SpecialContact=
    {"nick":function(value){return ""},
     "image":function(value){return ""},   
        
     "discord":function(value){
            return "<tr><td>Discord</td><td><a href=https://discordapp.com/users/"+value+"/>"+value+"</a></td></tr>"
        },
     "github":function(value){
            return "<tr><td>GitHub</td><td><a href=https://github.com/"+value+">"+value+"</a></td></tr>"
        }
    }



function displayUser(user){
    html="";
    html+="<div>";
    html+="<h1 style=display:inline;>"+user.nick+"</h1>";
    if (typeof(user.image)!=="undefined"){
        html+="<img style=float:right; src="+user.image+">";
    }

    html+="</div>";
    html+="<table><tr><th>service</th><th>Info</th></tr>";

    for (const key of Object.keys(user)) {
        if (key in SpecialContact){
            html+=SpecialContact[key](user[key]);
        }
    }
    for (const key of Object.keys(user)) {
        
        if (! (key in SpecialContact)){
            html+="<tr><td>"+key+"</td><td>"+user[key]+"</td></tr>"
        }
    }
    html+="</table>";
    $("#content").prepend(html);
}