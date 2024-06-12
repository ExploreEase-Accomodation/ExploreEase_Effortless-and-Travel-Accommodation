import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());


//routes import

import userRouter from './routes/user.routes.js';
import trainRouter from "./routes/train.routes.js";
import paymentRouter from './routes/payment.routes.js'
import historyRouter from './routes/bookHistory.routes.js' 

//routes declaration

app.use('/api/v', userRouter);
app.use('/api/v', trainRouter);
app.use('/api/v', paymentRouter);
app.use('/api/v', historyRouter);

export {app};

















// import express from 'express';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';

// import createUserRouter from './routes/CreateUser.js'; // Update the import path accordingly
// import trainRouter from './routes/TrainData.js';

// const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
// }));


// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//     res.header(
//         'Access-Control-Allow-Methods',
//         "Origin, X-Requested-with, Content-Type, Accept"        
//     );

//     next();
// });


// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(express.static('public'));
// app.use(cookieParser());

// // Routes should be added here
// app.use('/api/v', createUserRouter);

// app.use('/api/v', trainRouter );

// app.get('/', (req, res) => {
//     res.send("Jay Maa Saraswati");
// })



// export default app;