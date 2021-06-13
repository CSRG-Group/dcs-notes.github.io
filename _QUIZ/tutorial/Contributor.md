---
layout: notes
title: Contributor Tutorial
---

This tutorial covers changing and adding questions to the JSON file for a tutorial on creating a pull request see see our tutorial [Generic tutorial here]()

This tutorial assumes basic knowledge of JSON for a JSON tutorial see here [Generic Tutorial here]()

# JSON schema 

json does not have a standard schema so for this tutorial

objects enclosed in <> are defined later on

\* represents an optional value - all other values are required

\# represents comments

## Course Level
Each course has an individual JSON file in part to reduce file complexity and size

a course has the following structure 

```JSON
{
    "title":"CS132",
    "name":"Computer organization and architecture",
    "structure": [<topic>],
    "extSites":[<extSite>],
    "recall":[<question>],
    "understanding":[<question>]
}
```


## topic
This is simply a topic that is a part of the course, sub topics are defined recursively

Elements of subtopics are also elements of the parent topic so apply the lowest possible level to questions

```JSON
{
    "Name":"Boolean Algebra",
    *"subTopics":[<Topic>]
}
```


## extSite

Many external sites have sets of good practice question while the questions can't be shared links to the sites are welcome

direct links to past papers are not allowed as the sharing of papers is against university policy but university sites that host the papers are (probably) ok so 
[https://warwick.ac.uk/services/exampapers?q=CS132&department=&year=](https://warwick.ac.uk/services/exampapers?q=CS132&department=&year=) would be ok

```JSON
{
    "name":"Boolean Algebra Quiz",
    "description":"Practice simplifying basic boolean algebra",
    "topics":["Boolean algebra"],
    "link":"http://www.ee.surrey.ac.uk/Projects/Labview/boolalgebra/quiz/index.html",
    "answerType":"C"
}
```

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

__Do not__ modify the order of the questions, as the question and other information can be modified to improve clarity or fix mistakes the only unique identifer is the location of the question in an array so
programs that track students history / progress expect questions in the same order. Deleted questions should be kept as {} to maintain this order. All new questions should be added to the end.
(This is my first time wring a proper JSON program so IDK if there is a better solution other than a unique identifer or what is considered to be more accurate)


```JSON
{
    "question":"Simplify $$A + \\overline{A}$$",
        #or
    "question":[""],   #each element will be displayed as a separate line
    *"questionImg":"",


    "answer": "{by Inverse} True",
        #or
    "answer":[""],
    *"answerImg":"",

    "marks":1,                  #general reflection on difficulty 1-15
    *"source":""
}
```


Mathematical expressions for questions and answers are a supported feature however due to JSON formatting a double backslash needs to be used instead of one

Images are moe supported and should be placed in _QUIZ/questions/assets and the QuestionsImg should equal the name of the image

To save on space requirements and to increase clarity for text resizing etc rather than images, use images only where Mathematical expressions are too limiting

# Features to add
* add source links
* add a contributors page
* think about multi-part questions
* display questions one at a time
