import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";
import "../form.css";
import { categories, einat, sam } from "../constants.js";

import CategoryHomepage from "./homepage/CategoryHomepage.jsx";
import NonTweet from "./nonTweets/NonTweet.jsx";


const states = [
  "Select", "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"
]



const Home = () => {

  const handleClick = async () => {
    const response = await fetch(`/add_to_mongo`);
    const json = await response.json();

    console.log("json : ", json);
  }


  return (
    <div className="homePageWrapper">
      <div className="gridWrapper">
        
        <h2 className="textWhite">Pro-Israel Democrats Not Voting Democrat in 2024</h2>
      

        <h3 className="textWhite">Our principles</h3>
        <p className="textWhite">For decades, we were told that Israel was a bipartisan issue,  that both Democrats and Republicans were a pro-Israel party.</p>
        <p className="textWhite">Now, after a bloody massacre full of unspeakable atrocities, the Democratic Party's left wing and a sizeable portion of its base is openly anti-Israel.</p>
        <Link to="https://jinsa.org/joe-bidens-plan-for-a-palestinian-state-will-harm-america-and-israel/"><p className="textWhite">1. Pushing for unilateral American recognition of a Palestinian State, bypassing any negotiations with Israel (the longstanding American policy) and turning Oct. 7 into Palesetine's day of independence.</p></Link>
        <Link to="https://www.axios.com/2024/03/14/schumer-israel-netanyahu-speech-reaction"><p className="textWhite">2. Openly calling for the overthrow of the democratically elected government in a time of crisis and war -- unprecedented to do even among adversaries, let alone close allies at a time of crisis.</p></Link>
        <Link to="https://www.timesofisrael.com/white-house-reportedly-looking-into-holding-up-weapons-sales-to-pressure-israel/"><p className="textWhite">3. Threatening to withhold military aid against a genocidal enemy.</p></Link>
        <p className="textWhite">4. Moral equivocations, double-standards, and outright lies.</p>

        <h3 className="textWhite">Add Your Name</h3>
        <p className="textWhite">We are Pro-Israel Democrats and Democratic-leaning independents. We will <span style={{ fontWeight: "bold", textDecoration: "underline" }}>not</span> be voting Democrat in 2024.</p>


        {/* Code here: https://www.w3schools.com/howto/howto_css_responsive_form.asp */}
        <form action="https://docs.google.com/forms/d/e/1FAIpQLScdrvqCIZdFUzwfgChUgnrRfqGksVcyYrDcIBdIBDeGgZ8Owg/formResponse">
          <div className="row">
            <div className="col-75">
              <input type="text" id="entry.104868190" name="entry.104868190" placeholder="Name (required)" />
            </div>
          </div>
          <div className="row">
            <div className="col-75">
              <input type="text" id="entry.824866174" name="entry.824866174" placeholder="Email (required)" />
            </div>
          </div>
          {/* <div className="row">
            <div className="col-75">
              <input type="text" id="entry.984871732" name="entry.984871732" placeholder="Street Address" />
            </div>
          </div>
          <div className="row">
            <div className="col-75">
              <input type="text" id="entry.1042674983" name="entry.1042674983" placeholder="City" />
            </div>
          </div>
          <div className="row">
            <div className="col-75">
              <select id="entry.667205960" name="entry.667205960">
                {states.map((item, i) => <option id={item} value={item}>{item}</option> )}
              </select>
            </div>
          </div> */}
          <div className="row">
            <div className="col-75">
              <input type="text" id="entry.1281150751" name="entry.1281150751" placeholder="Zip Code (to know your Congressional district)" />
            </div>
          </div>
          <div className="row">
            <div className="col-75">
              <textarea id="entry.1565506221" name="entry.1565506221" placeholder="Message (optional)" style={{height:150}}></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-75">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}
export default Home;