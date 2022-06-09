import "./propertyList.css"

const PropertyList = () => {
    return (
        <div className= "pList">
            <div className="pListItem">
                <img className= "pListImg" src= "https://www.visitberlin.de/system/files/image/og_image.jpg"/>
                <div className="pListTitles">
                    <h1>Berlin</h1>
                    <h2>432 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img className= "pListImg" src= "https://totalenergies.com/sites/g/files/nytnzq121/files/styles/w_1110/public/images/2020-10/Suisse2.jpg?itok=gt1GSlre"/>
                <div className="pListTitles">
                    <h1>Switzerland</h1>
                    <h2>231 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img className= "pListImg" src= "https://i.guim.co.uk/img/media/44907381ba02489d60c01ed449fbbef4f82c9bd4/0_579_8688_5213/master/8688.jpg?width=1200&quality=85&auto=format&fit=max&s=5d57831bfe1d69bb81a6057cbb2ce009"/>
                <div className="pListTitles">
                    <h1>Vienna</h1>
                    <h2>122 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img className= "pListImg" src= "https://theplanetd.com/images/Things-to-do-in-Dubrovnik-Croatia.jpg"/>
                <div className="pListTitles">
                    <h1>Croatia</h1>
                    <h2>133 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img className= "pListImg" src= "https://www.easyjet.com/ejcms/cache/medialibrary/Images/JSS/Destinations/Hero/Hungary_Budapest_3840x2160.jpg?mw=1920&hash=D400FA53D52E4B6092820B268023F5C4F846D023"/>
                <div className="pListTitles">
                    <h1>Budapest</h1>
                    <h2>150 hotels</h2>
                </div>
            </div>
        </div>
    )
}
export default PropertyList;