const nodemailer = require("nodemailer");
const cors = require('node-cron');
const { google } = require("googleapis");
const sendEmailWithPdf = require("./emailWithPdf");

const CLIENT_ID =
  "401375404695-8uvprtkgdpkn48b2u8atld55aklji032.apps.googleusercontent.com";
const CLIENT_SECRET = "UEUriq78IJdTv5tc4239NdCI";
const REDIRECT_URL = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04GXhsIKUKOi8CgYIARAAGAQSNwF-L9IrtICQ7862e90lgH2wJvIL_4DWjPXgMyi53v2aViMm0wmO5yHRdxUzvb1ZQygKRXsooVk";

const emailSend = async () => {
  try {
    // const oauth2Client = new google.auth.OAuth2(
    //   CLIENT_ID,
    //   CLIENT_ID,
    //   REDIRECT_URL
    // );
    // oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    // const accessToken = await oauth2Client.getAccessToken();
    // const transport = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     type: "OAuth2",
    //     user: "m.g.hashikamaduranga@gmail.com",
    //     clientId: CLIENT_ID,
    //     clientSecret: CLIENT_SECRET,
    //     refreshToken: REFRESH_TOKEN,
    //     accessToken: accessToken,
    //   },
    // });

    // let transport = await nodemailer.createTransport({
    //   host: "smtp.hostinger.com",
    //   port: 465,
    //   auth: {
    //     user: "info@codexlabstechnologies.com",
    //     pass: "|lSFDtuM#K6M",
    //   },
    // });

    const message = {
      from: "info@codexlabstechnologies.com", // Sender address
      to: "m.g.hashikamaduranga@gmail.com", // List of recipients
      subject: "Reminder Alert", // Subject line
      text: "Have the most fun you can in a car. Get your Tesla today!", // Plain text body,
    };

    // cors.schedule('* 2 * * * *',async()=>{
      await transport.sendMail(message, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });
    // })

    // send Pdf
    await sendEmailWithPdf();

    // const mailOption = {
    //   from: "Your Truely <m.g.hashikamaduranga@gmail.com>", // Sender address
    //   to: "m.g.hashikamaduranga@gmail.com", // List of recipients
    //   subject: "Design Your Model S | Tesla", // Subject line
    //   text: "Have the most fun you can in a car. Get your Tesla today!", // Plain text body
    //   html:
    //     "<h1>Have the most fun you can in a car. Get your Tesla today!</h1>",
    // };

    // const result = await transport.sendMail(mailOption);
    // return result;
  } catch (error) {
    return error;
  }
};
 emailSend().then(result=>console.log(result)).catch(err=>console.log(err));


// const express = require('express');
// var bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());

// app.post('/api/login',(req,res)=>{
//   console.log(req.body.email);

//   res.send({
//     status:"success"
//   })
// });

// app.listen(5000,()=> console.log("Listing to port 5000 ......."));
