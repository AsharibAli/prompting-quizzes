console.log("hello");
const userName = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");
const { PDFDocument, rgb, degrees } = PDFLib;

submitBtn.addEventListener("click", () => {
  const val = userName.value;
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
  const SanChezFont = await pdfDoc.embedFont(fontBytes);
  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Draw a string of text diagonally across the first page
  firstPage.drawText(name, {
    x: 300,
    y: 270,
    size: 58,
    font: SanChezFont,
    color: rgb(0.2, 0.84, 0.67),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  saveAs(pdfDataUri, "newcertificate.pdf");
};

document.addEventListener("DOMContentLoaded", function () {
  // the actual path of your Quiz App
  const allowedReferrer = "https://prompting-quizzes.vercel.app/";
  console.log("Referrer URL:", document.referrer);
  // This line logs the referrer URL

  if (!document.referrer || document.referrer.indexOf(allowedReferrer) !== 0) {
    // If the referrer is not the Quiz App, hide the certificate generation UI.
    document.body.innerHTML = `<p>Access Denied. Please visit the <a href="https://prompting-quizzes.vercel.app/" target="_blank">
    quiz website 
  </a>
   first to complete the quizzes then generate your certificate here.</p>`;
  }
  // Else, continue with the certificate generation logic
});
