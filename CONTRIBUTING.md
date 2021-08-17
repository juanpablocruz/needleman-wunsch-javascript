# Contributing
First off, thank you for considering contributing to AppVisor. 

## Where do I go from here?

## Fork & create a branch

## Get the test suite running

## Implement your fix or feature
At this point, you're ready to make your changes! Feel free to ask for help

## Get the style right
Your patch should follow the same conventions & pass the same code quality checks as the rest of the project. 

## Make a Pull Request
At this point, you should switch back to your main branch and make sure it's up to date with AppVisor's main branch.

```
git remote add upstream git@github.com:juanpablocruz/needleman-wunsch-javascript.git
git checkout main
git pull upstream main
```
Then update your feature branch from your local copy of master, and push it!
```
git checkout feature/my-branch
git rebase main
git push --set-upstream origin feature/my-branch
```
Finally, get to Github and [make a Pull Request](https://github.com/juanpablocruz/needleman-wunsch-javascript/pulls) :D

## Keeping your Pull Request updated
if a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing in Git, there are a lot of [good](http://git-scm.com/book/en/v2/Git-Branching-Rebasing) [resources](https://docs.github.com/en/get-started/using-git/about-git-rebase) but here's the suggested workflow:

```
git checkout feature/my-branch
git pull --rebase upstream main
git push --force-with-lease feature/my-branch
```

## Merging a PR (maintainers only)
A PR can only be merged into master by a maintainer if:
- It is passing CI.
- It has been approved by at least two maintainers. If it was a maintainer who opened the PR, only one extra approval is needed.
- It has no requested changes.
- It is up to date with current main.

Any maintainer is allowed to merge a PR if all of these conditions are met.


