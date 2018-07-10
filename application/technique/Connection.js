var mongoose = require('mongoose')

class Connection {

    constructor() {
        this._Instance = null;
        this.database = null
    }

    getConnection() {
        if ( this.database ) return Promise.resolve(this.database)
        mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true})
        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'connection error:'))
        db.once('open', function() {
            console.log('Connected to MongoDb !')
        })
        return Promise.resolve(db)
    }

    get _Instance() {
        if(this._Instance == 'undefined') {
            const con = new Connection()
            this.getConnection().then( con => this.database = con)
        } else {
            return this._Instance;
        }
        
    }
   
}

const connection = new Connection()

module.exports = connection._Instance;


