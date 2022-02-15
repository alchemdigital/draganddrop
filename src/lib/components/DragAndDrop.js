import React, { useState, useEffect, useRef } from 'react'
import '../main.css'

function DragAndDrop(props) {

    const [files, setFiles] = useState([])
    const [showFileUpload, setShowFileUpload] = useState(true)

    const dropRef = useRef()

    useEffect(() => {
        const handleDragIn = (e) => {
            e.preventDefault()
            e.stopPropagation()
        }
        dropRef.current.addEventListener('dragenter', handleDragIn)
        return () => {
            dropRef.current.removeEventListener('dragenter', handleDragIn)
        }
    })

    useEffect(() => {
        const handleDragOut = (e) => {
            e.preventDefault()
            e.stopPropagation()
        }

        dropRef.current.addEventListener('dragleave', handleDragOut)
        return () => {
            dropRef.current.removeEventListener('dragleave', handleDragOut)
        }
    })

    useEffect(() => {
        const handleDrag = (e) => {
            e.preventDefault()
            e.stopPropagation()
        }

        dropRef.current.addEventListener('dragover', handleDrag)
        return () => {
            dropRef.current.removeEventListener('dragover', handleDrag)
        }
    })

    useEffect(() => {
        const handleDrop = (e) => {
            e.preventDefault()
            e.stopPropagation()
            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                let thisFiles = e.dataTransfer.files
                let fileList = [...files]
                Object.keys(thisFiles).map((eachKey) => {
                    /* if (props.isSupportedFile(filesTemp[eachKey])) {
                        if (filesTemp[eachKey].size / 1024 / 1024 <= allowedSingleFileSize.current) */
                            fileList.push(thisFiles[eachKey])
                        /* else
                            Config.toast(singleFileSizeError.current, 'error')
                    } */
                })
                setFiles(fileList)
                setShowFileUpload(false)
                if (props.handleDrop)
                    props.handleDrop(fileList)
                if (props.getFiles)
                    props.getFiles(fileList)
                e.dataTransfer.clearData()
            }
        }

        dropRef.current.addEventListener('drop', handleDrop)
        return () => {
            dropRef.current.removeEventListener('drop', handleDrop)
        }
    })

    const removeFile = (e, index) => {
        if (props.removeFile)
            props.removeFile(e, index)
        let filesTemp = files
        delete filesTemp[index]
        let isFilesEmpty = true
        let finalFiles = []
        Object.keys(filesTemp).map((eachKey) => {
            if (filesTemp[eachKey] != null) {
                isFilesEmpty = false
                finalFiles.push(filesTemp[eachKey])
            }
        })
        if (isFilesEmpty) {
            filesTemp = []
            setShowFileUpload(true)
        }
        setFiles(finalFiles)
        if (props.getFiles)
            props.getFiles(finalFiles)
    }

    const handleChange = (e) => {
        let thisFiles = e.target.files
        let fileList = [...files]
        Object.keys(thisFiles).map((eachKey) => {
            /* if (props.isSupportedFile(filesTemp[eachKey])) {
                if (filesTemp[eachKey].size / 1024 / 1024 <= allowedSingleFileSize.current) */
                    fileList.push(thisFiles[eachKey])
            /* else
                Config.toast(singleFileSizeError.current, 'error')
        } */
        })
        setFiles(fileList)
        if (props.handleDrop)
            props.handleDrop(fileList)
        if (props.getFiles)
            props.getFiles(fileList)
    }
    
    return (
        <div style={{ display: 'inline-block' }} ref={dropRef}>
            {
                !props.customUI && (
                    showFileUpload ? 
                        <div>
                            <div style={{
                                    position: 'absolute',
                                    right: 0,
                                    left: 0,
                                    textAlign: 'center',
                                    color: 'grey',
                                    fontSize: 36,
                                    border: '0.1px solid grey',
                                    height: '100%',
                                    weight: '100%'
                                }}
                            >
                                <div>drop here :)</div>
                            </div>
                        </div>
                    :
                        <>
                            <div className="button-wrap-file-list">
                                <div className="file-list-align">
                                    <div className="file-list">
                                        {
                                            Object.keys(files).map((eachKey) => {
                                                return (
                                                    <div key={eachKey + files[eachKey].name} className="file-name-list">
                                                        <div className="filename">
                                                            {<img src={'https://pro.alchemdigital.com/api/extension-image/' + files[eachKey].name.split('.').pop()} alt="document" />}
                                                            <span className="filename-length">{files[eachKey].name.split('.').slice(0, -1).join('.')}</span><span className="extension">{'.' + files[eachKey].name.split('.').pop()}</span>
                                                        </div>
                                                        <span className="upload-file-delete" data-file-index={eachKey} onClick={e => removeFile(e, eachKey)}>X</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="file-upload-align new-drag-n-drp-align">
                                <input type="file" name="files" id="files-drag" onChange={e => handleChange(e)} multiple hidden />
                                <label className="form-control-file" htmlFor="files-drag"> Add More</label>
                            </div>
                        </>
                )
            }
        </div>
    )
}

export default DragAndDrop