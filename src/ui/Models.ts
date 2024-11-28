import { Enums } from '@ui'

export interface ITextProps {
    type: Enums.TextType
    color: Enums.ColorType
    children?: React.ReactNode
}

export interface IconButtonProps {
    type: Enums.IconButtonType
    color: Enums.ColorType
    children?: React.ReactNode
}

export interface IconProps {
    type: Enums.IconType
    children?: React.ReactNode
}
