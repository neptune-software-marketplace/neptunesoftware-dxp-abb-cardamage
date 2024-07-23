const aPaths = $("path.part");

//console.log($(aPaths[1]));
//$(aPaths[1]).addClass("scratch"); // WORKING



if (!aPaths.length) return;

// aPaths.bind("click", oEvent => console.log($(oEvent.target).attr("id")))

aPaths.bind("click", _handlePathClick.bind(this));

function _handlePathClick(oEvent) {
    console.log(oEvent);

    _oActivePath2 = $(oEvent.target);
    //this._oActivePath = $(oEvent.target);
    const oSource = oEvent.target;
    console.log($(oEvent.target).attr("id"));
    console.log(_oActivePath2);

    Slider.setValue(50);
    //const fValue = Slider.getValue() / 100
    //_oActivePath2.css({"fill-opacity": fValue});

    


    if (!this._oPopover) {
        ResponsivePopover.openBy(oEvent.target);
    } else {
        this._oPopover.openBy(oSource);
    }

    //Here we do set the Slider Value and Severity Value each time we select a new part to its value inside of the Model
    var severityValue = modelSimpleForm.getData().parts[$(oEvent.target).attr("id")].severity;
    var sliderValue = severityValue;
    Slider.setValue(sliderValue * 100);
    SeverityValue.setText(sliderValue * 100);

    // BEGIN
    // Here we do check if a type is already set. if yes we do add a StyleClass so the ListItem will be marked bold via CSS
    // In the beginning we remove all Styleclasses so we have resettet any selection we did before.
    Dent.removeStyleClass("selectedProblem");
    PaintChip.removeStyleClass("selectedProblem");
    Scratch.removeStyleClass("selectedProblem");

    if (modelSimpleForm.getData().parts[$(oEvent.target).attr("id")].type == "dent") {
        Dent.addStyleClass("selectedProblem");
    }
    if (modelSimpleForm.getData().parts[$(oEvent.target).attr("id")].type == "scratch") {
        Scratch.addStyleClass("selectedProblem");
    }
    if (modelSimpleForm.getData().parts[$(oEvent.target).attr("id")].type == "chip") {
        PaintChip.addStyleClass("selectedProblem");
    }
    // END

}

console.log("RENDER:");
console.log(modelSimpleForm.getData());
console.log(modelSimpleForm.getData().parts.path1.type);






