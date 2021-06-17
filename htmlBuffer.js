const ejs =  require('ejs');
const  htmlPdf = require( 'html-pdf');

async function htmlToPdfBuffer(pathname, params) {
  const html = await ejs.renderFile(pathname, params);
  return new Promise((resolve, reject) => {
    htmlPdf.create(html).toBuffer((err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer);
      }
    });
  });
}

module.exports = {htmlToPdfBuffer}