import React from 'react'
import CategoryImage from '../images/img-men-cat.png'
import '../styles/feature.css'
export default function Category() {
  return (
    <>
        <div className="features w-100 float-left">
            <div className="row d-flex">
                <div className="box">
                    <div className="d-flex innerBox">
                        <div className="ico d-flex">
                            <i className="fa fa-taxi"></i>
                        </div>
                        <div className="text">
                            FREE SHIPPING & RETURN
                            <span>Free shipping on all orders over $99</span>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="d-flex innerBox">
                        <div className="ico d-flex">
                            <i className="fa fa-dollar"></i>
                        </div>
                        <div className="text">
                            MONEY BACK GUARANTEE
                            <span>100% money back guarantee</span>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="d-flex innerBox">
                        <div className="ico d-flex">
                            <i className="fa fa-headphones"></i>
                        </div>
                        <div className="text">
                            ONLINE SUPPORT 24/7
                            <span>Awesoms Support for 27/4 Days</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="features w-100 float-left category">
            <div className="row d-flex">
                <div className="box">
                    <div className="d-flex innerBox" style={{background: "#c3f2fd"}}>
                        <div className="ico d-flex">
                            <img src={CategoryImage}/>
                        </div>
                        <div className="text">
                            MEN WEAR
                            <span>STARTING AT $9</span>
                            <button className="btn outline"> SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="d-flex innerBox" style={{background:"#f8ccd1"}}>
                        <div className="ico d-flex">
                            <img src={CategoryImage}/>
                        </div>
                        <div className="text">
                            WOMEN WEAR
                            <span>STARTING AT $9</span>
                            <button className="btn outline"> SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="d-flex innerBox" style={{background: "#feefc3"}}>
                        <div className="ico d-flex">
                            <img src={CategoryImage}/>
                        </div>
                        <div class="text">
                            KIDS WEAR
                            <span>STARTING AT $9</span>
                            <button class="btn outline"> SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
