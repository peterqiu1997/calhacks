'use strict';
const express = require('express');
const path = require('path');
const PORT_NUMBER = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/dist')));
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});

app.listen(PORT_NUMBER, function() {
	console.log("Listening on port 3000");
});
