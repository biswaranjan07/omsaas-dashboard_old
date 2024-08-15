import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { tokens } from "../../../theme";

const UserManagementPasswordReset = () => {
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
        Resetting User Passwords
      </Typography>
      <Box ml={3}>
        <Typography variant="body1" gutterBottom>
          <strong>1. Go to Manage Users</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Log in to the system and open the Dashboard.</li>
            <li>In the left-hand menu, navigate to "Manage Access" and click on "View User."</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>2. Select the User</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Browse the list of users and select the user whose password needs to be reset.</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>3. Reset the Password</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Click on the "Reset Password" button.</li>
            <li>Enter the new password and confirm it.</li>
            <li>Save the changes to update the user's password.</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>4. Notify the User</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>An automated email will be sent to the user with their new password.</li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default UserManagementPasswordReset;
