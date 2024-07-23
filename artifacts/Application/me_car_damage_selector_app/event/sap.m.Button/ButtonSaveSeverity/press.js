const pathId = _oActivePath2.attr("id"); //gets ID of path like path3
const typeClass = _oActivePath2.attr("class"); // get "part chip" as an example  NEED to split and take 2.
const severity = Slider.getValue()/100;

var typeClassFiltered = typeClass.split(' ');
//console.log("VALUE: "+ typeClassFiltered[1]);
//console.log(modelSimpleForm.getData().parts[pathId].severity); // DELETE LATER

var data = modelSimpleForm.getData();

data.parts[pathId].severity = severity;
data.parts[pathId].type = typeClassFiltered[typeClassFiltered.length - 1];
//console.log("VALUE: "+ typeClassFiltered[typeClassFiltered.length - 1]);

modelSimpleForm.setData(data);


//console.log(modelSimpleForm.getData().parts[pathId].severity);

//modelSimpleForm.setData().parts.pathId.severity = 1;

//console.log(modelSimpleForm.getData());

ResponsivePopover.close();

//modelSimpleForm.getData().parts.path1.severity