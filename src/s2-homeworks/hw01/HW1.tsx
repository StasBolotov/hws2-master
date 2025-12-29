import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

type UserType = {
    avatar: string
    name: string
}

type MessageTextType = {
    text: string
    time: string
}

export type MessageType = {
    id: number
    user: UserType
    message: MessageTextType
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Иван Иванов',
    },
    message: {
        text: 'Привет! Как дела? Что нового?',
        time: '22:00',
    },
}

export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Петр Петров',
    },
    message: {
        text: 'Всё отлично! Только что закончил работу над проектом.',
        time: '22:05',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1