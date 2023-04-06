import { FunctionComponent, useState } from 'react'
import {
    ContainerInputLoginStyled,
    InputLoginStyled,
    LabelInputLoginStyled
} from './styles'

export interface Props {
    isMobile: boolean
    label: string
    id: string
    type: string
}

export const InputLogin: FunctionComponent<Props> = ({
    isMobile,
    label,
    id,
    type
}) => {
    const [inputValue, setInputValue] = useState('')
    return (
        <ContainerInputLoginStyled>
            <InputLoginStyled
                isMobile={isMobile}
                hasContent={!!inputValue}
                onChange={e => setInputValue(e.target.value)}
                type={type}
                id={id}
            />
            <LabelInputLoginStyled
                isMobile={isMobile}
                hasContent={!!inputValue}
                htmlFor={id}
            >
                {label}
            </LabelInputLoginStyled>
        </ContainerInputLoginStyled>
    )
}
