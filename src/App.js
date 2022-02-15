import { DragAndDrop } from './lib/index'

function App() {

    /* const handleDrop = (files) => {
        console.log(files)
    }

    const removeFile = (e, index) => {
        console.log(e)
        console.log(index)
    } */

    const getFiles = (files) => {
        console.log(files)
    }

    return (
        <>
            <div>
                <DragAndDrop getFiles={getFiles} />
            </div>
            {/* <div>
                <DragAndDrop handleDrop={handleDrop} customUI={true} removeFile={removeFile} getFiles={getFiles}>
                    <div style={{height: '500px', width: '500px', border: '1px solid black', textAlign: 'center'}}>
                        Your Custom Text
                    </div>
                </DragAndDrop>
            </div> */}
        </>
    )
}

export default App
