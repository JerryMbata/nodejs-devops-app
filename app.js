const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to Jerry DevOps Project</h1>
        <h2>CI/CD Pipeline Demo</h2>

        <ul>
            <li>Jenkins</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>ArgoCD</li>
            <li>GitHub</li>
        </ul>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
