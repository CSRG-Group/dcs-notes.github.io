# Thank you for your interest in contributing to this revision guide.



We welcome pull requests from anyone who is happy to share their notes, and would be incredibly grateful for any input of content for the individual pages! We will try to provide any reasonable attribution you would like for content you contribute, and any contributions mean we get a more full coverage of the content finished faster, so everyone on the course can benefit from high quality shared notes.

Currently, most of the notes are in markdown (`.md`) format, but we also support most other file formats, for example static webpages and PDFs. We are also very happy to add photographs of written notes, but a benefit of electronic formats is that they can be quickly searched (the `ctrl+f` key is going to be used pretty heavily in open book exams). If you would prefer to host notes on your own site, we are also very happy to just link to them, but we would prefer to host a mirror of them here, for future-proofing.

### Errata

If you think you have found a mistake in any of the notes, please tell us!

If you can make the change yourself by editing the appropriate file, consider making a pull request to the repository (for pdf files, annotations by tools such as [Xournal](https://github.com/xournalpp/xournalpp) should be used) and submit it through GitHub. This will also list you as a contributor to the project :smile:. 

If there is a bigger issue, or you don't feel comfortable making a pull request, see the "Contact us" section for how to tell us about it (if you know who made the notes, they're probably the best people to ask to get it fixed).

### Guidelines for contributions

To ensure the smooth running of the this project, and avoid any contributions having to be removed, please follow the below guidelines:

- Please thoroughly research a topic/correction before making a pull request on the matter, to ensure accuracy

- If you are directly sourcing content that is not your own, **please add the correct citations**. For images or text taken verbatim from a source, please include a link to the site it is taken from, and exercise common sense for other cases

- Please do not re-host any university owned content, including but not limited to past papers and lecture notes

### How do I display Math?
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

### How to make a pull request

1. On the repository's [page on GitHub](https://github.com/csrg-group/dcs-notes.github.io), click the "Fork repository" button
2. Clone your fork of the repository to your computer by running the command `git clone https://github.com/<YOUR_GITHUB_USERNAME>/dcs-notes.github.io`
3. Create a new branch on your local repository by running the command `git checkout -b <NEW_BRANCH_NAME>`. Naming the branch as a very brief description of what the change entails is helpful for us when accepting pull requests.
4. Set a new remote server for the upstream repository by running the command `git remote add upstream https://github.com/csrg-group/dcs-notes.github.io`
5. Make your changes/contributions, then add and commit your changes to the repository (with `git add -A` and `git commit -m "<COMMIT_MESSAGE>"` respectively)
6. Push your changes to the remote server by running the command `git push -u origin <NEW_BRANCH_NAME>`
7. On the repository's [page on GitHub](https://github.com/csrg-group/dcs-notes.github.io), after the changes have been pushed, a green "Compare & pull request" button will appear. Click on it, then click on the green "Create pull request" button which will appear afterwards. After this is done, we will be able to merge it in to the repository, or we might ask you to make some changes before we do so

If you are still confused, try Google-Fu on how to make a pull request, or see the "Contact us" section of the README file or the website's main page to ask us about it.
