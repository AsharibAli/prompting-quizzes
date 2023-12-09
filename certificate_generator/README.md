# certificate_generator
Create a Certificate Generator Website in JavaScript

**READ THIS README.md FILE CAREFULLY, AND COMPLETELY, WITHOUT ANY MISTAKES.**

If you want to Get certificate got to https://certificate-generator.netlify.app/ .this Create a certificate generator you an download it certificate in pdf format.Now we see how we have to make it. We have made it Html, CSS and JavaScript. this is going to be very easy.
 
First we need a template and We need a template in a PDF format. Here I used Canva Website. Go to Canva.com create an account first then search for certificate.
 

canva.com
There you will get a lot of certificates. select what you like and download it.And customize that template according to you.I used this template here
templete
here we open our code editor. And here we create an index.html,style.css and index.js file.First we make the front-end 

index.html
 <!DOCTYPE html>  
 <html lang="en">  
 <head>  
   <meta charset="UTF-8">  
   <meta name="viewport" content="width=device-width, initial-scale=1.0">  
   <title>Certificate Generator using javascript</title>  
   <link rel="stylesheet" href="style.css">  
   <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow&display=swap" rel="stylesheet">  
   <link rel="icon" type="image/png" href="favicon.png"/>  
 </head>  
 <body>  
   <header>  
     <div class="heading_text">  
       <h1>Create Certificates for Free in Minutes</h1>  
       <h2>Make unique certificates in minutes. No design skills needed.</h2>  
     </div>  
   </header>  
   <main>  
     <div>  
       <input type="text" name="Name" class="question" id="name" required autocomplete="off" />  
       <label for="name"><span>What's your name?</span></label>  
       <input type="submit" id="submitBtn" value="Get Certificate"/>  
     </div>  
   </main>  
   <script src="https://unpkg.com/pdf-lib/dist/pdf-lib.min.js"></script>  
   <script src="https://unpkg.com/@pdf-lib/fontkit@0.0.4"></script>  
   <script src="filesaver.js"></script>  
   <script src="index.js"></script>  
 </body>  
 </html>  
style.css

*{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
   
    /* font-size: 1.5em; */
}

header{
    padding: 150px;
    background-image: url('bg_header.jfif');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
   
    text-align: center;
    position: relative;
}
 .heading_text h1{
    text-align: center;
    font-size: 54px;
    margin-bottom:10px
    /* font-weight: 900; */
} 
main {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  main form button{
      margin-top:25px ;
  }
  button {
    background: #8bc34a;
    color: #fff;
    border: none;
    font-size: 0.8em;
    padding: 15px 15px;
    /* margin: 20px; */
    border-radius: 5px;
    cursor: pointer;
  }
input,
span,
label{
  font-family: 'Ubuntu', sans-serif;
  display: block;
  margin: 10px;
  padding: 5px;
  border: none;
  font-size: 22px;
}
input:focus {
    outline: 0;
  }
input.question{
  font-size: 48px;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  border: none;
  width: 80%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden;
}
input.question + label{
  display: block;
  position: relative;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  width: 10%;
  border-top: 1px solid red;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
}
input.question:focus + label{
  width: 80%;
}
input.question:focus,
input.question:valid {
  padding-top: 35px;
}

input.question:focus + label > span,
input.question:valid + label > span {
  top: -100px;
  font-size: 22px;
  color: #333;
}



input.question:valid + label {
  border-color: green;
}

input.question:invalid{
  box-shadow: none;
}

input.question + label > span{
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8F8F8F;
  font-size: 48px;
  top: -66px;
  left: 0px;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

input[type="submit"] {
    background: #8bc34a;
    color: #fff;
    border: none;
    font-size: 0.8em;
    padding: 15px 15px;
    /* margin: 20px; */
    border-radius: 5px;
    cursor: pointer;
}

Now we write the code in index.js,First of all we are going to use a library here, its name is pdf lib– pdf-lib.js.org.From this library, we will fetch the PDF and with the help of JavaScript, we will put the text there. The text that we are going to put here We will download a font here Go to https://fonts.google.com/ And search the font Sanchez and download it.

First we need to fetch pdf

const generatePDF = async (name) => {
    const existingPdfBytes = await fetch("Certificate.pdf").then((res) =>
      res.arrayBuffer()
    );
After that we have to load pdf


const generatePDF = async (name) => {
    const existingPdfBytes = await fetch("Certificate.pdf").then((res) =>
      res.arrayBuffer()
    );

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);

Now we have write the code for the custom font


const generatePDF = async (name) => {
    const existingPdfBytes = await fetch("Certificate.pdf").then((res) =>
      res.arrayBuffer()
    );

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);

    
  //get font
  const fontBytes = await fetch("Sanchez-Regular.ttf").then((res) =>
  res.arrayBuffer()
);
Draw a string of text diagonally across the first


// Embed our custom font in the document
  const SanChezFont  = await pdfDoc.embedFont(fontBytes);
   // Get the first page of the document
   const pages = pdfDoc.getPages();
   const firstPage = pages[0];
 
   // Draw a string of text diagonally across the first page
   firstPage.drawText(name, {
     x: 300,
     y: 270,
     size: 58,
     font: SanChezFont ,
     color: rgb(0.2, 0.84, 0.67),
   });
 
When after entering name in the certificate, now we have to download the certificate.We are going to use the filesaver.js library to download the certificate. 


Goto link https://github.com/eligrey/FileSaver.js After opening the link, go to the dist. folder and download FileSaver.js file

Now write code for download certificate


// Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  saveAs(pdfDataUri,"newcertificate.pdf")
All index.js code Here



console.log("hello")
const userName = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");
const { PDFDocument, rgb, degrees } = PDFLib;


submitBtn.addEventListener("click", () => {
    const val =userName.value;
    if (val.trim() !== "" && userName.checkValidity()) {
        // console.log(val);
        generatePDF(val);
      } else {
        userName.reportValidity();
      }
});
const generatePDF = async (name) => {
    const existingPdfBytes = await fetch("Certificate.pdf").then((res) =>
      res.arrayBuffer()
    );

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);

    
  //get font
  const fontBytes = await fetch("Sanchez-Regular.ttf").then((res) =>
  res.arrayBuffer()
);
  // Embed our custom font in the document
  const SanChezFont  = await pdfDoc.embedFont(fontBytes);
   // Get the first page of the document
   const pages = pdfDoc.getPages();
   const firstPage = pages[0];
 
   // Draw a string of text diagonally across the first page
   firstPage.drawText(name, {
     x: 300,
     y: 270,
     size: 58,
     font: SanChezFont ,
     color: rgb(0.2, 0.84, 0.67),
   });
 
  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  saveAs(pdfDataUri,"newcertificate.pdf")
};
Now ready the certificate generator website