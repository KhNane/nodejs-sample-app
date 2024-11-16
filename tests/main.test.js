const request = require('supertest');
const { close, listen } = require('../app');

describe('GET /', () => {

    // Set the PORT environment variable before starting the server
    beforeAll(async () => {
        const PORT = process.env.PORT || 3000; // Default to 3000 if PORT isn't set
        await listen(PORT); // Ensure listen() is asynchronous and waits for server startup
    });

    afterAll(async () => {
        await close(); // Ensure the server is properly closed after tests
    });

    it('should return "Hello, World!"', async () => {
        const PORT = process.env.PORT || 3000;  // Use the same default value
        const response = await request(`http://localhost:${PORT}`).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!\n');
    });
});
