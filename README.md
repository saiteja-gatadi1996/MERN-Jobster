## Jobify

##### React Setup

- Create a client folder
- open the client folder in the integrated terminal
- npx create-react-app .
- if you get any error try this command

```js
npx create-react-app@latest project-nanme
```

- once the setup is done, do npm start

```js
npm start
```

- get the assets folder copied from the complete project and paste it over in the src folder.

---

##### Folder Cleanup:

- remove App.css
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- fix App.js and index.js errors

---

##### Refactoring Title and Favicon:

- go to index.html and rename the title to Jobify or any other app
- remove the existing favicon.ico from public folder and replace or move the favicon.ico from our assets/images folder

```js
if you want to customize your favicon, then navigate to

https://favicon.io/favicon-generator/
```

---

#### Normalize.css and Global Styles

- npm i normalize.css
- import 'normalize.css' in index.js
- SET BEFORE 'index.css'
- copy the contents from index.css file which is in the assets/css folder and paste them in the main index.css file

---

##### pages folder

- create a pages folder under the src folder
- create a Landing.js inside pages folder

---

##### Styled components

- npm i styled-components
- I'm using vscode-styled-components extension

---

##### components folder

- create a components folder inside src folder
- create a Logo.js file as we are going to use our logo in multiple places
- also create a index.js file inside the components folder as we are going to maintain this file for all component folder imports

---

undraw.co for SVG's

----

##### React Router Dom

npm i react-router-dom
