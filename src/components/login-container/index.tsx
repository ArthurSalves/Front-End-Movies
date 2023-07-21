import DeviceDetect from '@/utils/deviceDetect'
import {
    BodyContainerStyled,
    ContainerLoginStyled,
    ContentLoginStyled,
    TitleLoginStyled
} from './styles'
import { InputLogin } from './input'
import { ButtonLogin } from './button'
import { useAuthContext } from '@/contexts/auth'
import React, { useState } from 'react'

const LoginContainer: React.FC = () => {
    const isMobile = DeviceDetect().isMobile
    const { login } = useAuthContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = async (e:React.MouseEvent) => {
        e.preventDefault()
        const teste = await login(email, password)
        console.log(teste);
        
    }

    const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
    return (
        <BodyContainerStyled isMobile={isMobile}>
            <ContainerLoginStyled isMobile={isMobile}>
                <ContentLoginStyled isMobile={isMobile}>
                    <TitleLoginStyled>Sign In</TitleLoginStyled>
                    <InputLogin
                        isMobile={isMobile}
                        label="Email or phone number"
                        value = {email}
                        id="inputLoginMail"
                        type="text"
                        onChangeInput={(e) => handleChangeEmail(e)}
                    />
                    <InputLogin
                        isMobile={isMobile}
                        label="Password"
                        value = {password}
                        id="inputLoginPassword"
                        type="password"
                        onChangeInput={(e) => handleChangePassword(e)}
                    />
                    <ButtonLogin
                        isMobile={isMobile}
                        onClick={(e) => handleLogin(e)}
                    >
                        Sign In
                    </ButtonLogin>
                </ContentLoginStyled>
            </ContainerLoginStyled>
        </BodyContainerStyled>
    )
}
export default LoginContainer