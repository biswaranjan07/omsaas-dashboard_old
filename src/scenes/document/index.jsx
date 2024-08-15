import React,{ useState, useEffect } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";

const Documentation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [expanded, setExpanded] = useState(localStorage.getItem('expandedSection') || false);
  
  const handleAccordionChange = (section) => {
    setExpanded((prevExpanded) => {
      const newExpanded = prevExpanded === section ? false : section;
      localStorage.setItem('expandedSection', newExpanded);
      return newExpanded;
    });
  };
  
  const documentation = [
    {
      category: "Introduction",
      items: [
        { title: "Overview of OMSaaS", link: "/document/introduction" },
        { title: "Key Features and Benefits", link: "/document/keyfeatures" }
      ]
    },
    {
      category: "User Management",
      items: [
        { title: "Adding a New User", link: "/document/user-management-adding" },
        { title: "Viewing and Editing Existing Users", link: "/document/user-management-viewing" },
        { title: "User Roles and Permissions", link: "/document/user-management-roles-permissions" },
        { title: "Setting User Permissions", link: "/document/user-management-permissions" },
        { title: "Resetting User Passwords", link: "/document/user-management-password-reset" }
      ]
    },
    {
      category: "Store Management",
      items: [
        { title: "Configuring Store Settings", link: "#" },
        { title: "Linking Stores with Warehouses", link: "#" }
      ]
    },
    {
      category: "Inventory Management",
      items: [
        { title: "Configuring Inventory Settings", link: "#" },
        { title: "Permissions in Inventory Management", link: "#" }
      ]
    },
    {
      category: "Purchase Management",
      items: [
        { title: "Configuring Purchase Order Settings", link: "#" },
        { title: "Vendor Management Permissions", link: "#" }
      ]
    },
    {
      category: "Sales Management",
      items: [
        { title: "Configuring Sales Settings", link: "#" },
        { title: "Permissions in Sales Management", link: "#" }
      ]
    },
    {
      category: "Reporting and Analytics",
      items: [
        { title: "Overview of Available Reports", link: "#" },
        { title: "Customizing Reports", link: "#" },
        { title: "Exporting Data", link: "#" },
        { title: "Using Analytics for Decision Making", link: "#" }
      ]
    },
    {
      category: "Settings and Configuration",
      items: [
        { title: "Configuring System Settings", link: "#" },
        { title: "Customizing the Dashboard", link: "#" },
        { title: "Setting Up Alerts and Notifications", link: "#" }
      ]
    },
    {
      category: "Integration with Other Systems",
      items: [
        { title: "Overview of Available Integrations", link: "#" },
        { title: "Setting Up Integrations", link: "#" },
        { title: "Managing Integration Settings", link: "#" }
      ]
    },
    {
      category: "Troubleshooting and Support",
      items: [
        { title: "Common Issues and Solutions", link: "#" },
        { title: "Accessing Help and Documentation", link: "#" },
        { title: "Contacting Support", link: "#" }
      ]
    }
  ];

  return (
    <Box m="20px">
      <Header title="Documentation" subtitle="Comprehensive guide for configuring and managing OMSaaS" />
      <Box
        sx={{
          maxWidth: "800px", // Limit the width of the Accordion
          margin: "0 auto",  // Center the Accordion
        }}
      >
        {documentation.map((doc, index) => (
          <Accordion
            key={index}
            expanded={expanded === doc.category}
            onChange={() => handleAccordionChange(doc.category)}
            sx={{
              mb: 2,
              borderRadius: "8px",
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.background.paper,
              '&:before': {
                display: 'none',
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: theme.palette.action.hover,
                '& .MuiAccordionSummary-content': {
                  margin: '0',
                }
              }}
            >
              <Typography variant="h6" color={theme.palette.text.primary}>
                {doc.category}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: theme.palette.background.default,
              }}
            >
              <List>
                {doc.items.map((item, idx) => (
                  <ListItem key={idx} component={Link} to={item.link}>
                    <ListItemText
                      primary={
                        <Typography color={theme.palette.text.primary}>{item.title}</Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Documentation;
