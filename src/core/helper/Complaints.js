import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@mui/material';
import axios from 'axios';
import { API } from '../../backend';
import Alert from './Alert';

export default function MinHeightTextarea() {
    const[complaint,setComplaint]=React.useState("");
    const[email,setEmail]=React.useState("");
    const sendRequest=async()=>{
        await axios.post(`${API}/complaint`, {
            complaint:complaint,
            emailId:email,
            productId: window.location.href.split("/").slice(-1).at(0),
            customerId: 4.0
        }).then(() => <Alert />).catch(err => { console.log(err) })
        console.log(complaint);
        console.log(email);
    }
    return (
        <div>
        Complaint:-<TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            style={{ width: 200 }}
            value={complaint}
                onChange={(event) => setComplaint(event.target.value)}
        />
        E-mail:-<TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
                style={{ width: 200 }}
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
            />
        <Button onClick={sendRequest}>Submit</Button>
        </div>
    );
}
