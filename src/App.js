import { DragAndDrop } from './lib/index'

function App() {

    const handleDrop = (files) => {
        console.log(files)
    }

    return (
        <DragAndDrop handleDrop={handleDrop}>
            <div style={{height: '500px', width: '500px', border: '1px solid black', textAlign: 'center'}}>
                Drag here
            </div>
        </DragAndDrop>
    )
}

export default App
