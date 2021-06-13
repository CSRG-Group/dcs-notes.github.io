var courseData
//when the document is ready
$( document ).ready(function() {
    //obtain the module code form the url
    let params = (new URL(document.location)).searchParams;
    let id = params.get('course');

    //make an ajax request for the json data file
    $.get("../questions/"+id+".json", function(data){
        $("#content").prepend(data);
        courseData=data;
        UpdateTitle();
        show_course_structure();
    });

});

// update the page title and description
function UpdateTitle(){
    let code=courseData.title;
    let nam=courseData.name;

    $(".project-name").prepend(code+" ");
    $(".project-tagline").append(" for "+nam);
}

//create a structure from the ajax result
function show_course_structure(){
    let structure=courseData.structure;
    let struct=""
    let count={val:0};
    for (i of structure){
        struct += get_structure_div(i,count);
    }
    $("#course-structure").prepend(struct);
}
//gets structure provided by the topic
function get_structure_div(topic,count){
    struct='<li><input type="checkbox" id="listitem_'+count.val+'" class="structure-textbox task-list-item-checkbox" checked="checked"></input>&#9<label  for=listitem_'+count.val+'>';
    count.val+=1;
    struct+=topic.name+"</label>";
    if (topic.subTopics){
        struct+='<ul class="course_structure_list">';
        for (i of topic.subTopics){
            struct+=get_structure_div(i,count);
        }
        struct+="</ul>";
    }
    struct+="</li>";
    return struct;
}


//when a check box is altered check parent and children to ensure consistency
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
//uncheck the box when provided the list item
function uncheckListItem(elem){
    elem.children().first().prop("checked", false)
}
function checkLListItem(elem){
    elem.children().first().prop("checked", true)
}
//when an element is unchecked so should the parent
function uncheckParent(elem){
    if (elem.parent().hasClass("course_structure_list")){
        uncheckListItem(elem.parent().parent());
        uncheckParent(elem.parent().parent());
    }
}
//when an element is unchecked so should all of the children
function uncheckChildren(elem){
    elem.children("ul").first().children("li").each(function(){
            uncheckListItem($(this));
            uncheckChildren($(this));
        });
}

//when an element is checked all the children should too
function checkChildren(elem){
    elem.children("ul").first().children("li").each(function(){
            checkLListItem($(this));
            checkChildren($(this));
        });
}
//when an element is checked all the parents should be, only if all of its
//siblings are checked as well
function monitorSiblings(elem){
    if ($(elem).parent().hasClass("course_structure_list")){
        let a=true
        elem.siblings("li").each(function(){
            a=a && $(this).children().first().prop("checked");
        });
        if (a){
                checkLListItem($(elem).parent().parent());
                monitorSiblings($(elem).parent().parent());
            
        }
    }
}

//find the questions when button selected
function findQuestions(){
    $("#externalSites").remove();
    $("#questions").remove();
    let topics=[]
    $(".course_structure_list > li").each(function(){
        if ($(this).children().first().prop("checked")){
            topics.push($(this).children("label").html());
        }
        
    });
    questions=[]
    if ($("#Recall").prop("checked")){
        questions=questions.concat(filterMatching(topics,courseData.recall))
    }

    if ($("#Understanding").prop("checked")){
        questions=questions.concat(filterMatching(topics,courseData.understanding))
    }

    display_extsites(filterMatching(topics,courseData.extSites));
    display_questions(questions);
    return false;
}

//find all of the questions in an array that match the selected topics
function filterMatching(topics,questions){
    matching=[]
    for (question of questions){
        valid=true;
        for (topic of question.topics){
            valid = valid && (topics.includes(topic));
        }
        if (valid){
            matching.push(question);
        }
    }
    return matching;
}

function display_extsites(sites){
    if (sites.length>0){
        $(".site-footer").before(
        "<div id='externalSites'><h1>External Sites</h1><table><tr><th>name</th><th>description</th><th>worked solutions</th><th>solutions</th></tr></table>"
        )
        for (site of sites){
            html="<tr>";
            html+="<td><a href="+site.link+">"+site.name+"</a></td>";
            html+="<td>"+site.description+"</td>";
            if (site.answerType.includes("W")){
                html+="<td>Yes</td>";
            }else{
                html+="<td>No</td>";
            }
            if (site.answerType.includes("C") || site.answerType.includes("w")){
                html+="<td>Yes</td>";
            }else{
                html+="<td>No</td>";
            }
        }
        $("table").append(html+"</div>")
    }
}
function display_questions(questions){
    html='<div id="questions"><h1>Questions</h1>'
    if (questions.length>0){    
        count=1;
        for (question of questions){
            html+="<div><h2>Q"+count+"</h2>";
            count+=1;

            //single line questions
            html+="<div>"
            if (typeof(question.question)=="string"){
                html+="<p>"+question.question+"<p>";
            //multi-line questions
            }else{
                html+="<p>";
                for (i of question.question){
                    html+=i+"<br>";
                }
                html+="</p>";
            }
            if (typeof(question.questionImg)!=="undefined"){
                html+='<img src="../questions/assets/'+question.questionImg+'"></img>';
            }
            html+="["+question.marks+"]";
            html+="</div>"
            html+="<a><h3 class=answerHeadline> &gt answer </h3></a>";

            //single line answers
            html+="<div class=questionAnswer>"
            if (typeof(question.answer)=="string"){
                html+="<p>"+question.answer+"<p>";
            //multi-line answers
            }else{
                html+="<p>";
                for (i of question.answer){
                    html+=i+"<br>";
                }
                html+="</p>";
            }
            if (typeof(question.answerImg)!=="undefined"){
                html+='<img src="../questions/assets/'+question.answerImg+'"></img>';
            }
            html+="</div>"

            html+="</div>"
            

        }
        
        
    }else{
        html+="No questions found</div>"
    }
    $(".site-footer").before(html+"</div>");
    MathJax.Hub.Typeset();
}

$(document).on('click','.answerHeadline',function(){
    let question=$(this).parent().siblings(".questionAnswer");
    if (question.css("display")=="none"){
        question.css("display","block");
        $(this).html("v answer");
    }
    else {
        question.css("display","none");
        $(this).html("> answer");
    }
})
/*
name":"Boolean Algebra Quiz",
         "description":"Practice simplifying basic boolean algebra",
         "topics":["Boolean algebra"],
         "link":"http://www.ee.surrey.ac.uk/Projects/Labview/boolalgebra/quiz/index.html",
         "answerType":"C"} */