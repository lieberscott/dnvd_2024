import React, { useEffect } from "react";
import parse from 'html-react-parser';
import "../../styles.css";


import useScript from "../../hooks/useScript.js";


export default function TweetsVideo(props) {
    
  useScript("https://platform.twitter.com/widgets.js");
  
  const { video_html  } = props;
    
  return (
    <div key={video_html}>
      { video_html ? parse(`${video_html}`) : [] }
    </div>
  )
}