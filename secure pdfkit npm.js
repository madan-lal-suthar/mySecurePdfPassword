/*pdfKit >>>===>>>/
    const PDFDocument = require('pdfkit');
    let options= {
        ownerPassword: "12345f6",
        userPassword : "123456",
        size: ""
    }
    const doc = new PDFDocument(options);

    doc.text('Hello, World!');      
    doc.image('./exm.png',0,1,{
        fit: [700, 100],
        width: "600",
        align: 'start',
        valign: 'start'
      });
    const fs = require('fs');
    doc.pipe(fs.createWriteStream('./output.pdf'));
    doc.end();
