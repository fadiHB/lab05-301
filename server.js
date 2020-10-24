let express = require('express'); // libraru for the server
let port = process.env.PORT || 3000;
let app = express();
app.use(express.static('public'))

// test from localhost:3000
app.get('/',(req,res) => {
    res.status(200).sendFile('index.html')
})

// test from ubunto
app.listen(port,() => {
    console.log('test');
})

