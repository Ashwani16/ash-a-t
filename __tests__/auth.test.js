const request =require ("supertest")
const mongoose = require ("mongoose")
const {MongoMemoryServer} = require ( "mongodb-memory-server" )

const {app} =require ("../app.js")
const { UserModel } = require("../models/users")


let mongo
beforeAll(async ()=>{
    mongo =await MongoMemoryServer.create()
    let uri = mongo.getUri()
    await mongoose.connect(uri)
})

afterAll(async ()=>{
    await mongoose.disconnect()
    await mongo.stop();
})
beforeEach(async () => {
    await UserModel.deleteMany({});
  });

describe("authapi",()=>{
    test("signup works",async()=>{
        const res =await request(app).post("/api/auth/signup").send({email:"email1",password:"1234"})
        expect(res.statusCode).toBe(201);
        expect(res.body.user.email).toBe('email1')
    })

    test("loging works",async ()=>{
        let userData={email:"email1",password:"1234"}
        await request(app).post("/api/auth/signup").send(userData)

        let res = await request(app).post("/api/auth/login").send(userData)

        expect(res.statusCode).toBe(200)
        expect(res.body.token).toBeDefined()


    })

    test("login fails",async()=>{
        let userData={email:"user1",password:"12345"}
        await request(app).post("/api/auth/signup").send(userData)

        let res = await request(app).post("/api/auth/login").send({email:"user1",password:"12345"})
        expect(res.statusCode).toBe(401)
    })

})