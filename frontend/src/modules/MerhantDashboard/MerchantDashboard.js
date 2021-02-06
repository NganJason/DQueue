import React from "react";
import styles from "./MerchantDashboard.module.scss";
import { useWindowDimensions, mobileThreshold } from "../../common/utils";

import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"

import CustomerCard from "./CustomerCard/CustomerCard"

export default function MerchantDashboard(props) {
    const { width } = useWindowDimensions();
    const { params } = props.match;

    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Paper className={`${width <= mobileThreshold && styles.mobileQueueList} ${styles.restaurantNamePaper}`} elevation={3} square={width <= mobileThreshold}>
                <div className={styles.restaurantName}>
                    <Typography variant="h3">
                        {params.id}
                    </Typography>
                </div>
            </Paper>
            <Paper className={`${styles.queueListPaper} ${width <= mobileThreshold && styles.mobileQueueList}`} elevation={3} square={width <= mobileThreshold}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    orientation="vertical"
                    classes={{
                        root: styles.tabsRoot,
                        indicator: styles.tabsIndicator
                    }}
                >
                    <Tab label="Pax Size" disabled classes={{ root: styles.singleTabRoot, wrapper: styles.singleTabWrapper, disabled: styles.tabDisabled }} />
                    <Tab label="1 - 2 pax" classes={{ root: styles.singleTabRoot, wrapper: styles.singleTabWrapper }} />
                    <Tab label="3 - 4 pax" classes={{ root: styles.singleTabRoot, wrapper: styles.singleTabWrapper }} />
                    <Tab label="5 - 6 pax" classes={{ root: styles.singleTabRoot, wrapper: styles.singleTabWrapper }} />
                    <Tab label="> 6 pax" classes={{ root: styles.singleTabRoot, wrapper: styles.singleTabWrapper }} />
                </Tabs>
                <Grid container className={styles.customerCardContainer} justify="left">
                    <Grid item xs={12} lg={6}>
                        <CustomerCard />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <CustomerCard />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <CustomerCard />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}