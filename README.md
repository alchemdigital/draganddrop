# What is DragAndDrop

 You can use this component to let the user drag and drop files. You can do your own styling if you want.

## Compatability

It works fine with react and tested.

## How to use
```
    npm i @alchemdigital/draganddrop
```
```js
    import { DragAndDrop } from '@alchemdigital/draganddrop'

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
```

## Support

Alchem Digital (bairavan@alchemdigital.com)