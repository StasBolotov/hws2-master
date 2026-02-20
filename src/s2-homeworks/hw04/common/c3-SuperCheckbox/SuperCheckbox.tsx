import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
} from 'react'
import s from './SuperCheckbox.module.css'

type DefaultCheckPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type SuperCheckboxPropsType = DefaultCheckPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        onChange, onChangeChecked,
        className, spanClassName,
        children, id,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // 3 - вызываем оба колбэка, если они есть
        onChange?.(e)
        onChangeChecked?.(e.currentTarget.checked)
    }

    const finalInputClassName = s.checkbox + (className ? ' ' + className : '')

    return (
        <label className={s.label}>
            <input
                id={id}
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {children && (
                <span id={id ? id + '-span' : undefined} className={s.spanClassName}>
                    {children}
                </span>
            )}
        </label>
    )
}

export default SuperCheckbox