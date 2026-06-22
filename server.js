const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/api/voc', (req, res) => {

    const { voc, gamma, tmin, m, tstc } = req.body;

    const s1 = tmin - tstc;
    const s2 = gamma / 100;
    const s3 = voc * (-s2) * s1 * m;
    const s4 = voc * m;
    const s5 = s4 + s3;

    res.json({ s1, s2, s3, s4, s5 });
});

app.post('/api/vmp', (req, res) => {

    const { vmp, gamma, tmax, m, tstc } = req.body;

    const s1 = tmax - tstc;
    const s2 = gamma / 100;
    const s3 = vmp * (-s2) * s1 * m;
    const s4 = vmp * m;
    const s5 = s4 + s3;

    res.json({ s1, s2, s3, s4, s5 });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});