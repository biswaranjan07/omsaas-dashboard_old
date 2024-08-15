import React from "react";
import { Box, Typography, useTheme, Divider, Paper } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Overview = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Overview" />
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
          Introduction to OMSaaS
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary} paragraph>
          OMSaaS (Order Management System as a Service) is a comprehensive solution designed to streamline and automate the management of orders, inventory, and sales. It is ideal for retail shops, e-commerce platforms, and warehouses, providing an intuitive interface for efficient management. By centralizing all key processes, OMSaaS helps businesses improve efficiency, reduce errors, and enhance customer satisfaction.
        </Typography>
        <Divider sx={{ margin: "20px 0" }} />
        <Typography variant="h5" color={theme.palette.text.primary} gutterBottom>
          Real-Life Use Cases of an Inventory Management System
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary} paragraph>
          <strong>Retail Shops</strong>: Retailers can use OMSaaS to manage their stock levels in real-time, ensuring they never run out of popular items. With automated reorder points, retailers can maintain optimal inventory levels, reduce stockouts, and improve customer satisfaction.
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary} paragraph>
          <strong>E-commerce Platforms</strong>: OMSaaS integrates seamlessly with e-commerce platforms, allowing for efficient order processing and inventory management. Businesses can track their inventory across multiple sales channels, preventing overselling and ensuring accurate order fulfillment.
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary} paragraph>
          <strong>Warehouses</strong>: Warehouses benefit from OMSaaS by streamlining their inventory management processes. The system provides real-time visibility into stock levels, helps manage stock transfers between locations, and facilitates efficient picking and packing operations.
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary} paragraph>
          <strong>Manufacturers</strong>: Manufacturers can use OMSaaS to track raw materials and finished goods inventory. The system helps in managing production schedules, reducing lead times, and ensuring that the right materials are available when needed.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Overview;
