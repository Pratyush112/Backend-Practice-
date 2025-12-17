# This is Practice session 

## **Github commands for uploading files and tracking the files**

Git cannot track empty folders, it can only track files. To track the empty folder we need to create a file of any name, or .gitkeep

- ```git init```
- ```git status```
- ```git add .```  "The '.' represents that all the files are added to the repository"
- ``git commit -m "Your message"``
- ```git remote add origin <{add the link of your git repository}>```
- ```git branch -M main```
- ```git push -u origin main```
##

## **Difference between Dev Dependencies and Dependencies and peerDependencies**

1. **Dev Dependencies**: This we use during the development process and intoduce in productions
    - Here in this project we are going to use nodemon's dev dependencies. 
    - `Installation : npm install --save-dev <nodemon>`
    - `package.json: 
        "devDependencies": {
            "nodemon": "^5.3.5",
        }`

2. **Dependencies**: The dependencies are the libraries that our project needs in order to run in production. This are required for the core functionalities of your application and must be installed for your application to work properly. 
    - ```Installation : npm install nodemon```
    - `package.json: 
        "dependencies": {   
            "nodemon": "^2.30.1",
        }`

3. **peerDependencies**: In package.json file, there is an object called as peerDependencies and it consists of all the packages that are exactly required in the project or to the person who is downloading and the version numbers should also be the same. That is the reason they were named as peerDependencies. The best example is 'react' which is common in every project to run similarly. 
    - **How to Add peerDependencies**: 
        - You need to manually add perrDependencies in your package.json file. npm does not automatically install these dependencies. 
    - `package.json: 
        "peerDependencies": {
                "react": "^16.8.0"
            }`


