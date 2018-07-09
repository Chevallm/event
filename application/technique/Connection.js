var mongoose = require('mongoose')

class Connection {
    static connectToMongo() {
        if ( this.database ) return Promise.resolve(this.database)
        mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true})
        const db = mongoose.connection
        this.db = db
        db.on('error', console.error.bind(console, 'connection error:'))
        db.once('open', function() {
          console.log('Connected to MongoDb !')
        })
    }
}

Connection.db = null

modules.exports = { Connection }


