// access modules
const express = require("express");
const path = require("path");
// instance variable
const app = express();
// access all files path of a public folder.
const public_path = path.join(__dirname, "public");
app.use(express.static(public_path));
// syntax---app.Http_methods(path,handler)
app.get("/form", (req, res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    }
    console.log(response);
    res.send(JSON.stringify(response));
    // res.send("<p>First name:" +req.query['first_name']+"</P>"+"<p>Last name:" +req.query['last_name']+"</P>")
});
app.listen(8000);