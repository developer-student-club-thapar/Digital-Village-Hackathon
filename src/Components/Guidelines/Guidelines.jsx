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
                The hackathon is going to be conducted in hybrid mode (both
                online and offline) is open to Universities/Colleges across the
                globe. Students of Thapar Institute of Engineering and
                Technology are only eligible for offline hack.
              </p>
            </li>
            <li>
              <p>It is a 24 hour hackathon.</p>
            </li>
            <li>
              <p>
                Refreshments/meals should be provided to all the offline
                participants.
              </p>
            </li>
            <li>
              <p>Online registrations are active till 17th March</p>
            </li>
            <li>
              <p>
                Teams interested to be a part of the offline hack must have to
                complete their Devfolio registrations latest by 15th March along
                with the Offline registrations procedure which will begin
                shortly.
              </p>
            </li>
            <li>
              <p>
                It is an open for all hackathon, teams can be formed from
                different colleges as well but for experiencing the offline
                hack, it is mandatory that all members of the team are from TIET
                only.
              </p>
            </li>
            <li>
              <p>
                Duration of the hackathon is from 19th March 2022, 2 p.m. IST to
                20th March 2022, 2 p.m. IST
              </p>
            </li>
            <li>
              <p>Team size can vary between 1 to 4 members.</p>
            </li>
            <li>
              <p>Submission date of solutions- 20th March 2022.</p>
            </li>
            <li>
              <p>
                Each team needs to select at least one problem statement. The
                last problem statement involves Open Innovation in Agriculture!
              </p>
            </li>
            <li>
              <p>There is no registration fee.</p>
            </li>
            <li>
              <p>
                All participants are requested to join Google developers Student
                Club's Discord Server since all the important information will
                be shared there. Join our{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    color: "rgb(8, 189, 4)",
                    // "& :hover": {
                    // },
                  }}
                >
                  <a href="https://discord.gg/E9ZRENb">discord</a>
                </span>
                .
              </p>
            </li>
          </ul>
          <span style={{ margin: "0 1rem" }}>
            Please note:{"  "} Offline Registrations will begin soon, stay tuned
            to our social media handles for further notifications.
          </span>
        </div>
      </div>
    </div>
  );
}
