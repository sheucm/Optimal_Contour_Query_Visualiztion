var result = null
function display(geofile)
{
    $.getJSON(geofile, function(data){
            if (result != null){
                result.clearLayers();
            }
            result = L.geoJson(data).addTo(map);
    });
}

$(document).ready(function() {
    //set initial state.
    //$('#checkbox_RuleA').val($(this).is(':checked'));
    //$('#checkbox_RuleB').val($(this).is(':checked'));

    
    $('#checkbox_RuleA').change(function() {
        display("result_0927_1003_gte60_m5_i10000_k3.geojson")
    });
    $('#checkbox_RuleB').change(function() {
        display("result_0927_1003_gte60_m5_i10000_k5.geojson")
    });
    $('#checkbox_RuleC').change(function() {
        display("result_0927_1003_m5_i10000_k3.geojson")
    });
	
    
    
    
});
