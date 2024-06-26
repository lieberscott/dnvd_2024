import React, { useEffect, useState } from "react";
import "../../styles.css";

import Buttons from "../../components/Buttons.jsx";
import NonTweetsHTML from "./NonTweetsHTML.jsx";

export default function NonTweetMainData(props) {
    
  const item = props.item;
  const scale = props.scale;
  
  
  return (
    <div className="tweetMainWrapper" style={{ transform: [`scale(${scale ? 1 : 0.95})`] }}>
      <div className="tweetMain">
        <a className="link" href={item.tweet_url} onClick={() => false} target="_blank">
        {/* Check if thread/reply or single tweet */ }
        { item.thread || item.thread_arr.length ?
          item.thread_arr.map((subtweet, i, arr) => <NonTweetsHTML key={subtweet.id} tweetData={subtweet} user={item.user} hideBottomBar={ i !== arr.length - 1} />)  :
          item.reply ? ["", ""].map((reply, i, arr) => arr.length === i + 1 ? <NonTweetsHTML key={"reply1"} tweetData={item} user={ item.user } quoting={ item.quoting} /> : <NonTweetsHTML key={"reply2"} tweetData={item.in_reply_to_data} user={ item.in_reply_to_data.user } quoting={ item.in_reply_to_data.quoted} /> )  :
          <div className="tweetBorder"><NonTweetsHTML tweetData={item} user={ item.user } /></div> }  

        </a>

      <Buttons id={item._id} />
      </div>
    </div>
  )
}


/*
    

*/