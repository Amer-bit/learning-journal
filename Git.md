#             Git
Before i talk about git i should first talk about Version Control System (VCS)

version control is a system used to create multiple version of a file that has been modified

## There is two types of VCS:

1. Centralized version control
2. Distributed version control

## Centralized version control

Which basically means that the changes is save into single server 

this has multiple ***advantages***:

1. Eleminate the need to involve all local database
2. All team members can see the changes made to a file
3. Organizational process is overall better than DVCS

The main ***Disadvantage*** if the server fails team meber cant share there work or worst all the data in the server is damaged and cant be restored

## DVCS

DVCS is like backup plan i.e. it's used to create multiple Repo on multiple machine locally

### What is Git 

So Git is a DVCS which create multiple version of a file using **snapshot** each time you make a change Git create snapshot. it save the file locally

Track the changes made to file and prevent data loss

# Setting a Git Repo

1. Importing 

1. create Repo on GitHub
2. clone the Repo by clicking clone or download button on github or by using clone repo url command in ubuntu
3. change the directory to the Repo using cd reponame
4. open VS using code . command
5. After making chnages use git add . to include these changes
6. commit the changes using git commit -m "some message" command
7. the changes to github using git push origin master command

these are the **stages** of saving a change **add** , **commit** , **push**