const request = require('supertest');
const {close, listen} = require('../app');

describe('GET /', () => {

    beforeAll(() => {
        listen()
    })

    afterAll(() => {
        close()
    })

    it('should return "Hello, World!"', async () => {
        const PORT = process.env.PORT;
        if (!PORT) {
            throw new Error('PORT environment variable is not set for the test');
        }

        const response = await request(`http://localhost:${PORT}`).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!\n');
    });
});
