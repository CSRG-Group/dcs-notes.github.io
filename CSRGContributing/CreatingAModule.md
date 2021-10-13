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
2. In the folder create a file called `index.md`
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
5. In the folder create a file called `modIndex.html`
6. Add the following to the top of the file
```
---
module : <Code>
layout: modindex
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
```
8. replace the content between the angled brackets `<>` with the relevant details



Congratulations you have added a new module to the site if added correctly it should appear on [this](https://warwick.guide/modules) page and take you to 
a placeholder page with the basic information displayed there is no proper content see the next tutorial for how to add this.