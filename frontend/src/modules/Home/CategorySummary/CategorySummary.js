import React from "react";
import styles from "./CategorySummary.module.scss";
import ButtonGrid from "../../../common/modules/ButtonGrid/ButtonGrid";

const cuisines = [
  "American",
  "Mexican",
  "Italian",
  "Japanese",
  "Thai",
  "Indian",
];

export default function CategorySummary(props) {
  return (
    <div className={styles.categorySummary}>
      <ButtonGrid rows={2} cols={3} items={cuisines} />
    </div>
  );
}
