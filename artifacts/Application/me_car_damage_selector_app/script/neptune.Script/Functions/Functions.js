
function resetSvgClasses (){
//Will be called after Saving and Navigating back from the SVG so it will be resetted and ready to be set again with new data.

    const aPathsOUT = $("path.part");

    //RESETTING THE CLASSES IN SVG
    $(aPathsOUT[0]).removeClass();
    $(aPathsOUT[1]).removeClass();
    $(aPathsOUT[2]).removeClass();
    $(aPathsOUT[3]).removeClass();
    $(aPathsOUT[4]).removeClass();
    $(aPathsOUT[5]).removeClass();
    $(aPathsOUT[6]).removeClass();
    $(aPathsOUT[7]).removeClass();
    $(aPathsOUT[8]).removeClass();
    $(aPathsOUT[9]).removeClass();
    $(aPathsOUT[10]).removeClass();
    $(aPathsOUT[11]).removeClass();
    $(aPathsOUT[12]).removeClass();


    $(aPathsOUT[0]).addClass("part");
    $(aPathsOUT[1]).addClass("part");
    $(aPathsOUT[2]).addClass("part");
    $(aPathsOUT[3]).addClass("part");
    $(aPathsOUT[4]).addClass("part");
    $(aPathsOUT[5]).addClass("part");
    $(aPathsOUT[6]).addClass("part");
    $(aPathsOUT[7]).addClass("part");
    $(aPathsOUT[8]).addClass("part");
    $(aPathsOUT[9]).addClass("part");
    $(aPathsOUT[10]).addClass("part");
    $(aPathsOUT[11]).addClass("part");
    $(aPathsOUT[12]).addClass("part");

    aPathsOUT.css({"fill-opacity": 0});

}


var _contextPictureTable = null; // Is used in TableCarPictures-delete event.
var _PictureTableItem = null; // Is used in TableCarPictures-delete event.

var _compareModel = null; //This is the comparison Model, where we do check if we have made some changes to the model later.
// If we made changes to the model a popup will come up if we do want to Save the changes or not for a car.