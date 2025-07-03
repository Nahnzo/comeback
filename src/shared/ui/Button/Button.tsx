import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: SizeButton
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  square,
  size = SizeButton.M,
  disabled = false,
  ...otherProps
}: ButtonProps) => {
  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls[size]]: true,
    [cls.square]: square,
    [cls.disabled]: disabled,
  }

  return (
    <button type="button" className={classNames(cls.button, mods, [className])} {...otherProps} disabled={disabled}>
      {children}
    </button>
  )
}
