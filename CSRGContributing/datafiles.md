Each of the courses are defined in files contained within the `_data` folder

A files are named `<modules code>.ymal`


# File structure

| name | type | optional | description |
| code | String | No | module code |
| Exam Structure | Array of exam objects | Yes | the examination structure for the course |
| Notes | Array of notes objects | Yes | the notes for the course |
| CribSheets |  Array of CribSheet objects | Yes | CribSheets for the course |
| Questions | Question Object | Yes | Practice questions |


# Notes Object 
The notes should be put in a folder in the relevant module folder using _ for spaces


| name | type | optional | description |
| name | String | No | Name of the notes should match the folder name|
| description | String | No | Description fo the notes |
| order | String | No | The structured order of the individual files used .html not .md |
| authors | String | No | the Notes authors |
| contributors | String | No | Other contributors |
| link | String | Yes | Link to another location|


# CribSheet Object 
The cribSheets should be put in a folder in the relevant module folder using _ for spaces


| name | type | optional | description |
| name | String | No | Name of the sheets should match the folder name|
| description | String | No | Description of the sheets |
| authors | String | No | the sheet authors |
| contributors | String | No | Other contributors |
| link | String | Yes | Link to another location of not in the named folder|

# Questions Object 

| name | type | optional | description |
| QUIZAvailable | Bool | No | Checks if the quiz is available  |
| altQuestions | array of altQuestions | Yes | Other available questions |

# altQuestions Object 
| name | type | optional | description |
| name | String | No | Name of the notes should match the folder name|
| description | String | No | Description fo the notes |
| authors | String | No | the Notes authors |
| contributors | String | No | Other contributors |
| link | String | Yes | Link to another location|