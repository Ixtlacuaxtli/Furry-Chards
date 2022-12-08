import getCartas from './openDataBase'

const query = "SELECT nombre, apellido, especie, edad FROM cartas;"

/*const success = (transaction, result) => {
    for (let i in result.rows.length) {
        console.log(result.rows[i])
    }
}

const error = (transaction, error) => {
    console.log(error)
}

const getCartas = async (db) => {
    await db.transaction(tx => {
        tx.executeSql(query, [], success, error)
    })
}*/

const initDataBase = () => {
    //const db = SQLite.openDatabase("./SQLite/cartasFurras.db")
    //getCartas(db)
    console.log(getCartas())
}

export default initDataBase