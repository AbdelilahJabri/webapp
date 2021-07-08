import React from 'react';
import Datatable from "../../../../components/Datatable";

const Jour = ({history}) => {

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

export default Jour;
