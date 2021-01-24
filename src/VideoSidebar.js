import React ,{ useState }from 'react';
import  "./VideoSidebar.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { FavoriteBorder } from '@material-ui/icons';

function VideoSidebar() {

    const [liked, setLiked] =useState(false);

    return (
        <div className = "video__Sidebar">
           <div className= "videoSidebar__button" >
             { liked ? (
                 <FavoriteIcon/> 
             ): (
                 <FavoriteBorder/>
             )  }             
              
             <p>400</p>
           </div>
           <div className= "videoSidebar__button" >
             <MessageIcon/> 
             <p>121</p>
           </div>
           <div className= "videoSidebar__button" >
             <ShareIcon/> 
             <p>23</p>
           </div>
        </div>
    )
}

export default VideoSidebar
