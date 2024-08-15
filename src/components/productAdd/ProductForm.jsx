import { Box, Button, TextField, InputAdornment, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../Header";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CategoryIcon from '@mui/icons-material/Category';
import StraightenIcon from '@mui/icons-material/Straighten';

// List of product types
const productTypes = ["Serialized", "Stocked", "Non-stocked", "Service"];

// List of measurements
const measurements = ["Units", "Dozen", "Kg", "g", "Pound (lb)"];

const ProductForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [product, setProduct] = useState({
    productName: "",
    productType: "",
    measurement: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/v1/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert("Product added successfully");
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <Box m="20px">
      <Header subtitle="Product Details" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={product}
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
                label="Product Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DriveFileRenameOutlineIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.productName}
                name="productName"
                error={!!touched.productName && !!errors.productName}
                helperText={touched.productName && errors.productName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                select
                label="Product Type"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CategoryIcon />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.productType}
                name="productType"
                error={!!touched.productType && !!errors.productType}
                helperText={touched.productType && errors.productType}
                sx={{ gridColumn: "span 2" }}
              >
                {productTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
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
                value={values.measurement}
                name="measurement"
                error={!!touched.measurement && !!errors.measurement}
                helperText={touched.measurement && errors.measurement}
                sx={{ gridColumn: "span 2" }}
              >
                {measurements.map((measurement) => (
                  <MenuItem key={measurement} value={measurement}>
                    {measurement}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  productName: yup.string().required("required"),
  productType: yup.string().required("required"),
  measurement: yup.string().required("required"),
});

export default ProductForm;
