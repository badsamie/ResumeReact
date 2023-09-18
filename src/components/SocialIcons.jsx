import React from "react";

const SocialIcons = () => {
  return (
    <div className="footer-social-icons">
      <h4 className="_14">Follow me on</h4>
      <ul className="social-icons">
        <li>
          <a href="https://www.instagram.com/" className="social-icon">
            {" "}
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://web.telegram.org/a/" className="social-icon">
            {" "}
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://web.telegram.org/a/" className="social-icon">
            {" "}
            <i className="fa fa-rss"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" className="social-icon">
            {" "}
            <i className="fa fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://ru.linkedin.com/" className="social-icon">
            {" "}
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/badsamie" className="social-icon">
            {" "}
            <i className="fa fa-github"></i>
          </a>
        </li>
      </ul>
      <form class="form">
        <h2>CONTACT US</h2>
        <p type="Name:">
          <input placeholder="Write your name here.."></input>
        </p>
        <p type="Email:">
          <input placeholder="Let us know how to contact you back.."></input>
        </p>
        <p type="Message:">
          <input placeholder="What would you like to tell us.."></input>
        </p>
        <button>Send Message</button>
        <div>
          <span class="fa fa-phone"></span>001 1023 567
          <span class="fa fa-envelope-o"></span> contact@company.com
        </div>
      </form>
    </div>
  );
};

export default SocialIcons;
