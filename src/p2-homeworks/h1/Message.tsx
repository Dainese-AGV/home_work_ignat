import React from 'react'
import s from "./Message.module.css"


// type messageType ={
//     avatar: string,
//     name: string,
//     title: string,
//     time:string
// }
// type Propstype ={
//     text: Array<messageType>
// }

type Propstype ={
    avatar: string,
    name: string,
    message: string,
    time:string
}

function Message(props:Propstype) {
    return (
        <div>
            <div className={s.input}>
                <div className={s.avatar}>
                    <img className={s.img} src= {props.avatar} alt='avatar'/>
                </div>
                <div className={s.block}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.title}>
                        {props.message}
                    </div>
                    <div className={s.time}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
