import React from 'react'
import '../styles/banner.css'
import bannerImage from '../images/banner.jpg'
export default function Banner() {
    
  return (
    <>
        <div class="banner w-100 float-left">
            <figure style={{margin: "0"}}>
                <img src={bannerImage} alt="" style={{width:" 100%"}}/>
                <figcaption>
                    <h2>
                        <span class="top">New Trending</span>
                        Women Fashion
                        <span class="bottom">Last Call Upto 15%</span>
                    </h2>
                    <button class="btn">
                        SHOP NOW
                    </button>
                </figcaption>
            </figure>
        </div>
    </>
  )
}
