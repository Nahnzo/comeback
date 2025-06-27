import { classNames } from 'shared/lib/classNames/classNames'
import { ReactChild, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  children: ReactChild | ReactNode
  theme?: AppLinkTheme
}

export const AppLink = ({ className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps }: AppLinkProps) => (
  <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
    {children}
  </Link>
)
