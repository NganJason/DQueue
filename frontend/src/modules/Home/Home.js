import React, { useEffect } from "react";
import styles from "./Home.module.scss";

import TrendingSummary from "./TrendingSummary/TrendingSummary";
import SectionTitle from "../../common/modules/SectionTitle/SectionTitle";
import SearchBar from "./SearchBar/SearchBar";
import CategorySummary from "./CategorySummary/CategorySummary";

import { setAuth } from "../../common/utils";

export default function Home(props) {
  useEffect(async () => {
    setAuth();
  }, []);

  return (
    <div>
      <SearchBar />
      <SectionTitle title="Categories" />
      <CategorySummary />
      <SectionTitle title="Trending Restaurants" />
      <TrendingSummary />
    </div>
  );
}
