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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MonetizationOn, Settings, PowerSettingsNew, AvTimer } from '@mui/icons-material';

const drawerWidth = 240;
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
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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
  padding: theme.spacing(0, 1),
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
    width: `calc(100% - ${drawerWidth}px)`,
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
};
export default function Nav({ children }: Props) {


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ minHeight: "45px" }} open={open}>
        <Toolbar sx={{ minHeight: "45px !important" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              minHeight: "50px",
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            width={"100%"}
            alignItems={"center"}
          >
            <Typography variant="h6" noWrap component="div">
              LuX Checker
            </Typography>

            <Stack direction={"row"}>

              <Stack
                direction="row"
                alignItems={"center"}
                divider={<Divider orientation="vertical" flexItem />}
              >
                {listItems.map((item, ind) =>
                  <Item key={ind}>
                    <Stack sx={{ padding: 2 }} alignItems={"center"} direction={"row"}>
                      <Image
                        src={`/assets/images/${item.icon}`}
                        alt=""
                        width={"20"}
                        height={"20"}
                      />
                      <span>
                        {item.text}
                      </span>
                    </Stack>
                  </Item>
                )}
              </Stack>
              <Item>
                <Stack sx={{ padding: 2 }} alignItems={"center"} direction={"row"}>
                  <span>
                    <Badge badgeContent={4} color="secondary">
                      <MonetizationOn color="action" />
                    </Badge>
                  </span>
                </Stack>
              </Item>
              <div>
                <Item
                  sx={{ padding: "4px" }}
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                >
                  <Stack>
                    <Typography variant="subtitle2" gutterBottom sx={{ marginBottom: 0 }}>
                      welcome
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{ marginBottom: 0 }}>
                      jack1337
                    </Typography>
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
        <DrawerHeader sx={{ backgroundColor: "#438EB9", minHeight: "45px !important" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { icon: <AvTimer />, text: 'dashboard',path:"/dashboard" },
            { icon: <MonetizationOn />, text: 'balance', path:"/balance" },
            { icon: <Settings />, text: 'Setting',path:"" },
            { icon: <PowerSettingsNew />, text: 'logout',path:"/" }
          ].map((item, index) => (

            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <Link href={item.path}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
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
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box >
  );
}