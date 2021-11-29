---
layout: notes
title: "Creating Crib Sheets"
--- 

Crib sheets are easy reference notes, dramatically cut down from the notes and are designed to give someone with a good understanding fo the content reminders on some of the points.

The tutorial for creating them is very similar to the creation in of notes Notes.

Crib sheets have less support for multi-page websites than notes and to prevent crib sheets becoming too long there are no current plans to support them. It is recommends to fit crib sheets into a single file or webpage.





## Single webpage
The recommend layout for crib sheets

1. In `/modules/<code>/` create a folder with a descriptive name for your sheet (use _ instead of spaces)
2. In the new folder create a new file called `index.html` (for other options see below)
3. add this to the top:
```
---
layout: noteshome
title: <name>
description: <desc>
---
```
1. Alter accordingly replacing `<name>`  and `<desc>`
2. Create an `assets` folder 
3. Fill in the page or copy your crib sheet over
4. Go to `_data/<code>.yml` add the text below to `CribSheets:` add a new `CribSheets:` array if it does not exist
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
If you are not using a file name `index.html` or `index.md` then please follow the same instructions for single page pdf and replace the link accordingly.


## Single file pdf
> we are reviewing our stance on allowing pdf notes
> while they can be useful they are harder to index or search 
> and typed noted would be preferred.

1. In `/modules/<code>/` create a folder with a descriptive name for your notes (use _ instead of spaces)
2. Add your file to the folder
3. Go to `_data/<code>.yml` add the text below to `CribSheets:` add a new `CribSheets:` array if it does not exist
```
        - name: <name>
            link: <Link to content>
            description: <Desc>
            authors:
            - <your name>
```
4. Replace the relevant details
  * `<Link to content>` should be a relative link from the module page e.g `<Your foldername>/myNotes.pdf`
  * authors is optional you may remove the whole segment if you do not want credit
  * for information of setting up the authors page see [here](contributors.html)

## External Site
We would appreciate the hosting of content on warwick.guide for community error checking and correcting as-well as a redundant location for hosing however we appreciate not everyone can put in the time tor wants to re-host their content. If using the option of re-hosting the link to the external site should be placed on the index page

linking to an external site:
1. Go to `_data/<code>.yml` add the text below to `CribSheets:` add a new `CribSheets:` array if it does not exist
```
        - name: <name>
            link: <Link to site>
            description: <Desc>
            authors:
            - <your name>
    
```
2. Replace the relevant details 
    * authors is optional you may remove the whole segment if you do not want credit
    * for information of setting up the authors page see [here](contributors.html)
3. The pages should now function correctly test on a local site and submit a pull request


