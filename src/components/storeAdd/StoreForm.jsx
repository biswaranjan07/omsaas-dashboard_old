import { Box, Button, TextField, InputAdornment, MenuItem, Typography, Tabs, Tab, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../Header";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimerOffIcon from "@mui/icons-material/TimerOff";
import LanguageIcon from "@mui/icons-material/Language";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StoreIcon from "@mui/icons-material/Store";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import RestoreIcon from '@mui/icons-material/Restore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// List of timezones
const timezones = [
  "UTC",
  "GMT",
  "EST",
  "CST",
  "MST",
  "PST",
  "IST",
  "CET",
  "EET",
  "AST",
  "HST",
  // Add other timezones as needed
];

// List of operational statuses
const operationalStatuses = ["True", "False"];

// Days of the week
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const StoreForm = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [selectedTab, setSelectedTab] = useState(0);

  const [store, setStore] = useState({
    storeName: "",
    storeStartTime: "",
    storeEndTime: "",
    timezone: "",
    storeOperationalStatus: "",
    storeCalendar: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: ""
    },
    inflow: {
      purchaseOrder: "",
      stockTransfer: ""
    },
    outflow: {
      stockTransfer: "",
      salvage: "",
      sales: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (daysOfWeek.includes(name)) {
      setStore((prevStore) => ({
        ...prevStore,
        storeCalendar: {
          ...prevStore.storeCalendar,
          [name]: value
        }
      }));
    } else if (["purchaseOrder", "stockTransfer", "salvage", "sales"].includes(name)) {
      const tab = selectedTab === 0 ? "inflow" : "outflow";
      setStore((prevStore) => ({
        ...prevStore,
        [tab]: {
          ...prevStore[tab],
          [name]: value
        }
      }));
    } else {
      setStore((prevStore) => ({
        ...prevStore,
        [name]: value,
      }));
    }
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/v1/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert("Store added successfully");
      } else {
        alert("Failed to add store");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <Box m="20px">
      <Header subtitle="Basic Details" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={store}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Store Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <StoreIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.storeName}
                name="storeName"
                error={!!touched.storeName && !!errors.storeName}
                helperText={touched.storeName && errors.storeName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="time"
                label="Start Time"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccessTimeIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.storeStartTime}
                name="storeStartTime"
                error={!!touched.storeStartTime && !!errors.storeStartTime}
                helperText={touched.storeStartTime && errors.storeStartTime}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="time"
                label="End Time"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TimerOffIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.storeEndTime}
                name="storeEndTime"
                error={!!touched.storeEndTime && !!errors.storeEndTime}
                helperText={touched.storeEndTime && errors.storeEndTime}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                select
                label="Timezone"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.timezone}
                name="timezone"
                error={!!touched.timezone && !!errors.timezone}
                helperText={touched.timezone && errors.timezone}
                sx={{ gridColumn: "span 2" }}
              >
                {timezones.map((timezone) => (
                  <MenuItem key={timezone} value={timezone}>
                    {timezone}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                select
                label="Operational Status"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CheckCircleOutlineIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.storeOperationalStatus}
                name="storeOperationalStatus"
                error={!!touched.storeOperationalStatus && !!errors.storeOperationalStatus}
                helperText={touched.storeOperationalStatus && errors.storeOperationalStatus}
                sx={{ gridColumn: "span 2" }}
              >
                {operationalStatuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box mt="20px">
              <Header subtitle="Store Calendar" />
              <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap="10px" mt="10px">
                {daysOfWeek.map((day) => (
                  <Field
                    as={TextField}
                    key={day}
                    fullWidth
                    variant="filled"
                    select
                    label={day}
                    name={`storeCalendar.${day}`}
                    value={values.storeCalendar[day]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={!!touched.storeCalendar?.[day] && !!errors.storeCalendar?.[day]}
                    helperText={touched.storeCalendar?.[day] && errors.storeCalendar?.[day]}
                  >
                    {operationalStatuses.map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </Field>
                ))}
              </Box>
            </Box>
            <Box mt="20px">
              <Header subtitle="Store Configuration" />
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                textColor="inherit"
                indicatorColor="primary"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: theme.palette.primary.main,
                  },
                  "& .MuiTab-root": {
                    color: theme.palette.mode === 'dark' ? '#ffffff' : 'inherit',
                    fontWeight: 'normal',
                  },
                  "& .MuiTab-root.Mui-selected": {
                    fontWeight: 'bold',
                    color: theme.palette.mode === 'dark' ? '#ffffff' : theme.palette.primary.main,
                  }
                }}
              >
                <Tab label="Inflow" />
                <Tab label="Outflow" />
              </Tabs>
              <Box display="grid" gridTemplateColumns={`repeat(${selectedTab === 0 ? 2 : 3}, 1fr)`} gap="10px" mt="10px">
                {selectedTab === 0 && (
                  <>
                    <Field
                      as={TextField}
                      fullWidth
                      variant="filled"
                      select
                      label="Purchase Order"
                      name="inflow.purchaseOrder"
                      value={values.inflow.purchaseOrder}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.inflow?.purchaseOrder && !!errors.inflow?.purchaseOrder}
                      helperText={touched.inflow?.purchaseOrder && errors.inflow?.purchaseOrder}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocalShippingIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {operationalStatuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Field>
                    <Field
                      as={TextField}
                      fullWidth
                      variant="filled"
                      select
                      label="Stock Transfer"
                      name="inflow.stockTransfer"
                      value={values.inflow.stockTransfer}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.inflow?.stockTransfer && !!errors.inflow?.stockTransfer}
                      helperText={touched.inflow?.stockTransfer && errors.inflow?.stockTransfer}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <InventoryIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {operationalStatuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Field>
                  </>
                )}
                {selectedTab === 1 && (
                  <>
                    <Field
                      as={TextField}
                      fullWidth
                      variant="filled"
                      select
                      label="Stock Transfer"
                      name="outflow.stockTransfer"
                      value={values.outflow.stockTransfer}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.outflow?.stockTransfer && !!errors.outflow?.stockTransfer}
                      helperText={touched.outflow?.stockTransfer && errors.outflow?.stockTransfer}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <InventoryIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {operationalStatuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Field>
                    <Field
                      as={TextField}
                      fullWidth
                      variant="filled"
                      select
                      label="Salvage"
                      name="outflow.salvage"
                      value={values.outflow.salvage}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.outflow?.salvage && !!errors.outflow?.salvage}
                      helperText={touched.outflow?.salvage && errors.outflow?.salvage}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <RestoreIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {operationalStatuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Field>
                    <Field
                      as={TextField}
                      fullWidth
                      variant="filled"
                      select
                      label="Sales"
                      name="outflow.sales"
                      value={values.outflow.sales}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.outflow?.sales && !!errors.outflow?.sales}
                      helperText={touched.outflow?.sales && errors.outflow?.sales}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <ShoppingCartIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {operationalStatuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Field>
                  </>
                )}
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Store
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  storeName: yup.string().required("required"),
  storeStartTime: yup.string().required("required"),
  storeEndTime: yup.string().required("required"),
  timezone: yup.string().required("required"),
  storeOperationalStatus: yup.string().required("required"),
  storeCalendar: yup.object().shape({
    Monday: yup.string().required("required"),
    Tuesday: yup.string().required("required"),
    Wednesday: yup.string().required("required"),
    Thursday: yup.string().required("required"),
    Friday: yup.string().required("required"),
    Saturday: yup.string().required("required"),
    Sunday: yup.string().required("required")
  }),
  inflow: yup.object().shape({
    purchaseOrder: yup.string().required("required"),
    stockTransfer: yup.string().required("required")
  }),
  outflow: yup.object().shape({
    stockTransfer: yup.string().required("required"),
    salvage: yup.string().required("required"),
    sales: yup.string().required("required")
  })
});

export default StoreForm;
