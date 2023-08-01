import React from "react";
import SearchForm from "./../searchform";
import "./header.css";
import "./../../assets/images/Header.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="brand-title-button">
        <h1 className="brand-title">
          <span class="bold-text">netflix</span>roulette
        </h1>
        <button className="add-movie-button">+ ADD MOVIE</button>
      </div>
      <SearchForm />
    </div>
  );
};

export default Header;
