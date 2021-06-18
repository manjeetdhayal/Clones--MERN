import React from 'react'
import "./swipeButton.css"
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButton() {
    return (
        <div className="swipeButtons">
        <IconButton className="swipwButtons-replay">
            <ReplayIcon  fontSize="large"/>
        </IconButton>
        <IconButton className="swipwButtons-close">
            <CloseIcon  fontSize="large"/>
        </IconButton>
        <IconButton className="swipwButtons-star">
            <StarRateIcon  fontSize="large"/>
        </IconButton>
        <IconButton className="swipwButtons-fav">
            <FavoriteIcon  fontSize="large"/>
        </IconButton>
        <IconButton className="swipwButtons-flash">
            <FlashIcon  fontSize="large"/>
        </IconButton>
        
    </div>
    )
       
    ;
}

export default SwipeButton;
