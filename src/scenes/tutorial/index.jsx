import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Tutorial = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const tutorials = [
    {
      category: "Getting Started",
      items: [
        "Overview of the System",
        "Navigating the Dashboard",
        "User Account Setup"
      ]
    },
    {
      category: "Purchases",
      items: [
        "Placing a New Purchase Order",
        "Viewing and Managing Past Orders",
        "Adding and Managing Vendors",
        "Tracking Order Status",
        "Handling Returns and Cancellations"
      ]
    },
    {
      category: "Inventory Management",
      items: [
        "Adding New Products",
        "Updating Product Details",
        "Managing Stock Levels",
        "Conducting Inventory Audits",
        "Setting Up and Managing Warehouses",
        "Handling Low Stock Alerts"
      ]
    },
    {
      category: "Sales",
      items: [
        "Recording a New Sale",
        "Viewing Sales by Time",
        "Viewing Sales by Store",
        "Viewing Sales by Product",
        "Generating Sales Reports"
      ]
    },
    {
      category: "Reports and Analytics",
      items: [
        "Accessing Sales Reports",
        "Accessing Purchase Reports",
        "Customizing Reports",
        "Exporting Reports"
      ]
    },
    {
      category: "User Management",
      items: [
        "Adding New Users",
        "Assigning Roles to Users",
        "Updating User Permissions"
      ]
    },
    {
      category: "Settings and Customization",
      items: [
        "Customizing the Dashboard",
        "Setting Up Alerts and Notifications",
        "Configuring User-Specific Settings"
      ]
    },
    {
      category: "Advanced Features",
      items: [
        "Deferred Deep Links for Onboarding",
        "Automating Replenishment Orders",
        "Using Analytics for Demand Forecasting"
      ]
    },
    {
      category: "Troubleshooting and Support",
      items: [
        "Common Issues and Solutions",
        "Contacting Support",
        "Accessing Help and Documentation"
      ]
    }
  ];

  return (
    <Box m="20px">
      <Header title="Tutorial"/>
      <Box
        sx={{
          maxWidth: "800px", // Limit the width of the Accordion
          margin: "0 auto",  // Center the Accordion
        }}
      >
        {tutorials.map((tutorial, index) => (
          <Accordion
            key={index}
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
                {tutorial.category}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: theme.palette.background.default,
              }}
            >
              <List>
                {tutorial.items.map((item, idx) => (
                  <ListItem key={idx}>
                    <ListItemText
                      primary={
                        <Typography color={theme.palette.text.primary}>{item}</Typography>
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

export default Tutorial;
