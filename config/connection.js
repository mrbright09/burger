var mysql      = require('mysql');
var connection;
if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{
  connection = mysql.createConnection({
  host     : process.env.DB_HOST || 'localhost',
  user     : process.env.DB_USER || 'root',
  password : process.env.DB_PASSWORD || '',
  database : process.env.DB_NAME || 'burgerDB'
});
}
connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;