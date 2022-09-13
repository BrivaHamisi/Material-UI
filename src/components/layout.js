import React from 'react'
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography'

const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%'
  },
  root: {
    display: 'flex',
  },
  drawer:{
    
    variant: 'permanent',
    anchor: 'left'
  },
})

export default function Layout({children}) {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        {/* app bar */}
      <div>app bar</div>
      
      {/* side drawer */}
      <Drawer sx ={{
        width: drawerWidth,".MuiDrawer-paper": {width: drawerWidth},
      }} variant="permanent"
        anchor="left">
        <div>
            <Typography variant='h5'>
                Write Notes
            </Typography>
        </div>
      </Drawer >

      {/* main content */}
        <div className={classes.page}>
            {children}
        </div>
    </div>
  )
}
