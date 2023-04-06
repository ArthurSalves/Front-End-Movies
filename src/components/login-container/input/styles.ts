import styled, { css } from 'styled-components'

interface PropsInput {
    isMobile: boolean
    hasContent: boolean
    type: string
}

interface PropsLabel {
    isMobile: boolean
    hasContent: boolean
}

export const InputLoginStyled = styled.input.attrs(props => ({
    type: props.type
}))<PropsInput>`
    border: 0;
    border-radius: 4px;
    color: #fff;
    height: 30px;
    line-height: 50px;
    padding: 16px 20px 0;
    background: #333;
    font-size: 16px;
    :focus {
        outline: none;
        background: #454545;
    }
`

export const ContainerInputLoginStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 16px;
`
export const LabelInputLoginStyled = styled.label<PropsLabel>`
    position: absolute;
    transition: font 0.1s ease, transform 0.1s ease;
    color: #8c8c8c;
    font-family: Arial;
    left: 20px;
    font-size: 16px;
    top: 7px;
    transform: translateY(50%);
    ${InputLoginStyled}:focus + & {
        transform: translateY(0);
        font-size: 11px;
    }
    ${props =>
        props.hasContent &&
        css`
            transform: translateY(0);
            font-size: 11px;
        `}
`
