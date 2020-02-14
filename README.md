# FinalForm v1.0

## What Is It?
FinalForm is my boilerplate repo for my prefered tech stack, greatly simplifying getting a new project off the ground. The technologies it includes is as follows:
#### Dev
- Webpack + Babel
- ESLint + airbnb + prettier
- Typescript
#### Front-End
- React
- Redux + Thunk
- Sass
#### Back-End
- Express
#### Testing
- Jest
- Enzyme
- Supertest

## Features
Webpack bundles both the front end code and the back end code into single JavaScript files for easier deployment. It also creates a /dist index.html, transpiles any SASS stylesheets in /src to CSS in /dist, and adds both the JavaScript bundle and stylesheet into the /dist index.html for you.

The repo contains eslint, babel, and prettier settings directly in the package.json to minimize file structure pollution. The settings included in those and the tsconfig.json file include many optional preferences.

## How to use this repo
1. Create a completely blank new repo on your github (no readme or license)
2. Navigate to your desired destination directory
3. Run the following command in the terminal from the directory, replacing the placeholder with the url of your newly created repo:

``` git clone --bare https://github.com/Gabe-Lee/final-form.git && cd final-form.git && git push --mirror [YOUR_BRAND_NEW_REPO_URL] && cd .. && rm -rf final-form.git```

4. You can now clone down your new repo from github as you normally would
5. Run ```yarn install``` or ```npm install``` to download all packages (Yarn recommended, or even pnpm, over npm)
6. Run ```yarn watch``` or ```npm run watch``` to begin developing your app. The first build may cause liveserver to open the base directory before the /dist folder has been built, but it should reload correctly as soon as its done.

## How to contribute
Feel free to fork the repo! From there you should:
- Branch the repo with a name indicative of your intentions, for example BetterDirectoryStructure or FixedBuildProcess for making changes to the master branch or AngularFrontend for example if you intend the branch to be standalone from the master as an alternative.
- If your branch is designed to fix problems with the current master (or another branch), after you have finished your adjustments and commited them to your fork's new branch, create a pull request to merge the changes into the original branch or master
- When I have free time I will test new changes to master by mirroring them as if I was a user trying to create a new project and see if a basic full-stack project builds and runs correctly, and if the quality of life is improved. If its good, I will merge it. If I dissagree, I may reject the changes, but you are then free to keep your own branch as a separate version and maintain it from there.
- Those maintining alternative branches may choose a similar workflow, but ultimately it's up to them how they want to manage pull requests.
- This code is offered completely free of any license or use requirements and you are free to take the code for your own and use it in commercial, private, proprietary projects as you see fit.
- I make no guarantees my scaffolding adheres to best practices and won't cause your computer to be possesed by extraplanar entities.