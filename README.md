This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Files Description (branch - new)

src/App.js - main file running the app <br />
src/components : <br />
     Actions.js - function component to implement the Like, Dislike, SuperLike functionalities <br />
     Activity.js - to view the cars liked and superliked (after the data stack is over) <br />
     View.js - to view the current car of the 'cars' array, its image and description <br />
src/actions/Like.js : <br />
     Like.js - to implement 'like' button and store the car in 'liked' array <br />
     Dislike.js - to implement 'dislike' button and store the car in 'disliked' array <br />
     SuperLike.js - to implement 'superlike' button and store the car in 'superliked' array <br />
src/data.json - json file with car details as an array of objects <br />
public folder containing all the images of the button icons