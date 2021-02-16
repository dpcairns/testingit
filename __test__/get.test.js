const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

it('gets the test endpoint', async done => {
    const myData = { Hello: 'World!' };
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(myData);
    done();
});