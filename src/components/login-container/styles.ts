import styled from 'styled-components'

interface Props {
    isMobile: boolean
}

export const ContentLoginStyled = styled.form<Props>`
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 515px;
    max-width: 450px;
    margin-bottom: 90px;
    min-height: 625px;
    padding: 60px 68px 40px;
`

export const ContainerLoginStyled = styled.div<Props>`
    min-height: 515px;
    height: 100%;
    max-width: 450px;
    margin: auto;
`

export const BodyContainerStyled = styled.div<Props>`
    width: 100%;
`

export const TitleLoginStyled = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 28px;
    font-weight: 600;
`
