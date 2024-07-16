import jsPDF from 'jspdf'
import autotable from 'jspdf-autotable'

const exportPDF = (introInfo, theaders, tbody, namePDF) => {
  const doc = new jsPDF()
  // const textWidth = doc.getTextWidth(introInfo)
  const pageWidth = doc.internal.pageSize.width
  const textX = (pageWidth) / 2
  const textY = 15

  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text(introInfo, textX, textY, {align: 'center'})

  autotable(doc, {
    head: [theaders],
    body: [...tbody],
    startY: 20
  })

  // For Production
  // doc.save(`${namePDF}.pdf`)

  // For Testing
  const pdfBlob = doc.output('blob');
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl, '_blank');
}

export default exportPDF