import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddAllProducts from '../AddAllProducts/AddAllProducts';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import LogOut from '../LogOut/LogOut';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 170;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const {admin} = useAuth()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link style={{margin:'10px',textDecoration:'none', fontSize:'18px',fontWeight:'bold'}} to={`${url}/myorder`}>My Order</Link><br />

      <Link style={{margin:'10px',textDecoration:'none', fontSize:'18px',fontWeight:'bold'}} to={`${url}/review`}>Review</Link><br />

      <Link style={{margin:'10px',textDecoration:'none', fontSize:'18px',fontWeight:'bold'}} to={`${url}/pay`}>Pay</Link><br />

      <Link style={{margin:'10px',textDecoration:'none', fontSize:'18px',fontWeight:'bold'}} to={`${url}/logOut`}>Logout</Link>

      
      {
        admin && <Box>
            <Link style={{margin:'10px',textDecoration:'none', fontSize:'18px',fontWeight:'bold'}} to={`${url}/makeadmin`}>Make Admin</Link><br />

            <Link style={{margin:'10px',textDecoration:'none', fontSize:'18px',fontWeight:'bold'}} to={`${url}/manageAllOrder`}>Manage All Orders</Link><br />

            <Link style={{margin:'10px',textDecoration:'none', fontSize:'18px',fontWeight:'bold'}} to={`${url}/addProduct`}>Add A Product</Link><br />

            <Link style={{margin:'10px',textDecoration:'none', fontSize:'18px',fontWeight:'bold'}} to={`${url}/manageProducts`}>Manage Products</Link>
        </Box>
      }

      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{ 
          width: { sm: `calc(10% - ${drawerWidth}px)` },
          ml: { sm: `cals(10% -${drawerWidth}px)` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <h2>Welcome To Your Dashboard Home</h2>
        </Route>

        <Route path={`${path}/myorder`}>
          <MyOrders></MyOrders>
        </Route>

        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>

        <Route path={`${path}/logOut`}>
          <LogOut></LogOut>
        </Route>
        
        <Route path={`${path}/manageAllOrder`}>
          <ManageAllOrder></ManageAllOrder>
        </Route>

        <Route path={`${path}/addProduct`}>
          <AddAllProducts></AddAllProducts>
        </Route>

        <Route path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </Route>

        <Route path={`${path}/logOut`}>
          <Pay></Pay>
        </Route>

        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>

        <AdminRoute path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>


      </Switch>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
