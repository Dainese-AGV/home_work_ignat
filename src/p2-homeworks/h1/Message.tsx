import React from "react";
import s from "./Message.module.css";

type messagePropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: messagePropsType) {
  return (
    <div className={s.wrapper}>
      <div className={s.message}>
        <img src={props.avatar} alt="image" className={s.avatar} />
        <div className={s.block}>
          <div className={s.content}>
            <div className={s.name}>{props.name}</div>
            <div className={s.text}>{props.message}</div>
            <div className={s.time}>{props.time}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
