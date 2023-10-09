import styled from 'styled-components'

interface Props {
    src: string
}

export const AuthScreenStyled = styled.img<Props>`
    width: 100%;
    height: 100%;
`

export const NavBarStyled = styled.nav`
    height: 90px;
    display: flex;
    align-items: center;
`

export const LogoStyled = styled.img`
    margin-left: 3%;
    height: 45px;
`
export const BackgroundLayerStyled = styled.div`
    box-shadow: inset -1px 0px 119px 4px rgba(0, 0, 0, 1);
    width: 100%;
    height: 100%;
    position: absolute;
    direction: ltr;
`
