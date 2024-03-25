import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';



const buttons = [
  { name: "Oct. 7 testmonies", category: "dfi_oct7categories"},
  { name: "International Law Lies", category: "dfi_internationalLawLies"},
  { name: "Death Count Lies", category: "dfi_deathCountLies"},
  { name: "Other Lies", category: "dfi_otherLies"},
  { name: "Hate and Violence", category: "dfi_hateAndViolence"}
]


export default function Buttons(props) {
  
  const { id } = props;
    
  const handlePress = async (category) => {
    console.log("category : ", category);
    console.log("id : ", id);
    const data = await fetch(`/api/new_category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category, id })
    });
  }

  
  return (
      <div className="tweetText">
        {buttons.map((item, i) => {
        return <button onClick={() => handlePress(item.category)}>{item.name}</button>
      })}
      </div>
      

  );
}
