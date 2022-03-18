import express from 'express';
import cors from 'cors';
import { config } from './config';
import { api } from './routes/api';

const port = config.PORT || 2501;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send('Health OK');
});

app.use('/api', api);

app.use('*', (req, res) => {
    return res.send('404 Noy Found')
})

// app.us
app.listen(port, () => {
    return console.log(`Express is listening at port:${port}`);
});