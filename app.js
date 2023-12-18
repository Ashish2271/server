
import bodyParser from "body-parser";
import express from "express";
import { Resend } from "resend";
import cors from 'cors'


const resend = new Resend('re_Ku8uMD22_LNYxbCJiLx6iJpaHZgMMohft');
const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // enable cookies and other credentials
  }));
  

app.post('/email', async (req, res) => {
  try {
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Gift Email</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  margin: 0;
                  padding: 0;
                  background: url('https://img.freepik.com/free-photo/top-view-frame-with-presents-copy-space_23-2148325585.jpg?w=826&t=st=1702880119~exp=1702880719~hmac=dbe7b14ee7d9b13d3e76a399b5af70672fffa93f8408be2a0cb91cddafe40324') no-repeat center center fixed;
                  background-size: cover;
                  color: #fff;
              }
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: rgba(0, 0, 0, 0.7);
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
      
              img {
                  max-width: 100%;
                  height: auto;
                  border-radius: 4px;
              }
      
              h2 {
                  color: #fff;
              }
      
              p {
                  color: #fff;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <img src="https://img.freepik.com/free-photo/top-view-frame-with-presents-copy-space_23-2148325585.jpg?w=826&t=st=1702880119~exp=1702880719~hmac=dbe7b14ee7d9b13d3e76a399b5af70672fffa93f8408be2a0cb91cddafe40324" alt="Gift Image">
              <h2>Dear ${req.body.receiverName},</h2>
              <p>${req.body.greeting}! You have received a special gift.</p>
              <p>Details: ${req.body.giftDetails}</p>
              <p>Date: ${req.body.date}</p>
              <p>From: ${req.body.senderName} ${req.body.senderEmail ? `(${req.body.senderEmail})` : ''}</p>
              <p>Enjoy your gift!</p>
          </div>
      </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: 'MyWeb3Gift <no-reply@myweb3gift.com>',
      to: [req.body.receiverEmail],
      subject: 'Hello World',
      html: htmlTemplate,
    });

    res.status(200).json(data);
  } catch(error) {
    res.status(400).json(error);
  }
});

app.listen(3001, () => {
  console.log('Listening on http://localhost:3001');
});
