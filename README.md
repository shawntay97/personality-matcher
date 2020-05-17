# Personality Matcher Expert System

This personality matcher will let you know what kind of partner you should look for. Just answer a series of questions based on the myers briggs personality test and it will determine your personality type. Based on the knowledge base, the system will determine the most suitable persoanlity type of your life partner.

## Updating the Knowledge Base

This expert system is designed so that the knowoedge base is scalable. Knowledge base can be updated dynamically through a json format. The knowledge base is located at src/knowledgeBase folder.

|Knowledge Base    | Description  |
|------------------|---------------------------------------------------------------------|
|questoinData.js   |Database store of question data in json format|
|mbtiData.js       |Databaase store of MBTI personality type explanations in json format|
|matchData.js      |Database store of matching data with explanation in json format|


### Developers' Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

##### `npm run deploy`

Deploy the system to the website
