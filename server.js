const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/fizzbuzz', (req, res) => {
    const values = req.body.values;
    const results = [];
    values.forEach(value => {
        if (typeof value !== 'number') {
            results.push({ input: value, output: 'Invalid item' });
        } else {
            let output = '';
            if (value % 3 === 0) output += 'Fizz';
            if (value % 5 === 0) output += 'Buzz';
            if (output === '') {
                results.push({ input: value, output: `Divided ${value} by 3`, divideBy: 3 });
                results.push({ input: value, output: `Divided ${value} by 5`, divideBy: 5 });
            } else {
                results.push({ input: value, output });
            }
        }
    });
    res.json(results);
});

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log("Access the application via http://localhost:3000/")
    });
}

module.exports = app;
