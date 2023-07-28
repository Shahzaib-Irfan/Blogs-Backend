const database = require("mysql");

const connection = database.createConnection({
  host: "b5xjx57mlajngerzd84g-mysql.services.clever-cloud.com",
  user: "ugvdqoxrkdnnzr77",
  password: "X2yyUY5Lre1bw0Gx7aeH",
  database: "b5xjx57mlajngerzd84g",
  port: 3306,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

module.exports = { connection };
