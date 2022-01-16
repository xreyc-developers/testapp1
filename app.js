const express = require("express");
const app = express();

require("./initialize/db")();
require("./initialize/routes")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})