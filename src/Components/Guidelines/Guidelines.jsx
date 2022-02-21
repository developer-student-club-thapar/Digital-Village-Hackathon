import React from "react";
import "./Guidelines.css";
import guide from "./Static/guide-vector.png";

export default function Guidelines() {
  return (
    <div className="guidelines" id="guidelines">
      <div className="guidelines-container">
        <h1
          className="guidelines-heading main-heading"
          data-content="Guidelines"
        >
          Guidelines
        </h1>
        <img className="guide-image" src={guide} />
        <div className="points">
          <ul>
            <li>
              <p>
                The hackathon is going to be conducted online and is open to
                students of all colleges/universities across India and Tel Aviv
                University.
              </p>
            </li>
            <li>
              <p>
                Each team leader needs to register using his/her email id on the
                platform by 15th March 2022.
              </p>
            </li>
            <li>
              <p>
                Duration of the hackathon is 19th March 2022, 9 a.m. to 20th
                March 2022, 9 a.m.
              </p>
            </li>
            <li>
              <p>Team size- 1 to 4 members.</p>
            </li>
            <li>
              <p>Submission date of solutions- 20th March 2022.</p>
            </li>
            <li>
              <p>Each team needs to select at least one problem statement.</p>
            </li>
            <li>
              <p>There is no registration fee.</p>
            </li>
            <li>
              <p>
                The submitted solution needs to be in the form of a zip file
                containing a code file and a corresponding write up (text file)
                explaining the solution, technology used,
                methodology/architecture used and anything that seems necessary
                to the team.{" "}
              </p>
            </li>
            <li>
              <p>
                Winning teams of each problem statement category will be awarded
                a prize money of Rs. 10,000.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
