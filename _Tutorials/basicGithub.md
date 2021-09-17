---
layout: notes
title: "Using git and Github"
---

## What is Git?

Warwick.guide uses git as its version control system. At the time of writing this article there have been over 125 contributions by 38 people to the project.
software is needed to manage all of the versions and to control how all of the contributions fit together, this is the job of git. The most widely used versions control system in software development for personal and industry use. Git is briefly taught in CS133 however further knowledge is required for large scale projects. There are many tutorials available online and this page contains a simple one for contributing to the guide but is not a complete one if you get stuck try finding the answer on google or contact one of the maintainers shown on the front page.

[Github](https://github.com/) is a platform built to support git projects and allow for easy online hosing and distribution of repositories allowing everyone to see all contributions and work being done with the site. An extension github-pages is the service used to run the website directly form the repository.

## Installing git

git is installed on university computers and is accessible form the command line for installation of personal computers see [Installing Git
](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

I also recommend getting a git extension to your text editor or IDE, for example with VS code:

- Git History
- GitLens
  These provide additional information on documents and provide a GUI version of many of the common git commands

## Basic Terminology

These are not exact definitions nor a compte list but should give you a bit of understanding throughout this guide

- Repository - This is a project manages by git and contains the current files and the entire edit history
- Commit - Any new or changed files are confirmed nad applied to the project
- Branch - A repository can be branched and different changed can be made and tested without altering the previous branch
- Merge - Two branches can be merged together the contents of two branches are pulled together into a single branch
- Fork - Similar to a branch but independent of the original repository, used by contributors to hold their own repository's and make edits before merging with the original repository
- Pull request (PR) - the process by which a contribution is added to to the main repository, once a change is made on a fork the user will submit a pull request to the maintainers who will review the changes and if acceptable with then "pull" the code form the fork into the main repository
- Origin - a git repository on your local machine may have an origin hosted on github this is the repository that you can push or pull commits to to keep your local repository and the origin updated.
- Upstream - In cases where a repository is forked the fork will become the repository and then

## Basic contributions

To contribute ot the site the first step is to make a GiThub account, then follow these steps:

1. On the repository's page on GitHub [here](https://github.com/CSRG-Group/dcs-notes.github.io), click the "Fork repository" button
2. Clone your fork of the repository to your computer by running the command `git clone https://github.com/<YOUR_GITHUB_USERNAME>/dcs-notes.github.io`
3. Create a new branch on your local repository by running the command `git checkout -b <NEW_BRANCH_NAME>`. Naming the branch as a very brief description of what the change entails is helpful for us when accepting pull requests.
4. Set a new remote server for the upstream repository by running the command `git remote add upstream https://github.com/csrg-group/dcs-notes.github.io`
5. Make your changes/contributions, then add and commit your changes to the repository (with `git add -A` and `git commit -m "<COMMIT_MESSAGE>"` respectively)
6. Push your changes to the remote server by running the command `git push -u origin <NEW_BRANCH_NAME>`
7. On the repository's page on GitHub, after the changes have been pushed, a green "Compare & pull request" button will appear. Click on it, then click on the green "Create pull request" button which will appear afterwards. After this is done, we will be able to merge it in to the repository, or we might ask you to make some changes before we do so

Further resources for making a pull request can be found [here](http://makeapullrequest.com/).

If you are still confused, try Google-Fu on how to make a pull request, or see the "Contact us" section to ask us about it.

## Common issues

One common issue that occurs is that the upstream repository has had commits before you have submitted yours
This can can seen by the github message **the repository is X commits ahead and Y commits behind master**
and an error message telling you that github cannot automatically merge the tutorial [here](https://egghead.io/lessons/javascript-how-to-rebase-a-git-pull-request-branch) has a good explanation for how to fix this
take it slowly and you should be ok.
