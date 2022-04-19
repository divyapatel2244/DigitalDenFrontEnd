import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@mui/material';
import  RatingReview  from './RatingReview';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../backend';

function ProductDetail(){
    
    const [product,setProduct]=useState(null);
    useEffect(() => {
        console.log(window.location.href.split("/").slice(-1).at(0));
      axios.get(`${API}/product/${window.location.href.split("/").slice(-1).at(0)}`,{method:"GET"})
      .then(response=>{
           console.log(response); 
      }).catch(err=>{console.log(err)})
    },[])
    
    return (
        <div>
            <div>
        <Carousel>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/digitalden-20146.appspot.com/o/images%20Of%20Products%2Fiphone-13-pro-review-dan-baker-35.jpg?alt=media&token=086cc001-e285-4db5-a167-6faf5b97dac6" alt='images'/>
            </div>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/digitalden-20146.appspot.com/o/images%20Of%20Products%2Fiphone-13-pro-review-dan-baker-35.jpg?alt=media&token=086cc001-e285-4db5-a167-6faf5b97dac6" alt='images'></img>
            </div>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/digitalden-20146.appspot.com/o/images%20Of%20Products%2Fiphone-13-pro-review-dan-baker-35.jpg?alt=media&token=086cc001-e285-4db5-a167-6faf5b97dac6" alt='images'/>
            </div>
        </Carousel>
            </div>
            <div>
                <h1>Iphone 13 pro</h1>
                <h2>Price:2345678</h2>
                <h3>Category:-crybrgirnmfenmjtbgtnifemdormgi</h3>
                <h3>Company name:apple</h3>
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
                <RatingReview/>
            </div>
        </div>
        
    );
}

export default ProductDetail;