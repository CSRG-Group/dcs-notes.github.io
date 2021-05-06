# dcs-notes.github.io

[![Website https://csrg-group.github.io/dcs-notes.github.io/](https://img.shields.io/website-up-down-green-red/https/csrg-group.github.io/dcs-notes.github.io.svg?style=for-the-badge)](https://csrg-group.github.io/dcs-notes.github.io/)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg?style=for-the-badge)](http://commonmark.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](#how-to-make-a-pull-request)
[![licensebuttons by-nc-sa](https://licensebuttons.net/l/by-nc-sa/3.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/%E2%9D%A4_contributors-14-blue.svg?style=for-the-badge&labelColor=539be1)](#contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!--[![GitHub forks](https://img.shields.io/github/forks/CSRG-Group/dcs-notes.github.io.svg?style=for-the-badge&label=Fork)](https://GitHub.com/CSRG-Group/dcs-notes.github.io/network/)
[![GitHub issues](https://img.shields.io/github/issues/CSRG-Group/dcs-notes.github.io.svg?style=for-the-badge)](https://GitHub.com/CSRG-Group/dcs-notes.github.io/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/CSRG-Group/dcs-notes.github.io.svg?style=for-the-badge)](https://GitHub.com/CSRG-Group/dcs-notes.github.io/pull/)-->

### [The live site is accessible here](https://csrg-group.github.io/dcs-notes.github.io/)



## Introduction

First of all, thank you for visiting this site! This website is a collection of notes for the modules in the first year computer science degree at the University of Warwick.

It is entirely student-run, and not affiliated with or endorsed by the University. We have communicated with members of the department who have said that this project is acceptable, but if at any point we are told this goes against DCS anti-plagiarism guidelines, or any other policy, we will immediately take it down. Additionally, we cannot provide guarantees that all the notes are correct as all content is written by students, however, we will try our hardest to maintain quality.



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

### How do I display Math?
Firstly, ensure that the top of the markdown (.md) file has YAML Front Matter containing the key-value pair `math: true`. Otherwise, add it into the front matter.
Then, make sure you wrap the math in `$$`.
```markdown
For math sections... (note: ensure that there's a new line before and after the start and end $$ respectively)

$$
1+1=2
$$

or just
$$1+1=2$$ for in-line math
```

If there is no YAML Front Matter you can add it at the top of the file like this:
```
---
math: true
---

Markdown content...
```

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
    <td align="center"><a href="https://github.com/leoriviera"><img src="https://avatars.githubusercontent.com/u/11467778?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leo Riviera</b></sub></a><br /><a href="#admin-leoriviera" title="Admins of CSRG">🔥</a></td>
    <td align="center"><a href="https://github.com/Joeyh021"><img src="https://avatars.githubusercontent.com/u/37697107?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joe Harrison</b></sub></a><br /><a href="#content-Joeyh021" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/lchipchase"><img src="https://avatars.githubusercontent.com/u/77326474?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leon Chipchase</b></sub></a><br /><a href="#content-lchipchase" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/manasrawat"><img src="https://avatars.githubusercontent.com/u/13320706?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Manas Rawat</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3Amanasrawat" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/ksanganee"><img src="https://avatars.githubusercontent.com/u/20343295?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ksanganee</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3Aksanganee" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/Samueljh1"><img src="https://avatars.githubusercontent.com/u/10816880?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sam H</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3ASamueljh1" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/lennonchoong"><img src="https://avatars.githubusercontent.com/u/62992865?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lennon Choong</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3Alennonchoong" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/MxttyV"><img src="https://avatars.githubusercontent.com/u/75853467?v=4?s=100" width="100px;" alt=""/><br /><sub><b>MxttyV</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3AMxttyV" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/bora-7"><img src="https://avatars.githubusercontent.com/u/76407294?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bora A.</b></sub></a><br /><a href="https://github.com/CSRG-Group/dcs-notes.github.io/issues?q=author%3Abora-7" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This table is generated by the [all-contributors bot](https://allcontributors.org). The emojis mean the following in this project:
- "🐛" means making a pull request to fix mistakes in someone else's notes
- "🖋" means contributing notes to the project (this supercedes 🐛)
- "🎨" means doing design work for the website
- "🔥" means being responsible for internal administrative tasks (note: 🔥 is a custom key named "admin")



## Contact us

Currently, the maintainers/admins for this project are: Akram Ahmad, Edmund Goodman, Justin Tan, Yijun Hu (founding members), and Josh Fitzmaurice and Leo Riviera.

If you have any additional questions, or want to become more involved in contributing to this project, please feel free to DM us on WhatsApp or Discord (search for our names within the main first year CS group chat, or the grey or cult servers).



**Many thanks once again for visiting.**

