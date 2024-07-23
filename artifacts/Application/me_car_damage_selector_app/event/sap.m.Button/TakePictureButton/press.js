TakePictureDialog.open();

setTimeout(function() {
    const fileInput = oFlexBoxCameraUpload.getDomRef();
    fileInput.addEventListener('change', (e) => handleFileSelect(e.target.files[0]));
}, 1000);