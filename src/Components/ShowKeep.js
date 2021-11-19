import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InputKeep from './InputKeep';


const ShowKeep = (props) => {
    const deleteNotes=()=>{
        props.onDelete(props.id);
    }
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           {props.notes}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
        <Button onClick={deleteNotes} size="small" className="text-danger">
          <DeleteIcon/>
        </Button>
      </CardActions>
            </Card>
        </>
    )
}

export default ShowKeep;
