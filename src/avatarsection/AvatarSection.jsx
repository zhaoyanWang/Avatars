import React from "react"
import TweenOne from "rc-tween-one";
import "./avatarsection.css"
import userAvatar from "./../image/userAvatar.png"
import avatar1 from "./../image/avatar1.png"
import avatar2 from "./../image/avatar2.png"
//import Draggable from "react-draggable"
//import heart from "./../image/heart.png"



const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);
export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.animation = [
      {
        repeatDelay: 200,
        y: -70,
        repeat: -1,
        yoyo: true,
        ease: ease0,
        duration: 800
      },
      {
        repeatDelay: 200,
        appearTo: 0,
        scaleX: 0,
        scaleY: 2,
        repeat: -1,
        yoyo: true,
        ease: ease1,
        duration: 800,
      }
    ];
  }

  render() {
    return (
      <div className="jumpcrowd">
        <TweenOne
          animation={this.animation}
          paused={this.props.paused}
          style={{
            position: 'absolute',
            transformOrigin: 'center bottom',
          }}
          >
            <img className="avatar1" src={avatar1} alt="avatar1" />

            <img className="avatar2" src={avatar2} alt="avatar2" />

            <img className="avatar3" src={avatar1} alt="avatar1" />

            <img className="avatar4" src={avatar2} alt="avatar2" />

            <img className="avatar5" src={avatar1} alt="avatar1" />

            <img className="avatar6" src={avatar2} alt="avatar2" />

            <img className="avatar7" src={avatar1} alt="avatar2" />
            
            <img className="avatar8" src={avatar2} alt="avatar2" />
        </TweenOne>
        
        
        
        <div className="minigamecrowd">
        <img className="avatar9" src={avatar1} alt="avatar2" />
        <img className="avatar10" src={userAvatar} alt="userAvatar" />
        <img className="avatar11" src={avatar2} alt="avatar2" />   
        <img className="avatar12" src={userAvatar} alt="userAvatar" />
        <img className="avatar13" src={avatar2} alt="avatar2" />   
        </div>

      </div>
    );
  }
}





/*
export default function AvatarSection() {
    return (
        <div className="avatarsection">
            <img className="avatar1" src={avatar1} alt="avatar1" />

            <img className="avatar2" src={avatar2} alt="avatar2" />

            <img className="avatar3" src={avatar1} alt="avatar1" />

            <img className="avatar4" src={avatar2} alt="avatar2" />
            
            <img className="avatar5" src={avatar1} alt="avatar1" />

            <img className="avatar6" src={avatar2} alt="avatar2" />

            <Draggable>
            <img className="userAvatar" src={userAvatar} alt="userAvatar"/>
            </Draggable>
            
            
            <img className="avatar7" src={avatar1} alt="avatar2" />

            <img className="avatar8" src={userAvatar} alt="userAvatar" />

            <img className="avatar9" src={avatar2} alt="avatar2" />

        </div>
    )
}

*/
