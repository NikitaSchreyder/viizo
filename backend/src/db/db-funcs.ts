import { getDbConnection } from './get-db-connection'
const db = getDbConnection();

export async function getData() {
    const sqlQuery: string = "SELECT * FROM todos";
    return (await db).all(sqlQuery, [], (err: any, rows: any) => {
        if(err) return console.error(err)
        return rows
    })
        .then(result => result)
            .catch(err => console.log(err))
}

export async function putData(id: string, name: string, date: Date) {
    const sqlQuery: string = "INSERT INTO todos (id, name, date) VALUES (?,?,?)";
    return (await db).run(sqlQuery, [id, name, date])
        .then(result => result)
            .catch(err => console.log(err))
}

export async function deleteData(id: string) {
    const sqlQuery: string = "DELETE FROM todos WHERE id=?";
    return (await db).run(sqlQuery, [id])
        .then(result => result)
            .catch(err => console.log(err))
}