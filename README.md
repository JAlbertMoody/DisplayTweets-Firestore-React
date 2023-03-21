# DisplayTweetsFirestore
A demo for rendering tweets in the browser from a Firestore collection with ReactJS.

LIVE DEMO: https://dadsaysjokes.netlify.app/  
tweets from: https://twitter.com/baddadjokes

Use the "GetTweets.py" file to scrape twitter and upload tweet data to a Firestore collection.

The rest of the Repository is a React App which queries the data base to display the tweet data by date created, likes, retweets, and replies.

firebase.jsx queries the database and gets the tweet data.  
useGetTweets.jsx is a custom hook for handling the sorting and loading logic.  
TweetList.jsx takes the fetched tweet data and renders it into elements.  


