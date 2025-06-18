import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                О сайте
            </AppLink>
        </div>
    </div>
);

export default Navbar;
