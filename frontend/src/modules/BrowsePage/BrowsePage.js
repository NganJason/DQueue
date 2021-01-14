import React, { useState } from "react";
import { Backdrop } from "@material-ui/core";
import CardGrid from "../../common/modules/CardGrid/CardGrid";
import FilterBar from "./FilterBar/FilterBar";
import FilterPopOver from "./FilterPopOver/FilterPopOver";
import SectionTitle from "../../common/modules/SectionTitle/SectionTitle";
import { filterOptions, items } from "../../constants/tempDB";
import styles from "./BrowsePage.module.scss";

const getFilterState = (filterOptions) => {
  let filterState = {};

  Object.keys(filterOptions).map((categories) => {
    filterOptions[categories].map((option) => {
      filterState[option] = false;
    });
  });

  return filterState;
};

const BrowsePage = () => {
  const [popOverAnchor, setPopOverAnchor] = useState(null);
  const [filterState, setFilterState] = useState(getFilterState(filterOptions));

  const updateFilter = (filterOption, selected) => {
    return setFilterState({ ...filterState, [filterOption]: selected });
  };

  return (
    <div>
      <SectionTitle title="Say no to queuing" />
      <FilterBar
        filterState={filterState}
        setPopOverAnchor={setPopOverAnchor}
        updateFilter={updateFilter}
      />
      <Backdrop
        open={Boolean(popOverAnchor)}
        className={styles.backdrop}
      ></Backdrop>
      <FilterPopOver
        filterState={filterState}
        popOverAnchor={popOverAnchor}
        setPopOverAnchor={setPopOverAnchor}
        updateFilter={updateFilter}
      />
      <CardGrid justify="flex-start" spacing="6" gridItems={items} />
    </div>
  );
};

export default BrowsePage;
