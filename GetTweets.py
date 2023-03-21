# Use this as a template to get all the tweets from a User on twitter.
# Requires your twitter API credentials and your firestore credentials.


import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import requests

# Initialize Firebase Admin SDK
cred = credentials.Certificate("FIREBASE_CREDENTIALS_GO_HERE")
firebase_admin.initialize_app(cred)

# Get a Firestore client
db = firestore.client()

# Your Twitter API token
bearer_token = "YOUR_BEARER_TOKEN_GOES_HERE"

# The User ID of the twitter profile you want to scrape
user_id = "TWITTER_USER_ID_GOES_HERE"


url = f"https://api.twitter.com/2/users/{user_id}/tweets"
params = {
    "max_results": 100,
    "tweet.fields": "created_at,public_metrics",
    "exclude": "retweets"
}
headers = {
    "Authorization": f"Bearer {bearer_token}"
}

response = requests.get(url, headers=headers, params=params)

if response.status_code != 200:
    raise Exception(f"Failed to get tweets: {response.status_code}\n{response.text}")

# Upload the first batch of tweets to Firestore
tweets = response.json()["data"]
batch = db.batch()
for tweet in tweets:
    doc_ref = db.collection("YOUR_FIRESTORE_COLLECTION").document(tweet["id"])
    batch.set(doc_ref, tweet)
batch.commit()

# Paginate through the results and upload the remaining tweets to Firestore
next_token = response.json().get("meta", {}).get("next_token")
while next_token:
    params["pagination_token"] = next_token
    response = requests.get(url, headers=headers, params=params)
    if response.status_code != 200:
        raise Exception(f"Failed to get tweets: {response.status_code}\n{response.text}")
    tweets = response.json()["data"]
    batch = db.batch()
    for tweet in tweets:
        doc_ref = db.collection("YOUR_FIRESTORE_COLLECTION").document(tweet["id"])
        batch.set(doc_ref, tweet)
    batch.commit()
    print("batch uploaded")
    next_token = response.json().get("meta", {}).get("next_token")

print("All tweets uploaded to Firestore")
