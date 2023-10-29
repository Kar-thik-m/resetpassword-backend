import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sparrowkarthik007@gmail.com',
        pass: 'zbbk lnnrb tjjsjj'
    }
});

export const mailOptions = {
    from: 'sparrowkarthik007@gmail.com',
    to: 'sparrowkarthik007@gmail.com',
    subject: 'sparrowkarthik007@gmail.com',
    text: 'sparrowkarthik007@gmail.com'
};