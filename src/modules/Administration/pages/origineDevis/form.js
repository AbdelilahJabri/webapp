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
import {ORIGINE_DEVIS} from "../../../../redux/actions/constants";
import {get} from "lodash";

const OriginesDevisForm = (props) => {

    const [files, setFiles] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if (props.computedMatch.params.id) {
            setEdit(true);
            props.getOrigineDevis({id: get(props, 'computedMatch.params.id')});
        }
    }, []);

    const createOrUpdateOrigineDevis = (values) => {
        if (files["visuel"]) values.visuel = files["visuel"];
        else if (values.visuel && edit) values.visuel = values.visuel.id;
        if (edit)
            props.updateOrigineDevis({id: get(props, 'computedMatch.params.id')}, values,
                () => props.history.push("/administration/originesDevis/"),
                ({err}) => toast.error(err.message)
            );
        else
            props.createOrigineDevis(null, values,
                () => props.history.push("/administration/originesDevis/"),
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
                <form onSubmit={props.handleSubmit(createOrUpdateOrigineDevis)}>
                    <div className='my-4 row'>
                        <div className='col-12'>
                            <div className='card'>
                                <h4 className="card-header">{edit ? "Modifier une origine de devis" : "Ajouter une origine de devis"}</h4>
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
                                        <div className='form-group col-md-4 col-sm-12'>
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
                                        <div className='form-group col-md-4 col-sm-12'>
                                            <label className='label-required font-weight-bold'>Canal de vente</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="canalVente"
                                                    component={renderInputField}
                                                    type="text"
                                                    validate={required({message: 'Obligatoire'})}
                                                    label="Canal de vente"
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group col-md-4 col-sm-12'>
                                            <label className='label-required font-weight-bold'>Origine de l’information</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="origine"
                                                    component={renderInputField}
                                                    type="text"
                                                    validate={required({message: 'Obligatoire'})}
                                                    label="Origine de l’information"
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
        initialValues: get(state, 'app.origine_devis.one', {})
    }
};

export default compose(
    connect(() => mapStateToProps, {
        createOrigineDevis: createPostAction(ORIGINE_DEVIS),
        getOrigineDevis: createGetAction(ORIGINE_DEVIS),
        updateOrigineDevis: createPutAction(ORIGINE_DEVIS)
    }),
    reduxForm({form: 'originesDevisForm', enableReinitialize: true}),
)(OriginesDevisForm);
