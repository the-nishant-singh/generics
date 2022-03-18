import express from 'express';
import cors from 'cors';
import { config } from './config';
import { api } from './routes/api';

const port = config.PORT || 2501;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Health OK');
});

api.use('/api', api);

// app.us
app.listen(port, () => {
    return console.log(`Express is listening at port:${port}`);
});