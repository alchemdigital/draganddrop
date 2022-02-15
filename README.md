# What is Multiselect

 You can use this component to let the user drag and drop files. You can do your own styling.

## Compatability

It works with react and tested.

## How to use
```
    npm i @alchemdigital/draganddrop
```
```js
    import { DragAndDrop } from '@alchemdigital/draganddrop'

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
```

## Support

Alchem Digital (bairavan@alchemdigital.com)