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
        
        <h2 className="textWhite">Democrats For Israel</h2>
      

        <h3 className="textWhite">Our principles</h3>
        <p className="textWhite">2. The Democratic party <Link to="/seemore/einat"><span style={{ color: "white", fontWeight: "bold"}}> fundamentally misunderstands</span></Link> the conflict. It has abandoned Israel in one of its most challenging moments in its history in a way that is both disheartening and dangerous.</p>
        <Link key={categories[1].subcategories[0].category} to={`/category/${categories[1].subcategories[0].name}`} state={{ name: categories[1].subcategories[0].name, category: categories[1].subcategories[0].category, subcategories: categories[1].subcategories }}><p className="textWhite">3. At least 32 Americans were killed on Oct. 7, and six remain hostages in Gaza. There were 1,200 people sadistically brutalized and killed, and 246 people taken hostage.</p></Link>
        <Link key={categories[8].subcategories[0].category} to={`/category/${categories[8].subcategories[0].name}`} state={{ name: categories[8].subcategories[0].name, category: categories[8].subcategories[0].category, subcategories: categories[8].subcategories }}><p className="textWhite">4. Too many Democrats have succumbed to propganda and lies. For example, Democrats including the president have repeatedly used Hamas-supplied figures to discuss casualty figures, numbers that have been proven false from multiple perpectives. There are dozens of other examples. See more here.</p></Link>
        <p className="textWhite">5. Israel deserves the Democratic Party's full and unwavering support as it conducts this war in the fashion it deems necessary to secure its borders, free the hostages, and prevent another attack like it suffered on Oct. 7 from ever occuring again.</p>
        <Link key={categories[10].subcategories[0].category} to={`/category/${categories[10].subcategories[0].name}`} state={{ name: categories[10].subcategories[0].name, category: categories[10].subcategories[0].category, subcategories: categories[10].subcategories }}><p className="textWhite">6. The Democratic Party's hostility to Israel is legitimizing left-wing anti-Semitism (under the acceptable banner of "anti-Zionism") and pro-Hamas protestors — an ugly and dangerous precedent.</p></Link>
        <p className="textWhite">7. The Democratic Party is no longer a welcome place for Jewish Americans.</p>

        <h3 className="textWhite">Our platform</h3>
        <p className="textWhite">1. We are Democrats who can no longer tolerate the hostility and madness of the Democratic Party toward Israel. We withhold our vote for all Democrats this year, 2024.</p>


        {/* Code here: https://www.w3schools.com/howto/howto_css_responsive_form.asp */}
        <form action="https://docs.google.com/forms/d/e/1FAIpQLScdrvqCIZdFUzwfgChUgnrRfqGksVcyYrDcIBdIBDeGgZ8Owg/formResponse">
          <div className="textWhite">Our goal is to have at least one member in every Congressional district. Join us.</div>
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
          <div className="row">
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
          </div>
          <div className="row">
            <div className="col-75">
              <input type="text" id="entry.1281150751" name="entry.1281150751" placeholder="Zip Code (required)" />
            </div>
          </div>
          <div className="row">
            <div className="col-75">
              <textarea id="entry.1565506221" name="entry.1565506221" placeholder="Message (optional)" style={{height:200}}></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
        
        
        
        
        
      
        
        
      <div className="gridOuter2">
        
        { categories.map((item, i) => {
          return ( i < 7 ?
              <div className={item.xs === 4 ? "gridItem4" : "gridItem8"} key={item.category}>
                <Link to={`/category/${item.name}`} state={{ name: item.name, category: item.category, subcategories: item.subcategories }}>
                  <CategoryHomepage category={ item.category } name={ item.name } />
                </Link>
              </div>
              :
              <div className="gridItem12" key={ item.category } xs={ item.xs}>
                <Link key={item.category} to={`/category/${item.category}`} state={{ name: item.name, category: item.category, subcategories: item.subcategories }}>
                  <h3 className="homepageText">{ item.name }</h3>
                </Link>
                {item.subcategories.map((subcategory, j) => {
                  return (
                    <Link key={subcategory.category} to={`/category/${subcategory.name}`} state={{ name: subcategory.name, category: subcategory.category, subcategories: item.subcategories }}>
                      <div className="homepageText">{subcategory.name}</div>
                    </Link>
                  )
                })}
              </div>
          )
        })}
        <p className="gridItem12">Hostages, fallen soldiers, victims of the Oct. 7 attack nor anyone else has specifically endorsed — nor been asked to endorse — the views expressed on this site. Any view expressed on the site is that of the authors themselves.</p>

        
      </div>
    </div>
    </div>
  );
}
export default Home;