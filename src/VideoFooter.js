import React from 'react';
import "./VideoFooter.css";
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import Ticker from "react-ticker"; 

function VideoFooter({channel, description, song }) {
    return (
        <div className="videoFooter">
         <div className="videoFooter__text">
           <h4>@{channel}</h4>

             <p>{description} </p>
           
             
             <div className="videoFooter__ticker">
              <AudiotrackIcon className = "videoFooter__icon" />
             <Ticker  mode="smooth" >
                {({  index  }) => (
                 <>  
                 <p>{song}</p>
                 </>
                )}  
             </Ticker>
             </div>
        </div>
        
                  <img className = "videoFooter__record" src="final.png" alt="J" />
         
         </div>
    );
}

export default VideoFooter;
