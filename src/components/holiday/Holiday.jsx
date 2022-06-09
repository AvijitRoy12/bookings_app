import React from 'react';
import "./holiday.css";

const Holiday = () => {
    return (
        <div className="holiday_featured">
            <div className="holiday_featuredItem">
                <img className="holiday_featuredImg"
                     src="https://media-cdn.tripadvisor.com/media/photo-s/12/e9/6c/91/sentido-blue-sea-beach.jpg"
                     alt=""/>
                <div className="holiday_featuredTitles">
                    <h3>Griechenland</h3>
                    <h4>540 properties</h4>
                </div>
            </div>
            <div className="holiday_featuredItem">
                <img className="holiday_featuredImg"
                     src="https://ssl.tzoo-img.com/images/blog/legacyblog/us/wp-content/uploads/2018/02/7_AnseSourceDArgent_LaDigue_Seychelles_shutterstock_303523277.jpg?width=412&spr=3"
                     alt=""/>
                <div className="holiday_featuredTitles">
                    <h3>Goa</h3>
                    <h4>320 properties</h4>
                </div>
            </div>
            <div className="holiday_featuredItem">
                <img className="holiday_featuredImg"
                     src="https://www.jahnreisen.de/pibe-media/der_atc/hotel/SKG40013N_S22_2.jpg"
                     alt=""/>
                <div className="holiday_featuredTitles">
                    <h3>CoxBazaar</h3>
                    <h4>240 properties</h4>
                </div>
            </div>
            <div className="holiday_featuredItem">
                <img className="holiday_featuredImg"
                     src="https://img5.goodfon.com/wallpaper/nbig/f/f2/summer-tropical-vacation-beach-palm-sea-coconut-more-leto-ot.jpg"
                     alt=""/>
                <div className="holiday_featuredTitles">
                    <h3>Florida</h3>
                    <h4>140 properties</h4>
                </div>
            </div>
            <div className="holiday_featuredItem">
                <img className="holiday_featuredImg"
                     src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Varkala-Beach.jpg"
                     alt=""/>
                <div className="holiday_featuredTitles">
                    <h3>Kerela</h3>
                    <h4>240 properties</h4>
                </div>
            </div>

        </div>

    );
}

export default Holiday;