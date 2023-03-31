$( document ).ready(function() {
    //obtain the module code form the url
    let params = (new URL(document.location)).searchParams;
    let id = params.get('name').toLowerCase();
    //make an ajax request for the json data file
    $.get("contributors.json", function(data){
        found=false;
        for (const user of data) {
            if (user.name.toLowerCase()==id){
                found=true;
                displayUser(user);
            }
        
        }
        if (! found){
            $("#content").prepend("Sorry the requested contributor does not have a page if this is you see our guide on how to create a contributor page.");
        }
    });
    $(".project-tagline").remove();
    $(".btn").remove();
    

});

var SpecialContact=
    {"nick":function(value){return ""},
     "name":function(value){return ""},
     "image":function(value){return ""},   
        
     "discord":function(value){
            return "<tr><td>Discord</td><td><a href=https://discordapp.com/users/"+value+"/>"+value+"</a></td></tr>"
        },
     "github":function(value){
            return "<tr><td>GitHub</td><td><a href=https://github.com/"+value+">"+value+"</a></td></tr>"
        }
    }



function displayUser(user){
    if (user.nick){
        $(".project-name").html(user.nick);
    }else{
        $(".project-name").html(user.name);
    }
    
    html="<a onclick=window.history.back();>📚Back</a>";
    html+="<div>";
    if (typeof(user.image)!=="undefined"){
        html+="<img style=float:right; width='200px;' src="+user.image+">";
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
            if (user[key].link){
                html+="<tr><td>"+key+"</td><td><a href='"+user[key].link+"'>"+user[key].value+"</td></tr>"
            }else{
                html+="<tr><td>"+key+"</td><td>"+user[key]+"</td></tr>"
            }
            
        }
    }
    html+="</table>";
    $("#content").prepend(html);
}