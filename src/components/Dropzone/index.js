import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {ShowError} from '../Redux-Forms';
import {postFile} from "../../redux/services";

const Dropzone = ({getFileId, label, multiple, meta: {error, touched}}) => {
    const onDrop = useCallback(async acceptedFiles => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append('file', file);
        const fileId = await postFile(formData);
        getFileId(label, fileId);
    }, []);
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop, multiple: !!multiple});
    const style = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
    };

    const files = acceptedFiles.map(file => {
        return <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>;
    });

    return (
        <section className="row">
            <div className="col-12">
                <div {...getRootProps({style})}>
                    <input {...getInputProps()} />
                    <p>Faites glisser et déposez le fichier ici, ou cliquez pour sélectionner un fichier</p>
                </div>
                {touched && error && <ShowError error={error}/>}
                <aside>
                    <ul>{files}</ul>
                </aside>
            </div>
        </section>
    );
};

export default Dropzone;
