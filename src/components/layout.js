import React from 'react'
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { format } from 'date-fns';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240

const useStyles = makeStyles((theme)=> {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
          },
          root: {
            display: 'flex',
          },
          drawer:{
            
            variant: 'permanent',
            anchor: 'left'
          },
          active: {
            background: '#f4f4f4'
          },
          title: {
            padding: theme.spacing(2)
          },
          appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
          },
          date: {
            flexGrow: 1
          },
          avatar:{
            marginLeft: theme.spacing(2)
          },
          toolbar: theme.mixins.toolbar
    }
})

export default function Layout({children}) {
    const classes = useStyles();

    const history = useHistory()
    const location = useLocation()

    const menuItems=[
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary'/>,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color='secondary'/>,
            path: '/create'
        }
    ]
  return (
    <div className={classes.root}>
        {/* app bar */}
      <AppBar elevation={0} style = {{width: `calc(100% - ${drawerWidth}px)`}}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is the { format(new Date(), 'do MMMM Y') }
          </Typography>
          <Typography>
            Briva Hamisi
          </Typography>
        <Avatar src='/hamisi-av.png' className={classes.avatar}/>
        </Toolbar>
      </AppBar>
      
      {/* side drawer */}
      <Drawer sx ={{
        width: drawerWidth,".MuiDrawer-paper": {width: drawerWidth},
      }} variant="permanent"
        anchor="left">
        <div>
            <Typography className ={classes.title} variant='h5'>
                Write Notes
            </Typography>
        </div>
        {/* List - Links */}
        <List>
            {menuItems.map(item =>(
                <ListItem className={location.pathname === item.path ? classes.active : null } button key = {item.text} onClick={()=> history.push(item.path)}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text}/>
                </ListItem>
            ))}
        </List>
      </Drawer >

      {/* main content */}
        <div className={classes.page}>
          <div className={classes.toolbar}></div>
            {children}
        </div>
    </div>
  )
}
