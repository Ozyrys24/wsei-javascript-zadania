//Task 1
document.addEventListener("DOMContentLoaded", () => {
    var invoice = document.getElementById("invoice");
    var invoiceData = document.getElementById("invoiceData");

    for(let i=0; i<invoiceData.children.length; i++)
        invoiceData.children[i].style.display = "none";
    
    invoice.addEventListener("change", () => {
        if(invoice.checked == true) {
            for(let i=0; i<invoiceData.children.length; i++)
                invoiceData.children[i].style.display = "inline-block";
        }
        else {
            for(let i=0; i<invoiceData.children.length; i++)
                invoiceData.children[i].style.display = "none";
        }
    })
})