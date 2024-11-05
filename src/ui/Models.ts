import { Enums } from '@ui'

export interface ITextProps {
    type: Enums.TextType
    color: Enums.ColorType
    children?: React.ReactNode
}

export interface IconbuttonProps {
    type: Enums.IconbuttonType
    color: Enums.ColorType
    children?: React.ReactNode
}

export interface IconsProps {
    type: Enums.IconsType
    children?: React.ReactNode
}
