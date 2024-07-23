const pathId = _oActivePath2.attr("id");

_oActivePath2.removeClass();
_oActivePath2.addClass("part");
_oActivePath2.css({"fill-opacity": 0});

var data = modelSimpleForm.getData();

data.parts[pathId].severity = 0;
data.parts[pathId].type = "part";

modelSimpleForm.setData(data);

ResponsivePopover.close();