import { FunctionComponent, useState } from 'react'
import { ButtonLoginStyled } from './styles'

export interface Props {
    isMobile: boolean
    children: any
    onClick: () => void
}

export const ButtonLogin: FunctionComponent<Props> = ({
    isMobile,
    onClick,
    ...props
}) => {
    return (
        <ButtonLoginStyled isMobile={isMobile} onClick={onClick}>
            {props.children}
        </ButtonLoginStyled>
    )
}
