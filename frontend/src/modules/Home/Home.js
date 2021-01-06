import React from "react";
import "./Home.scss";

import Header from "../../common/modules/Header/Header";
import CardGrid from "../../common/modules/CardGrid/CardGrid";
import SectionTitle from "../../common/modules/SectionTitle/SectionTitle";
import SearchBar from "./SearchBar/SearchBar";
import CategorySummary from "./CategorySummary/CategorySummary";

export default function Home(props) {
  return (
    <div>
      <Header />
      <SearchBar />
      <SectionTitle title="Categories" />
      <CategorySummary />
      <SectionTitle title="Trending Restaurants" />
      <CardGrid spacing="6" />
    </div>
  );
}