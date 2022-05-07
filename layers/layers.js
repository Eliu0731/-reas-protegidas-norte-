ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32619").setExtent([131175.781128, 2043643.984455, 457899.606527, 2218819.258610]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Areasprotegidas_norte_3 = new ol.format.GeoJSON();
var features_Areasprotegidas_norte_3 = format_Areasprotegidas_norte_3.readFeatures(json_Areasprotegidas_norte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32619'});
var jsonSource_Areasprotegidas_norte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areasprotegidas_norte_3.addFeatures(features_Areasprotegidas_norte_3);
var lyr_Areasprotegidas_norte_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areasprotegidas_norte_3, 
                style: style_Areasprotegidas_norte_3,
                interactive: true,
    title: 'Areas protegidas_norte<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_0.png" /> Alto bao<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_1.png" /> Alto Mao<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_2.png" /> Armando Bermúdez<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_3.png" /> Autopista Duarte<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_4.png" /> Bahia de Luperón<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_5.png" /> Cañón Río Gurabo<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_6.png" /> Cayo Arenas<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_7.png" /> Cayo de Los Muertos<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_8.png" /> Cayo Monte Cristo<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_9.png" /> Cayo Monte Grande<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_10.png" /> Cayo Ratas<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_11.png" /> Cayo Terreno<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_12.png" /> Cayo Tororu<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_13.png" /> Cayos Siete Hermanos<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_14.png" /> Cayuco<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_15.png" /> Cerro Chacuey<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_16.png" /> Cerro de San Francisco<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_17.png" /> El Morro<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_18.png" /> Entrada de Mao<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_19.png" /> Estero Hondo<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_20.png" /> José del Carmen Ramírez<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_21.png" /> La Hispaniola<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_22.png" /> Laguna Saladilla<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_23.png" /> Las Matas<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_24.png" /> Manglares de Estero Balsa<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_25.png" /> Manolo Tavarez Justo<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_26.png" /> Nalga de Maco<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_27.png" /> Picky Lora<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_28.png" /> Río Cana<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_29.png" /> Río Chacuey<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_30.png" /> Submarino Monte Cristi<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_31.png" /> Villa Elisa<br />\
    <img src="styles/legend/Areasprotegidas_norte_3_32.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Areasprotegidas_norte_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleRoad_1,lyr_GoogleSatellite_2,lyr_Areasprotegidas_norte_3];
lyr_Areasprotegidas_norte_3.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'COD_UICN': 'COD_UICN', 'CATEGORIA': 'CATEGORIA', 'SUBCAT': 'SUBCAT', 'SUBCAT1': 'SUBCAT1', 'HECTARES': 'HECTARES', 'SQ_KM': 'SQ_KM', 'Id_Leyenda': 'Id_Leyenda', 'Base_Legal': 'Base_Legal', });
lyr_Areasprotegidas_norte_3.set('fieldImages', {'ID': 'Range', 'NOMBRE': 'TextEdit', 'COD_UICN': 'TextEdit', 'CATEGORIA': 'TextEdit', 'SUBCAT': 'TextEdit', 'SUBCAT1': 'TextEdit', 'HECTARES': 'TextEdit', 'SQ_KM': 'TextEdit', 'Id_Leyenda': 'TextEdit', 'Base_Legal': 'TextEdit', });
lyr_Areasprotegidas_norte_3.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', 'COD_UICN': 'no label', 'CATEGORIA': 'no label', 'SUBCAT': 'no label', 'SUBCAT1': 'no label', 'HECTARES': 'no label', 'SQ_KM': 'no label', 'Id_Leyenda': 'no label', 'Base_Legal': 'no label', });
lyr_Areasprotegidas_norte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});