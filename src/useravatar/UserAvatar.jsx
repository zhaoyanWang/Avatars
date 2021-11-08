import "./useravatar.css"
import userAvatar from "./../image/userAvatar.png"
import Draggable from "react-draggable"
//import heart from "./../image/heart.png"
//import ShowHeart from "../heartanimation/HeartAnimation"

export default function UserAvatar() {
    return (

            <>
            <Draggable>
            <div className="code-box-shape">
                <img className="userAvatar" src={userAvatar} alt="userAvatar" />
                
            </div>
            </Draggable>
            
            {/*<img className="Heart" src={heart} alt="heart" />}*/}
            </>
    )
}
