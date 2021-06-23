import React, { Component } from "react";
import UsersDataService from "../../services/users_service";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.obtenerUsuarios = this.obtenerUsuarios.bind(this);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    UsersDataService.getAll()
      .then(response => {
        this.setState({
          users: response.data.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { users } = this.state;

    return (
      <div className="user_table">
        <div className="col-md-12">
          <h4>Usuarios</h4>
          <table>
            <tr>
              <td>
                Nombre
              </td>
              <td>
                Correo
              </td>
            </tr>
            {users && 
              users.map((user) => (
                <tr>
                  <td>
                    {user.first_name} {user.last_name}
                  </td>
                  <td>
                    {user.email}
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    );
  }
}