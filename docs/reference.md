# Reference <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->
- [Shell Commands](#shell-commands)
  - [Tar](#tar)
  - [Git](#git)
- [Links](#links)

## Shell Commands

### Tar

```shell
# Extract the tarball
tar -xvzf array-v0.0.0.tar.gz
```

### Git

```shell
# Move or rename a branch
git branch -M [<oldbranch>] <newbranch>

# Add a remote repository with a name at the URL
git remote add <name> <url>

# Push all changes to the remote repository
# -u Adds and upstream tracking reference
git push -u [<repository> [<branch>]]

# Push changes from the local current branch to the remote branch
git push -u origin local_branch:remote_branch

# Commit all changes to the current branch with a message
git commit -m <msg>

# Archive the current branch to a tarball 
git archive --format=tar --prefix=array-v0.0.0/ -o array-v0.0.0.tar.gz HEAD
```

## Links

- [How do we avoid development files in the release?](https://softwareengineering.stackexchange.com/questions/366771/how-do-we-avoid-development-files-in-the-release)