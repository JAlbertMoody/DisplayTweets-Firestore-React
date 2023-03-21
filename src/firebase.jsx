
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy, limit, startAfter } from "firebase/firestore/lite"


const firebaseConfig = {
  // Copy and paste your Firestore config data here to connect
  //
  //
  //
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// initialize var for loading more tweets after initial load
var last = "";

// Get the collection name from your Firestore project
const dbcollection = "Collection"

// Get Data from Firestore
// the filter is passed through the custom hook useGetTweets

export async function getTweets(filter, filterSpec) {
    const first = query(collection(db, dbcollection), orderBy(filter, filterSpec), limit(10));
    const querySnapshot = await getDocs(first);
    const dataArr = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
    last = querySnapshot.docs[querySnapshot.docs.length-1];
    return dataArr
  }

export async function getMoreTweets(filter, filterSpec) {
    const next = query(collection(db, dbcollection),orderBy(filter, filterSpec),startAfter(last),limit(10));
    const querySnapshot = await getDocs(next);
    const dataArr = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
    last = querySnapshot.docs[querySnapshot.docs.length-1];
    return dataArr
  }




