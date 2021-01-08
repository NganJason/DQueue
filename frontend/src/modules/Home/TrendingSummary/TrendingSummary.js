import React from "react";
import CardGrid from "../../../common/modules/CardGrid/CardGrid";
import PageNumSel from "../../../common/modules/PageNumSel/PageNumSel";

const tempItem = {
  description: "Interesting facts about this restaurant",
  title: "Nice Food",
  queueButton: true,
  infoButton: true,
  image:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80",
};

const tempItemsForCardGrid = [tempItem, tempItem, tempItem, tempItem, tempItem];

export default function TrendingSummary(props) {
  return (
    <>
      <CardGrid
        spacing="6"
        gridItems={tempItemsForCardGrid}
        justify="flex-start"
      />
      <PageNumSel />
    </>
  );
}
