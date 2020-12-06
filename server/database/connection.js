const mysql = require('mysql');

class Connection {
    constructor(){
        this.host = process.env.DB_HOST || "localhost";
        this.user = process.env.DB_USER || "root";
        this.password = process.env.DB_PASS || "";
        this.port = process.env.DB_PORT || 3306;
        this.name = process.env.DB_NAME || "my_db";

        this.connection = mysql.createConnection({
          host     : this.host,
          user     : this.user,
          port     : this.port,
          password : this.password,
          database : this.name
        });
    }
}

const connection = new Connection();

module.exports = connection;
