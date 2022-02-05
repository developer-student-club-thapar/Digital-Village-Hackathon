import React from 'react';
import "./CSS/Guidelines.css"
import guide from "./Static/guide-crop.png"

export default function Guidelines() {
  return <div className='guidelines'>
  <div className="guidelines-container">
    <h1 className='guidelines-heading'>Guidelines</h1>
    <div className="points">
      <ul>
        <li>
          <p>The hackathon is going to be conducted online and is open to students of all  colleges/universities 
          across India and Tel Aviv University.</p>
        </li>
        <li>
          <p>Each team needs to register on the platform by --date--</p>
        </li>
        <li>
          <p>Duration of the hackathon is --start date-- to --end date--</p>
        </li>
        <li>
          <p>Team size-</p>
        </li>
        <li>
          <p>Submission date of solutions- </p>
        </li>
        <li>
          <p>Each team needs to select at least one problem statement.</p>
        </li>
        <li>
          <p>There is no registration fee.</p>
        </li>
        <li>
          <p>Winning teams of each problem statement category will be awarded a prize money of Rs. 10,000.</p>         
        </li>
      </ul>
    </div>
    <div className="guidelines-img">
        <img src= {guide}/>
      </div>
    </div>
  </div>;
}
