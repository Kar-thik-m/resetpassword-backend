import express from 'express';
import cors from 'cors';

import userRouter from '../../day-39/resetpassword-backend/routes/user.js';

import connectToDb from './db-utils/mongoos-connect.js';
import authRouter from '../../day-39/resetpassword-backend/routes/app-uses.js';

const app = express();


const corsOptions = {
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', };
  app.use(cors(corsOptions));

const PORT =process.env.PORT || 8888;
await connectToDb();
app.use(express.json());



app.use('users',userRouter);
app.use('auth',authRouter);




app.listen(PORT, () => {
    console.log('started',PORT);
});