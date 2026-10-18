const request = require('supertest');
const { app, server } = require('../src/index');

describe('API Tests', () => {
    afterAll(() => {
        server.close();
    });

    test('GET / should return welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Hello from CI/CD Pipeline!');
        expect(response.body.version).toBe('1.0.0');
    });

    test('GET /health should return healthy status', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('healthy');
        expect(response.body.uptime).toBeGreaterThanOrEqual(0);
    });

    test('GET /api/info should return system information', async () => {
        const response = await request(app).get('/api/info');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('nodeVersion');
        expect(response.body).toHaveProperty('platform');
    });
});
