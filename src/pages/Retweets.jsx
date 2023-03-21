import useGetTweets from "../useGetTweets"
import TweetList from "../TweetList";

export function Retweets(){
    const {tweets, hasMore, loadMoreTweets, handleClick1, handleClick2, selector} = useGetTweets("public_metrics.retweet_count")

    return (
        <div>
            <div className='Button-Container'>
                <button className='Button' 
                    onClick={handleClick1}
                    style={{ backgroundColor: selector ? 'rgb(120, 148, 170)' : 'white' }}
                    >Most Retweets</button>
                <button className='Button' 
                    onClick={handleClick2}
                    style={{ backgroundColor: selector ? 'white' : 'rgb(120, 148, 170)' }}
                    >Least Retweets</button>
            </div>
            <h1 className='Page-Title'>{(selector ? "Most Retweeted" : "Least Retweeted")} Tweets:</h1>
            <TweetList tweets={tweets} />
            {hasMore && (
                <button className="LoadMore" onClick={loadMoreTweets}>Load More Tweets</button>
            )}

        </div>
    )
}
