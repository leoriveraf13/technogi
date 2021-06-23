import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

const AddUser = (props) => {
    const { register, formState: { errors }, handleSubmit, control } = useForm();

    const onSubmit = (datos, e) => {
        props.addUser(datos)
        e.target.reset();
        props.close();
    }

    return (
        <div>
            <h3>Datos de usuario</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"><b>Nombres: </b></label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control form-control-sm"
                        {...register("nombre", {
                            required: {value: true, message: 'Campo obligatorio'},
                            maxLength: {value: 30, message: 'Máximo 30 caracteres'}
                        })}
                        ></input>
                        {errors.nombre &&
                        <span className="text-danger text-small d-block mb-2">
                        {errors.nombre.message}</span>}
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"><b>Apellidos: </b></label>
                    <div className="col-sm-9">
                        <input type="text" name="apellido" className="form-control form-control-sm"
                        {...register("apellidos", {
                            required: {value: true, message: 'Campo obligatorio'},
                            maxLength: {value: 30, message: 'Máximo 30 caracteres'}
                        })}
                        ></input>
                        {errors.apellidos &&
                        <span className="text-danger text-small d-block mb-2">
                        {errors.apellidos.message}</span>}
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"><b>Correo: </b></label>
                    <div className="col-sm-9">
                        <input type="text" name="email" className="form-control form-control-sm"
                        {...register("email", {
                            required: {value: true, message: 'Campo obligatorio'},
                            pattern: {value: /^\S+@\S+$/i, message: 'Utilice un correo válido'}
                        })}
                        ></input>
                        {errors.email &&
                        <span className="text-danger text-small d-block mb-2">
                        {errors.email.message}</span>}
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"><b>Fecha de nacimiento: </b></label>
                    <div className="col-sm-9">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <Controller
                                    name="fechaNac"
                                    control={control}
                                    render={({ field: { ref, ...rest } }) => (
                                    <DatePicker
                                        variant="inline"
                                        initialFocusedDate={null}
                                        value={props.selectedDate}
                                        onChange={props.handleDateChange}
                                        format="yyyy-MM-dd"
                                        margin="normal"
                                        maxDate={new Date()}
                                        disableFuture="true"
                                        autoOk="true"
                                        {...rest}
                                    />
                                    )}
                                    rules={{
                                        required: {value: true, message: 'Seleccione una fecha diferente a la preestablecida'}
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        {errors.fechaNac &&
                        <span className="text-danger text-small d-block mb-2">
                        {errors.fechaNac.message}</span>}
                    </div>
                </div>
                <br></br>
                <button className="btn btn-primary">Agregar</button>
            </form>
        </div>
    );
}

export default AddUser;