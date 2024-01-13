import React from 'react'
import "../styles/header.css"
export default function Header() {
  return (
    <>
         <header>
            <div className="headerContainer" style={{background:"#222429"}}>
                <div className="row d-flex">
                    <span className="colorWhite">Welcome to our Shopingo store!</span>
                    <div className="topNavBar d-flex">
                        <nav>
                            <a>Track Order</a>
                            <a>About</a>
                            <a>Our Stores</a>
                            <a>Blog</a>
                            <a>Contact</a>
                            <a>Help & FAQs</a>
                        </nav>
                        <div className="ml-20">
                            <select name="" id="">
                                <option>USD</option>
                                <option>USA</option>
                            </select>
                        </div>
                        <div className="social-media ml-20">
                            <a className="colorWhite"><i className="fa fa-facebook"></i></a>
                            <a className="colorWhite"><i className="fa fa fa-twitter"></i></a>
                            <a className="colorWhite"><i className="fa fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="headerContainer" style={{background: "#f8c346"}}>
                <div className="row d-flex">
                    <span className="shopingoText">
                        SHOPINGO
                        <span>eCommerce</span>
                    </span>
                    <div className="d-flex" style={{width: " 89%"}}>
                        <form className="searchBar">
                            <div className="input-group d-flex">
                                <input type="text" className="form-control" placeholder="Search for products"/>
                                <button className="btn">SEARCH</button>
                            </div>
                        </form>
                        <div className="d-flex callUsNow">
                            <i className="fa fa-headphones"></i>
                            <div>
                                <label style={{display: "block"}}>CALL US NOW</label>
                                <a href="tel:1234567890">+1234567890</a>
                            </div>
                        </div>
                        <div className="rightIco">
                            <a ><i className="fa fa-user-o"></i></a>
                            <a ><i className="fa fa-heart-o"></i></a>
                            <a className="shopping-bag" id="shopping-bag" ><i className="fa fa-shopping-bag"></i> </a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="headerContainer py-0" style={{background:" #FFF",paddingLeft: "10px"}}>
                <div className="row ">
                    <ul className="mainNav">
                        <li><a href="javascript:void(0);">HOME</a></li>
                        <li><a href="javascript:void(0);">CATEGORIES</a></li>
                        <li>
                            <a href="javascript:void(0);">SHOP <i className="fa fa-angle-down"></i> </a>
                            <ul className="subNav">
                                <li><a href="javascript:void(0);">Abc</a></li>
                                <li><a href="javascript:void(0);">abc</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0);">ABOUT</a></li>
                        <li><a href="javascript:void(0);">CONTACT</a></li>
                        <li><a href="javascript:void(0);">ACOUNT</a></li>
                        <li><a href="javascript:void(0);">BLOG</a></li>
                    </ul>
                </div>
            </div>
        </header> 
    </>
  )
}
