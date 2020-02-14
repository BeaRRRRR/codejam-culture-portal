import express from 'express';
import { Request, Response } from 'express';
import path from 'path';

const app = express(),
    DIST_DIR = __dirname,
    HTML_FILE = path.join(DIST_DIR, 'index.html');


const PORT = process.env.PORT || 3000;

app.use(express.static(DIST_DIR));

app.get('*', (req, res, next) => {
    res.sendFile(HTML_FILE);
});


app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
});
