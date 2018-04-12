var friendsList = require('../data/friends');
var path = require('path');

//ROUTS
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsList);
    });

    //API POST Request-handles when user submits a form & thus submits data to the server.
    app.post('/api/friends', function(req, res) {
        var characters = {
            name: "",
            image: "",
            matchDifference: 1000
        };
        var usrData = req.body;
        var usrName = usrData.name;
        var usrImage = usrData.image;
        var usrScores = usrData.scores;

        var totalDifference = 0;

        //loop through the friendslist data array of objects to get each friends scores
        for (var i = 0; i < [friendsList].length - 1; i++) {
            console.log(friendsList[i].name);
            totalDifference = 0;

            //loop through that friends score and the users score and calculate the 
            // absolute difference between the two and push that to the total difference variable set above
            for (var j = 0; j < 10; j++) {
                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friendsList[i].scores[j]));
                // If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= characters.friendDifference) {

                    // Reset the bestMatch to be the new friend. 
                    characters.name = friendsList[i].name;
                    characters.photo = friendsList[i].photo;
                    characters.matchDifference = totalDifference;
                }
            }
        }

        friendsList.push(usrData);

        res.json(characters);
    });
};