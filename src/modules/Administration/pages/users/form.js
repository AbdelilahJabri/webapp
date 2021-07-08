import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import cs from "classnames";
import {required, email} from 'redux-form-validators';
import {renderInputField, renderSelect2Async, renderToggleInput} from "../../../../components/Redux-Forms";

const UsersForm = (props) => {

    const edit = !!props.computedMatch.params.id;

    const createOrUpdateUser = (values) => {
        console.log("Values", values);
    };

    return (
        <div className="row">
            <div className="col-lg-12">
                <form onSubmit={props.handleSubmit(createOrUpdateUser)}>
                    <div className='my-4 row'>
                        <div className='col-12'>
                            <div className='card mb-2'>
                                <h4 className="card-header">{edit ? "Modifier un utilisateur" : "Ajouter un utilisateur"}</h4>
                            </div>
                            <div className='card mb-2'>
                                <h5 className="card-header">Profil</h5>
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
                                            <label className='label-required font-weight-bold'>Email</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="email"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="Email"
                                                    validate={[required({message: 'Obligatoire'}), email({message: 'Veuillez saisir une adresse email valide'})]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='label-required font-weight-bold'>Nom</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="lastName"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="Nom"
                                                    validate={[required({message: 'Obligatoire'})]}
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='label-required font-weight-bold'>Prénom</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="firstName"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="Prénom"
                                                    validate={[required({message: 'Obligatoire'})]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card mb-2'>
                                <h5 className="card-header">General</h5>
                                <div className='card-body m-4'>
                                    <div className='row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Profil</label>
                                            <div>
                                            </div>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Fonction</label>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Société</label>
                                            <div>
                                            </div>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Régions</label>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='font-weight-bold'>Téléphone</label>
                                            <div>
                                                <Field
                                                    className='form-control'
                                                    name="phone"
                                                    component={renderInputField}
                                                    type="text"
                                                    label="Téléphone"
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group col-md-6 col-sm-12'>
                                            <label className='label-required font-weight-bold'>Plain Password</label>
                                            <div>
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
    reduxForm({form: 'usersForm', enableReinitialize: true}),
)(UsersForm);
