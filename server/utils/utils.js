var request = require('request');

module.exports = {

    getRandomName: function (callback) {

//Lets configure the GET request
        var url_get = 'http://api.randomuser.me/';
        var request_get_options = {
            qs: {}, //Query string data if necessary. pure Gets dont have this
            method: 'GET', //Specify the http verb
            headers: { //We can define headers too
                'Content-Type': 'MyContentType',
                'Custom-Header': 'Custom Value'
            }
        };
// make the request. note : body is a attribute of the response. i can get the body by response.body
        request(url_get, request_get_options, function
                (error, response, body) {
                if (error) {
                    console.log(error);
                } else {
                    var parsed = JSON.parse(body); // important fucking line..
                    var response_array = parsed.results;

                    for (var k = 0; k < response_array.length; k++) {
                        var random_name = response_array[k].name.first + ' ' + response_array[k].name.last;
                        console.log('random name : ' + random_name);

                        var object = {
                            random_name: ''
                        };

                        object.random_name = response_array[k].name.first + ' ' + response_array[k].name.last;

                    }

                  
                    callback(null, object.random_name);

                }
            }
        );

    
    }
    
    
    
};