---
layout: notes
title: "Creating Questions"
--- 

Active learning (topic questions, past papers, rewriting and transforming content, group work, teaching) is a far better way of learning and retaining information than passive learning (watching lectures, reading notes). In many of the courses there has been a lack of active learning resources such as questions or in-depth group work so we are asking students to create and submit their own questions for others to complete and try.

The primary method for questions is our quiz section of the site, a dedicated section for the submission of student created questions as this allows for many display and question formats. However there are limitations as to what can be placed on there so this section is available for other formats. 

Questions have less support for multi document formats than notes however this is something that may change if the demand is there. The format for creating these questions is very similar to that of notes.

currently supported formats are:
* External Site
* Single webpage
* Single file pdf
Though others are possible and can be implements they are not discussed in this tutorial

## External Site
We would appreciate the hosting of content on warwick.guide for community error checking and correcting as-well as a redundant location for hosing however we appreciate not everyone can put in the time or has permission to re-host content. If using the option of re-hosting the link to the external site should be placed on the index page

linking to an external site:
1. Go to `_data/<code>.yml` add the text below to `Questions:` add a new `Questions:` array if it does not exist 
```
        Notes: 
          - name: <name>
            link: <Link to site>
            description: <Desc>
            authors:
              - <your name>
```
2. Replace the relevant details 
    * authors is optional you may remove the whole segment if you do not want or can't take credit
    * for information of setting up the authors page see [here](contributors.html)
3. The pages should now function correctly test on a local site and submit a pull request

## Single webpage
A questionSheet may be placed on a single markdown file or html site.

1. In `/modules/<code>/` create a folder with a descriptive name for your notes (use _ instead of spaces)
2. In the new folder create a new file called `index.html` (for other options see below)
3. add this to the top:
```
---
layout: noteshome
title: <code>
description: <name>
---
```
4. Alter accordingly replacing `<code>` (all caps e.g. `CS133`) and `<name>`
8. Create an `assets` folder 
5. Fill in the page or copy your note over
6. Go to `_data/<code>.yml` add the text below to `altQuestions:` add a new `Questions:` and `altQuestions:` array if it does not exist
```
        - name: <name>
            description: <Desc>
            authors:
            - <your name>
```
7. Replace the relevant details 
    * name should match your folder name exactly 
    * authors is optional you may remove the whole segment if you do not want credit
    * for information of setting up the authors page see [here](contributors.html)
### not using index
If you are not using a file name `index.html` or `index.md` then please follow the same instructions for singlSingle file pdfe page pdf and replace the link accordingly.


## Single file pdf
> we are reviewing our stance on allowing pdf notes
> while they can be useful they are harder to index or search 
> and typed noted would be preferred.

1. In `/modules/<code>/` create a folder with a descriptive name for your notes (use _ instead of spaces)
2. Add your file to the folder
6. Go to `_data/<code>.yml` add the text below to `altQuestions:` add a new `Questions:` and `altQuestions:` array if it does not exist
```
        - name: <name>
            link: <Link to content>
            description: <Desc>
            authors:
            - <your name>
```
4. Replace the relevant details
  * `<Link to content>` should be a relative link form the module page e.g `<Your foldername>/myNotes.pdf`
  * authors is optional you may remove the whole segment if you do not want credit
  * for information of setting up the authors page see [here](contributors.html)