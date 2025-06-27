import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsOpenAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links} />
      <Button type="button" theme={ThemeButton.CLEAR_INVERTED} onClick={onToggleModal}>
        Войти
      </Button>
      <Modal isOpen={isOpenAuthModal} onClose={onToggleModal}>
        dasdasdasdasdbashjbfhjsdefhjsdhjfbsdjhfbsdjh
      </Modal>
    </div>
  )
}

export default Navbar
