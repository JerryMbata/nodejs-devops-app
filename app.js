const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Jerry DevOps CI/CD Project</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 50px;
                    background-color: #f4f4f4;
                }
                h1 {
                    color: #2c3e50;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
                li {
                    font-size: 20px;
                    margin: 8px 0;
                }
                .footer {
                    margin-top: 30px;
                    color: #555;
                }
            </style>
        </head>
        <body>

            <h1>🚀 Welcome to Jerry's DevOps CI/CD Project</h1>

            <h2>End-to-End CI/CD Pipeline Demo</h2>

            <p>This application was deployed using:</p>

            <ul>
                <li>✅ GitHub</li>
                <li>✅ Jenkins</li>
                <li>✅ Docker</li>
                <li>✅ Kubernetes (Minikube)</li>
                <li>✅ Argo CD (GitOps)</li>
            </ul>

            <div class="footer">
                <h3>Built by Mr Jerry Mbata</h3>
                <p>Special thanks to Mr. Jethro for the guidance and mentorship.</p>
            </div>

        </body>
        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
