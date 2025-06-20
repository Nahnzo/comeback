import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({
 className, children, theme, ...otherProps
}: ButtonProps) => (
  <button type="button" className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
    {children}
  </button>
)
