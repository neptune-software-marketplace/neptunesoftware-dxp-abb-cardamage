          function onSelectDamageType(oEvent) {

                const sType = oEvent.getSource().sId;

                console.log(oEvent.getSource().sId);

                console.log(_oActivePath2);
            
                _oActivePath2.removeClass("scratch")
                _oActivePath2.removeClass("dent")
                _oActivePath2.removeClass("chip")

                switch (sType) {
                    case "Scratch":
                        _oActivePath2.addClass("scratch")
                        break;
                    case "Dent":
                        _oActivePath2.addClass("dent")
                        break;
                    case "PaintChip":
                        _oActivePath2.addClass("chip")
                        break;
                    default:
                        break;
                }

                // Navigate to the next page
                //const oTarget = this.getView().byId("severity")
                //this.getView().byId("idNavContainer").to(oTarget)
                idNavContainer.to(severity);                
            }

