var options = {
    parameters: {
        "where": JSON.stringify({"carID": modelSimpleForm.getData().id})
    },
    data: {
        "carID": modelSimpleForm.getData().id,
    }
};

apiGet_Pictures_Car(options);