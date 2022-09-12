import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function Create() {
  return (
    <Container>
      <Typography variant='h6' color ='textSecondary' component='h2' gutterBottom>
        Create a new Note
      </Typography>

      <Button sx={{fontSize: 60, backgroundColor: "violet", '&:hover': {backgroundColor:'blue'}}}
color="secondary"
      onClick={
        () => console.log('You Clicked Me')
      }
       type='submit' variant='contained' endIcon={<KeyboardArrowRightIcon/>}>
        Submit
      </Button>

      {/* Icons
      <br/>
      <AcUnitOutlinedIcon/>

      <AcUnitOutlinedIcon color='secondary' fontSize='large'/>
      <AcUnitOutlinedIcon color='secondary' fontSize='small'/>

      <AcUnitOutlinedIcon color='action' fontSize='small'/>
      <AcUnitOutlinedIcon color='error' fontSize='small'/>
      <AcUnitOutlinedIcon color='disabled' fontSize='small'/> */}
  

      {/* <Button  type="submit" color="primary">
        SUBMIT
      </Button>
      <Button  type="submit" color="secondary" variant="outlined">
        SUBMIT
      </Button>
      <ButtonGroup color='secondary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  )
}
