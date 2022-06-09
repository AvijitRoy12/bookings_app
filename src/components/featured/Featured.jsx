import React from 'react';
import "./featured.css";

const Featured = () => {
    return (
        <div className= "featured">
            <div className="featuredItem">
                <img className= "featuredImg"  src="https://cdn.thecrazytourist.com/wp-content/uploads/2018/06/ccimage-shutterstock_428804917.jpg"
                     alt=""/>
                <div className="featuredTitles">
                    <h2>Prague</h2>
                    <h3>540 properties</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img className= "featuredImg" src="https://media.istockphoto.com/photos/night-city-view-of-amsterdam-the-netherlands-picture-id477307170?b=1&k=20&m=477307170&s=170667a&w=0&h=wbeSVriIUKQCslNFMU5eRYkukKw8vZdmO7Gls1F52cc="
                     alt=""/>
                <div className="featuredTitles">
                    <h2>Amsterdam</h2>
                    <h3>123 properties</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img className= "featuredImg"  src="https://www.wallpapers13.com/wp-content/uploads/2016/05/Dubrovnik-a-medieval-fortress-Croatia-Desktop-Wallpaper-HD-1680x1050.jpg"
                     alt=""/>
                <div className="featuredTitles">
                    <h2>Croatia</h2>
                    <h3>450 properties</h3>
                </div>
            </div>

        </div>

    );
}

export default Featured;