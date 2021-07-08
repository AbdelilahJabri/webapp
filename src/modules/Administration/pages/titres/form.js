import React, {useEffect, useState} from 'react';
import {Field, reduxForm} from 'redux-form';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import cs from "classnames";
import {required, email} from 'redux-form-validators';
import {toast} from "react-toastify";

import {
    renderBigTextArea,
    renderInputField,
    renderSelect2Async,
    renderToggleInput
} from "../../../../components/Redux-Forms";
import Dropzone from "../../../../components/Dropzone";
import {createGetAction, createListAction, createPostAction, createPutAction} from "../../../../redux/actions";
import {TITRES} from "../../../../redux/actions/constants";
import {get} from "lodash";

const TitresForm = (props) => {

    const [files, setFiles] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        props.listTitres();
        if (props.computedMatch.params.id) {
            setEdit(true);
            props.getTitre({id: get(props, 'computedMatch.params.id')});
        }
    }, []);

    const createOrUpdateTitre = (values) => {
        values.ordre = parseInt(values.ordre);
        if (files["visuel"]) values.visuel = files["visuel"];
        else if (values.visuel && edit) values.visuel = values.visuel.id;
        if (files["conditionGeneral"]) values.conditionGeneral = files["conditionGeneral"];
        else if (values.conditionGeneral && edit) values.conditionGeneral = values.conditionGeneral.id;
        if (files["guideNumerique"]) values.guideNumerique = files["guideNumerique"];
        else if (values.guideNumerique && edit) values.guideNumerique = values.guideNumerique.id;
        if (edit)
            props.updateTitre({id: get(props, 'computedMatch.params.id')}, values,
                () => props.history.push("/administration/titres/"),
                ({err}) => toast.error(err.message)
            );
        else
            props.createTitre(null, values,
                () => props.history.push("/administration/titres/"),
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
                <form onSubmit={props.handleSubmit(createOrUpdateTitre)}>
                    <div className='my-4 row'>
                        <div className='col-12'>
                            <div className='card'>
                                <h4 className="card-header">{edit ? "Modifier un titre" : "Ajouter un titre"}</h4>
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
                                            <label className='label-required font-weight-bold'>Libelle</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="libelle"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="Libelle"
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
                                            <label className='label-required font-weight-bold'>Ordre</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="ordre"
                                                    component={renderInputField}
                                                    parse={value => parseInt(value)}
                                                    type="number"
                                                    validate={required({message: 'Obligatoire'})}
                                                    label="Ordre"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='label-required font-weight-bold'>Code</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="code"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="Code"
                                                    validate={required({message: 'Obligatoire'})}
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Titre parent</label>
                                            <div>
                                                <Field
                                                    name={`titreParent`}
                                                    component={renderSelect2Async}
                                                    noOptionsMessage={'Aucun titre trouvé.'}
                                                    options={props.titres.map(t => ({label: t.libelle, value: t.id}))}
                                                    className="form-control"
                                                    placeholder={'Sélectionnez un titre'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row pt-2' style={{backgroundColor: 'rgb(238, 238, 238)'}}>
                                        <div className='form-group col-md-12 col-sm-12'>
                                            <label className='font-weight-bold mb-3'>Délai de livraison</label>
                                            <div className='row'>
                                                <div className='form-group col-md-3 col-sm-12'>
                                                    <label className='font-weight-bold'>Lundi</label>
                                                    <div>
                                                        <Field
                                                            className='form-control'
                                                            name="delaiLivraison.lun"
                                                            component={renderInputField}
                                                            parse={value => parseInt(value)}
                                                            type="number"
                                                            label="Lundi"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='form-group col-md-3 col-sm-12'>
                                                    <label className='font-weight-bold'>Mardi</label>
                                                    <div>
                                                        <Field
                                                            className='form-control'
                                                            name="delaiLivraison.mar"
                                                            component={renderInputField}
                                                            parse={value => parseInt(value)}
                                                            type="number"
                                                            label="Mardi"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='form-group col-md-3 col-sm-12'>
                                                    <label className='font-weight-bold'>Mercredi</label>
                                                    <div>
                                                        <Field
                                                            className='form-control'
                                                            name="delaiLivraison.mer"
                                                            component={renderInputField}
                                                            parse={value => parseInt(value)}
                                                            type="number"
                                                            label="Mercredi"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='form-group col-md-3 col-sm-12'>
                                                    <label className='font-weight-bold'>Jeudi</label>
                                                    <div>
                                                        <Field
                                                            className='form-control'
                                                            name="delaiLivraison.jeu"
                                                            component={renderInputField}
                                                            parse={value => parseInt(value)}
                                                            type="number"
                                                            label="Jeudi"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-group col-md-4 col-sm-12'>
                                                    <label className='font-weight-bold'>Vendredi</label>
                                                    <div>
                                                        <Field
                                                            className='form-control'
                                                            name="delaiLivraison.ven"
                                                            component={renderInputField}
                                                            parse={value => parseInt(value)}
                                                            type="number"
                                                            label="Vendredi"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='form-group col-md-4 col-sm-12'>
                                                    <label className='font-weight-bold'>Samedi</label>
                                                    <div>
                                                        <Field
                                                            className='form-control'
                                                            name="delaiLivraison.sam"
                                                            component={renderInputField}
                                                            parse={value => parseInt(value)}
                                                            type="number"
                                                            label="Samedi"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='form-group col-md-4 col-sm-12'>
                                                    <label className='font-weight-bold'>Dimanche</label>
                                                    <div>
                                                        <Field
                                                            className='form-control'
                                                            name="delaiLivraison.dim"
                                                            component={renderInputField}
                                                            parse={value => parseInt(value)}
                                                            type="number"
                                                            label="Dimanche"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-12 col-sm-12'>
                                            <label className='font-weight-bold'>Cnil</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="cnil"
                                                    component={renderBigTextArea}
                                                    label="Cnil"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Créancier mandat sepa</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="creancierMandatSepa"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="Créancier mandat sepa"
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>ICS</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="ics"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="ICS"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-12 col-sm-12'>
                                            <label className='font-weight-bold'>Text legal mandat sepa</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="legalMandatSepa"
                                                    component={renderBigTextArea}
                                                    label="Text legal mandat sepa"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Conditions générales de vente</label>
                                            <div>
                                                <Field
                                                    name={`conditionGeneral`}
                                                    component={Dropzone}
                                                    getFileId={getFileId}
                                                    label={`condition`}
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Guide numérique</label>
                                            <div>
                                                <Field
                                                    name={`guideNumerique`}
                                                    component={Dropzone}
                                                    getFileId={getFileId}
                                                    label={`guide`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-4 col-sm-12'>
                                            <label className='font-weight-bold'>Mention service client</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="serviceClient.mention"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="Mention service client"
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group col-md-4 col-sm-12'>
                                            <label className='font-weight-bold'>Site service client</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="serviceClient.site"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="Site service client"
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group col-md-4 col-sm-12'>
                                            <label className='font-weight-bold'>Email service client</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="serviceClient.email"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="Email service client"
                                                    validate={email({message: 'Veuillez saisir une adresse email valide'})}
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
        titres: get(state, 'app.titres.data', []),
        initialValues: get(state, 'app.titres.one', {})
    }
};

export default compose(
    connect(() => mapStateToProps, {
        createTitre: createPostAction(TITRES),
        listTitres: createListAction(TITRES),
        getTitre: createGetAction(TITRES),
        updateTitre: createPutAction(TITRES),
    }),
    reduxForm({form: 'titresForm', enableReinitialize: true}),
)(TitresForm);
