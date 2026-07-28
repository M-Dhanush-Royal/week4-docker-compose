const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>🚀 Week 4 - Docker Compose</h1>
        <h2>SkillAudit Cloud Internship</h2>
        <h3>Services Running:</h3>
        <ul>
            <li>✅ Node.js</li>
            <li>✅ Redis</li>
            <li>✅ Nginx</li>
        </ul>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});