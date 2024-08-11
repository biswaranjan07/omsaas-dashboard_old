import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { tokens } from "../../../theme";

const UserManagementAdding = () => {
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
        Adding a New User
      </Typography>
      <Box ml={3}>
        <Typography variant="body1" gutterBottom>
          <strong>1. Go to Manage Users</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Log in to the system and open the Dashboard.</li>
            <li>In the left-hand menu, navigate to "Manage Access" and click on "Add User." This will open the user creation form.</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>2. Enter User Details</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li><strong>Username:</strong> A unique identifier for the user.</li>
            <li><strong>Email:</strong> The user's email address for communication and login purposes.</li>
            <li><strong>Role:</strong> Assign a role such as Admin, Manager, or Staff to define the user's access level.</li>
            <li><strong>Password:</strong> A secure password for the user.</li>
            <li><strong>Confirm Password:</strong> Re-enter the password to ensure accuracy.</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>3. Set Permissions</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Choose the appropriate permissions or access levels based on the user's role. Permissions determine what actions the user can perform within the system.</li>
            <li>Select which modules the user can access (e.g., Purchases, Inventory, Sales) to tailor their access to their job requirements.</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>4. Save and Confirm</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Click the “Save” button to add the new user. This action will create the user account with the specified details and permissions.</li>
            <li>A confirmation prompt will appear. Confirm the addition to finalize the process.</li>
            <li>Once confirmed, a success message will indicate that the user has been added successfully.</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>5. Notify the New User</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>An automated email will be sent to the new user containing their login details and a link to set up their profile. Ensure the user checks their email to complete their profile setup.</li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default UserManagementAdding;
