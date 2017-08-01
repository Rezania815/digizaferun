var express = require('express'),
    app = express(),
    MongoClient = require('mongodb').MongoClient

app.set('port', process.env.PORT | 5000)

MongoClient.connect('', (err, db) => {
    if(err) return console.log(err)
    app.listen(app.get('port'), () => {
        console.log(`listening on port ${app.get('port')}`)
        require('./app/routes')(app, db)
    })
})
