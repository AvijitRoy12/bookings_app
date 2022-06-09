import "./home.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import MailList from "../../components/mailList/MailList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Holiday from "../../components/holiday/Holiday";
import Footer from "../../components/footer/Footer.jsx"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by property</h1>
                <PropertyList/>
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties/>
                <h1 className="homeTitle">Great destinations for a beach holiday</h1>
                <Holiday/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home