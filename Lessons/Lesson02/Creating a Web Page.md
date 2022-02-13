# [Cool Kids Coding School](https://www,coolkidscodingschool.com)
![CKCS logo >](./images/ckcslogo.png)
</br>

## Course: **Web Development**

### Lesson 2 Addendum: **Creating a Web Page on GitHub Pages**

---
</br>

#### **GitHub Pages**

GitHub not only allows you to maintain and share your own source code, it also lets you describe and make others aware of what your doing with GitHub Pages.  Using GitHub Pages you can create a single webpage for your organization or user profile, or unlimited web pages for each project or repository.  

Below we are going to describe each way.

##### **Organization Web Page**

+ Step 1  
    Head over to GitHub and create a new public repository named _username.github.io_, where username is your username (or organization name) on GitHub.

    If the first part of the repository doesn’t exactly match your username, it won’t work, so make sure to get it right.  
+ Step 2  
Using git clone the new repository you just created on your local work area.

    git clone https://github.com/username/username.github.io

+ Step 3  
Enter the project and add an index.html file

    cd username.github.io

    echo "Hello World" > index.html
+ Step 4  
Add, commit and push your changes

    git add --all

    git commit -m "Initial commit"

    git push -u origin main

+ Step 5  
You're done.  Fire up your browser and go to _username.github.io_ 

##### **Project Web Page**

The process for creating a project or repository web page is similar.  

+ Step 1  
Go to an exisiting repository or create a new one.

+ Step 2  
Create a new file and name it index.html
Add some HTML content.

+ Step 3  
Commit the file.  Make sure you commit to the main branch.

+ Step 4  
Your done.  Fire up a browser and go to _http://username.github.io/repository_.



---

##### **Cool Kids Coding School 2022, for any questions or comments contact info@coolkidscodingschool.com**
