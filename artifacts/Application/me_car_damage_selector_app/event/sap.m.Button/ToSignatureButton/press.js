var canvas = document.getElementById('signature-pad');
signaturePad = new SignaturePad(canvas);
canvas.style.width = '500px';
canvas.style.height = '250px';
canvas.width = 500;
canvas.height = 250;

ResetSignature.setVisible(true);
ConfirmSignature.setVisible(true);
oIconTabBarSignature.setVisible(true);


App.to(oPageSignature);