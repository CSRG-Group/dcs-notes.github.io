---
layout: notes
title: QUIZ Docs
---

Once the course has been defined it needs to be linked to in the `_data/<code>.yml` under questions  `QUIZAvailable :` should be set to `true`.

Each course has an individual JSON file in part to reduce file complexity and size in `quiz/questions/<ModuleCode>.json`

## Course object
```JSON
{
    "title":"",
    "name":"",
    "structure": [<topic>],
    "extSites":[<extSite>],
    "recall":[<question>],
    "understanding":[<question>]
}
```

## Topic object 
```JSON
{
    "Name":"",
    *"subTopics":[<Topic>]
}
```

## external site object 

```JSON
{
    "name":"",
    "description":"",
    "topics":[""],
    "link":"",
    "answerType":""
}
```
answerType there are 3 types of recognized answers
* No answers (N)
* correct answer (C)
* Worked Solution (W)

if a site contains a variety of answer types for different questions then include all that apply, If an worked solution relies on a "stroke of insight" or leaves part of it as an "exercise for the reader" then consider it to simply be a correct answer.

## Questions object
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

    "marks":1,                    #general reflection on difficulty
    *"contributors":[""],      
    *"source":{"name":"","link":""}
}
```