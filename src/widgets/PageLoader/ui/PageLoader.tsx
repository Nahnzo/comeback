import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <span className={classNames(cls.loader, {}, [className])} />
    </div>
  )
}
