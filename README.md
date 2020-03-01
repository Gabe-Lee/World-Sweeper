# World-Sweeper
### Online Multiplayer Minesweeper

## Minesweeper in 20XX?
I believe minesweeper has potential to be fun even today. Traditionally it is a very bare-bones experience, but it doesn't have to be that way.

This project grew out of a 2-Day hackathon type project I made that was essentially just multiple players sharing the same minesweeper board online. It had a great reception among my peers and I felt the idea still had untapped potential.

## Where to play
Unfortunately, the project is still in what might be considered pre-alpha stage, but as soon as it is playable I will host test servers.

## How to contribute
#### Starting a new issue
- Go to the Issues tab and check to see if your issue or similar has already been created
- If not, click **New Issue**
- Name the issue with a short, descriptive call to action
- Give the reasoning for the issue in the description
- On the right, make sure you link the issue to the World Sweeper project so it can be tracked. If you intend to work on it, assign it to yourself, link it to a specific milestone of the project and give it an appropriate label.

#### Working on an issue
- Go to the Project tab and look at the To-Do column. Find the issue you want to work on and note the issue number
- From the repo page, select `Fork` from the top right to copy it to your own GitHub
- From your GitHub, clone it down to your computer
- From your clone, create a new branch that succinctly describes the issue, followed by the issue number: `git checkout -b <IssueBranchName>#42`
- Write your code and commit it to your branch
- When your code is finished *and working*, go to your GitHub and choose `New Pull Request`. Select the PR to go *from* your branch on your fork on the right *to* the master branch on my repo on the left.
- Name the pull request with the format of a short description followed by the issue number: `<Issue Name/Description>#42`. Describe your pull request changes and/or reasoning in the description below then submit the pull request.
- Myself or a repo collaborator with review the changes and either accept it, at which point it becomes part of the master branch, or reject it for one reason or another.
- If rejected, fix issues with the code as noted in the rejection then make another pull request.
- Congratulations, you just contributed! I will add your name to the list of contibutors at the bottom of this README for all to see.

## Tech Stack
<table style="text-align: center">
    <thead>
        <tr>
            <th style="width: 33%; text-align: center">Front-End</th>
            <th style="width: 33%; text-align: center">Back-End</th>
            <th style="width: 33%; text-align: center">Tools</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td  colspan=2><img src="https://camo.githubusercontent.com/6effdb8103365043944db7a341e91ffe2fc234e5/68747470733a2f2f63646e2e7261776769742e636f6d2f706564726f6d616c74657a2f747970657363726970742d6c6f676f2d72656372656174696f6e2f6d61737465722f6c6f676f732f747970657363726970742d636f6c6f722d6c6f676f2e737667" alt="TypeScript"/></td>
            <td><img src="https://webpack.js.org/d19378a95ebe6b15d5ddea281138dcf4.svg"><br>Webpack</td>
        </tr>
        <tr>
            <td><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"><br>React</td>
            <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/200px-Node.js_logo.svg.png" alt="Node.js"/><br>Node.js</td>
            <td><img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg"></td>
        </tr>
        <tr>
            <td><img src="https://redux.js.org/img/redux.svg"><br>Redux</td>
            <td><svg width="100%" height="100%" viewBox="15 -200 925 300"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
     <style>.font {font-family: helvetica neue,open sans,sans-serif;}</style>
    <text font-size="300" font-weight="100" fill="#333" class="font">Express</text>
  </svg></td>
            <td><img src="https://camo.githubusercontent.com/b8606e6a237d8e7e7800067f0f739129da1fa6f8/687474703a2f2f7365656b6c6f676f2e636f6d2f696d616765732f4a2f6a6573742d6c6f676f2d463939303145424246372d7365656b6c6f676f2e636f6d2e706e67"><br>Jest</td>
        </tr>
        <tr>
            <td><img><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" class="c0212 c027"><path fill="transparent" d="M0 13h95v94H0z"></path><path fill="#eee" d="M96,107.5H0v-95h96V107.5z M1.803,105.705h92.393v-91.41H1.803C1.803,14.295,1.803,105.705,1.803,105.705z"></path><path fill="#fff" d="M64.294 86.574c1.903 3.108 4.379 5.392 8.759 5.392 3.679 0 6.029-1.839 6.029-4.379 0-3.044-2.414-4.123-6.464-5.894l-2.219-.952c-6.407-2.729-10.663-6.149-10.663-13.378 0-6.659 5.073-11.728 13.003-11.728 5.645 0 9.704 1.965 12.628 7.109l-6.914 4.439c-1.522-2.73-3.164-3.805-5.714-3.805-2.601 0-4.249 1.65-4.249 3.805 0 2.663 1.65 3.742 5.459 5.392l2.22.951c7.544 3.235 11.803 6.533 11.803 13.948 0 7.993-6.279 12.373-14.713 12.373-8.246 0-13.573-3.929-16.18-9.079 0-.002 7.215-4.194 7.215-4.194zm32.029 0c1.903 3.108 4.379 5.392 8.759 5.392 3.679 0 6.029-1.839 6.029-4.379 0-3.044-2.414-4.123-6.464-5.894l-2.219-.952c-6.407-2.729-10.663-6.149-10.663-13.378 0-6.659 5.073-11.728 13.003-11.728 5.645 0 9.704 1.965 12.628 7.109l-6.914 4.439c-1.522-2.73-3.164-3.805-5.714-3.805-2.601 0-4.249 1.65-4.249 3.805 0 2.663 1.65 3.742 5.459 5.392l2.22.951C115.741 76.76 120 80.058 120 87.473c0 7.993-6.279 12.373-14.713 12.373-8.246 0-13.573-3.929-16.18-9.079l7.216-4.193zm-63.393.77c1.395 2.475 2.664 4.567 5.714 4.567 2.917 0 4.757-1.141 4.757-5.579V56.141h8.878v30.31c0 9.193-5.39 13.378-13.258 13.378-7.109 0-11.226-3.679-13.32-8.11l7.229-4.375c0-.001 0 0 0 0z"></path></svg></img><br>CSS-in-JS</td>
            <td>[Deployment?]</td>
            <td><svg width="100%" height="100%" viewBox="0 -200 1000 300"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <text font-size="300" fill="black">
      Enzyme
    </text>
  </svg></td>
        </tr>
        <tr>
            <td><img src="https://www.pixijs.com/wp/wp-content/uploads/pixijs-v5-logo-sml2x.png"></td>
            <td><img src="https://www.postgresql.org/media/img/about/press/elephant.png"><br>PostgreSQL</td>
            <td><svg width="100%" height="100%" viewBox="0 -200 1250 300"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <text font-size="300" fill="black">
      Supertest
    </text>
  </svg>
  </td>
        </tr>
    </tbody>
</table>