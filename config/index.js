require('dotenv').config()

module.exports.config = {
    author: 'leoarayav',
    org: 'penwind',
    port: process.env.PORT || 3000,
    database: {
        url: process.env.DATABASE_URL || 'mongodb://localhost:27017',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    }
}