import { useState } from 'react'
import './App.css'
import Text from './ui/components/Text/Text'
import IconButton from './ui/components/Iconbutton/Iconbutton'

const App = (): React.ReactElement => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        alert('Button clicked')
    }

    return (
        <>
            <h1>Vite + React</h1>
            <div className={'card'}>
                <button type={'button'} onClick={() => setCount((prevcount) => prevcount + 1)}>
                    count is {count}
                </button>
                <Text type={'Paragraph'} color={'Primary'}>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </Text>
                <IconButton type={'Medium'} color={'Primary'} onClick={handleClick} />
            </div>
            <Text type={'Paragraph'} color={'Primary'}>
                Click on the Vite and React logos to learn more
            </Text>
        </>
    )
}

export default App
