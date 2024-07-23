var options = {
    parameters: {
        "where": JSON.stringify({"id": modelSimpleForm.getData().id})
    },
    data: {
        "id": modelSimpleForm.getData().id
    }
};

apiDelete_Car_API(options);


var options2 = {
    parameters: {
        "where": JSON.stringify({"bookingId": modelSimpleForm.getData().id})
    },
    data: {
        "id": modelSimpleForm.getData().id
    }
};

apiDeleteBookingSignatureRent(options2);


DeleteDialog.close();