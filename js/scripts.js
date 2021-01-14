//var mapboxAccessToken = 'pk.eyJ1IjoiYXJ0aHVyLW1hcHMiLCJhIjoiY2p4NHdjNXJrMDI1azQ5bTRwOW5jc2F5bSJ9.OSGinHj1JWVuEHIe91Eikw';

var mapboxAccessToken = 'pk.eyJ1IjoiYXJ0dXJvbmVpbGwiLCJhIjoiY2tlbm05dHpxMDBidzJxb2FjeWFyOTRhaCJ9.Ji9pd3XHvpjYkC0dGl6RUA';
   

var map = L.map('mapid', {
        minZoom: 6,
        maxZoom: 13
    });

//var map = L.map('mapid').setView([28.5, -81.6], 7);

//L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
//    id: 'mapbox.light',
//    attribution: "© Mapbox"
//}).addTo(map);


//var map = L.map(mapDiv, mapOptions);

//L.tileLayer.wms({
//   url: 'https://nassgeodata.gmu.edu/CropScapeService/wms_cdlall.cgi'
//}).addTo(map);

var wmsLayer = L.tileLayer.wms('https://nassgeodata.gmu.edu/CropScapeService/wms_cdlall.cgi', {
    layers: 'cdl_2015'
}).addTo(map);

map.setView([28.0, -82.8], 6.5);

//L.esri.tiledMapLayer({
 // url: 'https://tiles.arcgis.com/tiles/cDCsY3VB02CTTRKx/arcgis/rest/services/FL_strata_WGS1984/VectorTileServer',
  //maxZoom: 15
//}).addTo(map);

//for backgrounds really
//L.esri.Vector.layer('6f0044f50bd24142897d4955ee28f823').addTo(map);

  // a Leaflet marker is used by default to symbolize point features.
 // L.esri.featureLayer({
  //  url: 'https://services5.arcgis.com/cDCsY3VB02CTTRKx/arcgis/rest/services/flstratnobounds/FeatureServer/0',
   //   simplifyFactor: 0.35,
   // precision: 5,
  //    style: function (feature) {
   //   if(feature.properties.Strata === 40){
   //     return { fillOpacity: 0 };
    //  } else if(feature.properties.Strata === 42){
    //    return { fillOpacity: 0 };
 //     } 
 //   }
//  }).addTo(map);

//NEED THIS
//L.esri.tiledMapLayer({
//   url: 'https://tiles.arcgis.com/tiles/cDCsY3VB02CTTRKx/arcgis/rest/services/fl18cropsnobuff/MapServer'
//}).addTo(map);
