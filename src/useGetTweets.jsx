import { useState, useEffect } from 'react';
import { getTweets, getMoreTweets } from "./firebase"

// This custom hook manages the logic of getting tweets on load, and when the user requests more

function useGetTweets(filter) {
    const [tweets, setTweets] = useState([])
    const [hasMore, setHasMore] = useState(true);
    const [selector, setselector] = useState(true);

    // Get tweets when the page first loads
    useEffect(() => {
        async function loadTweets() {
            const data = await(selector ? getTweets(filter, "desc") : getTweets(filter, "asc"))
            setTweets(data)
        }
        
        loadTweets()
    }, [selector, filter])

    // Get more tweets when the user presses the "Get More Tweets" button
    const loadMoreTweets = async () => {
        const data = await (selector ? getMoreTweets(filter, "desc"): getMoreTweets(filter, "asc"))
        if (data.length === 0) {
          setHasMore(false);
          return;
        }
        setTweets(prevTweets => [...prevTweets, ...data]);
      };

    // Changes the state for sorting. i.e. ascending, descending
    function handleClick1(){
        setselector(true)
    }

    function handleClick2(){
        setselector(false)
    }

    return {tweets, hasMore, loadMoreTweets, handleClick1, handleClick2, selector}
}

export default useGetTweets