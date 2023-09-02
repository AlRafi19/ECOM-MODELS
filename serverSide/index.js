const app = require ("./app")

const port = 8001;

app.listen(port, function() {
    console.log("Application is running on port " + port);
});