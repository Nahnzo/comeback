import { classNames } from 'shared/lib/classNames/classNames'
import { ReactChild } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  children: ReactChild
  theme?: AppLinkTheme
}

export const AppLink = ({ className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps }: AppLinkProps) => {
  return (
    <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  )
}
