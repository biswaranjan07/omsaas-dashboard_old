import React from "react";
import { Box, Typography, useTheme, Divider, Paper, List, ListItem } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const KeyFeaturesAndBenefits = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Key Features and Benefits" subtitle="Detailed description of OMSaaS features and their benefits" />
      <Paper
        sx={{
          maxWidth: "800px", // Limit the width of the content
          margin: "0 auto",  // Center the content
          padding: "20px",
          backgroundColor: colors.primary[400], // Subtle background color for better separation
          borderRadius: "8px",
        }}
        elevation={3}
      >
        <Typography variant="h5" color={theme.palette.text.primary} gutterBottom>
          Key Features and Benefits
        </Typography>
        <List sx={{ paddingLeft: "20px" }}>
          <ListItem>
            <Typography variant="body1" color={theme.palette.text.secondary} paragraph>
              <strong>Order Management</strong>: Easily create, track, and manage purchase and sales orders. The system allows for real-time tracking of order status, from creation to fulfillment. This ensures that orders are processed efficiently and accurately, reducing the risk of errors and delays. Automated notifications keep all relevant parties informed about order status changes, improving communication and coordination.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" color={theme.palette.text.secondary} paragraph>
              <strong>Purchases</strong>:
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>All Orders</strong>: View and manage all purchase orders in one place, providing a comprehensive overview of your procurement activities.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>Pending Orders</strong>: Keep track of orders that are yet to be fulfilled, ensuring timely follow-ups and minimizing delays.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>Vendors</strong>: Manage your vendor relationships by keeping all vendor information and interactions in one centralized location.
                  </Typography>
                </ListItem>
              </List>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" color={theme.palette.text.secondary} paragraph>
              <strong>Inventory Management</strong>:
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>Transfer Stock</strong>: Manage the transfer of stock between different warehouses and stores, ensuring optimal inventory levels across locations.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>Adjust Stock</strong>: Perform inventory audits and adjustments to keep your stock levels accurate and up-to-date.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>Stores</strong>: Monitor and manage inventory levels at individual store locations, optimizing stock distribution and availability.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>Products</strong>: Maintain detailed information on all products, including descriptions, SKUs, and stock levels, to ensure accurate inventory management.
                  </Typography>
                </ListItem>
              </List>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" color={theme.palette.text.secondary} paragraph>
              <strong>Sales Management</strong>:
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>Sales Orders</strong>: Track and manage all sales orders, from creation to fulfillment, ensuring timely and accurate order processing.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>Promotions</strong>: Create and manage promotional campaigns to boost sales and attract new customers.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>Customers</strong>: Maintain detailed customer profiles and track interactions to enhance customer service and satisfaction.
                  </Typography>
                </ListItem>
              </List>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" color={theme.palette.text.secondary} paragraph>
              <strong>Reports and Analytics</strong>:
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>Dashboard</strong>: View key performance indicators and metrics in one centralized dashboard, providing a comprehensive overview of your business operations.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>Create Alert</strong>: Set up alerts to notify you of critical events or changes, ensuring timely responses to important issues.
                  </Typography>
                </ListItem>
              </List>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" color={theme.palette.text.secondary} paragraph>
              <strong>Manage Access</strong>:
              <List sx={{ paddingLeft: "20px" }}>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>Add User</strong>: Easily add new users to the system and assign roles and permissions based on their responsibilities.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2" color={theme.palette.text.secondary}>
                    <strong>View User</strong>: Monitor user activity and manage user profiles to ensure security and compliance.
                  </Typography>
                </ListItem>
              </List>
            </Typography>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default KeyFeaturesAndBenefits;
