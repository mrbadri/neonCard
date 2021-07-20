import "./Card.css" ; 

const Card = (props) => {
    return ( 
        <div className="card-container">
            <div className="card">
                <div className="card-bg"></div>
                <div className="card-content">
                    <span className="card-text">
                        Mrbadri_org
                    </span>
                </div>
            </div>

            <button 
            onClick={() => {
                props.goBack();
            }}
            className="absolute top-4 right-5 text-gray-500 hover:text-gray-400 transition" 
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>

        </div>
     );
}
 
export default Card;