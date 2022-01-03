import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import { Tab, Nav, Col, Row } from "react-bootstrap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ padding: "0px 3px 3px 35px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: "transparent",
  },
}));

export default function IndexTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="primary"
        // textColor="warning"
      >
        <Tab label="Our Story" {...a11yProps(0)} />
        <Tab label="Our Adventages" {...a11yProps(1)} />
        <Tab label="Quarry Stone" {...a11yProps(2)} />
        <Tab label="Production" {...a11yProps(3)} />
        <Tab label="Shipping and Packaging" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h3>Masuk Sini</h3>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>

    // <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    //   <Row>
    //     <Col sm={3}>
    //       <Nav variant="pills" className="flex-column">
    //         <Nav.Item>
    //           <Nav.Link eventKey="first">Tab 1</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="second">Tab 2</Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </Col>
    //     <Col sm={9}>
    //       <Tab.Content>
    //         <Tab.Pane eventKey="first">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
    //           ratione maiores accusantium voluptatibus quas labore voluptates
    //           distinctio. Sed, dicta praesentium quo quia obcaecati sequi
    //           maiores aperiam voluptatum pariatur, sunt consequuntur!
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="second">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
    //           dolor atque in. Vitae sunt ipsam quis beatae, blanditiis harum a
    //           voluptate, asperiores animi atque at perspiciatis! Obcaecati
    //           explicabo minus sequi!
    //         </Tab.Pane>
    //       </Tab.Content>
    //     </Col>
    //   </Row>
    // </Tab.Container>
  );
}
