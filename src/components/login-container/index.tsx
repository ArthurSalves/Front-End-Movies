import Layout from '@/components/layout'
import DeviceDetect from '@/utils/deviceDetect'
import {
    BodyContainerStyled,
    ContainerLoginStyled,
    ContentLoginStyled,
    TitleLoginStyled
} from './styles'
import { InputLogin } from './input'
import { ButtonLogin } from './button'

export default function LoginContainer() {
    const isMobile = DeviceDetect().isMobile
    return (
        <BodyContainerStyled isMobile={isMobile}>
            <ContainerLoginStyled isMobile={isMobile}>
                <ContentLoginStyled isMobile={isMobile}>
                    <TitleLoginStyled>Sign In</TitleLoginStyled>
                    <InputLogin
                        isMobile={isMobile}
                        label="Email or phone number"
                        id="inputLoginMail"
                        type="text"
                    />
                    <InputLogin
                        isMobile={isMobile}
                        label="Password"
                        id="inputLoginPassword"
                        type="password"
                    />
                    <ButtonLogin
                        isMobile={isMobile}
                        onClick={() => console.log('teste  ')}
                    >
                        Sign In
                    </ButtonLogin>
                </ContentLoginStyled>
            </ContainerLoginStyled>
        </BodyContainerStyled>
    )
}
