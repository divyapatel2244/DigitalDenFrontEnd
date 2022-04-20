import React from "react";
import axios from "axios";
import { API } from "../../backend";
import Alert from './Alert';
const cart=async(props)=>{

    await axios.post(`${API}/cart/${props.id}`,{
        cartId:3,
        product:{id:3},
        quantity:3
    }).then((response)=>{console.log(response)}).catch(err=>console.log(err));
    return(
        <div>
            <Alert/>
        </div>
    )
}

export default cart;