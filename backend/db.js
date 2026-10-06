const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',              // ನಿಮ್ಮ MySQL username
  password: '2306', // install ಸಮಯದಲ್ಲಿ set ಮಾಡಿದ password
  database: 'passport_app'   // ನೀವು create ಮಾಡಿದ database
});

db.connect(err => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);
});

module.exports = db;
