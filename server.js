const express = require('express'); 
const path = require('path'); 
const fs = require('fs'); 
const request = require('request');
const { PORT } = require('./config.js'); 
const { API_KEY } = require('./config.js'); 

const app = express(); 

app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html')); 
})

app.listen(process.env.port, () => {
    console.log('server is running...');    

    const url = 'https://api.currentsapi.services/v1/search?apiKey=' + API_KEY;

    request.get({
        url: url, 
        json: true, 
        headers: {'User-Agent': 'request'}
    }, (err, res, data) => {
        if (err) {
            console.log('Error:', err)
        } 
        else if (res.statusCode !== 200) {
            console.log('Status:', res.statusCode)
        } 
        else {
            var newData = JSON.stringify(data); 
            fs.writeFile(__dirname + '/frontend/static/js/views/articles.json', newData, err => {
                if (err) throw err; 
                console.log('success'); 
            })
        }
    })
})

