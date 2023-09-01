const Hero = ({text, backdrop})=>{
    return(
        <div className="bg-dark p-5 text-white header-container"  >
            <div className="header-banner" style={{backgroundImage:`url(${backdrop})`}}>
            <div className="header-txt">{text}</div>
            </div>
            {/* <div className="header-banner" ></div> */}
        </div>
    )
}
export default Hero;