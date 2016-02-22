var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
    // set up the map
    map = new L.Map('map');

    // create the tile layer with correct attribution
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMapa> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 9, maxZoom: 18, attribution: osmAttrib});

    map.setView(new L.LatLng(23.01823,120.219646),12);
    map.addLayer(osm);

    var data = readTextFile("real_dengue_0927_1003_gte60.csv");
    addPoints(data);
}


function addPoints(data){
    var lines = data.split('\n');  
    for (var i=0;i<lines.length;i++){
        var line_split_data = lines[i].split(',');
        if (i == 0) 
            continue;
        console.log(line_split_data[1])
        

        var circle = L.circle([parseFloat(line_split_data[1]),parseFloat(line_split_data[0])],3, {
                        "color": ' #663333',
                        "fillColor": '#f03',
                        "fill-opacity": 0.9
                    }).addTo(map);
    } 
    
}
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    var allText;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                //console.log(allText);

            }
        }
    }
    rawFile.send(null);
    return allText;
}