// Set the File-Input to the oHTMLObject
sap.ui.getCore().attachInit(function(data) {
    oHTMLObjectCameraUpload.setContent('<input type="file" accept="image/*" id="file-input"  style="display:none" multiple>')
});

// After setting the oHTMLObject, create the EventListener
// THIS WAS MOVED TO THE TakePictureButton press event since it was not working when the dialog was not opened yet.
/*
setTimeout(function() {
    const fileInput = oFlexBoxCameraUpload.getDomRef();
    fileInput.addEventListener('change', (e) => handleFileSelect(e.target.files[0]));
}, 1000);
*/

// Callback function from EventListener
function handleFileSelect(f) {
    var reader = new FileReader();

    reader.onload = (function (theFile) {
        return function (e) {
            var binaryData = e.target.result;

            // Converting Binary Data to base 64
            var base64String = window.btoa(binaryData);

            var fullBase64picture = "data:image/png;base64," + base64String;
            //console.log(base64String)

            oImage.setSrc(fullBase64picture);

        };
    })(f);
    reader.readAsBinaryString(f);
}

function uploadPicture(){
    var pictureToUpload = oImage.getSrc();

    var options = {
        data: {
            "carID": modelSimpleForm.getData().id, // set from multimodel
            "picture": pictureToUpload,
            "part" :  _oActivePath2.attr("id"),
        }
    };

apiUpload_Picture_API(options);    
}