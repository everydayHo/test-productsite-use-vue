const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs');

app.use(
  session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, //쿠키 유효시간
    },
  })
);

const server = app.listen(3000, () => {
  console.log('Sever Started. port 3000');
});

let sql = require('./sql.js');

fs.watchFile(__dirname + '/sql.js', (curr, prev) => {
  console.log('sql 변경시 재시작 없이 변경되도록함');
  delete require.cache[require.resolve('./sql.js')];
  sql = require('./sql.js');
});

const db = {
  database: 'dev',
  connectionLimit: 10,
  host: '172.30.1.2',
  user: 'root',
  password: 'mariadb',
};
const dbPool = require('mysql').createPool(db);

app.post('/api/login', async (request, res) => {
  request.session['email'] = 'jungwoopage@gmail.com';
  res.send('ok');
});
app.post('/api/logout', async (request, res) => {
  request.session.destroy();
  res.send('ok');
});

//클라이언트쪽에서 데이터 요청이 들어올 때

app.post('/api/:alias', async (request, res) => {
  try {
    res.send(await req.db(request.params.alias));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});
app.post('/apirole/:alias', async (request, res) => {
  if (!request.session.email) {
    return res.status(401).send({ error: '로그인하세요' });
  }
  try {
    res.send(await req.db(request.params.alias));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

const req = {
  async db(alias, param = [], where = '') {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != 'ER_DUP_ENTRY') console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};
