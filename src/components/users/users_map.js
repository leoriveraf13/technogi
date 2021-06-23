import React, { Fragment } from 'react';

const UsersMap = (props) => (
    <Fragment>
        <div className="col-md-12">
            <h4>Usuarios</h4>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <td>
                            Nombre
                        </td>
                        <td>
                            Correo
                        </td>
                        <td>
                            Edad
                        </td>
                        <td>
                            Fecha de nacimiento
                        </td>
                    </tr>
                </thead>
                <tbody>
                {props.users_list.length > 0 ? (
                        props.users_list.map(user => (
                            <tr key={user.id}>
                                <td>
                                    {user.nombre} {user.apellidos}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.fechaNac ? (props.calcularEdad(user.fechaNac)) : 0}
                                </td>
                                <td>
                                    {user.fechaNac}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4}>No users</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    </Fragment>
)
 
export default UsersMap;