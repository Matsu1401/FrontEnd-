import { Models } from '@ui'
import Add from './images/Add.svg?react'
import Delete from './images/Delete.svg?react'
import Logout from './images/Logout.svg?react'
import styles from './Icon.module.css'

const Icon = (props: Models.IconProps): React.ReactElement<Models.IconProps> => {
    switch (props.type) {
        case 'Delete':
            return (
                <svg className={styles.delete}>
                    <Delete />
                </svg>
            )
        case 'Add':
            return (
                <svg className={styles.add}>
                    <Add />
                </svg>
            )
        case 'Logout':
            return (
                <svg className={styles.logout}>
                    <Logout />
                </svg>
            )
        default:
            throw new Error('Unknown Type')
    }
}

export default Icon
