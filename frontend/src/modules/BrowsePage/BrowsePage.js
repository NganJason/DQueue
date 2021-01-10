import { Backdrop, StylesProvider } from "@material-ui/core";
import React, { useState } from "react";
import CardGrid from "../../common/modules/CardGrid/CardGrid";
import SectionTitle from "../../common/modules/SectionTitle/SectionTitle";
import { items } from "../../constants/tempDB";
import FilterBar from "./FilterBar/FilterBar";
import FilterBoard from "./FilterBoard/FilterBoard";
import styles from "./BrowsePage.module.scss";

const BrowsePage = () => {
  const [popOverAnchor, setPopOverAnchor] = useState(null);

  return (
    <div>
      <SectionTitle title="Say no to queuing" />
      <FilterBar setPopOverAnchor={setPopOverAnchor} />
      <Backdrop
        className={styles.backdrop}
        open={Boolean(popOverAnchor)}
      ></Backdrop>
      <FilterBoard
        popOverAnchor={popOverAnchor}
        setPopOverAnchor={setPopOverAnchor}
      />
      <CardGrid spacing="6" gridItems={items} justify="flex-start" />
    </div>
  );
};

export default BrowsePage;
