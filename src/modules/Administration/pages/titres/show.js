import {get, isEmpty} from "lodash";
import {connect} from "react-redux";
import {createGetAction} from "../../../../redux/actions";
import {TITRES} from "../../../../redux/actions/constants";
import React, {useEffect} from "react";
import Loader from "../../../../Layout/Loader";
import {Badge} from "reactstrap";
import ReadMoreReact from 'read-more-react';
import {editionsColumns} from "./columns";
import Datatable from "../../../../components/Datatable/MUIDataTable";

const Titre = ({getTitre, titre, computedMatch, history}) => {

    useEffect(() => {
        getTitre({id: get(computedMatch, 'params.id')});
    }, []);

    const actions = [
        {
            action: 'edit',
            icon: 'fa fa-pen',
            color: 'warning',
            name: 'Modifier',
            onClick: (id) => {/*
                console.log("id", id);
                history.push("/administration/titres/modifier/" + id)
            */
            }
        },
        {
            action: 'delete',
            icon: 'fa fa-trash-alt',
            name: 'Supprimer',
            color: 'danger',
            onClick: (id) => {
            }
        }
    ];

    if (isEmpty(titre)) return <Loader/>;

    console.log("titre", titre);

    return (
        <div className="app-page-title">
            <div className="page-title-wrapper">
                <div className="page-title-heading">
                    <div className="page-title-icon">
                        <img alt={titre.libelle} src={process.env.REACT_APP_API_URL + "/media/" + titre.visuel.filePath}
                             width={"60px"}/>
                    </div>
                    <div>{titre.libelle}</div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="main-card mb-3 card">
                        <div className="card-header">
                            <div className={"row w-100"}>
                                <div className="col-3 mt-1">
                                    Activée : {titre.enabled ? <Badge color="success">Oui</Badge> :
                                    <Badge color="danger">Non</Badge>}
                                </div>
                                <div className="col-9 d-flex justify-content-end">
                                    <button className="btn btn-info mr-2"
                                            onClick={() => {
                                            }}
                                            disabled={!get(titre, 'conditionGeneral.filePath', null)}
                                    >
                                        Conditions générales de vente
                                    </button>
                                    <button className="btn btn-info mr-2"
                                            onClick={() => {
                                            }}
                                            disabled={!get(titre, 'conditionGeneral.guideNumerique', null)}
                                    >
                                        Guide numérique
                                    </button>
                                    <div className="btn btn-success mr-2"
                                         onClick={() => {
                                         }}>
                                        Ajouter une édition
                                    </div>
                                    <div className="btn btn-warning"
                                         onClick={() => history.push(`/administration/titres/modifier/${get(computedMatch, 'params.id')}`)}>
                                        Modifier le titre
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-2 color-secondary">Ordre :</div>
                                <div className="col-sm-9 mb-2">{get(titre, "ordre", "")}</div>

                                <div className="col-sm-2 color-secondary">Code :</div>
                                <div className="col-sm-9 mb-2">{get(titre, "code", "")}</div>

                                <div className="col-sm-2 color-secondary">Titre parent :</div>
                                <div className="col-sm-9 mb-2">{get(titre, "titreParent.libelle", "")}</div>

                                <div className="col-sm-2 color-secondary">Cnil :</div>
                                <div className="col-sm-9 mb-2 text-justify"><ReadMoreReact
                                    readMoreText={"Lire la suite..."} text={get(titre, "cnil", "")}/></div>

                                <div className="col-sm-2 color-secondary">Créancier mandat sepa :</div>
                                <div
                                    className="col-sm-9 mb-2 text-justify">{get(titre, "creancierMandatSepa", "")}</div>

                                <div className="col-sm-2 color-secondary">ICS :</div>
                                <div className="col-sm-9 mb-2 text-justify">{get(titre, "ics", "")}</div>

                                <div className="col-sm-2 color-secondary">Text legal mandat sepa :</div>
                                <div className="col-sm-9 mb-2 text-justify"><ReadMoreReact
                                    readMoreText={"Lire la suite..."} text={get(titre, "legalMandatSepa", "")}/></div>

                                <div className="col-sm-2 color-secondary">Mention service client :</div>
                                <div className="col-sm-9 mb-2 text-justify"><ReadMoreReact
                                    readMoreText={"Lire la suite..."} text={get(titre, "serviceClient.mention", "")}/>
                                </div>

                                <div className="col-sm-2 color-secondary">Site service client :</div>
                                <div className="col-sm-9 mb-2 text-justify">{get(titre, "serviceClient.site", "")}</div>

                                <div className="col-sm-2 color-secondary">Email service client :</div>
                                <div
                                    className="col-sm-9 mb-2 text-justify">{get(titre, "serviceClient.email", "")}</div>
                            </div>
                            <div className="row d-flex justify-content-center">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="main-card mb-3 card">
                        <div className="card-body">
                            <Datatable data={Array.isArray(titre.editions) ? titre.editions : []}
                                       title={"Édition"}
                                       columns={editionsColumns}
                                       actions={actions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        titre: get(state, 'app.titres.one', {})
    }
};

export default connect(mapStateToProps, {
    getTitre: createGetAction(TITRES)
})(Titre);
