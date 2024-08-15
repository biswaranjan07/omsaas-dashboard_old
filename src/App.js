import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import SidebarBackup from "./scenes/global/SidebarBackup";
import FAQ from "./scenes/faq";
import Home from "./scenes/home";
import Purchase from "./scenes/purchase";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Inventory from "./scenes/inventory";
import Tutorial from "./scenes/tutorial";
import PurchaseOrder from "./scenes/purchase_order";
import Pending from "./scenes/pending";
import Vendors from "./scenes/vendors";
import VendorAdd from "./scenes/vendorAdd";
import AllStores from "./scenes/allStores";
import StoreDetails from "./scenes/storeDetails";
import ProductDetails from "./scenes/productDetails";
import NewStore from "./scenes/createNewStore";
import NewProduct from "./scenes/createNewProduct";
import AllProducts from "./scenes/allProducts";
import AllInventory from "./scenes/allInventory";
import TransferStock from "./scenes/transferStock";
import AllCustomers from "./scenes/allCustomers";
import CustomerDetails from "./scenes/customerDetails";
import NewCustomer from "./scenes/createNewCustomer";
import Documentation from "./scenes/document";
import Document from "./scenes/document";
import UserManagementGuide from "./scenes/document/userManagement/UserManagementGuide";
import UserManagementAdding from "./scenes/document/userManagement/UserManagementAdding";
import UserManagementViewing from "./scenes/document/userManagement/UserManagementViewing";
import UserManagementRolesPermissions from "./scenes/document/userManagement/UserManagementRolesPermissions";
import UserManagementPermissions from "./scenes/document/userManagement/UserManagementPermissions";
import UserManagementPasswordReset from "./scenes/document/userManagement/UserManagementPasswordReset";
import SalesOrderDetails from "./scenes/salesOrderDetails";
import AllSales from "./scenes/allSales";
import NewSalesOrder from "./scenes/createNewSalesOrder";
import AllStockTransfer from "./scenes/allStockTransfer";
import StockTransferDetails from "./scenes/stockTransferDetails";
import AllItems from "./scenes/allItems";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarBackup isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/pending" element={<Pending />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/purchaseOrderCreate" element={<PurchaseOrder />} />
              <Route path="/vendorAdd" element={<VendorAdd />} />
              <Route path="/stores" element={<AllStores />} />
              <Route path="/storeDetails/:id" element={<StoreDetails />} />
              <Route path="/createNewStore" element={<NewStore />} />
              <Route path="/product" element={<AllProducts />} />
              <Route path="/productDetails/:id" element={<ProductDetails />} />
              <Route path="/createNewProduct" element={<NewProduct />} />
              <Route path="/allInventory" element={<AllInventory />} />
              <Route path="/allStockTransfer" element={<AllStockTransfer />} />
              <Route path="/transferStock" element={<TransferStock />} />
              <Route path="/customer" element={<AllCustomers />} />
              <Route path="/customerDetails/:id" element={<CustomerDetails />} />
              <Route path="/salesOrderDetails/:id" element={<SalesOrderDetails />} />
              <Route path="/stockTransferDetails/:id" element={<StockTransferDetails />} />
              <Route path="/createNewCustomer" element={<NewCustomer />} />
              <Route path="/createNewSalesOrder" element={<NewSalesOrder />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/sales" element={<AllSales />} />
              <Route path="/items" element={<AllItems />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/document" element={<Document />} />
              <Route path="/document/user-management" element={<UserManagementGuide />} /> 
              <Route path="/document/user-management-adding" element={<UserManagementAdding />} />
              <Route path="/document/user-management-viewing" element={<UserManagementViewing />} />
              <Route path="/document/user-management-roles-permissions" element={<UserManagementRolesPermissions />} />
              <Route path="/document/user-management-permissions" element={<UserManagementPermissions />} />
              <Route path="/document/user-management-password-reset" element={<UserManagementPasswordReset />} />
       
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
