/*

1. Which command can be used to list the branches that have been merged into the currently checked-out branch?

git master --status

git branch --status

git branch --merged]

git status --merged

None of these

2. Why would the 'git rebase -i HEAD~10' command be used?

To run a comparative search of the last 10 commits for differences

To list the last 10 commits and modify them with either the squash or fixup command]

To delete the last 10 commits and reset the HEAD

In order to locally cache the last 10 commits

None of these

3. How to check changes between commits?

git info --changes

git show --changes

git diff]

git changes

4. You have just completed rebasing your master branch and need to manually update the remote master, even though there is a merge conflict. How can you accomplish this?

git push --overwrite

git push --update

git push --assert

git push --force-with-lease]

None of these

5. What is the difference between git fetch AMD git pull

git fetch creates a new branch off the master branch, while git pull creates a new branch off the local repository's master branch.

git pull downloads new data from a remote repository without integrating it into local files, while git fetch updates the current HEAD branch with the latest changes from the remote server.

git fetch updates remote tracking branches with changes from a remote repository, while git pull updates remote tracking branches with changes from a remote repository and merges them into their corresponding local branches.]

git fetch downloads and merges data from the local repository, while git pull informs your colleagues you are about to make changes to the master branch.

None of these

6. What is the difference between git branch -d and git branch -D?

-D deletes the local branch, while -d deletes the branch regardless of push and merge status.

-d deletes the current commit head, while -D deletes the entire branch.

-d deletes the local branch, while -D deletes the local branch regardless of push and merge status.]

-D deletes the current commit head, while -d deletes the entire branch.

None of these

7. Which command should you use to initialize a new Git repository?

git start

git new

git init]

git install

8. Who is attributed with inventing Git?

Bill Gates

Steve Jobs

Kohsuke Kawaguchi

Linus Torvalds]

9. What will 'git remote -v' command print to the Terminal?

The last 5 git versions you've installed

An inline editor for modifying remote repositories

The current git version you're running

A list of remote repositories and their URLs]

None of these

10. What command creates a new branch from the currently checked-out branch?

git -b checkout <nameOfBranch>

git branch

git checkout <nameOfBranch>

git checkout -b <nameOfBranch>]

None of these

11. How do you stage files for a commit?

git stage

git add]

git track

git commit

12. Which command uploads your code onto a remote repo?

git upload

git push]

git send

git pull-request

None of these

13. What's the git command that downloads your repo from GitHub to your computer?

git fork

git clone]

git copy

git pull-request

None of these
14. What is the best way to characterize the git commit structure?

Data array

Data log

Data snapshot]

Data dictionary

None of these

15. How can you display a list of files added or modified in a specific commit?

Find the commit in the remote repository, as that's the only place that kind of information is stored.

Use the diff-tree command with the commit hash.]

Run git commit --info with the commit hash.

None of these

16. What does 'git reset --soft HEAD^' do to the git repository?

It deletes all previous commits and reset the repository history back to its initial state.

It resets the working branch to the first commit.

It keeps the HEAD at the current commit, but clears all previous commits.

It sets HEAD to the previous commit and leaves changes from the undone commit in the stage/index.]

None of these

17. Which command will create a new branch called 'newbranch'?

git create --branch=newbranch

git make --branch=newbranch

git checkout newbranch

git branch newbranch]

18. How do you create a copy of a repo under your own GitHub account?

git fork]

git clone

git pull-request

git copy

None of these

19. Your current project has several branches; master, beta, and push-notifications. You've just finished the notification feature in the push-notification branch, and you want to commit it to beta branch. How can you accomplish this?

Checkout the push-notifications branch and run git merge beta

Checkout the master branch and run git merge beta -> push-notification

Delete the push-notification branch and it will be committed to the master branch automatically

Checkout the beta branch and run git merge push-notification]

None of these

20. Your team lead needs a list of all commits that will be moved before you perform a rebase. Which command can you use to access that information?

git rebase -log

git rebase -i

git rebase -verbose]

git rebase -all

None of these

21. After pushing commits to the remote repository for the first time using the command 'git push -u origin master', what shorthand command can you use in future?

git push master

git push origin

Same as before, git push -u origin master

git push]

None of these

22. Looking at the following commands, describe what is happening. 'git checkout feature-user-location git cherry-pick kj2342134sdf090093f0sdgasdf99sdfo992mmmf9921231'

The commit is being tagged for release on the feature-user-location branch

A commit is being copied from its original branch over to the feature-user-location branch

The commit is being cherry picked as the new HEAD of the commit history

A commit is being copied from the feature-user-location branch to the master branch

The branch is switched to the feature-user-location branch, and the specified commit is applied to the branch.]

None of these

23. How many ways are present in Git to integrate changes from one branch into another?

2

3

4

5

None of these

24. After staging a series of changes to the index, which command could you use to review them prior to a commit?

git diff

git diff --cached]

git diff --HEAD

git status -v -v

None of these

25. In a situation where you have several commits for a single task, what is the most efficient way to restructure your commit history?

Cherry pick the related commits to another branch.

Delete the task commits and recommit with a new message.

Squash the related commits together into a single coherent commit.]

Stash the related commits under a new hash.

None of these

*/