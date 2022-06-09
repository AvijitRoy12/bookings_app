import './mailList.css'

const MailList = () => {
    return (
        <div className="mail">
            <h2 className="mailTitle">Save time, save money!</h2>
            <span className="mailDesc">Signup and we will send you the best deals.</span>
            <div className="mailInputContainer">
            <input type="text" placeholder="Your email"/>
            <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList