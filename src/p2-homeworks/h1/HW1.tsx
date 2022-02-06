import React from 'react'
import Message from './Message'

const messageData = [{
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}
]


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            {/* <Message text={messageData}/> */}
            <Message  
            avatar={messageData[0].avatar}
            name={messageData[0].name}
            time={messageData[0].time}
            message={messageData[0].message}
            />
            
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
