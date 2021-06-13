let coursedata
$( document ).ready(function() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('course');

    $.get("../questions/"+id+".json", function(data){
        $("#content").prepend(data);
        coursedata=data;
        UpdateTitle();
        show_course_structure();
    });

});

function UpdateTitle(){
    let code=coursedata.title;
    let nam=coursedata.name;

    $(".project-name").prepend(code+" ");
    $(".project-tagline").append(" for "+nam);
}

//create a structure forn the ajax result
function show_course_structure(){
    let structure=coursedata.structure;
    let struct=""
    for (i of structure){
        struct += get_structure_div(i);
    }
    $("#course-structure").prepend(struct);
}

function get_structure_div(topic){
    let struct="<div class=course_structure_element>";
    struct+='<input type="checkbox" class="structure-textbox task-list-item-checkbox" checked="checked"></input>&#9'
    struct+=topic.name;
    if (topic.subTopics){
        for (i of topic.subTopics){
            struct+=get_structure_div(i);
        }
    }
    struct+="</div>";
    return struct;
}



$(document).on('change','.structure-textbox',function(){
    if ($(this).prop("checked")){
        checkChildren($(this).parent());
        monitorSiblings($(this).parent());
    }
    else {
        uncheckParent($(this).parent());
        uncheckChildren($(this).parent());
    }
})

function uncheckdiv(elem){
    elem.children().first().prop("checked", false)
}
function checkdiv(elem){
    elem.children().first().prop("checked", true)
}

function uncheckParent(elem){
    if (elem.parent().hasClass("course_structure_element")){
        uncheckdiv(elem.parent());
        uncheckParent(elem.parent());
    }
}
function uncheckChildren(elem){
    elem.children(".course_structure_element").each(function(){
            uncheckdiv($(this));
            uncheckChildren($(this));
        });
}
function checkChildren(elem){
    elem.children(".course_structure_element").each(function(){
            checkdiv($(this));
            checkChildren($(this));
        });
}
function monitorSiblings(elem){
    if ($(elem).parent().hasClass("course_structure_element")){
        let a=true
        elem.siblings(".course_structure_element").each(function(){
            a=a && $(this).children().first().prop("checked");
        });
        if (a){
                checkdiv($(elem).parent());
                monitorSiblings($(elem).parent());
            
        }
    }
}
