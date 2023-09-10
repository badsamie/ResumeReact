import React from "react";

function Navbar(props) {
  return (
    <div>
      <h1>
        𝓪𝓲𝓮𝓼<span> 𝓽𝓱𝓮 𝓬𝓻𝓮𝓪𝓽𝓸𝓻</span>
      </h1>

      <input id="burger" type="checkbox" />

      <label for="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#my-anchor">My projects</a>
          </li>
          <li>
            <a href="#">Follow me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
