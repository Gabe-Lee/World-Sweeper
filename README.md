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
            <td  colspan=2 style="width: 66%; text-align: center"><img src="https://camo.githubusercontent.com/6effdb8103365043944db7a341e91ffe2fc234e5/68747470733a2f2f63646e2e7261776769742e636f6d2f706564726f6d616c74657a2f747970657363726970742d6c6f676f2d72656372656174696f6e2f6d61737465722f6c6f676f732f747970657363726970742d636f6c6f722d6c6f676f2e737667" alt="TypeScript" width="66%" height="auto"/></td>
            <td style="width: 33%; text-align: center"><img src="https://webpack.js.org/d19378a95ebe6b15d5ddea281138dcf4.svg"><br>Webpack</td>
        </tr>
        <tr>
            <td style="width: 33%; text-align: center"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="100%" height="auto"><br>React</td>
            <td style="width: 33%; text-align: center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/200px-Node.js_logo.svg.png" alt="Node.js" width="100%" height="auto"/><br>Node.js</td>
            <td style="width: 33%; text-align: center"><img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" width="100%" height="auto"></td>
        </tr>
        <tr>
            <td style="width: 33%; text-align: center"><img src="https://redux.js.org/img/redux.svg" width="100%" height="auto"><br>Redux</td>
            <td style="width: 33%; text-align: center;font-family:helvetica neue;font-size:3rem;font-weight:100;color: #333">Express</td>
            <td style="width: 33%; text-align: center"><img src="https://camo.githubusercontent.com/b8606e6a237d8e7e7800067f0f739129da1fa6f8/687474703a2f2f7365656b6c6f676f2e636f6d2f696d616765732f4a2f6a6573742d6c6f676f2d463939303145424246372d7365656b6c6f676f2e636f6d2e706e67" width="100%" height="auto"><br>Jest</td>
        </tr>
        <tr>
            <tdstyle="width: 33%; text-align: center"><img alt="CSS-in-JS" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiBjbGFzcz0iYzAyMTIgYzAyNyI+PHBhdGggZmlsbD0idHJhbnNwYXJlbnQiIGQ9Ik0wIDEzaDk1djk0SDB6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2VlZSIgZD0iTTk2LDEwNy41SDB2LTk1aDk2VjEwNy41eiBNMS44MDMsMTA1LjcwNWg5Mi4zOTN2LTkxLjQxSDEuODAzQzEuODAzLDE0LjI5NSwxLjgwMywxMDUuNzA1LDEuODAzLDEwNS43MDV6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTY0LjI5NCA4Ni41NzRjMS45MDMgMy4xMDggNC4zNzkgNS4zOTIgOC43NTkgNS4zOTIgMy42NzkgMCA2LjAyOS0xLjgzOSA2LjAyOS00LjM3OSAwLTMuMDQ0LTIuNDE0LTQuMTIzLTYuNDY0LTUuODk0bC0yLjIxOS0uOTUyYy02LjQwNy0yLjcyOS0xMC42NjMtNi4xNDktMTAuNjYzLTEzLjM3OCAwLTYuNjU5IDUuMDczLTExLjcyOCAxMy4wMDMtMTEuNzI4IDUuNjQ1IDAgOS43MDQgMS45NjUgMTIuNjI4IDcuMTA5bC02LjkxNCA0LjQzOWMtMS41MjItMi43My0zLjE2NC0zLjgwNS01LjcxNC0zLjgwNS0yLjYwMSAwLTQuMjQ5IDEuNjUtNC4yNDkgMy44MDUgMCAyLjY2MyAxLjY1IDMuNzQyIDUuNDU5IDUuMzkybDIuMjIuOTUxYzcuNTQ0IDMuMjM1IDExLjgwMyA2LjUzMyAxMS44MDMgMTMuOTQ4IDAgNy45OTMtNi4yNzkgMTIuMzczLTE0LjcxMyAxMi4zNzMtOC4yNDYgMC0xMy41NzMtMy45MjktMTYuMTgtOS4wNzkgMC0uMDAyIDcuMjE1LTQuMTk0IDcuMjE1LTQuMTk0em0zMi4wMjkgMGMxLjkwMyAzLjEwOCA0LjM3OSA1LjM5MiA4Ljc1OSA1LjM5MiAzLjY3OSAwIDYuMDI5LTEuODM5IDYuMDI5LTQuMzc5IDAtMy4wNDQtMi40MTQtNC4xMjMtNi40NjQtNS44OTRsLTIuMjE5LS45NTJjLTYuNDA3LTIuNzI5LTEwLjY2My02LjE0OS0xMC42NjMtMTMuMzc4IDAtNi42NTkgNS4wNzMtMTEuNzI4IDEzLjAwMy0xMS43MjggNS42NDUgMCA5LjcwNCAxLjk2NSAxMi42MjggNy4xMDlsLTYuOTE0IDQuNDM5Yy0xLjUyMi0yLjczLTMuMTY0LTMuODA1LTUuNzE0LTMuODA1LTIuNjAxIDAtNC4yNDkgMS42NS00LjI0OSAzLjgwNSAwIDIuNjYzIDEuNjUgMy43NDIgNS40NTkgNS4zOTJsMi4yMi45NTFDMTE1Ljc0MSA3Ni43NiAxMjAgODAuMDU4IDEyMCA4Ny40NzNjMCA3Ljk5My02LjI3OSAxMi4zNzMtMTQuNzEzIDEyLjM3My04LjI0NiAwLTEzLjU3My0zLjkyOS0xNi4xOC05LjA3OWw3LjIxNi00LjE5M3ptLTYzLjM5My43N2MxLjM5NSAyLjQ3NSAyLjY2NCA0LjU2NyA1LjcxNCA0LjU2NyAyLjkxNyAwIDQuNzU3LTEuMTQxIDQuNzU3LTUuNTc5VjU2LjE0MWg4Ljg3OHYzMC4zMWMwIDkuMTkzLTUuMzkgMTMuMzc4LTEzLjI1OCAxMy4zNzgtNy4xMDkgMC0xMS4yMjYtMy42NzktMTMuMzItOC4xMWw3LjIyOS00LjM3NWMwLS4wMDEgMCAwIDAgMHoiPjwvcGF0aD48L3N2Zz4=" width="100%" height="auto"/><br>CSS-in-JS</td>
            <tdstyle="width: 33%; text-align: center">[Deployment?]</td>
            <td style="width: 33%; text-align: center;font-size: 2rem;">Enzyme</td>
        </tr>
        <tr>
            <td style="width: 33%; text-align: center;"><img src="https://www.pixijs.com/wp/wp-content/uploads/pixijs-v5-logo-sml2x.png" width="100%" height="auto"></td>
            <td style="width: 33%; text-align: center;"><img src="https://www.postgresql.org/media/img/about/press/elephant.png" width="100%" height="auto"><br>PostgreSQL</td>
            <td style="width: 33%; text-align: center;font-size: 2rem;">Supertest</td>
        </tr>
    </tbody>
</table>

## Maintainers
<img alt="Gabe-Lee" src="https://github.com/Gabe-Lee.png" style="border-radius:50%" width="15%" height="auto"/>

## Contributors
