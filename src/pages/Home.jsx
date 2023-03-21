import useGetTweets from "../useGetTweets"
import TweetList from "../TweetList";

export function Home(){
    // All logic managed by the custom hook useGetTweets
    // "created_at" is the prop passed to the hook as the filter
    const {tweets, 
        hasMore, 
        loadMoreTweets, 
        handleClick1, 
        handleClick2, 
        selector} = useGetTweets("created_at")

    return (
        <div>
            <div className='Button-Container'>
                <button className='Button' 
                    onClick={handleClick1}
                    style={{ backgroundColor: selector ? 'rgb(120, 148, 170)' : 'white' }}
                    >Newest</button>
                <button className='Button' 
                    onClick={handleClick2}
                    style={{ backgroundColor: selector ? 'white' : 'rgb(120, 148, 170)' }}
                    >Oldest</button>
            </div>
            <h1 className='Page-Title'>{(selector ? "Most Recent" : "Oldest")} Tweets:</h1>
            <TweetList tweets={tweets} />
            {hasMore && (
                <button className="LoadMore" onClick={loadMoreTweets}>Load More Tweets</button>
            )}
        </div>
    )
}
