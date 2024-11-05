import { Enums } from '@ui'
import Colors from '../common/colors.module.scss'

export const getColorByType = (colorType: Enums.ColorType): string => {
    switch (colorType) {
        case 'Primary':
            return Colors.primary
        case 'Secondary':
            return Colors.secondary
        case 'Tertiary':
            return Colors.tertiary
        case 'Background':
            return Colors.background
        default:
            return 'transparent'
    }
}
