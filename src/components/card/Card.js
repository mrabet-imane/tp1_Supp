import React,{Component} from "react";
import img1 from "../../images/headset.png";
import img2 from "../../images/chariotShop.png";
import img3 from "../../images/shopBag.png";
const Card=()=>{
    return(
        <section className="card">
            <div className="card-header">
                    <h5 className="card-badge"> Nearest Seller</h5>
                    <div className="crad-photo">
                        <img src={img1} width="100%"/>
                    </div>
            </div>
            <div className="card-body">
                <h3 className="card-title">Wireless bluetooth headset</h3>
                <span className="card-description">Shipped in 3-4 days</span>
                <h3 className="card-prcie">$35.99</h3>
            </div>
            <div className="card-footer">
                    <button className="addcart">
                        <img src={img2} width="30px" height="30px"/>
                        Add Cart
                    </button>
                    <button className="buy">
                        <img src={img3} width="30px" height="30px"/>
                        Buy
                    </button>
            </div>
            
        </section>
    )
}
export default Card