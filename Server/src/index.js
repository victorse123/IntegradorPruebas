//const http = require('http');
//const getCharById = require('./controllers/getCharById');
//const PORT = 3001;
//
//
//http
//    .createServer((req, res) => {
//        res.setHeader('Access-Control-Allow-Origin', '*');
//        const { url } = req;
//
//        if(url.includes('/rickandmorty/character')){
//            const id = url.split('/').pop()
//            getCharById(res, id)
//        }
//
//    })
//    .listen(PORT, 'localhost')

// const express = require('express');
// const server = express();


// const router = require('./routes/index');


// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
//  });

// server.use(express.json());
// server.use('/rickandmorty', router)


const server = require('./app');
const { conn } = require('./DB_connection');
const PORT = 3001;

conn.sync({force: true}).then(() => {
   server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
   
})



