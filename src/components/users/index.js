import React, {useState} from 'react';
import useModal from '../extra/popup';
import users from '../extra/user_data';
import AddUser from './add_user';
import UsersMap from './users_map';
import Moment from 'moment';

function Users() {
  const [users_list, setUsers] = useState(users)

  const addUser = (user, e) => {
    user.id = users_list.length
    user.fechaNac = Moment(user.fechaNac).format('YYYY-MM-DD')
    setUsers([
        ...users_list,
        user
    ])
  }

  const calcularEdad = (fecha) => {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
  }

  const [selectedDate, setSelectedDate] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [Modal, open, close] = useModal('root', {
    preventScroll: true
  });

  return (
    <div className="user_table">
      <UsersMap users_list={users_list} calcularEdad={calcularEdad}></UsersMap>
        <br></br>
        <button className="btn btn-primary" onClick={open}>Agregar usuario</button>
        <br></br>
        <Modal>
            <div className="modalStyle">
            <AddUser close={close}
            addUser={addUser} 
            handleDateChange={handleDateChange} 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate}></AddUser>
            </div>
        </Modal>
    </div>
  );
};

export default Users;
