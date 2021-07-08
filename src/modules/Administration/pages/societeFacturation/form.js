import React, {useEffect, useState} from 'react';
import {Field, reduxForm} from 'redux-form';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import cs from "classnames";
import {required} from 'redux-form-validators';
import {toast} from "react-toastify";

import {
    renderInputField,
    renderToggleInput
} from "../../../../components/Redux-Forms";
import Dropzone from "../../../../components/Dropzone";
import {createGetAction, createPostAction, createPutAction} from "../../../../redux/actions";
import {SOCIETE_FACTURATIONS} from "../../../../redux/actions/constants";
import {get} from "lodash";

const FacturationsForm = (props) => {

    const [files, setFiles] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if (props.computedMatch.params.id) {
            setEdit(true);
            props.getSociete({id: get(props, 'computedMatch.params.id')});
        }
    }, []);

    const createOrUpdateSociete = (values) => {
        if (files["visuel"]) values.visuel = files["visuel"];
        else if (values.visuel && edit) values.visuel = values.visuel.id;
        if (edit)
            props.updateSociete({id: get(props, 'computedMatch.params.id')}, values,
                () => props.history.push("/administration/facturations/"),
                ({err}) => toast.error(err.message)
            );
        else
            props.createSociete(null, values,
                () => props.history.push("/administration/facturations/"),
                ({err}) => toast.error(err.message)
            );
    };

    function getFileId(name, file) {
        files[name] = file.data.id;
        setFiles(files);
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <form onSubmit={props.handleSubmit(createOrUpdateSociete)}>
                    <div className='my-4 row'>
                        <div className='col-12'>
                            <div className='card'>
                                <h4 className="card-header">{edit ? "Modifier une société de facturation" : "Ajouter une société de facturation"}</h4>
                                <div className='card-body m-4'>
                                    <div className='row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <Field
                                                className='form-control'
                                                name="enabled"
                                                component={renderToggleInput}
                                                type="checkbox"
                                                label="Activée"
                                            />
                                            <label className='font-weight-bold ml-5'>Activée</label>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='label-required font-weight-bold'>Libellé</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="nom"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="Libellé"
                                                    validate={required({message: 'Obligatoire'})}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Visuel</label>
                                            <div>
                                                <Field
                                                    name={`visuel`}
                                                    component={Dropzone}
                                                    getFileId={getFileId}
                                                    label={`visuel`}
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='label-required font-weight-bold'>URL de la boutique</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="url"
                                                    component={renderInputField}
                                                    type="text"
                                                    validate={required({message: 'Obligatoire'})}
                                                    label="URL de la boutique"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Login</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="login"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="Login"
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Password</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="code"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className=' col-12 d-flex flex-row-reverse mt-3'>
                                            <button
                                                className={cs('btn btn-primary ml-1')}
                                                type="submit"
                                                disabled={
                                                    props.pristine ||
                                                    props.submitting ||
                                                    props.loading
                                                }
                                            >
                                                Enregistrer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        initialValues: get(state, 'app.societe_facturations.one', {})
    }
};

export default compose(
    connect(() => mapStateToProps, {
        createSociete: createPostAction(SOCIETE_FACTURATIONS),
        getSociete: createGetAction(SOCIETE_FACTURATIONS),
        updateSociete: createPutAction(SOCIETE_FACTURATIONS)
    }),
    reduxForm({form: 'facturationsForm', enableReinitialize: true}),
)(FacturationsForm);
