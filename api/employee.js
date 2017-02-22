var employees = require('./../dummydata');

module.exports = function(app) {
    
    app.get('/employee/getEmployees', function(req, res) {

        console.log("----------------------------------------------");
        console.info('server got a request');

        employees.getEmployees(function(data) {
            console.info('callback-function executing');
            res.status(200).send(data);
        })

        console.info('this line is after the data query');
    
    })

    app.post('/employee/addEmployee', function(req, res) {
        console.log(req.body);
        res.status(200).send();
    })
}