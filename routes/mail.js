

import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv .config();
export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"sparrowkarthik007@gmail.com",
        pass:process.env.NODEMAILER_PASS
    }
})

export const mailOptions={
    from:"sparrowkarthik007@gmail.com",

    to:'sparrowkarthik007@gmail.com',
    subject:'Hello',
    text:'there'
}