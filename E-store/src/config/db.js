const {Pool} = require('pg')

module.exports = new Pool({
    user: "erildo",
    password: "",
    host: "localhost",
    port: 5432,
    databse: "estore"
})