const { sendEmailWithAttachments } = require("./mailAttachment");
const { htmlToPdfBuffer } = require("./htmlBuffer");

const sendEmailWithPdf = async () => {
    const fileBuffer = await htmlToPdfBuffer("template.ejs", {
      products: [{ quantity: 2, unitPrice: 10, totalPrice: 20 }]
    });
    
    sendEmailWithAttachments(
      "This is test subject",
      "<p>This email contails attachment</p>",
      ["m.g.hashikamaduranga@gmail.com"],
      { filename: "Mayura.pdf", content: fileBuffer }
    );
}

module.exports = sendEmailWithPdf;