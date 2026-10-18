const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ 
        message: 'Hello from CI/CD Pipeline!',
        version: '1.0.0',
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy',
        uptime: process.uptime()
    });
});

app.get('/api/info', (req, res) => {
    res.json({
        environment: process.env.NODE_ENV || 'development',
        nodeVersion: process.version,
        platform: process.platform
    });
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server };
//Updated Sun Oct 18 18:44:14 SAST 2026
// Updated Sun Oct 18 18:45:34 SAST 2026 again
