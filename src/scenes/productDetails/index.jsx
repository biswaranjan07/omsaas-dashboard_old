import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { mockDataProductDetails, mockDataStoreDetails } from '../../data/mockData';
import { Box, Typography, TextField, Button, InputAdornment, useTheme } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import CategoryIcon from '@mui/icons-material/Category';
import StraightenIcon from '@mui/icons-material/Straighten';
import InventoryIcon from '@mui/icons-material/Inventory';
import { DataGrid } from '@mui/x-data-grid';
import Header from "../../components/Header";
import { tokens } from "../../theme";

// List of measurements
const measurements = ["Units", "Dozen", "Kg", "g", "Pound (lb)"];

const ProductDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockDataProductDetails.find((product) => product.productId === parseInt(id));

  if (!product) {
    return <Typography variant="h4">Product not found</Typography>;
  }

  const initialValues = {
    productName: product.productName,
    productType: product.productType,
    measurement: product.measurement,
    totalInventory: product.totalInventory
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required('Required'),
    productType: Yup.string().required('Required'),
    measurement: Yup.string().required('Required'),
    totalInventory: Yup.number().required('Required').positive('Must be a positive number')
  });

  const handleSave = (values) => {
    // Handle save logic here, e.g., update the data source or make an API call
    console.log('Updated product data:', values);
    alert('Product details saved successfully!');
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      const updatedProductDetails = [...mockDataProductDetails];
      const index = updatedProductDetails.findIndex((product) => product.productId === parseInt(id));
      if (index !== -1) {
        updatedProductDetails.splice(index, 1);
        alert('Product deleted successfully!');
        navigate('/product');
      }
    }
  };

  const columns = [
    { field: 'storeId', headerName: 'Store ID', flex: 1 },
    { field: 'storeName', headerName: 'Store Name', flex: 1 },
    { field: 'inventory', headerName: 'Inventory', flex: 1 }
  ];

  const rows = product.inventoryDetails.map((detail) => {
    const store = mockDataStoreDetails.find((store) => store.storeId === detail.storeId);
    return {
      ...detail,
      storeName: store ? store.storeName : 'Unknown'
    };
  });

  return (
    <Box m="20px">
      <Header title={`${product.productName} Details`} />
      <Header subtitle={`Product ID: ${product.productId}`} />
      {/*<Typography variant="h4" gutterBottom>
        {product.productName} Details
      </Typography>
      <Typography variant="body1">
        <strong>Product ID:</strong> {product.productId}
      </Typography>*/}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form>
            <Header subtitle="Basic Details"/>
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
                name="productName"
                label="Product Name"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CategoryIcon />
                    </InputAdornment>
                  ),
                }}
                error={touched.productName && !!errors.productName}
                helperText={touched.productName && errors.productName}
                sx={{ gridColumn: "span 4" }}
              />
              <Field
                as={TextField}
                name="productType"
                label="Product Type"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CategoryIcon />
                    </InputAdornment>
                  ),
                  readOnly: true, // Make the field read-only
                  style: { cursor: 'not-allowed' } // Change cursor style
                }}
                error={touched.productType && !!errors.productType}
                helperText={touched.productType && errors.productType}
                sx={{ gridColumn: "span 2", backgroundColor: 'rgba(0, 0, 0, 0.1)' }} // Non-editable style
              />
              <Field
                as={TextField}
                name="measurement"
                label="Measurement"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <StraightenIcon />
                    </InputAdornment>
                  ),
                  readOnly: true, // Make the field read-only
                  style: { cursor: 'not-allowed' } // Change cursor style
                }}
                error={touched.measurement && !!errors.measurement}
                helperText={touched.measurement && errors.measurement}
                sx={{ gridColumn: "span 2", backgroundColor: 'rgba(0, 0, 0, 0.1)' }} // Non-editable style
              />
              <Field
                as={TextField}
                name="totalInventory"
                label="Total Inventory"
                type="number"
                fullWidth
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <InventoryIcon />
                    </InputAdornment>
                  ),
                  readOnly: true, // Make the field read-only
                  style: { cursor: 'not-allowed' } // Change cursor style
                }}
                error={touched.totalInventory && !!errors.totalInventory}
                helperText={touched.totalInventory && errors.totalInventory}
                sx={{ gridColumn: "span 4", backgroundColor: 'rgba(0, 0, 0, 0.1)' }} // Non-editable style
              />
            </Box>
            <Box mt={4}>
              <Header subtitle="Inventory Details" sx={{ mt: 0 }}/>
              <Box
                sx={{
                  height: 200,
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  padding: '10px',
                  borderRadius: '4px',
                  marginTop: '10px' // Reduced margin for consistency
                }}
              >
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={3}
                  rowsPerPageOptions={[3]}
                  disableSelectionOnClick
                  getRowId={(row) => row.storeId}
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
                  }}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="contained" color="secondary" type="submit">
                Save
              </Button>
              {/*<Button variant="contained" color="secondary" onClick={handleDelete}>
                Delete
              </Button>*/}
              <Button variant="contained" color="error" onClick={handleDelete}>
                Delete
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ProductDetails;
