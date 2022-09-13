import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import { useState } from "react";

import { styled } from '@mui/material/styles'

const MyField = styled(TextField)({
  marginTop: 20,
  marginBottom: 20,
  display: 'block',
})


export default function Create() {

const [title, setTitle] = useState("")
const [details, setDetails] = useState("")

const [titleError, setTitleError] = useState(false)
const [detailsError, setDetailsError] = useState(false)

const handleSubmit = (e) =>{
  e.preventDefault()

  setTitleError(false)
  setDetailsError(false)

  if (title ===''){
    setTitleError(true)
  }

  if (details === ''){
    setDetailsError(true)
  }

  if (title && details){
    console.log(title, details)
  }
}

  return (
    <Container>
      <Typography variant='h6' color ='textSecondary' component='h2' gutterBottom>
        Create a new Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <MyField 
        onChange={(e)=> setTitle(e.target.value)}
        label='Note Title' variant='outlined' color='secondary' fullWidth required false error={titleError}
        />

      <MyField 
      onChange={(e)=> setDetails(e.target.value)}
        label='Details' variant='outlined' color='secondary' fullWidth required multiline rows={5} error={detailsError}
        />
        <Button
      onClick={
        () => console.log('You Clicked Me')
      }
       type='submit'color='secondary' variant='contained' endIcon={<KeyboardArrowRightIcon/>}>
        Submit
      </Button>
      </form>

      

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
