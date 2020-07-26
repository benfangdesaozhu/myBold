const mysql = require('mysql')
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'cjm930320',
    database: 'blog'
})
// getConnection 连接池
/**
 * 查询
 * @param {String} sql 
 * @param {function} callback 
 */
function query (sql, callback) {
    connection.getConnection(function (err, connect){
        connect.query(sql, function (err, results, fields) {
            callback(err, results)
            connect.release();
            if(err) throw err
        })
    })
}
/**
 * 带参数查询
 * @param {String} sql 
 * @param {values}
 * @param {function} callback 
 */
function queryValues (sql, values, callback) {
    connection.getConnection(function (err, connect){
        connect.query(sql, values, function (err, results, fields) {
            callback(err, results)
            connect.release();
            if(err) throw err
        })
    })
}

module.exports = {
    query,
    queryValues
}