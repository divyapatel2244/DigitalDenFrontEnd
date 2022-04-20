import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@mui/material';
import  RatingReview  from './RatingReview';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../backend';
import CircularProgress from '@mui/material/CircularProgress';
import Complaints from './helper/Complaints';

function ProductDetail(){
    const [id,setId]=useState(0);
    const [product,setProduct]=useState(null);
    useEffect(async() => {
        console.log(window.location.href.split("/").slice(-1).at(0));
        console.log(`${ API } /products/${ window.location.href.split("/").slice(-1).at(0) }`);
        await axios.get(`${API}/products/${window.location.href.split("/").slice(-1).at(0)}`,{method:"GET"})
      .then(response=>{
           setProduct(response.data);
        //    console.log(product); 
      }).catch(err=>{console.log(err)});
       
        await axios.get(`${API}/rating/fetchId`, {params:{
            customerId: 4,
            productId: window.location.href.split("/").slice(-1).at(0)
        }
        }).then((response) => {
            setId(response.data);
        })
            .catch(err => console.log(err));
    },[])

    if(product==null){
        return <CircularProgress />
    }
    return (
        
        <div>
            <div>
        <Carousel>
            <div>
                        <img src={product.imageUrl} alt='images'/>
            </div>
            <div>
                        <img src={product.imageUrl} alt='images'></img>
            </div>
            <div>
                        <img src={product.imageUrl} alt='images'/>
            </div>
        </Carousel>
            </div>
            <div>
                <h1>{product.productName}</h1>
                <h2>Price:{product.price}</h2>
                <h3>Category:-{product.category}</h3>
                <h3>Company name:{product.companyName}</h3>
                <Button>Add to cart</Button>
                <Button>Buy</Button>
            </div>
            <div>
                product description
                About this item
                15 cm (6.1-inch) Super Retina XDR display
                Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
                Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording
                12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
                A15 Bionic chip for lightning-fast performance
                Up to 19 hours of video playback
                Durable design with Ceramic Shield
                Industry-leading IP68 water resistance
                iOS 15 packs new features to do more with iPhone than ever before
                Supports MagSafe accessories for easy attachment and faster wireless charging
            </div>
            <div>
                <RatingReview id={id}/>
            </div>
            <div>
                <h1>Complaints</h1>
                <Complaints/>
            </div>
        </div>
        
    );
}

export default ProductDetail;