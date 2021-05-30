# dcs-notes.github.io

[![Website https://csrg-group.github.io/dcs-notes.github.io/](https://img.shields.io/website-up-down-green-red/https/csrg-group.github.io/dcs-notes.github.io.svg?style=for-the-badge)](https://csrg-group.github.io/dcs-notes.github.io/)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg?style=for-the-badge)](http://commonmark.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](#how-to-make-a-pull-request)
[![licensebuttons by-nc-sa](https://licensebuttons.net/l/by-nc-sa/3.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/%E2%9D%A4_contributors-23-blue.svg?style=for-the-badge&labelColor=539be1)](#contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!--[![GitHub forks](https://img.shields.io/github/forks/CSRG-Group/dcs-notes.github.io.svg?style=for-the-badge&label=Fork)](https://GitHub.com/CSRG-Group/dcs-notes.github.io/network/)
[![GitHub issues](https://img.shields.io/github/issues/CSRG-Group/dcs-notes.github.io.svg?style=for-the-badge)](https://GitHub.com/CSRG-Group/dcs-notes.github.io/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/CSRG-Group/dcs-notes.github.io.svg?style=for-the-badge)](https://GitHub.com/CSRG-Group/dcs-notes.github.io/pull/)-->

### [The live site is accessible here](https://warwick.guide/)



## Introduction

First of all, thank you for visiting this site! This website is a collection of notes for the modules in the first year computer science degree at the University of Warwick.

It is entirely student-run, and not affiliated with or endorsed by the University. We have communicated with members of the department who have said that this project is acceptable, but if at any point we are told this goes against DCS anti-plagiarism guidelines, or any other policy, we will immediately take it down. Additionally, we cannot provide guarantees that all the notes are correct as all content is written by students, however, we will try our hardest to maintain quality.

## Note from the maintainers

If you've been linked to this site, you've probably also seen us asking for anyone who can to pull request. We know that many people are hesitant to put their notes up on this site, whether it be because they think other people seeing their revision material may indirectly disadvantage them, or that they don't think anything they make is good enough to be hosted on a public site - we were too! However, there are a couple of points we'd like to raise to encourage you to contribute and help this site to be the best it can be:

1. Our course isn't marked on a curve, so others using your notes to get better doesn't detriment you
2. Making notes is a great way to revise, as it makes sure you properly understand the content, and if you know you’re putting them somewhere it gives you accountability to actually get them done
3. Any content that is contributed is great to have - it doesn't have to be perfect! The beauty of these types of projects is that they inherently allow collaboration, so we can work together to improve any problems you think might be present
4. Having experience collaborating on an open source project through tools like Git is a really useful skill and is a lot more exciting than what we did with it in CS133, and being able give this as an example of where you've done it in practice could be a cool thing to put on your CV
5. You'll get a neat icon of you in the contributors section of the README and index pages!

## Licensing and downloading

This work is licensed under Creative Commons "Attribution-NonCommercial-ShareAlike 4.0 International", and [the full license document can be found here](./LICENSE.txt). Essentially, attribute any content to the people who made it, don't use it to make money, and, even if you change the content, share it under the same license.

If you want to take a local download of the repository, please consider taking a fork as opposed to a clone, as that means it is easier for you to both stay up to date, and to contribute later if you want to. Furthermore, it helps us to some extent see how many people are interested in what we are doing.

## Contributing

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

### How to make a pull request

1. On the repository's [page on GitHub](https://github.com/csrg-group/dcs-notes.github.io), click the "Fork repository" button
2. Clone your fork of the repository to your computer by running the command `git clone https://github.com/<YOUR_GITHUB_USERNAME>/dcs-notes.github.io`
3. Create a new branch on your local repository by running the command `git checkout -b <NEW_BRANCH_NAME>`. Naming the branch as a very brief description of what the change entails is helpful for us when accepting pull requests.
4. Set a new remote server for the upstream repository by running the command `git remote add upstream https://github.com/csrg-group/dcs-notes.github.io`
5. Make your changes/contributions, then add and commit your changes to the repository (with `git add -A` and `git commit -m "<COMMIT_MESSAGE>"` respectively)
6. Push your changes to the remote server by running the command `git push -u origin <NEW_BRANCH_NAME>`
7. On the repository's [page on GitHub](https://github.com/csrg-group/dcs-notes.github.io), after the changes have been pushed, a green "Compare & pull request" button will appear. Click on it, then click on the green "Create pull request" button which will appear afterwards. After this is done, we will be able to merge it in to the repository, or we might ask you to make some changes before we do so

Further resources for making a pull request can be found [here](http://makeapullrequest.com).

If you are still confused, try Google-Fu on how to make a pull request, or see the "Contact us" section to ask us about it.


### Formatting
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

### How do I order/re-order the pages for each topic?
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


## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/EdmundGoodman"><img src="https://avatars.githubusercontent.com/u/37504168?v=4?s=100" width="100px;" alt=""/><br /><sub><b>EdmundGoodman</b></sub></a><br /><a href="#content-EdmundGoodman" title="Content">🖋</a> <a href="#design-EdmundGoodman" title="Design">🎨</a> <a href="#admin-EdmundGoodman" title="Admins of CSRG">🔥</a></td>
    <td align="center"><a href="https://github.com/Justanhy"><img src="https://avatars.githubusercontent.com/u/46620327?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Justin Tan</b></sub></a><br /><a href="#content-Justanhy" title="Content">🖋</a> <a href="#design-Justanhy" title="Design">🎨</a> <a href="#admin-Justanhy" title="Admins of CSRG">🔥</a></td>
    <td align="center"><a href="https://github.com/arkamnite"><img src="https://avatars.githubusercontent.com/u/47830962?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Akram Ahmad</b></sub></a><br /><a href="#content-arkamnite" title="Content">🖋</a> <a href="#design-arkamnite" title="Design">🎨</a> <a href="#admin-arkamnite" title="Admins of CSRG">🔥</a></td>
    <td align="center"><a href="https://github.com/Adrakaris"><img src="https://avatars.githubusercontent.com/u/17861497?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yijun Hu</b></sub></a><br /><a href="#content-Adrakaris" title="Content">🖋</a> <a href="#design-Adrakaris" title="Design">🎨</a> <a href="#admin-Adrakaris" title="Admins of CSRG">🔥</a></td>
    <td align="center"><a href="https://github.com/jfitz02"><img src="https://avatars.githubusercontent.com/u/73333523?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Josh Fitz</b></sub></a><br /><a href="#content-jfitz02" title="Content">🖋</a> <a href="#admin-jfitz02" title="Admins of CSRG">🔥</a></td>
    <td align="center"><a href="https://github.com/leoriviera"><img src="https://avatars.githubusercontent.com/u/11467778?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leo Riviera</b></sub></a><br /><a href="#design-leoriviera" title="Design">🎨</a> <a href="#admin-leoriviera" title="Admins of CSRG">🔥</a></td>
    <td align="center"><a href="https://github.com/Joeyh021"><img src="https://avatars.githubusercontent.com/u/37697107?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joe Harrison</b></sub></a><br /><a href="#content-Joeyh021" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/lchipchase"><img src="https://avatars.githubusercontent.com/u/77326474?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leon Chipchase</b></sub></a><br /><a href="#content-lchipchase" title="Content">🖋</a> <a href="#admin-lchipchase" title="Admins of CSRG">🔥</a></td>
    <td align="center"><a href="https://github.com/manasrawat"><img src="https://avatars.githubusercontent.com/u/13320706?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Manas Rawat</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3Amanasrawat" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/ksanganee"><img src="https://avatars.githubusercontent.com/u/20343295?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ksanganee</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3Aksanganee" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/Samueljh1"><img src="https://avatars.githubusercontent.com/u/10816880?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sam H</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3ASamueljh1" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/lennonchoong"><img src="https://avatars.githubusercontent.com/u/62992865?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lennon Choong</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3Alennonchoong" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/MxttyV"><img src="https://avatars.githubusercontent.com/u/75853467?v=4?s=100" width="100px;" alt=""/><br /><sub><b>MxttyV</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3AMxttyV" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/bora-7"><img src="https://avatars.githubusercontent.com/u/76407294?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bora A.</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3Abora-7" title="Bug reports">🐛</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/LoudShadow"><img src="https://avatars.githubusercontent.com/u/72259471?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joseph Evans</b></sub></a><br /><a href="#content-LoudShadow" title="Content">🖋</a> <a href="#admin-LoudShadow" title="Admins of CSRG">🔥</a></td>
    <td align="center"><a href="http://davidsangojinmi.ml/"><img src="https://avatars.githubusercontent.com/u/26884019?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Sangojinmi</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3ADavid-Sangojinmi" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/clara-ramsay"><img src="https://avatars.githubusercontent.com/u/77890048?v=4?s=100" width="100px;" alt=""/><br /><sub><b>clara-ramsay</b></sub></a><br /><a href="#content-clara-ramsay" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/mariosbf"><img src="https://avatars.githubusercontent.com/u/40693811?v=4?s=100" width="100px;" alt=""/><br /><sub><b>mariosbf</b></sub></a><br /><a href="#content-mariosbf" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/nianyii-teh"><img src="https://avatars.githubusercontent.com/u/64478251?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nian Yii Teh</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3Anianyii-teh" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://joshdavies.tech"><img src="https://avatars.githubusercontent.com/u/30526591?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Josh Davies</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3Ajoshdavies14" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://cjminecraft.theclever.me"><img src="https://avatars.githubusercontent.com/u/13885569?v=4?s=100" width="100px;" alt=""/><br /><sub><b>CJMinecraft</b></sub></a><br /><a href="#content-CJMinecraft01" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://fbcf.xyz"><img src="https://avatars.githubusercontent.com/u/46428367?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Felix</b></sub></a><br /><a href="#content-efbicief" title="Content">🖋</a></td>
    <td align="center"><a href="https://tomff.com"><img src="https://avatars.githubusercontent.com/u/15079464?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tomás F.</b></sub></a><br /><a href="#design-tomasff" title="Design">🎨</a> <a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3Atomasff" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This table is generated by the [all-contributors bot](https://allcontributors.org). The emojis mean the following in this project:
- "🐛" means making a pull request to fix mistakes in someone else's notes
- "🖋" means contributing notes to the project (this supersedes 🐛)
- "🎨" means doing design work for the website
- "🔥" means being responsible for internal administrative tasks (note: 🔥 is a custom key named "admin")



## Contact us

Currently, the maintainers/admins for this project are: Akram Ahmad, Edmund Goodman, Justin Tan, Yijun Hu (founding members), and Josh Fitzmaurice, Joseph Evans, Leon Chipchase, and Leo Riviera.

If you have any additional questions, or want to become more involved in contributing to this project, please feel free to DM us on WhatsApp or Discord (search for our names within the main first year CS group chat, or the grey or cult servers).



**Many thanks once again for visiting.**
