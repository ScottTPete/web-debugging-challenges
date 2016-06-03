var Bird = require('../models/BirdSchema');


module.exports = {
    create: function(req, res) {
        Bird.create(req.body, function(err, result) {
            if (!err) {
                res.send(result);
            } else {

                res.status(500).send(err);
            }
        });
    },

    read: function(req, res) {
        console.log('req.query: ', req.query);
        Bird.find(req.query, function(err, result) {
            if (!err) {
                res.send(result);
            } else {

                res.status(500).send(err);
            }
        });
    },

    update: function(req, res) {
        Bird.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (!err) {
                res.send(result);
            } else {
                res.status(500).send(err);
            }
        });
    },

    delete: function(req, res) {
        Bird.findByIdAndRemove(req.params.id, function(err, result) {
            if (!err) {
                res.send(result);
            } else {

                res.status(500).send(err);
            }
        });
    }
};
