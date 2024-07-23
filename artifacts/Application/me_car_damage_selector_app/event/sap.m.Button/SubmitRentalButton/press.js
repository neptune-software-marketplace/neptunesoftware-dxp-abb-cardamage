if (InputCarLicensePlateNumber.getValueState() == "Error" ||
    DateRangeSelectionBookingTimeframeRI.getValueState() == "Error" ||
    InputCustomerLastNameRI.getValueState() == "Error" ||
    InputCustomerFirstNameRI.getValueState() == "Error" ||
    InputBookingNumberRI.getValueState() == "Error" ||
    InputCustomerMailRI.getValueState() == "Error"
    ) {
    sap.m.MessageToast.show("Please input all the required fields!");
    return;    
}



modelSimpleForm1.setData(modelSimpleForm.getData());

console.log(modelSimpleForm.getData());

createPDF();

App.to(SubmitBookingPage);


