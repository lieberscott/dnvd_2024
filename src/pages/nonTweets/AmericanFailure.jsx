
import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';


import TweetsImages from "./TweetsImages.jsx";
import TweetsVideo from "./TweetsVideo.jsx";
import NonTweetsHTML from "./NonTweetsHTML.jsx";
import Unavailable from "./Unavailable.jsx";
import NonTweetBottomBar from "./NonTweetBottomBar.jsx";
import { einat } from "../../constants.js";
import { americanFailure } from "../../americanFailure.js";
import "../../styles.css";

import useScript from "../../hooks/useScript.js";


const einat_youtube_version = {
  video_html: "<iframe width='560' height='315' src='https://www.youtube.com/embed/o1ku4cE_e4U?si=BbLGJjsE1GiLhz3L' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  intro_text: "If you are a person in the West who really wants to understand what’s going on between Israel and the Palestinians, and what the hope might be—and how—for there to ever be peace, this is the one video you should watch: Dr. Einat Wilf"
}


export default function AmericanFailures(props) {
  useScript("https://platform.twitter.com/widgets.js");

 
  return (
    <div className="tweetText">
      { americanFailure.map((item, i) => {
      return (
        <div class="entry">
          <div class="picdiv">
            <img class="image" src={item.image_url}/>
            <div>
              <div class="headline">{ item.headline}</div>
              <div class="newspaper">{ item.publication } | { item.date }</div>
              <div class="blurb">{item.text}</div>
              <a target="_blank" href={item.link}><button type="button" class="btn btn-dark">Link to story</button></a>
            </div>
          </div>
          <div class="desc align-top">
            <br/>
          </div>
        </div>
      )
    })}
    </div>

  );
}