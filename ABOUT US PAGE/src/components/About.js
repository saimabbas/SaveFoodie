import React from 'react';
import fb_2 from "../images/food-bank-2.jpg";
import fb_1 from "../images/food_1.jpg";

function About() {
    return (
      <div className="about-section">
        <span>
          <div>
            <h3>About</h3>
            <p>
              Across the UK, an increasing number of people are experiencing
              situations where they have little to no money to purchase food and
              essentials. Benefits issues, unexpected costs, redundancy and long
              term health problems and other issues have created difficult,
              sometimes protracted situations that mean people need to access
              support from charities.
              <br />
              Using financial and food donations from across the community, the
              food bank aims to provide at least 3 days worth of food to a
              household.
              <br />
              <br />
              We understand that we only form one part of the community- based
              and national response that is required to deal with the issues we
              are seeing today around poverty, hunger and the numerous other
              problems that lead to people needing a food bank. We therefore
              seek to work closely with people who need food banks and any
              organisations that seek to help and understand people’s situations
              and the best ways to provide support.
            </p>
          </div>
          <img src={fb_2} alt="food - bank" />
        </span>
        <img src={fb_1} alt="food - bank" />
      </div>
    );
}

export default About
