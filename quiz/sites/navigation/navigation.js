var courseData
//when the document is ready
$( document ).ready(function() {
    //obtain the module code form the url
    let params = (new URL(document.location)).searchParams;
    let id = params.get('course');

    //make an ajax request for the json data file
    $.get("../../questions/"+id+".json", function(data){
        $("#content").prepend(data);
        courseData=data;
        UpdateTitle();
        show_course_structure();
        CountQuestions();
        AvailableQuizOptions();
    });

});

function AvailableQuizOptions(){
    $("#QuizOptions").append("<div> <a href='../list/list.html?course="+courseData.title+"'>List</a> A simple list of all available questions </div>   ");
}


function CountQuestions(){
    console.log("done");
    let recallCount=courseData.recall.length;
    let understandingCount=courseData.understanding.length;
    $("#recallCount").prepend("<code>"+recallCount+"</code>");
    $("#understandingCount").prepend("<code>"+understandingCount+"</code>");
}


// update the page title and description
function UpdateTitle(){
    let code=courseData.title;
    let nam=courseData.name;

    $(".project-name").prepend(code+" ");
    $(".project-tagline").append(" for "+nam);
    $("#home-link").attr('href', $("#home-link").attr('href')+code);
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
    struct='<li>'
    count.val+=1;
    struct+="&#9633 "+topic.name;
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
