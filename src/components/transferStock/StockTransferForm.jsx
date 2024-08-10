import { Box, Button, TextField, InputAdornment, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../Header";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import StoreIcon from "@mui/icons-material/Store";
import StraightenIcon from "@mui/icons-material/Straighten";
import { mockDataProductDetails, mockDataStoreDetails, mockDataInventoryDetails } from "../../data/mockData";

// Extract unique store names, product names, and measurements from the mock data
const stores = [...new Set(mockDataStoreDetails.map((store) => store.storeName))];
const products = [...new Set(mockDataProductDetails.map((product) => product.productName))];
const measurements = [...new Set(mockDataProductDetails.map((product) => product.measurement))];
const transferTypes = ["Internal", "Salvage", "Others"];

const StockTransferForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // State to hold the measurement corresponding to the selected product
  const [selectedMeasurement, setSelectedMeasurement] = useState("");
  // State to track if the salvage price field should be displayed
  const [showSalvagePrice, setShowSalvagePrice] = useState(false);
  // State to track if the reason field should be displayed
  const [showReasonField, setShowReasonField] = useState(false);

  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/v1/stock-transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert("Stock transferred successfully");
      } else {
        alert("Failed to transfer stock");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  const handleProductChange = (event, setFieldValue) => {
    const productName = event.target.value;
    const selectedProduct = mockDataProductDetails.find((product) => product.productName === productName);

    // Update the form field and set the measurement state
    setFieldValue("transferProductName", productName);
    if (selectedProduct) {
      setFieldValue("measurement", selectedProduct.measurement);
      setSelectedMeasurement(selectedProduct.measurement);
    } else {
      setFieldValue("measurement", "");
      setSelectedMeasurement("");
    }
  };

  const handleTransferTypeChange = (event, setFieldValue) => {
    const transferType = event.target.value;
    setFieldValue("transferType", transferType);
    setShowSalvagePrice(transferType === "Salvage");
    setShowReasonField(transferType === "Others");
  };

  return (
    <Box m="20px">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{
          originStoreName: "",
          destinationStoreName: "",
          transferProductName: "",
          quantity: "",
          measurement: "",
          transferType: "",
          unitSalvagePrice: "",
          reason: "",
        }}
        validationSchema={stockTransferSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => {
          // Calculate the maximum quantity allowed based on the selected origin store and product
          const calculateMaxQuantity = () => {
            if (values.originStoreName && values.transferProductName) {
              const store = mockDataStoreDetails.find((s) => s.storeName === values.originStoreName);
              const product = mockDataProductDetails.find((p) => p.productName === values.transferProductName);
              
              if (store && product) {
                const inventoryDetail = mockDataInventoryDetails.find(
                  (inventory) => inventory.storeId === store.storeId && inventory.productId === product.productId
                );
                
                if (inventoryDetail) {
                  return inventoryDetail.inventory;
                }
              }
            }
            return null;
          };

          const maxQuantity = calculateMaxQuantity();

          return (
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                justifyContent="space-between"
                gap="30px"
                sx={{
                  flexDirection: isNonMobile ? "row" : "column",
                }}
              >
                <Box flex={1}>
                  <Header subtitle="Origin" />
                  <TextField
                    fullWidth
                    variant="filled"
                    select
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
                    value={values.originStoreName}
                    name="originStoreName"
                    error={!!touched.originStoreName && !!errors.originStoreName}
                    helperText={touched.originStoreName && errors.originStoreName}
                  >
                    {stores.map((store) => (
                      <MenuItem key={store} value={store}>
                        {store}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box flex={1}>
                  <Header subtitle="Destination" />
                  <TextField
                    fullWidth
                    variant="filled"
                    select
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
                    value={values.destinationStoreName}
                    name="destinationStoreName"
                    error={!!touched.destinationStoreName && !!errors.destinationStoreName}
                    helperText={touched.destinationStoreName && errors.destinationStoreName}
                  >
                    {stores.concat("Others").map((store) => (
                      <MenuItem key={store} value={store}>
                        {store}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Box>
              <Box mt="30px">
                <Header subtitle="Transfer Details" />
                <Box
                  display="flex"
                  flexDirection="column"
                  gap="20px"
                  mt="10px"
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    select
                    label="Product Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DriveFileRenameOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                    onBlur={handleBlur}
                    onChange={(e) => handleProductChange(e, setFieldValue)}
                    value={values.transferProductName}
                    name="transferProductName"
                    error={!!touched.transferProductName && !!errors.transferProductName}
                    helperText={touched.transferProductName && errors.transferProductName}
                  >
                    {products.map((product) => (
                      <MenuItem key={product} value={product}>
                        {product}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label="Quantity"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <StraightenIcon />
                        </InputAdornment>
                      ),
                    }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.quantity}
                    name="quantity"
                    error={!!touched.quantity && !!errors.quantity}
                    helperText={touched.quantity && errors.quantity}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    select
                    label="Measurement"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <StraightenIcon />
                        </InputAdornment>
                      ),
                    }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={selectedMeasurement || values.measurement}
                    name="measurement"
                    error={!!touched.measurement && !!errors.measurement}
                    helperText={touched.measurement && errors.measurement}
                    disabled={!selectedMeasurement}
                  >
                    {measurements.map((measurement) => (
                      <MenuItem key={measurement} value={measurement}>
                        {measurement}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    variant="filled"
                    select
                    label="Transfer Type"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DriveFileRenameOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                    onBlur={handleBlur}
                    onChange={(e) => handleTransferTypeChange(e, setFieldValue)}
                    value={values.transferType}
                    name="transferType"
                    error={!!touched.transferType && !!errors.transferType}
                    helperText={touched.transferType && errors.transferType}
                  >
                    {transferTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                  {showSalvagePrice && (
                    <TextField
                      fullWidth
                      variant="filled"
                      type="number"
                      label="Unit Salvage Price"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DriveFileRenameOutlineIcon />
                          </InputAdornment>
                        ),
                      }}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.unitSalvagePrice}
                      name="unitSalvagePrice"
                      error={!!touched.unitSalvagePrice && !!errors.unitSalvagePrice}
                      helperText={touched.unitSalvagePrice && errors.unitSalvagePrice}
                    />
                  )}
                  {showReasonField && (
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Reason"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DriveFileRenameOutlineIcon />
                          </InputAdornment>
                        ),
                      }}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.reason}
                      name="reason"
                      error={!!touched.reason && !!errors.reason}
                      helperText={touched.reason && errors.reason}
                    />
                  )}
                </Box>
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Transfer Stock
                </Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

const stockTransferSchema = yup.object().shape({
  originStoreName: yup.string().required("required"),
  destinationStoreName: yup
    .string()
    .required("required")
    .notOneOf(
      [yup.ref("originStoreName")],
      "Transfer within same location is not available"
    ),
  transferProductName: yup.string().required("required"),
  quantity: yup
    .number()
    .required("required")
    .positive("Quantity must be a positive number")
    .test(
      "maxQuantity",
      "Quantity exceeds available stock",
      function (value) {
        const { originStoreName, transferProductName } = this.parent;
        if (originStoreName && transferProductName) {
          const store = mockDataStoreDetails.find((s) => s.storeName === originStoreName);
          const product = mockDataProductDetails.find((p) => p.productName === transferProductName);
          if (store && product) {
            const inventoryDetail = mockDataInventoryDetails.find(
              (inventory) => inventory.storeId === store.storeId && inventory.productId === product.productId
            );
            if (inventoryDetail) {
              return value <= inventoryDetail.inventory;
            }
          }
        }
        return true; // No limit if store or product is not selected
      }
    )
    .test(
      "maxTwoDecimal",
      "Only up to two decimal places are allowed",
      (value) => /^\d+(\.\d{1,2})?$/.test(value)
    ),
  measurement: yup.string().required("required"),
  transferType: yup.string().required("required"),
  unitSalvagePrice: yup
    .number()
    .when("transferType", {
      is: "Salvage",
      then: (schema) =>
        schema
          .required("required")
          .min(0, "Price must be 0 or a positive number")
          .max(99999.99, "Price cannot exceed 99999.99")
          .test(
            "maxTwoDecimal",
            "Only up to two decimal places are allowed",
            (value) => /^\d+(\.\d{1,2})?$/.test(value)
          ),
      otherwise: (schema) => schema.notRequired(),
    }),
  reason: yup.string().when("transferType", {
    is: "Others",
    then: (schema) =>
      schema.required("required").max(100, "Maximum 100 characters allowed"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export default StockTransferForm;
