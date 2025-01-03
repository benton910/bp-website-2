
import nodemailer from 'nodemailer';

export default async function POST(req, res) {
    const emailData = await JSON.parse(req.body);

    // Creating transport, currently sending emails from our own email to our own email
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.CONTACT_EMAIL,
            pass: process.env.CONTACT_EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: emailData.email,
        to: process.env.CONTACT_EMAIL,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `BP Music Inquiry - From ${emailData.name} (${emailData.email})`,
        text: emailData.message,
    };

    const sendMailPromise = () =>
        new Promise((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        res.status(200).json({ message: 'Email sent' });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}