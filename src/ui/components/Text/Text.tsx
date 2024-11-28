import { Models, Utils } from '@ui'
import styles from './Text.module.css'

const Text = (props: Models.ITextProps): React.ReactElement<Models.ITextProps> => {
    switch (props.type) {
        case 'Heading':
            return (
                <h1 className={styles.heading} style={{ color: Utils.getColorByType(props.color) }}>
                    {props.children}
                </h1>
            )
        case 'Paragraph':
            return (
                <p className={styles.paragraph} style={{ color: Utils.getColorByType(props.color) }}>
                    {props.children}
                </p>
            )
        default:
            throw new Error(`Unknown Type`)
    }
}

export default Text
