---
layout: modhome
title: Contributor
---

This tutorial covers changing and adding questions to the JSON file for a tutorial on careating a pull request see see our tuorial [Generic tutorial here]()

This tutoiral assumes basic knowlage of JSON for a JOSN tutorial see here [Generic Tutorial here]()

# JSON schema 

json does not have a standard schema so for this tutorial

obects enclosed in <> are defined later on

\* represents an optional value - all other values are required

\# represents comments

## Course Level
Each course has an indivial JSON file in part to reduce file complexity and size

a course has the following structure 

```JSON
{
    "title":"CS132",
    "name":"Computer organisaion and architecture",
    "contributors": [<contributor>] ,
    "structure": [<topic>],
    "extSites":[<extSite>],
    "recall":[<question>],
    "understaiding":[<question>]
}
```

## contributor

This is somone who has contibuted questions to the question bank and in general would be willing 
to guide others through a question on this module. Adding to this is optional.

Will probably expand this but want to limit the scope of the porject for now
```JSON
{
    "Name":"Matt"      #can be real, nickname or dicord name 
}
```

## topic
This is simply a topic that is a part of the course, sub topics are defined recursivley

Elements of subtopics are also elements of the parent topic so apply the lowest possible level to questions

```JSON
{
    "Name":"Boolean Algebra",
    *"subTopics":[<Topic>]
}
```


## extSite

Many external sites have sets of good practice question while the questions can't be shared links to the sites are welcome

direct links to past papers are not allowed as the sharing of papers is agint univerity policy but univertsity sites that host the papers are (probably) ok so 
[https://warwick.ac.uk/services/exampapers?q=CS132&department=&year=](https://warwick.ac.uk/services/exampapers?q=CS132&department=&year=) would be ok

```JSON
{
    "name":"Boolean Algebra Quiz",
    *"description":"Practice simplifying basic boolean algebra",
    *"topics":["Boolean algebra"],
    "link":"http://www.ee.surrey.ac.uk/Projects/Labview/boolalgebra/quiz/index.html",
    "answerType":"C"
}
```
When Topics is not defined the site is assumed to cover the entire specification such as sites hosting past papers

answerType there are 3 types of recogned answers
* No answers (N)
* correct answer (C)
* Worked Solution (W)

if a site contains a varitey of answer types for diferent questions then include all that apply, If an worked solution relies on a "stroke of insight" or leaves part of it as an "exercise for the reader" then consider it to simply be a correct answer.


## question

A question can be one of two types, recall or understandding

* __recall__ - simple definitions or reverse definitions that can be copied out of a textbook
* __understanding__ - more complex questions

In general it is requested that all questions are provided with full worked solutions where appropriate and any question should be fully tested before submition.

While several quesions on the same techniques just with different values are ok, care should be
taken to ensure that they do not represent a disproportiante amount of the set questions.

Check the question bank for identical questions before submission

__Do not__ modify the order of the questions, as the question and other information can be modifed to imporve clarity or fix mistakes the only unique identifer is the location of the question in an array so
programs that track students history / progress expect questions in the same order. Deleted questions should be kept as {} to maintain this order. All new questions should be added to the end.
(This is my first time wring a propper JSON schma so IDK if there is a better solution other than a unique identifer or what is considered to be more accurate)


```JSON
{
    "question":"Simplify A^¬A",
        #or
    "question":[""],
    *"questionImg":"",


    "answer": "{by Inverse} True",
        #or
    "answer":[""],
    *"answerImg":"",

    "marks":1,                  #general reflection on dificulty 1-15
    *"contributors":["Matt"],   #must equal a name defined in course contributors
    *"source":""
}
```

Where a array for question and answer is used a \<br> statment will be added between each line

While not yet suported Mathematical expressions for questions and answers a planned feature
While not yet suported images for both questions and answers are a planned feature

To save on space requirements and to increase clarity for text resizing etc use Mathematical expressions tutorial [here]() rather than images, use images only where Mathematical expressions are too limitng

Images should be placed in _QUIZ/questions/assets and the QuestionsImg should equal the name of the image