import React from "react";
import { FaVideo, FaPhone, FaRegWindowClose } from "react-icons/fa";
const ChatBox = (props) => {
  const closeChat = () => {
    props.closeChat();
  };
  return (
    <>
      {props.state ? (
        <div className="chat">
          <div className="chat__header">
            <div className="chat__first">
              <div className="chat__header-img">
                <img
                  src={props.current.image ? props.current.image : ""}
                  alt="user"
                />
              </div>
              <div className="chat__header-name">
                {props.current.name ? props.current.name : ""}
              </div>
            </div>
            <div className="chat__second">
              <FaVideo className="chat__header-icons" />
              <FaPhone className="chat__header-icons" />
              <FaRegWindowClose
                className="chat__header-icons"
                onClick={closeChat}
              />
            </div>
          </div>
          <div className="chat__body">
            <div className="chat__left">
              <p className="msg">Hi , How are you ?</p>
            </div>
            <div className="chat__right">
              <p className="msg">i am fine , you ?</p>
            </div>
            <div className="chat__left">
              <p className="msg">
                i am good.
              </p>
            </div>
            <div className="chat__right">
              <p className="msg">hope you always.</p>
            </div>
          </div>
          <div className="chat__footer">
            <input type="text" className="chat__input" placeholder="Aa" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ChatBox;