import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockDataStoreDetails, mockDataProductDetails } from "../../data/mockData";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  MenuItem,
  Tabs,
  Tab,
  useTheme,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import TimerOffIcon from "@mui/icons-material/TimerOff";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import RestoreIcon from "@mui/icons-material/Restore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";

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

// Days of the week
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const StoreDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { id } = useParams();
  const navigate = useNavigate();
  const store = mockDataStoreDetails.find((store) => store.storeId === parseInt(id));

  const [selectedTab, setSelectedTab] = useState(0);

  if (!store) {
    return <Typography variant="h4">Store not found</Typography>;
  }

  const initialValues = {
    storeName: store.storeName,
    storeStartTime: store.storeStartTime,
    storeEndTime: store.storeEndtime,
    timezone: store.timezone,
    storeOperationalStatus: store.storeOperationalStatus,
    storeCalendar: store.storeCalendar,
    storeType: store.storeType,
  };

  const validationSchema = Yup.object({
    storeName: Yup.string().required("Required"),
    storeStartTime: Yup.string().required("Required"),
    storeEndTime: Yup.string().required("Required"),
    timezone: Yup.string().required("Required"),
    storeOperationalStatus: Yup.string().required("Required"),
    storeCalendar: Yup.object().shape({
      Monday: Yup.boolean().required("Required"),
      Tuesday: Yup.boolean().required("Required"),
      Wednesday: Yup.boolean().required("Required"),
      Thursday: Yup.boolean().required("Required"),
      Friday: Yup.boolean().required("Required"),
      Saturday: Yup.boolean().required("Required"),
      Sunday: Yup.boolean().required("Required"),
    }),
    storeType: Yup.object().shape({
      Inflow: Yup.object().shape({
        purchaseOrder: Yup.boolean().required("Required"),
        stockTransfer: Yup.boolean().required("Required"),
      }),
      Outflow: Yup.object().shape({
        stockTransfer: Yup.boolean().required("Required"),
        salvage: Yup.boolean().required("Required"),
        sales: Yup.boolean().required("Required"),
      }),
    }),
  });

  const handleSave = (values) => {
    // Handle save logic here, e.g., update the data source or make an API call
    console.log("Updated store data:", values);
    alert("Store details saved successfully!");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this store?");
    if (confirmDelete) {
      const updatedStoreList = [...mockDataStoreDetails];
      const index = updatedStoreList.findIndex((store) => store.storeId === parseInt(id));
      if (index !== -1) {
        updatedStoreList.splice(index, 1);
        alert("Store deleted successfully!");
        navigate("/stores");
      }
    }
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const inventoryDetails = mockDataProductDetails.flatMap((product) =>
    product.inventoryDetails
      .filter((detail) => detail.storeId === store.storeId)
      .map((detail) => ({
        productId: product.productId,
        productName: product.productName,
        inventory: detail.inventory,
      }))
  );

  const columns = [
    { field: "productId", headerName: "Product ID", flex: 1 },
    { field: "productName", headerName: "Product Name", flex: 1 },
    { field: "inventory", headerName: "Inventory", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header subtitle={`${store.storeName} Details`} />
      <Header subtitle={`Store ID: ${store.storeId}`} />
      {/*<Typography variant="h4" gutterBottom>
        {store.storeName} Details
      </Typography>
      <Typography variant="body1">
        <strong>Store ID:</strong> {store.storeId}
      </Typography>*/}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form>
            <Box mt="20px">
              <Header subtitle="Basic Details" />
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <Field
                  as={TextField}
                  name="storeName"
                  label="Store Name"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DriveFileRenameOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={touched.storeName && !!errors.storeName}
                  helperText={touched.storeName && errors.storeName}
                  sx={{ gridColumn: "span 4" }}
                />
                <Field
                  as={TextField}
                  name="storeStartTime"
                  label="Start Time"
                  type="time"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccessTimeIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={touched.storeStartTime && !!errors.storeStartTime}
                  helperText={touched.storeStartTime && errors.storeStartTime}
                  sx={{ gridColumn: "span 1" }}
                />
                <Field
                  as={TextField}
                  name="storeEndTime"
                  label="End Time"
                  type="time"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TimerOffIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={touched.storeEndTime && !!errors.storeEndTime}
                  helperText={touched.storeEndTime && errors.storeEndTime}
                  sx={{ gridColumn: "span 1" }}
                />
                <Field
                  as={TextField}
                  name="timezone"
                  label="Timezone"
                  fullWidth
                  variant="filled"
                  select
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LanguageIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleChange}
                  error={touched.timezone && !!errors.timezone}
                  helperText={touched.timezone && errors.timezone}
                  sx={{ gridColumn: "span 1" }}
                >
                  {timezones.map((timezone) => (
                    <MenuItem key={timezone} value={timezone}>
                      {timezone}
                    </MenuItem>
                  ))}
                </Field>
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      name="storeOperationalStatus"
                      checked={values.storeOperationalStatus === "True"}
                      onChange={(e) =>
                        handleChange({
                          target: {
                            name: e.target.name,
                            value: e.target.checked ? "True" : "False",
                          },
                        })
                      }
                      onBlur={handleBlur}
                      sx={{
                        color: colors.greenAccent[300],
                        "&.Mui-checked": {
                          color: colors.greenAccent[300],
                        },
                      }}
                    />
                  }
                  label={
                    <Box display="flex" alignItems="center">
                      <SettingsIcon sx={{ marginRight: 1 }} />
                      Operational Status
                    </Box>
                  }
                />
              </Box>
            </Box>
            <Box mt="20px">
              <Header subtitle="Store Calendar" />
              <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap="10px" mt="10px">
                {daysOfWeek.map((day) => (
                  <FormControlLabel
                    key={day}
                    control={
                      <Field
                        as={Checkbox}
                        name={`storeCalendar.${day}`}
                        checked={values.storeCalendar[day] === "True"}
                        onChange={(e) =>
                          handleChange({
                            target: {
                              name: e.target.name,
                              value: e.target.checked ? "True" : "False",
                            },
                          })
                        }
                        onBlur={handleBlur}
                        sx={{
                          color: colors.greenAccent[300],
                          "&.Mui-checked": {
                            color: colors.greenAccent[300],
                          },
                        }}
                      />
                    }
                    label={day}
                  />
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
                    color: colors.greenAccent[300], // Use green accent color for tabs
                    fontWeight: "normal",
                    textTransform: "none", // Use title case for tab labels
                  },
                  "& .MuiTab-root.Mui-selected": {
                    fontWeight: "bold",
                    color: colors.greenAccent[300],
                  },
                }}
              >
                <Tab label="Inflow" />
                <Tab label="Outflow" />
              </Tabs>
              <Box
                display="grid"
                gridTemplateColumns={`repeat(${selectedTab === 0 ? 2 : 3}, 1fr)`}
                gap="10px"
                mt="10px"
              >
                {selectedTab === 0 && (
                  <>
                    <FormControlLabel
                      control={
                        <Field
                          as={Checkbox}
                          name="storeType.Inflow.purchaseOrder"
                          checked={values.storeType.Inflow.purchaseOrder === "True"}
                          onChange={(e) =>
                            handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked ? "True" : "False",
                              },
                            })
                          }
                          onBlur={handleBlur}
                          sx={{
                            color: colors.greenAccent[300],
                            "&.Mui-checked": {
                              color: colors.greenAccent[300],
                            },
                          }}
                        />
                      }
                      label={
                        <Box display="flex" alignItems="center">
                          <LocalShippingIcon sx={{ marginRight: 1 }} />
                          Purchase Order
                        </Box>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Field
                          as={Checkbox}
                          name="storeType.Inflow.stockTransfer"
                          checked={values.storeType.Inflow.stockTransfer === "True"}
                          onChange={(e) =>
                            handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked ? "True" : "False",
                              },
                            })
                          }
                          onBlur={handleBlur}
                          sx={{
                            color: colors.greenAccent[300],
                            "&.Mui-checked": {
                              color: colors.greenAccent[300],
                            },
                          }}
                        />
                      }
                      label={
                        <Box display="flex" alignItems="center">
                          <InventoryIcon sx={{ marginRight: 1 }} />
                          Stock Transfer
                        </Box>
                      }
                    />
                  </>
                )}
                {selectedTab === 1 && (
                  <>
                    <FormControlLabel
                      control={
                        <Field
                          as={Checkbox}
                          name="storeType.Outflow.stockTransfer"
                          checked={values.storeType.Outflow.stockTransfer === "True"}
                          onChange={(e) =>
                            handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked ? "True" : "False",
                              },
                            })
                          }
                          onBlur={handleBlur}
                          sx={{
                            color: colors.greenAccent[300],
                            "&.Mui-checked": {
                              color: colors.greenAccent[300],
                            },
                          }}
                        />
                      }
                      label={
                        <Box display="flex" alignItems="center">
                          <InventoryIcon sx={{ marginRight: 1 }} />
                          Stock Transfer
                        </Box>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Field
                          as={Checkbox}
                          name="storeType.Outflow.salvage"
                          checked={values.storeType.Outflow.salvage === "True"}
                          onChange={(e) =>
                            handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked ? "True" : "False",
                              },
                            })
                          }
                          onBlur={handleBlur}
                          sx={{
                            color: colors.greenAccent[300],
                            "&.Mui-checked": {
                              color: colors.greenAccent[300],
                            },
                          }}
                        />
                      }
                      label={
                        <Box display="flex" alignItems="center">
                          <RestoreIcon sx={{ marginRight: 1 }} />
                          Salvage
                        </Box>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Field
                          as={Checkbox}
                          name="storeType.Outflow.sales"
                          checked={values.storeType.Outflow.sales === "True"}
                          onChange={(e) =>
                            handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked ? "True" : "False",
                              },
                            })
                          }
                          onBlur={handleBlur}
                          sx={{
                            color: colors.greenAccent[300],
                            "&.Mui-checked": {
                              color: colors.greenAccent[300],
                            },
                          }}
                        />
                      }
                      label={
                        <Box display="flex" alignItems="center">
                          <ShoppingCartIcon sx={{ marginRight: 1 }} />
                          Sales
                        </Box>
                      }
                    />
                  </>
                )}
              </Box>
            </Box>
            <Box mt="20px">
              <Header subtitle="Inventory Details" />
              <Box
                sx={{
                  height: 200,
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  padding: "10px",
                  borderRadius: "4px",
                  marginTop: "10px",
                }}
              >
                <DataGrid
                  rows={inventoryDetails}
                  columns={columns}
                  pageSize={3}
                  rowsPerPageOptions={[3]}
                  disableSelectionOnClick
                  getRowId={(row) => row.productId}
                  sx={{
                    "& .MuiDataGrid-root": {
                      border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                      borderBottom: "none",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: colors.blueAccent[700],
                      borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                      backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                      borderTop: "none",
                      backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                      color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                      color: `${colors.grey[100]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer": {
                      display: "none",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="contained" color="secondary" type="submit">
                Save
              </Button>
              <Button variant="contained" color="secondary" onClick={handleDelete}>
                Delete
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default StoreDetails;
