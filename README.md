# React-Tweets-Firestore
A repo for rendering sorted tweets in the browser from a Firestore collection with ReactJS.
## Live Demo
Check it out here: https://dadsaysjokes.netlify.app/  
Tweets sourced from: https://twitter.com/baddadjokes

## Scrape Twitter Data and Upload to Firestore

To get started, use the GetTweets.py file to scrape Twitter and upload tweet data to a Firestore collection. This Python script requires Twitter API credentials, which can be obtained from the [Twitter Developer Portal](https://developer.twitter.com/).

## React App

The rest of the repository is a React app that queries the Firestore collection to display tweet data sorted by date created, likes, retweets, and replies.

### `firebase.jsx`  
This module contains the code for querying the Firestore database and retrieving the tweet data.  

### `useGetTweets.jsx`
This custom hook handles the sorting and loading logic of the tweets. It sorts the tweets by the selected criteria (date created, likes, retweets, or replies), and loads more tweets as the user scrolls down the page.

### `TweetList.jsx`
This component takes the fetched tweet data and renders it into elements. It includes a "Load More" button that triggers the useGetTweets hook to load more tweets.

## Installation
To run this app locally, clone this repository and run the following commands in the terminal:

cd react-tweets-firestore  
npm install  
npm start  

This will start a development server at localhost:3000.


