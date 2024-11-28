import { Models, Utils } from '@ui'
import Small from './images/Small.svg?react'
import Medium from './images/Medium.svg?react'
import styles from './Iconbutton.module.css'

const IconButton = (
    props: Models.IconButtonProps & { onClick?: () => void },
): React.ReactElement<Models.IconButtonProps> => {
    const { type, color, onClick } = props
    const buttonStyle = {
        backgroundColor: Utils.getColorByType(color),
        border: 'none',
        cursor: 'pointer',
    }

    switch (type) {
        case 'Medium':
            return (
                <button type={'button'} className={styles.medium} style={buttonStyle} onClick={onClick}>
                    <svg className={styles.medium}>
                        <Medium />
                    </svg>
                </button>
            )
        case 'Small':
            return (
                <button type={'button'} className={styles.small} style={buttonStyle} onClick={onClick}>
                    <svg className={styles.small}>
                        <Small />
                    </svg>
                </button>
            )
        default:
            throw new Error(`Unknown Type`)
    }
}

IconButton.defaultProps = {
    onClick: undefined,
}

export default IconButton
