import { useState } from 'react'
import './App.css'
import Text from './ui/components/Text/Text'

const App = (): React.ReactElement => {
    const [count, setCount] = useState(0)

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
            </div>
            <Text type={'Paragraph'} color={'Primary'}>
                Click on the Vite and React logos to learn more
            </Text>
        </>
    )
}

export default App
