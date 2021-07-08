import React, {useEffect} from 'react';
import Datatable from "../../../../components/Datatable";
import {connect, mapStateToProps} from "react-redux";
import {createDeleteAction, createListAction} from "../../../../redux/actions";
import {ACTIONS, TITRES} from "../../../../redux/actions/constants";

const Jour = ({history, listTitres}) => {

    useEffect(() => {
        listTitres();
    }, []);

    const actions = [
        {
            action: 'done',
            icon: 'fa fa-check',
            color: 'success',
            name: 'Fait',
            onClick: (id) => console.log(id)
        }
    ];

    const columns = [
        {
            name: 'task',
            label: 'Tache',
        },
    ];

    return (
        <div className="row">
            <div className="col-lg-12">
                <Datatable data={[]}
                           title={"Action du jour"}
                           columns={columns}
                           actions={actions}
                />
            </div>
        </div>
    );
};

export default connect(mapStateToProps, {
    listActions: createListAction(ACTIONS),
})(Jour);
