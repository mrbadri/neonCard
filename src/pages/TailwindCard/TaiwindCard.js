const TailwindCard = (props) => {
    return ( 
        <div className="w-screen max-w-full h-screen  flex items-center justify-center  bg-midnight-500">
            <div className="relative w-52 h-80  flex justify-center items-center  ">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-eggplant-500 to-cerulean-500 transform skew-y-3 skew-x-3 shadow-card"></div>
                <div className="absolute inset-0 bg-midnight-600 flex items-center justify-center">
                    <span className="transform -rotate-90 text-3xl font-semibold text-gray-300">
                        Mrbadri_org
                    </span>
                </div>
            </div>

            <button 
            onClick={() => {
                props.goBack();
            }}
            className="absolute top-4 right-5 text-gray-500  hover:text-gray-400 transition" 
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
            
        </div>
     );
}
 
export default TailwindCard;