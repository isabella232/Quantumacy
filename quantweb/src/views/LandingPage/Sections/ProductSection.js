import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What is Quantumacy?</h2>
          <h5 className={classes.description}>
            Quantumacy (short for Quantum Privacy) is a project funded by the
            openQKD project and the European Commission to investigate the use
            of QKD, homomorphic encryption, and deep learning to implement
            secure data anlytics workflows.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Data Analytics"
              description="Execure Machine Learning, Deep Learning and Data Mining workloads across aggragated of distributed datasets."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Quantum Key Distribution"
              description="Use secure keys generated by simulated and real QKD links to exchange data and secure communication across services."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
            <a href="/qkd">More Info</a>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Encryption"
              description="Use state-of-the-art homomorphic encryption tools to encrypt data and analyse it without revelaing its content."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
