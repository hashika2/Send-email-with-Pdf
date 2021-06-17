const AWS = require('aws-sdk');
const nodemailer = require('nodemailer')

async function sendEmailWithAttachments(
    subject,
    html,
    toAddresses,
    attachments
  ) {
    const ses = new AWS.SES();
    let transporter = await nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        auth: {
          user: "info@codexlabstechnologies.com",
          pass: "|lSFDtuM#K6M",
        },
    });
    const mailOptions = {
      from: "info@codexlabstechnologies.com",
      subject,
      html,
      to: toAddresses,
      attachments
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
    });
  }

  module.exports = {sendEmailWithAttachments}