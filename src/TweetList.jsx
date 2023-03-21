import React from "react";
import FormatDate from "./components/FormatDate";
import LikeIcon from "./images/twitterlike.png";
import RetweetIcon from "./images/twitterretweet.png";
import ReplyIcon from "./images/twitterreply.png";

// This Function takes the tweets array and maps through it to create the styled element
//  from the object that is returned

function TweetList({ tweets }) {
  const tweetElements = tweets.map((tweet) => {
    const formattedTime = FormatDate(tweet.created_at);

    return (
      <div className="Tweet" key={tweet.id}>
        <div className="Tweet-Meta">
          <div className="Tweet-Meta-Date">
            <p>{formattedTime}</p>
          </div>
          <div className="Tweet-Meta-Stats">
            <div>
              <img src={LikeIcon} className="Icon" alt="Twitter Like Icon" />
              <p>{tweet.public_metrics.like_count}</p>
            </div>
            <div>
              <img src={RetweetIcon} className="Icon" alt="Twitter Like Icon" />
              <p>{tweet.public_metrics.retweet_count}</p>
            </div>
            <div>
              <img src={ReplyIcon} className="Icon" alt="Twitter Like Icon" />
              <p>{tweet.public_metrics.reply_count}</p>
            </div>
          </div>
        </div>
        <div className="Tweet-Text">
          <p>{tweet.text}</p>
        </div>
      </div>
    );
  });

  return <div>{tweetElements}</div>;
}

export default TweetList;