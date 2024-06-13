const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

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

describe('FizzBuzz API', () => {
    it('should return Fizz for multiples of 3', async () => {
        const response = await request(app)
            .post('/fizzbuzz')
            .send({ values: [3] });

        expect(response.body).toEqual([{ input: 3, output: 'Fizz' }]);
    });

    it('should return Buzz for multiples of 5', async () => {
        const response = await request(app)
            .post('/fizzbuzz')
            .send({ values: [5] });

        expect(response.body).toEqual([{ input: 5, output: 'Buzz' }]);
    });

    it('should return FizzBuzz for multiples of both 3 and 5', async () => {
        const response = await request(app)
            .post('/fizzbuzz')
            .send({ values: [15] });

        expect(response.body).toEqual([{ input: 15, output: 'FizzBuzz' }]);
    });

    it('should return divided results for non-multiples of 3 or 5', async () => {
        const response = await request(app)
            .post('/fizzbuzz')
            .send({ values: [7] });

        expect(response.body).toEqual([
            { input: 7, output: 'Divided 7 by 3', divideBy: 3 },
            { input: 7, output: 'Divided 7 by 5', divideBy: 5 }
        ]);
    });

    it('should return Invalid item for non-number inputs', async () => {
        const response = await request(app)
            .post('/fizzbuzz')
            .send({ values: ['A'] });

        expect(response.body).toEqual([{ input: 'A', output: 'Invalid item' }]);
    });

    it('should handle multiple inputs correctly', async () => {
        const response = await request(app)
            .post('/fizzbuzz')
            .send({ values: [1, 3, 5, 15, 'A', 23] });

        expect(response.body).toEqual([
            { input: 1, output: 'Divided 1 by 3', divideBy: 3 },
            { input: 1, output: 'Divided 1 by 5', divideBy: 5 },
            { input: 3, output: 'Fizz' },
            { input: 5, output: 'Buzz' },
            { input: 15, output: 'FizzBuzz' },
            { input: 'A', output: 'Invalid item' },
            { input: 23, output: 'Divided 23 by 3', divideBy: 3 },
            { input: 23, output: 'Divided 23 by 5', divideBy: 5 }
        ]);
    });
});
