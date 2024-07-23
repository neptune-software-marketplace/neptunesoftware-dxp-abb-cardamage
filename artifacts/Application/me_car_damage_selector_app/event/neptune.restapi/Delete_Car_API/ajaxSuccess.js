var options = {
    parameters: {
        "where": JSON.stringify({"carID": modelSimpleForm.getData().id})
    },
    data: {
        "carID": modelSimpleForm.getData().id,
    }
};



apiDelete_All_Pictures_Car(options);

apiGetcar_damage_parts();
