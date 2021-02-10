import React, { useState, useEffect } from "react";

import styles from "./ErrorMsg.module.scss";

import { Close } from "@material-ui/icons";

const ErrorMsg = ({ msg }) => {
  const [showError, setShowError] = useState(true);

  useEffect(() => {
    setShowError(true);
  }, [msg]);

  const clickHandler = () => setShowError(false);
  return (
    <>
      {showError && (
        <div className={styles.msgDiv}>
          {msg} <Close className={styles.closeIcon} onClick={clickHandler} />
        </div>
      )}
    </>
  );
};

export default ErrorMsg;
