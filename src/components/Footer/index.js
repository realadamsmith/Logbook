import { Link, useHistory } from "react-router-dom";
import React from "react";
import "./styles.scss";
import { firestore } from "./../../Firebase/config.js";
import { collection, addDoc } from "firebase/firestore";


const Footer = () => {
  const history = useHistory();

  const subscriberRef = collection(firestore, "subscribers");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      email: e.target.email.value,
      name: e.target.name.value,
    };
    addDoc(subscriberRef, form);
    alert("Check your email to confirm signup.");
  }

  return (
    <footer className="footer">
      <div className="Midwrap">
        <div class="navFooterLinkCol">
          <div class="navFooterColHead">More Projects</div>
          <ul>
            <li class="nav_first">
              <a
                href="https://github.com/realadamsmith"
                class="nav_first"
              >
                My Github
              </a>
            </li>
            <li>
              <a onClick={() => history.push("/CompanyPage")} class="nav_first">
                Empty
              </a>
            </li>

            <li>
              <a onClick={() => history.push("/CompanyPage")} class="nav_first">
                Empty
              </a>
            </li>
            <li>
              <a onClick={() => history.push("/CompanyPage")} class="nav_first">
                Empty
              </a>
            </li>
          </ul>
        </div>
        <div class="navFooterLinkCol">
          <div class="navFooterColHead">Hobby Groups</div>
          <ul>
            
            <li>
              <a onClick={() => history.push("/SellingSuccessfully")} class="nav_first">
                To be determined
              </a>
            </li>
            <li>
              <a href="https://thesoda.io/" class="nav_first">
                SODA Alumni
              </a>
            </li>
          </ul>
        </div>
        <div class="navFooterLinkCol">
          <div class="navFooterColHead">Values I Align With</div>
          <ul>
            <li>
              <a
                href="https://www.globalshapers.org/impact/themes/sustainable-development"
                class="nav_first"
              >
                Economic, Social, and Governance
              </a>
            </li>
            <li>
              <a
                href="https://www.globalshapers.org/impact/themes/sustainable-development"
                class="nav_first"
              >
                Sustainability
              </a>
            </li>
          </ul>
        </div>
        <div class="navFooterLinkCol navAccessibility">
          <div class="navFooterColHead">Subscribe to emails from Me</div>
          <form onSubmit={(e) => handleSubmit(e)}>
          <ul>
            <div>
              <input className="inputCSS" placeholder="Full Name" name="name" type="text" /> 
              </div>
              <div>
              <input className="inputCSS" placeholder="Email" name="email" type="email" />
              </div>

              <button className="inputBCSS" type="submit" >Sign Up</button>
            
          </ul>
          </form>
        </div>
      </div>
      <div className="Bottomwrap">
        <p>
          Copyright © 2022, UNI, LLC
          <Link to="/ConditionsOfUse"> Conditions of Use</Link> |
          <Link to="/PrivacyNotice"> Privacy Notice</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
