import React from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import styles from "./CustomerCard.module.scss"

export default function CustomerCard(props){
    return(
        <>
            <Paper className={styles.customerCardContainer}  classes={{root: styles.paperRoot}}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={styles.customerDescriptionDiv}>
                            <Typography>
                                Name: Thanos
                            </Typography>
                            <Typography>
                                Pax: 1
                            </Typography>
                            <Typography>
                                Queue Time: 9:30am
                            </Typography>
                            <Typography>
                                Booking Time: 10:00am
                            </Typography>
                            <Typography>
                                Notified: No/Yes (1)
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={styles.buttonDiv}>
                            <Button variant="contained" className={styles.actionButton}>Notify</Button>
                            <Button variant="contained" className={styles.actionButton}>Entered</Button>
                            <Button variant="contained" className={styles.actionButton}>Cancel</Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}