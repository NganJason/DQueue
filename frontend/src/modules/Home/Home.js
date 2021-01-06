import React from "react";
import "./Home.scss";

import Header from "./Header/Header";
import CardGrid from "./CardGrid/CardGrid";
import SectionTitle from "./SectionTitle/SectionTitle";
import SearchBar from "./SearchBar/SearchBar";
import CategorySummary from "./CategorySummary/CategorySummary";

export default function Home(props) {
  return (
    <div>
      <Header />
      <div className="search-bar-div">
        <SearchBar />
      </div>
      <SectionTitle title="Categories" />
      <CategorySummary />
      <SectionTitle title="Trending Restaurants" />
      <CardGrid spacing="6" />
    </div>
  );
}
