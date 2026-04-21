import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        // Очищаем старый таймер на всякий случай
        stop()
        // Запускаем обновление даты каждую секунду
        const id = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const stop = () => {
        if (timerId) {
            clearInterval(timerId)
            setTimerId(undefined)
        }
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    // Форматирование времени (01:02:03)
    const stringTime = new Intl.DateTimeFormat('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(date) || <br/>

    // Форматирование даты (24.07.2022)
    const stringDate = new Intl.DateTimeFormat('ru-RU').format(date) || <br/>

    // Форматирование дня недели на английском (Monday)
    const stringDay = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date) || <br/>

    // Форматирование месяца на английском (July)
    const stringMonth = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date) || <br/>

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    // задизэйблить если таймер запущен
                    disabled={timerId !== undefined}
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    // задизэйблить если таймер не запущен
                    disabled={timerId === undefined}
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock