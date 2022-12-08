const ValidateForm = (valores) => {
    let errors = {};

    if(!valores.nombre) {
        errors.nombre='Por favor, rellena el campo nombre'

    } else if(!valores.apellido) {
        errors.apellido='Por favor, rellena el campo apellido'

    } else if(!valores.especie) {
        errors.especie='Por favor, rellena el campo especie'
    }

    return errors
}

export default ValidateForm