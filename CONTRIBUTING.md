# Thank you for your interest in contributing to this revision guide.

We welcome pull requests from anyone who is happy to share their notes, and would be incredibly grateful for any input of content for the individual pages! We will try to provide any reasonable attribution you would like for content you contribute, and any contributions mean we get a more full coverage of the content finished faster, so everyone on the course can benefit from high quality shared notes.

Currently, most of the notes are in markdown (`.md`) format, but we also support most other file formats, for example static webpages and PDFs. We are also very happy to add photographs of written notes, but a benefit of electronic formats is that they can be quickly searched (the `ctrl+f` key is going to be used pretty heavily in open book exams). If you would prefer to host notes on your own site, we are also very happy to just link to them, but we would prefer to host a mirror of them here, for future-proofing.

## Errata

If you think you have found a mistake in any of the notes, please tell us!

If you can make the change yourself by editing the appropriate file, consider making a pull request to the repository (for pdf files, annotations by tools such as [Xournal](https://github.com/xournalpp/xournalpp) should be used) and submit it through GitHub. This will also list you as a contributor to the project :smile:. 

If there is a bigger issue, or you don't feel comfortable making a pull request, see the "Contact us" section for how to tell us about it (if you know who made the notes, they're probably the best people to ask to get it fixed).

## Guidelines for contributions

To ensure the smooth running of the this project, and avoid any contributions having to be removed, please follow the below guidelines:

- Please thoroughly research a topic/correction before making a pull request on the matter, to ensure accuracy

- If you are directly sourcing content that is not your own, **please add the correct citations**. For images or text taken verbatim from a source, please include a link to the site it is taken from, and exercise common sense for other cases

- Please do not re-host any university owned content, including but not limited to past papers and lecture notes

## How to make a pull request

1. On the repository's [page on GitHub](https://github.com/csrg-group/dcs-notes.github.io), click the "Fork repository" button
2. Clone your fork of the repository to your computer by running the command `git clone https://github.com/<YOUR_GITHUB_USERNAME>/dcs-notes.github.io`
3. Create a new branch on your local repository by running the command `git checkout -b <NEW_BRANCH_NAME>`. Naming the branch as a very brief description of what the change entails is helpful for us when accepting pull requests.
4. Set a new remote server for the upstream repository by running the command `git remote add upstream https://github.com/csrg-group/dcs-notes.github.io`
5. Make your changes/contributions, then add and commit your changes to the repository (with `git add -A` and `git commit -m "<COMMIT_MESSAGE>"` respectively)
6. Push your changes to the remote server by running the command `git push -u origin <NEW_BRANCH_NAME>`
7. On the repository's [page on GitHub](https://github.com/csrg-group/dcs-notes.github.io), after the changes have been pushed, a green "Compare & pull request" button will appear. Click on it, then click on the green "Create pull request" button which will appear afterwards. After this is done, we will be able to merge it in to the repository, or we might ask you to make some changes before we do so

Further resources for making a pull request can be found [here](http://makeapullrequest.com).

If you are still confused, try Google-Fu on how to make a pull request, or see the "Contact us" section to ask us about it.


## Formatting
Most modules are split into separate topics, and we have also included a one page (ctrl-f) version for modules that are arranged this way. To ensure that the table of contents in the one page versions are displayed correctly there are a few things we would like contributors to note:

```markdown
Firstly don't skip heading levels - Don't do this
## Heading 1
#### Heading 2

Make sure sections follow an appropriate hierarchy - skipping from h3 to h1 is alright, h1 to h3 is not.
# Heading 1
## Heading 2
### Heading 3
# Heading 1.1
```

Lastly, the title of the topic should be set in the front-matter of each markdown file, `part:` should be set `true`, and please begin your first section with heading level 2 (## or h2).

```markdown
---
title: Generics 
part: true
---

## Starting
```

We will appreciate if contributors abide by these formatting guidelines, as it ensures that the layout of the website is perfect. That said, nothing will break if you don't do so, just certain things (table of contents) won't be as user friendly as it should be.

## How do I order/re-order the pages for each topic?
If you're contributing to notes that are split into parts and want to change the order or insert something in between topics, and have the navbar navigate to it you can reorder the files in the _config.yml file.

```yaml
collections:
  CS118:
    label: CS118
    relative_directory: ./_CS118
    output: true
    # Just reorder the files here in anyway or insert your 
    # new file in between or after. Remember, you'll need to define 
    # part: true in the front-matter of your .md file for this to work
    order:
      - part1.md  
      - part2.md  
      - part3.md  
      - part4.md
      - part5.md
      - part6.md
      - part7.md
```

## How do I display Math?
Firstly, ensure that the top of the markdown (.md) file has YAML Front Matter containing the key-value pair `math: true`. If it's not there, add it into the front matter.

For math sections (ensure that there's a new line before and after the start and end `$$` respectively):
```
$$
1+1=2
$$
```

or `$$1+1=2$$` for in-line math

If there is no YAML Front Matter you can add it at the top of the file like this:
```
---
math: true
---
```
