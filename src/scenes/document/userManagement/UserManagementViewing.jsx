import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { tokens } from "../../../theme";

const UserManagementViewing = () => {
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
        Viewing and Editing Existing Users
      </Typography>
      <Box ml={3}>
        <Typography variant="body1" gutterBottom>
          <strong>1. Go to Manage Users</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Log in to the system and open the Dashboard.</li>
            <li>In the left-hand menu, select "Manage Access" and click on "View User."</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>2. View User List</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Browse the list of all users, including usernames, emails, roles, and status.</li>
            <li>Use the search bar or filters to find specific users.</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>3. Edit User Details</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Click on a user to view more details.</li>
            <li>Update the user's information (e.g., email, role, permissions).</li>
            <li>Save the changes to update the user's profile.</li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default UserManagementViewing;
