"use client"
import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Link from 'next/link';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Badge from '@mui/material/Badge';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MonetizationOn, Settings, PowerSettingsNew, AvTimer, Margin } from '@mui/icons-material';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SettingsIcon from '@mui/icons-material/Settings';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const drawerWidth = 190;
const listItems = [
  {
    icon: "cn.png",
    text: "中文"
  },
  {
    icon: "ru.png",
    text: "русский"
  },
  {
    icon: "us.png",
    text: "English"
  }
]
const openedMixin = (theme: Theme): CSSObject => ({
  paddingTop: '86px',
  width: drawerWidth,
  backgroundColor: '#F2F2F2',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  paddingTop: '86px',
  width: "44px",
  backgroundColor: '#F2F2F2',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  // width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    // width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#2E6589",
  ...theme.typography.body2,
  textAlign: 'center',
  color: "white",
  borderRight: "1px solid white",
  borderRadius: 0,
  height: 45
}));
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${1}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

type Props = {
  children: React.ReactNode;
  title: string,
};
export default function Nav({ title, children }: Props) {


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerChange = () => {
    setOpen(!open);
  };

  const goPaymentSection = () => {
    toast.error("Please activate your account by depositing minimum $50 for accessing this page!!!");
  }

  return (
    <Box sx={{ display: 'flex', padding: 0 }}>
      <CssBaseline />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
/>
      <AppBar position="fixed" sx={{ boxShadow: "none" }} open={open}>
        <Toolbar sx={{ minHeight: "45px !important", paddingX: "10px !important" }}>

          <Stack
            direction="row"
            justifyContent={"space-between"}
            width={"100%"}
            alignItems={"center"}
          >
            <Stack flexDirection={"row"} width={'100%'} justifyContent={'flex-start'}>
              <Image
                src={"/assets/images/Screenshot_31.png"}
                alt=""
                width={"32"}
                height={"21"}
                style={{ marginTop: "5px" }}
              />
              <Typography variant="h6" noWrap component="div" fontFamily={"Open Sans"} fontSize={"20px"} fontWeight={"400"}>

                LuX Checker
              </Typography>
            </Stack>

            <Stack direction={"row"}>

              <Stack
                direction="row"
                alignItems={"center"}
                divider={<Divider orientation="vertical" flexItem />}
              >
                {listItems.map((item, ind) =>
                  <Item key={ind} sx={{ boxShadow: "none" }}>
                    <Stack sx={{ lineHeight: "45px", paddingX: "8px" }} alignItems={"center"} direction={"row"}>
                      <Image
                        src={`/assets/images/${item.icon}`}
                        alt=""
                        width={"20"}
                        height={"20"}
                      />
                      <span style={{ minWidth: "40px" }}>
                        {item.text}
                      </span>
                    </Stack>
                  </Item>
                )}
              </Stack>
              <Item sx={{ boxShadow: "none", backgroundColor: "#2E8965" }}>
                <Stack sx={{ padding: 2 }} alignItems={"center"} direction={"row"}>
                  <span>
                    <Badge badgeContent={4} color="secondary">
                      <MonetizationOn />
                    </Badge>
                  </span>
                </Stack>
              </Item>
              <div>
                <Item
                  sx={{ paddingX: "8px", backgroundColor: '#62A8D1', border: "none", boxShadow: "none" }}
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                >
                  <Stack direction={"row"} sx={{ border: "none" }}>
                    <Typography variant="subtitle2" gutterBottom sx={{ marginBottom: 0, border: "none" }}>
                      <small>welcome,</small> jack1337
                    </Typography>
                    <ArrowDropDownOutlinedIcon sx={{ margin: "auto" }} />
                  </Stack>
                </Item>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Settings /> setting
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <PowerSettingsNew /> logout
                  </MenuItem>
                </Menu>
              </div>
            </Stack>

          </Stack>


        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Divider />
        <List sx={{ paddingY: 0 }}>
          {[
            { icon: <AvTimer />, text: 'dashboard', path: "/dashboard" },
            { icon: <CreditCardOutlinedIcon />, text: 'Card Cheker', path: "" },
            { icon: <CreditCardOutlinedIcon />, text: 'AVS Checker', path: "" },
            { icon: <CreditCardOutlinedIcon />, text: 'Dump Cheker', path: "" },
            { icon: <CreditCardOutlinedIcon />, text: 'Balance Checker', path: "" },
            { icon: <CreditCardOutlinedIcon />, text: '3DS Chccker', path: "" },
            { icon: <CreditCardOutlinedIcon />, text: 'BIN Lookup', path: "" },
            { icon: <SignalCellularAltIcon />, text: 'API', path: "" },
            { icon: <InfoOutlinedIcon />, text: 'FAQs', path: "" },
            { icon: <ConfirmationNumberIcon />, text: 'Support', path: "" },
            { icon: <SettingsIcon />, text: 'Settings', path: "" },
            { icon: <MonetizationOn />, text: 'balance', path: "/balance" },
            { icon: <Settings />, text: 'Setting', path: "" },
          ].map((item, index) => (

            <ListItem
              className='nav-li'
              onClick={() => goPaymentSection()}
              key={index} sx={{ display: 'block', padding: 0 }}>
              <Link href={item.path}>
                <ListItemButton
                  className={(item.text == title ? 'nav-item' : "")}
                  sx={{
                    padding: 0,
                    paddingLeft: '6px',
                    bgcolor: '#F8F8F8',
                    minHeight: "37px",
                    justifyContent: open ? 'initial' : 'center',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>

              </Link>
              <Divider />
            </ListItem>

          ))}
          <ListItem
            className='nav-button'
            disablePadding sx={{ display: 'block' }}>
            <Link href={""}>
              <ListItemButton
                onClick={handleDrawerChange}
                sx={{
                  minHeight: 35,
                  justifyContent: 'center',
                  padding: 0,
                  paddingLeft: "6px"
                }}
              >
                <ListItemIcon
                  sx={{
                    padding: 0,
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    bgcolor: 'white',
                    color: "#AAA",
                    borderRadius: '100%',
                    border: "1px solid #BBB"
                  }}
                >
                  {!open ? <KeyboardDoubleArrowRightOutlinedIcon /> : <KeyboardDoubleArrowLeftOutlinedIcon />}
                </ListItemIcon>
              </ListItemButton>
            </Link>
            <Divider />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, marginTop: '45px' }}>
        {children}
      </Box>
    </Box >
  );
}