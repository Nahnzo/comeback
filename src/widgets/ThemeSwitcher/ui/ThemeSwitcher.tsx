import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
const { theme, toggleTheme } = useTheme();

return (
    <div className={classNames(cls.themeSwitcher, {}, [className])}>
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme}>
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    </div>
);
};
