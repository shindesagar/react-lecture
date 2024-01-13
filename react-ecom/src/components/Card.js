import React from 'react'

export default function Card({props}) {
    console.log(props);
  return (
    <>
        <div className='productBox' style={{float:"left"}}>
         <div className="productBoxInner">
            <div className="productImage">
                {/* <img src="{props.productImage }"/> */}
            </div>
            <div className="productContent w-100 float-left">
                <div className="productCategory" style={{textTransform:"uppercase"}}>{props.category}</div>
                <div className="productName">{props.title}</div>
                {/* <div className="productRating">{props.rating}</div> */}
                <div className="productPricing d-flex">Rs {props.price}</div>
                <a href="javascript:void(0);" class="like"><i class="fa fa-heart-o"></i></a>
                
            </div>
        </div>
        </div>
    </>
  )
}
