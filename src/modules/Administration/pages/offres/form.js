import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import cs from "classnames";
import {required, email} from 'redux-form-validators';
import {renderBigTextArea, renderInputField, renderSelect2Async, renderToggleInput} from "../../../../components/Redux-Forms";
import Dropzone from "../../../../components/Dropzone";

const OffresForm = (props) => {

    const edit = !!props.computedMatch.params.id;

    const createOrUpdateOffre = (values) => {
        console.log("Values", values);
    };

    return (
        <div className="row">
            <div className="col-lg-12">
                <form onSubmit={props.handleSubmit(createOrUpdateOffre)}>
                    <div className='my-4 row'>
                        <div className='col-12'>
                            <div className='card mb-2'>
                                <h4 className="card-header">{edit ? "Modifier un offre" : "Ajouter un offre"}</h4>
                            </div>
                            <div className='card mb-2'>
                                <h5 className="card-header">Général</h5>
                                <div className='card-body m-4'>
                                    <div className='row'>
                                        <div className='form-group col-md-3 col-sm-12'>
                                            <Field
                                                className='form-control'
                                                name="activee"
                                                component={renderToggleInput}
                                                type="checkbox"
                                                label="Activée"
                                            />
                                            <label className='font-weight-bold ml-5'>Activée</label>
                                        </div>
                                        <div className='form-group col-md-9 col-sm-12'>
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
                                                    label={`visuel`}
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Categorie</label>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='label-required font-weight-bold'>Type</label>
                                            <div>
                                            </div>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='label-required font-weight-bold'>Territoire </label>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-12 col-sm-12'>
                                            <label className='label-required font-weight-bold'>Informations
                                                tarif</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="informationsTarif"
                                                    component={renderBigTextArea}
                                                    label="Informations tarif"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Date de début</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="dateDebut"
                                                    component={renderInputField}
                                                    type="date"
                                                    label="Date de début"
                                                    validate={required({message: 'Obligatoire'})}
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Date de fin</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="dateFin"
                                                    component={renderInputField}
                                                    type="date"
                                                    label="Date de fin"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card mb-2'>
                                <h5 className="card-header">Calendrier papier</h5>
                                <div className='card-body m-4'>
                                    <div className='row d-flex justify-content-center'>
                                        <Field
                                            className='form-control'
                                            name="lundiPapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Lundi"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Lundi</label>

                                        <Field
                                            className='form-control'
                                            name="mardiPapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Mardi"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Mardi</label>

                                        <Field
                                            className='form-control'
                                            name="mercrediPapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Mercredi"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Mercredi</label>

                                        <Field
                                            className='form-control'
                                            name="jeudiPapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Jeudi"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Jeudi</label>

                                        <Field
                                            className='form-control'
                                            name="vendrediPapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Vendredi"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Vendredi</label>

                                        <Field
                                            className='form-control'
                                            name="samediPapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Samedi"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Samedi</label>

                                        <Field
                                            className='form-control'
                                            name="dimanchePapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Dimanche"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Dimanche</label>
                                    </div>
                                </div>
                            </div>
                            <div className='card mb-2'>
                                <h5 className="card-header">Calendrier numérique</h5>
                                <div className='card-body m-4'>
                                    <div className='row d-flex justify-content-center'>
                                        <Field
                                            className='form-control'
                                            name="lundiPapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Lundi"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Lundi</label>

                                        <Field
                                            className='form-control'
                                            name="mardiPapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Mardi"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Mardi</label>

                                        <Field
                                            className='form-control'
                                            name="mercrediPapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Mercredi"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Mercredi</label>

                                        <Field
                                            className='form-control'
                                            name="jeudiPapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Jeudi"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Jeudi</label>

                                        <Field
                                            className='form-control'
                                            name="vendrediPapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Vendredi"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Vendredi</label>

                                        <Field
                                            className='form-control'
                                            name="samediPapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Samedi"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Samedi</label>

                                        <Field
                                            className='form-control'
                                            name="dimanchePapier"
                                            component={renderToggleInput}
                                            type="checkbox"
                                            label="Dimanche"
                                        />
                                        <label className='font-weight-bold ml-2 mr-5'>Dimanche</label>
                                    </div>
                                </div>
                            </div>
                            <div className='card mb-2'>
                                <h5 className="card-header">Paramètre offre</h5>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='form-group col-md-12 col-sm-12'>
                                            <p className="card-header">Clients additionnels</p>
                                            <div className='card-body'>
                                                <div className='row'>
                                                    <div className='form-group col-md-3 col-sm-12'>
                                                        <Field
                                                            className='form-control'
                                                            name="activer"
                                                            component={renderToggleInput}
                                                            type="checkbox"
                                                            label="Activer"
                                                        />
                                                        <label className='font-weight-bold ml-5'>Activer</label>
                                                    </div>
                                                    <div className='form-group col-md-9 col-sm-12'>
                                                        <label className='label-required font-weight-bold'>Nombre maximal de client (4 maximum)</label>
                                                        <div>
                                                            <Field
                                                                className='form-control'
                                                                name="clientMax"
                                                                component={renderInputField}
                                                                type="number"
                                                                label="Nombre maximal de client (4 maximum)"
                                                                validate={required({message: 'Obligatoire'})}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row d-flex justify-content-center">
                                                    <Field
                                                        className='form-control'
                                                        name="afficherTelephone"
                                                        component={renderToggleInput}
                                                        type="checkbox"
                                                        label="Afficher le numéro de téléphone"
                                                    />
                                                    <label className='font-weight-bold ml-2 mr-5'>Afficher le numéro de téléphone</label>

                                                    <Field
                                                        className='form-control'
                                                        name="VerifierEmail"
                                                        component={renderToggleInput}
                                                        type="checkbox"
                                                        label="Vérifier l'email client"
                                                    />
                                                    <label className='font-weight-bold ml-2 mr-5'>Vérifier l'email client</label>

                                                    <Field
                                                        className='form-control'
                                                        name="verificationBloquante"
                                                        component={renderToggleInput}
                                                        type="checkbox"
                                                        label="La vérification est bloquante"
                                                    />
                                                    <label className='font-weight-bold ml-2 mr-5'>La vérification est bloquante</label>
                                                </div>
                                                <p className="card-header"/>
                                                <div className="row d-flex justify-content-center mt-4">
                                                    <Field
                                                        className='form-control'
                                                        name="emailOptionnel"
                                                        component={renderToggleInput}
                                                        type="checkbox"
                                                        label="Rendre le premier email optionnel"
                                                    />
                                                    <label className='font-weight-bold ml-2 mr-5'>Rendre le premier email optionnel</label>

                                                    <Field
                                                        className='form-control'
                                                        name="emailBloquant"
                                                        component={renderToggleInput}
                                                        type="checkbox"
                                                        label="La vérification de l'email est bloquante"
                                                    />
                                                    <label className='font-weight-bold ml-2 mr-5'>La vérification de l'email est bloquante</label>
                                                    <div className='form-group col-md-4 col-sm-12'>
                                                    <label className='label-required font-weight-bold'>Envoyer les commandes :</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className=' col-12 d-flex flex-row-reverse mt-3'>
                                    <button
                                        className={cs('btn btn-lg btn-primary ml-1')}
                                        type="submit"
                                        disabled={
                                            props.pristine ||
                                            props.submitting ||
                                            props.loading
                                        }
                                    >
                                        Créer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default compose(
    connect(() => {
    }, {}),
    reduxForm({form: 'offresForm', enableReinitialize: true}),
)(OffresForm);
