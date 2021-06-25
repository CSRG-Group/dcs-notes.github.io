---
layout: notes
title: "Creating a module"
--- 

## Site layout
The side matches the university courses and is arranged into modules with the following structure
```
Site
┗ (has many)  Modules
  ┣  (has 1)   Information table
  ┣  (0 or more) Notes
  ┣  (0 or more) Crib Sheets
  ┗  (0 or more) Questions
```
## Adding a module

1. In `./modules` create a directory in the folder named after the module code in all caps e.g `CS133`
2. In the folder create a file called `index.html`
3. Add the following to the top of the file
```
---
module : <Code>
layout: modhome
title: <module name>
---
```
4. Replace `<code>` with the module code in all caps e.g. `CS133`
5. Replace `<module name>` with the module name e.g. `Professional Skills`
6. In `./_data` create a new file with the name `<code>.yml` e.g `CS133.yml`
7. Copy the following into the file
```
code: <code>
description: 	<module name>
website: <module website>
cats : <number of cats>
optional : <"no" or "yes">
```
8. replace the content between the angled brackets `<>` with the relevant details

## Defining the exams
It can be useful to provide brief notes on the exam structure of the course and provide information on their structure
exams can be added in the following way

1. In the `./data/<module code>.yml` file under the current information add the following:  
```
        examStructure:
          - name : Coursework 1 
            percent : 20 
            date : TBD 
            structure: Coursework tabula submission
```
2. replace the information with the details relevant to the course
3. To add additional examinations under the previous add:
```
        - name : Coursework 2 
          percent : 20
          date : TBD
          structure: Coursework tabula submission
```
4. replace the information with the details relevant to the course
5. Repeat until all of the exams are added


Congratulations you have added a new module to the site if added correctly it should appear on [this](https://warwick.guide/modules) page and take you to 
a placeholder page with the basic information displayed there is no proper content see the next tutorial for how to add this.