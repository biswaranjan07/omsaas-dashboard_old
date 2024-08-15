import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { tokens } from "../../../theme";

const UserManagementRolesPermissions = () => {
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
        User Roles and Permissions
      </Typography>
      <Box ml={3}>
        <Typography variant="body1" gutterBottom>
          <strong>1. Understanding Roles</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li><strong>Admin:</strong> Full access to all system features and settings.</li>
            <li><strong>Manager:</strong> Access to manage users, view reports, and handle store settings.</li>
            <li><strong>Staff:</strong> Limited access to perform daily operations like sales and inventory management.</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>2. Assigning Permissions</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Select the role you want to assign to the user from the drop-down menu during user creation or editing.</li>
            <li>Roles determine the access level and permissions for each user within the system.</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>3. Customizing Permissions</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Admins can customize permissions for each role based on the specific needs of the organization.</li>
            <li>Navigate to the "Roles and Permissions" settings to modify access levels for different roles.</li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default UserManagementRolesPermissions;
