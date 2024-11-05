import { Models, Utils } from '@ui'
import styles from './Icon.module.css'

const Icon = (props: Models.IconbuttonProps): React.ReactElement<Models.IconbuttonProps> => {
    switch (props.type) {
        case 'Medium':
            return (
                <svg className={styles.medium} style={{ color: Utils.getColorByType(props.color) }}>
                    {props.children}
                </svg>
            )
        case 'Small':
            return (
                <svg className={styles.small} style={{ color: Utils.getColorByType(props.color) }}>
                    {props.children}
                </svg>
            )
        default:
            throw new Error(`Unknown Type`)
    }
}

export default Icon
