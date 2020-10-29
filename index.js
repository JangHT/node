const express = require("express"); // require : import 
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000; // 기본 로컬에 5000번 port를 쓰겠다

app.use(cors()); // CORS 미들웨어 추가

const data = [
    { id: 1, title: 'HTML1', desc: 'HTML1 is HyperText ...' },
    { id: 2, title: 'CSS2', desc: 'CSS is for design ...' },
    { id: 3, title: 'JavaScript', desc: 'javaScript is for interactive' },
]

app.get('/api/content/', (req, res) => {
    res.json(data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// pm2 start index.js --watch
// pm2 stop index.js
