import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginFormState } from '../../model/selectors/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername'
import cls from './LoginForm.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const dispatch = useDispatch()

  const { username, password, isLoading, error } = useSelector(getLoginFormState)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ password, username }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title="Форма авторизации" />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input type="text" className={cls.input} placeholder="Введите username" autofocus onChange={onChangeUsername} value={username} />
      <Input type="text" className={cls.input} placeholder="Введите пароль" onChange={onChangePassword} value={password} />
      <Button className={cls.loginBtn} onClick={onLoginClick}>
        Войти
      </Button>
    </div>
  )
})
