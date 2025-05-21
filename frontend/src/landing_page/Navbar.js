import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF"}}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// //Chat GPT
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import external CSS

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg border-bottom fixed-top">
//       <div className="container p-2">
//         {/* Logo aligned to the left */}
//         <Link className="navbar-brand ps-3" to="/">
//           <img
//             src="media/images/logo.svg"
//             className="logo"
//             alt="Logo"
//           />
//         </Link>

//         {/* Navbar Toggle Button for Mobile View */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Links aligned to the right */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto pe-3">
//             <li className="nav-item">
//               <Link className="nav-link active" to="/signup">Signup</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/about">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/product">Product</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/pricing">Pricing</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/support">Support</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import { HiMenuAlt2 } from "react-icons/hi";
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// // import logo from "../../assets/logo.svg";

// const drawerWidth = 240;
// const navItems = [
//   { label: 'Signup', path: '/signup' },
//   { label: 'About', path: '/about' },
//   { label: 'Products', path: '/products' },
//   { label: 'Pricing', path: '/pricing' },
//   { label: 'Supports', path: '/supports' }
// ];

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         <Link to="/"><img src="media/images/logo.svg" alt="zerodha logo" className=' lg:w-48 w-28 mx-auto ' /></Link>
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.label} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }}>
//               <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
//                 <ListItemText primary={item.label} />
//               </Link>
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav" sx={{ background: "white", boxShadow: "none" }} className='lg:px-[200px] drop-shadow-md'>
//         <Toolbar>
//           <IconButton
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <HiMenuAlt2 />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "#000" }}
//           >
//             <Link to="/"><img src="media/images/logo.svg" alt="zerodha logo" className=' w-48' /></Link>
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Link key={item.label} to={item.path} style={{ textDecoration: 'none' }}>
//                 <Button sx={{ color: '#353535' }}>
//                   {item.label}
//                 </Button>
//               </Link>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// Navbar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Navbar;
