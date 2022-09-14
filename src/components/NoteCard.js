import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { DeleteOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { green, pink, yellow, blue} from '@mui/material/colors';

export default function NoteCard({ note, handleDelete }) {
  const ylow = yellow[700]; 
  const grn = green[500]; 
  const bl = blue[500]; 
  const pnk = pink[500];

  return (
    <div>
        <Card elevation={1}>
            <CardHeader
            avatar={
              <Avatar sx={{backgroundColor: note.category === "work" ? ylow : note.category === "money" ? grn : note.category === "todos" ? pnk : bl}} >
                {note.category[0].toUpperCase()}
              </Avatar>}
            action={
                <IconButton onClick={() => handleDelete(note.id)} >
                <DeleteOutlined />
              </IconButton>
            }
            title ={note.title}
            subheader = {note.category}
            />
            <CardContent>
                <Typography variant='body2' color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}
