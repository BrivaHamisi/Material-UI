import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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

const [category, setCategory] = useState('todos')

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
    console.log(title, details, category)
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

        <FormControl sx={{
          marginTop: 2,
          marginBottom: 2,
          display: 'block',
        }}>
          <FormLabel color='secondary'>
            Note Category
          </FormLabel>
          <RadioGroup value={category} onChange={(e)=> setCategory(e.target.value)}>
          <FormControlLabel value='money' control={<Radio color='secondary'/>} label='Money'/>
          <FormControlLabel value='todos' control={<Radio color='secondary'/>} label='Todos'/>
          <FormControlLabel value='reminders' control={<Radio color='secondary'/>} label='Reminders'/>
          <FormControlLabel value='work' control={<Radio color='secondary'/>} label='Work'/>
        </RadioGroup>

        </FormControl>
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
