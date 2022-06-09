import "./featuredProperties.css"

const PropertyList = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img className="fpImg"
                     src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1"
                     alt=""/>
                <span className="fpName">Hotel Ben</span>
                <span className="fpCity">Amsterdam</span>
                <span className="fpPrice">Starting from $89</span>
                <span className="fpRating">Hotel Ben</span>
                <span className="fpRating"><button>8.9 </button>Excellent</span>
            </div>
            <div className="fpItem">
                <img className="fpImg"
                     src="https://welcome-center-germany.com/wp-content/uploads/2020/05/Buying-an-Apartment-in-Berlin-studio.jpg"
                     alt=""/>
                <span className="fpName">Hotel Ben</span>
                <span className="fpCity">Amsterdam</span>
                <span className="fpPrice">Starting from $89</span>
                <span className="fpRating">Hotel Ben</span>
                <span className="fpRating"><button>8.9 </button>Excellent</span>
            </div>
            <div className="fpItem">
                <img className="fpImg"
                     src="https://www.greathome.eu/wp-content/uploads/apt05-greathome-apartment-berlin-wohnung-ferienwohnung-001-schlafzimmer-1-1.jpg"
                     alt=""/>
                <span className="fpName">Hotel Ben</span>
                <span className="fpCity">Amsterdam</span>
                <span className="fpPrice">Starting from $89</span>
                <span className="fpRating">Hotel Ben</span>
                <span className="fpRating"><button>8.9 </button>Excellent</span>
            </div>
            <div className="fpItem">
                <img className="fpImg"
                     src="https://www.engelvoelkers.com/images/1ed0437c-7d50-470e-8743-b485de7820aa/gro%C3%9Fz%C3%BCgige-wohnung-in-sch%C3%B6nau?w=576&h=432"
                     alt=""/>
                <span className="fpName">Hotel Ben</span>
                <span className="fpCity">Amsterdam</span>
                <span className="fpPrice">Starting from $89</span>
                <span className="fpRating">Hotel Ben</span>
                <span className="fpRating"><button>8.9 </button>Excellent</span>
            </div>
            <div className="fpItem">
                <img className="fpImg"
                     src="https://image.architonic.com/prj2-3/20116834/rua-141-apartment-in-sao-paulo-architonic-3629-01-arcit18.jpg"
                     alt=""/>
                <span className="fpName">Hotel Ben</span>
                <span className="fpCity">Amsterdam</span>
                <span className="fpPrice">Starting from $89</span>
                <span className="fpRating">Hotel Ben</span>
                <span className="fpRating"><button>8.9 </button>Excellent</span>
            </div>
        </div>
    )
}
export default PropertyList;