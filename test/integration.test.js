const request = require('supertest');
const app = require('../server');

describe('Integration Test for FizzBuzz Web Application', () => {
    it('should handle a variety of inputs and return the correct results', async () => {
        const response = await request(app)
            .post('/fizzbuzz')
            .send({ values: [1, 3, 5, 15, 'A', 23] });

        expect(response.statusCode).toBe(200);
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
