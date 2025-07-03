import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User/index'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)

  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    setIsOpenAuthModal(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsOpenAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links} />
        <Button type="button" theme={ThemeButton.CLEAR_INVERTED} onClick={onLogout}>
          Выйти
        </Button>
        <LoginModal isOpen={isOpenAuthModal} onClose={onCloseModal} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links} />
      <Button type="button" theme={ThemeButton.CLEAR_INVERTED} onClick={onOpenModal}>
        Войти
      </Button>
      <LoginModal isOpen={isOpenAuthModal} onClose={onCloseModal} />
    </div>
  )
}

export default Navbar
