var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_type_T_1 = new ol.format.GeoJSON();
var features_type_T_1 = format_type_T_1.readFeatures(json_type_T_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_type_T_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_type_T_1.addFeatures(features_type_T_1);
var lyr_type_T_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_type_T_1, 
                style: style_type_T_1,
                interactive: true,
                title: '<img src="styles/legend/type_T_1.png" /> type_T'
            });
var format_type_R_2 = new ol.format.GeoJSON();
var features_type_R_2 = format_type_R_2.readFeatures(json_type_R_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_type_R_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_type_R_2.addFeatures(features_type_R_2);
var lyr_type_R_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_type_R_2, 
                style: style_type_R_2,
                interactive: true,
                title: '<img src="styles/legend/type_R_2.png" /> type_R'
            });
var format_type_M_3 = new ol.format.GeoJSON();
var features_type_M_3 = format_type_M_3.readFeatures(json_type_M_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_type_M_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_type_M_3.addFeatures(features_type_M_3);
var lyr_type_M_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_type_M_3, 
                style: style_type_M_3,
                interactive: true,
                title: '<img src="styles/legend/type_M_3.png" /> type_M'
            });
var format_type_B_4 = new ol.format.GeoJSON();
var features_type_B_4 = format_type_B_4.readFeatures(json_type_B_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_type_B_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_type_B_4.addFeatures(features_type_B_4);
var lyr_type_B_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_type_B_4, 
                style: style_type_B_4,
                interactive: true,
                title: '<img src="styles/legend/type_B_4.png" /> type_B'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_type_T_1.setVisible(true);lyr_type_R_2.setVisible(true);lyr_type_M_3.setVisible(true);lyr_type_B_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_type_T_1,lyr_type_R_2,lyr_type_M_3,lyr_type_B_4];
lyr_type_T_1.set('fieldAliases', {'type': 'type', 'floor': 'floor', });
lyr_type_R_2.set('fieldAliases', {'type': 'type', 'floor': 'floor', });
lyr_type_M_3.set('fieldAliases', {'type': 'type', 'floor': 'floor', });
lyr_type_B_4.set('fieldAliases', {'type': 'type', 'floor': 'floor', });
lyr_type_T_1.set('fieldImages', {'type': '', 'floor': '', });
lyr_type_R_2.set('fieldImages', {'type': '', 'floor': '', });
lyr_type_M_3.set('fieldImages', {'type': '', 'floor': '', });
lyr_type_B_4.set('fieldImages', {'type': '', 'floor': '', });
lyr_type_T_1.set('fieldLabels', {'type': 'header label', 'floor': 'header label', });
lyr_type_R_2.set('fieldLabels', {'type': 'header label', 'floor': 'header label', });
lyr_type_M_3.set('fieldLabels', {'type': 'header label', 'floor': 'header label', });
lyr_type_B_4.set('fieldLabels', {'type': 'header label', 'floor': 'header label', });
lyr_type_B_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});