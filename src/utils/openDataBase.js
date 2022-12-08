import connect, {sql} from '@databases/expo'

/*async function openDatabase(pathToDatabaseFile) {
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }
    await FileSystem.downloadAsync(
        Asset.fromModule(require(pathToDatabaseFile)).uri,
        FileSystem.documentDirectory + 'SQLite/cartasFurras.db'
    );
    return SQLite.openDatabase('cartasFurras.db');
}

export default openDatabase*/

/*await FileSystem.downloadAsync(
    Asset.fromModule(require('./cartasFurras.db')).uri,
    `${FileSystem.documentDirectory}SQLite/cartasFurras.db`
)

const sqliteDB = await AssetUtils.resolveAsync(require(`../../SQLite/cartasFurras.db`))

await FileSystem.copyAsync({
    from: sqliteDB.localUri,
    to: `${FileSystem.documentDirectory}SQLite/cartasFurras.db`
})*/

/*export default async function loadAsyncResources() {
    const dbInfo = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite/cartasFurras.db`)
    console.log(dbInfo)
}*/

export default async function getCartas() {
    const dbFileName = await FileSystem.downloadAsync(
        Asset.fromModule(require('../../SQLite/cartasFurras.db')).uri, 
        FileSystem.documentDirectory + 'SQLite/cartasFurras.db'
        )
    
    const db = connect(dbFileName)

    return (
        await db.query(sql`SELECT * FROM cartas`)
    )[0] || undefined
}