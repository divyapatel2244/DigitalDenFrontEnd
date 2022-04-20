import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { API } from '../backend';
import  Alert  from './helper/Alert';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@mui/material';

export default function RatingReview(props) {
    const [value, setValue] = React.useState(1);
    const [flag,setFlag]=React.useState(true);
    const [review,setReview]=React.useState("ABC");
    const sendRequest=async()=>{
        if (props.id != 0) {
            await axios.put(`${API}/rating`, {
                id: props.id,
                rating: value,
                review: review,
                productId: window.location.href.split("/").slice(-1).at(0),
                customerId: 4.0
            }).then(() => <Alert />).catch(err => { console.log(err) });
        }
        else {
            await axios.post(`${API}/rating`, {
                rating: value,
                review: review,
                productId: window.location.href.split("/").slice(-1).at(0),
                customerId: 4.0
            }).then(() => <Alert />).catch(err => { console.log(err) })
        }
    }
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend">Controlled</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }
            }
            />
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: 200 }}
                value={review}
                onChange={(event)=>{
                    setReview(event.target.value);
                }}
            />
            <Button onClick={sendRequest}>Submit</Button>
        </Box>
    );
}
