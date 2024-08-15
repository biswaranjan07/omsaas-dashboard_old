import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { tokens } from "../../../theme";

const UserManagementPermissions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <Box m="20px">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{
            marginBottom: "20px",
            color: theme.palette.mode === 'dark' ? colors.grey[800] : colors.grey[100],
            backgroundColor: theme.palette.mode === 'dark' ? colors.grey[100] : colors.grey[800],
          '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? colors.grey[200] : colors.grey[900],
        },
        }}
      >
        Back
      </Button>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Setting User Permissions
      </Typography>
      <Box ml={3}>
        <Typography variant="body1" gutterBottom>
          <strong>1. Access Permissions</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Permissions define what actions a user can perform within the system.</li>
            <li>Permissions can be set during user creation or editing.</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>2. Module Access</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Select which modules the user can access (e.g., Purchases, Inventory, Sales) to tailor their access to their job requirements.</li>
            <li>Admins can customize which features are accessible to each role.</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>3. Saving Permissions</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Ensure all necessary permissions are set correctly.</li>
            <li>Click "Save" to apply the changes to the user's profile.</li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default UserManagementPermissions;
