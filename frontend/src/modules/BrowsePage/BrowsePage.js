import { Backdrop, StylesProvider } from "@material-ui/core";
import React from "react";
import CardGrid from "../../common/modules/CardGrid/CardGrid";
import SectionTitle from "../../common/modules/SectionTitle/SectionTitle";
import { items } from "../../constants/tempDB";
import FilterBar from "./FilterBar/FilterBar";
import styles from "./BrowsePage.module.scss";

const BrowsePage = () => {
  return (
    <div>
      <SectionTitle title="Say no to queuing" />
      <FilterBar />
      <Backdrop className={styles.backdrop} open={false}></Backdrop>
      <CardGrid spacing="6" gridItems={items} justify="flex-start" />
    </div>
  );
};

export default BrowsePage;
