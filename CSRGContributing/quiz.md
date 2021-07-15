---
layout: notes
title: QUIZ Contributor Tutorial
---
This tutorial assumes basic knowledge of JSON for a JSON tutorial see [here]

The quiz section of this it designed to provide students with a large number of questions to practice with before the exam.

## Creating a course

1. in `quiz/questions` create a new file called `<Module Code>.json`
2. Copy the following into the json file:

        {
            "title":"",
            "name":"",
            "structure": [<topic>],
            "extSites":[<extSite>],
            "recall":[<question>],
            "understanding":[<question>]
        }


3. fill in the title with the module code
4. fill in the name the the module name
5. fill in the other sections with the tutorials below


## topic
This is simply a topic that is a part of the course, sub topics are defined recursively

1. replace `<topic>` with the following


        {
            "Name":"",
            "subTopics":[<topic>]
        }
2. If there are multiple topics add several with a comma between each one 
3. fill in the name with the topic name
4. If subtopics exist repeat steps 1-4 again
5. if no subtopics exist remove the line `"subTopics":[<topic>]`

## extSite

Many external sites have sets of good practice question while the questions can't be shared links to the sites are welcome

1. replace `<extSite>` with the following 

        {
            "name":"",
            "description":"",
            "topics":[""],
            "link":"",
            "answerType":""
        }
2. If there are multiple sites add several with a comma between each one 
3. fill in the name and description
4. Topics should match  th topic name
5. LInk should be a url to the site
6. Fill in answer type according th the following guide:

answerType there are 3 types of recognized answers
* No answers (N)
* correct answer (C)
* Worked Solution (W)

if a site contains a variety of answer types for different questions then include all that apply, If an worked solution relies on a "stroke of insight" or leaves part of it as an "exercise for the reader" then consider it to simply be a correct answer.


## question

A question can be one of two types, recall or understanding

* __recall__ - simple definitions or reverse definitions that can be copied out of a textbook
* __understanding__ - more complex questions

In general it is requested that all questions are provided with full worked solutions where appropriate and any question should be fully tested before submission.

While several questions on the same techniques just with different values are ok, care should be
taken to ensure that they do not represent a disproportionate amount of the set questions.

Check the question bank for identical questions before submission


1. Copy the following into the question array into recall or understanding depending the question type.  
```
{
    "question":"",
    "answer": "",
    "marks":1,         
}
```
2. Fill in the question mathjax is supported between $$ $$ however due to json formatting a double slash `\\` needs to be used instead of one
3. If the question needs a supplementary image
   1. place the image in `quiz/questions/assets`
   2. add a new line `"questionImg":"",` and fill in the name of the image file
3. Fill in the answer mathjax is supported between $$ $$ however due to json formatting a double slash `\\` needs to be used instead of one
4. If the answer needs a supplementary image
   1. place the image in `quiz/questions/assets`
   2. add a new line `answerImg":"",` and fill in the name of the image file 
5. fill in the number of marks, this should be a general reflection on difficulty and is not expected to be exact
6. To credit contributors
   * If an author
        1. copy `"author":[""],` and add the author's names the the array
   * If a contributor 
        1. copy `"author":[""],` and add the contributor's names the the array

