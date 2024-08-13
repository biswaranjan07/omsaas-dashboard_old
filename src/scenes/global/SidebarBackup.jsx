import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { PendingRounded } from "@mui/icons-material";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AssignmentIcon from "@mui/icons-material/Assignment";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import SubjectIcon from '@mui/icons-material/Subject';
import KeyIcon from '@mui/icons-material/Key';
import CircleIcon from '@mui/icons-material/Circle';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      padding="2px 2px"
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square"
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? '#f5d9ff' : '#d359ff',
                backgroundColor: active ? '#eecef9' : undefined,
              };
          },
        }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  OmSaaS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/oms-logo.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  OmSaaS Inc.
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Order management system
                </Typography>
              </Box>
            </Box>
          )}

          <Box width="100%"
                  height="100%"paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Action center"
              to="/actionCenter"
              icon={<PendingActionsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SubMenu
            title="Purchases"
            to="/"
            icon={<AssignmentIcon />}
            style={{
              color: colors.grey[100],
            }}
            selected={selected}
            setSelected={setSelected}
            >
              <Item
              width="100px"
                  height="100px"
              title="All Orders"
              to="/purchase"
              icon={<DensitySmallIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pending Orders"
              to="/pending"
              display={selected === "Purchase Orders" ? "flex" : "none"} 
              icon={<PendingRounded />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Vendors"
              to="/vendors"
              display={selected === "Purchase Orders" ? "flex" : "none"} 
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </SubMenu>
            <SubMenu
            title="Inventory"
            to="/"
            icon={<WarehouseIcon />}
            selected={selected}
            setSelected={setSelected}
            >
            <Item
              title="Transfer Stock"
              to="/allStockTransfer"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Snapshot"
              to="/allInventory"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/*<Item
              title="Adjust Stock"
              to="/adjustInventory"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />*/}
            <Item
              display={selected === "Purchase Orders" ? "flex" : "none"} 
              title="Stores"
              to="/stores"
              width="100%"
              height="100%"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              to="/product"
              title="Products"
              display={selected === "Inventory" ? "flex" : "none"} 
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            </SubMenu>
            <SubMenu
            title="Sales"
            to="/"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            >
              <Item
              to="/sales"
              width="100%"
              height="100%"
            title="Sales Orders"
            icon={<ShoppingCartIcon />}
            selected={selected}
            setSelected={setSelected}
            />
            {/*<Item
              title="Promotions"
              to="/promotion"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />*/}
            <Item
              title="Items"
              to="/items"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              display={selected === "Sales" ? "flex" : "none"} 
              title="Customers"
              to="/customer"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </SubMenu>
            <SubMenu
            title="Reports"
            to="/"
            icon={<AssessmentIcon />}
            selected={selected}
            setSelected={setSelected}
            >
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Create Alert"
              to="/alertCreate"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </SubMenu>
            <SubMenu
            title="Manage Access"
            to="/"
            icon={<KeyIcon />}
            selected={selected}
            setSelected={setSelected}
            >
            <Item
              title="Add User"
              to="/userCreate"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="View User"
              to="/user"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </SubMenu>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              SitePages
            </Typography>
            <Item
              title="FAQ"
              to="/faq"
              icon={<ChatBubbleOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tutorial"
              to="/tutorial"
              icon={<CastForEducationIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Documentation"
              to="/document"
              icon={<SubjectIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
