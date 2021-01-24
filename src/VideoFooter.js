import React from 'react';
import "./VideoFooter.css";
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import Ticker from "react-ticker"; 

function VideoFooter() {
    return (
        <div className="videoFooter">
         <div className="videoFooter__text">
           <h4>@Johnny Depp</h4>
             <p>Spread Love </p>
             <div className="videoFooter__ticker">
             <AudiotrackIcon />
             <Ticker  mode="smooth" >
                {({  index  }) => (
                 <>  
                 <p>   wanderlust...</p>
                 </>
                )}  
             </Ticker>
             </div>
        </div>
        <img className = "videoFooter__record"
        src="final.png" alt="J" />
            </div>
    );
}

export default VideoFooter;
