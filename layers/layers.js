var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nodos_propuestos_1 = new ol.format.GeoJSON();
var features_Nodos_propuestos_1 = format_Nodos_propuestos_1.readFeatures(json_Nodos_propuestos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nodos_propuestos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nodos_propuestos_1.addFeatures(features_Nodos_propuestos_1);
var lyr_Nodos_propuestos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nodos_propuestos_1, 
                style: style_Nodos_propuestos_1,
                popuplayertitle: 'Nodos_propuestos',
                interactive: true,
    title: 'Nodos_propuestos<br />\
    <img src="styles/legend/Nodos_propuestos_1_0.png" />  : 5 - 6.25718073165616<br />\
    <img src="styles/legend/Nodos_propuestos_1_1.png" />  : 5 - 7<br />\
    <img src="styles/legend/Nodos_propuestos_1_2.png" /> 7 de Agosto : 5 - 7<br />\
    <img src="styles/legend/Nodos_propuestos_1_3.png" /> Bosa : 5 - 7<br />\
    <img src="styles/legend/Nodos_propuestos_1_4.png" /> Centro : 5 - 7<br />\
    <img src="styles/legend/Nodos_propuestos_1_5.png" /> Dorado : 5 - 7<br />\
    <img src="styles/legend/Nodos_propuestos_1_6.png" /> Engativa : 5 - 7<br />\
    <img src="styles/legend/Nodos_propuestos_1_7.png" /> Montevideo : 5 - 7<br />\
    <img src="styles/legend/Nodos_propuestos_1_8.png" /> Pasadena : 5 - 6.15829877138198<br />\
    <img src="styles/legend/Nodos_propuestos_1_9.png" /> Suba : 5 - 7<br />\
    <img src="styles/legend/Nodos_propuestos_1_10.png" /> Sur Oriente : 5 - 7<br />\
    <img src="styles/legend/Nodos_propuestos_1_11.png" /> Toberín : 5 - 7<br />\
    <img src="styles/legend/Nodos_propuestos_1_12.png" /> Usme : 5 - 7<br />' });
var format_Nodos_Bogota_2 = new ol.format.GeoJSON();
var features_Nodos_Bogota_2 = format_Nodos_Bogota_2.readFeatures(json_Nodos_Bogota_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nodos_Bogota_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nodos_Bogota_2.addFeatures(features_Nodos_Bogota_2);
var lyr_Nodos_Bogota_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nodos_Bogota_2, 
                style: style_Nodos_Bogota_2,
                popuplayertitle: 'Nodos_Bogota',
                interactive: true,
    title: 'Nodos_Bogota<br />\
    <img src="styles/legend/Nodos_Bogota_2_0.png" /> 7 de Agosto<br />\
    <img src="styles/legend/Nodos_Bogota_2_1.png" /> Bosa<br />\
    <img src="styles/legend/Nodos_Bogota_2_2.png" /> Centro<br />\
    <img src="styles/legend/Nodos_Bogota_2_3.png" /> Dorado<br />\
    <img src="styles/legend/Nodos_Bogota_2_4.png" /> Montevideo<br />\
    <img src="styles/legend/Nodos_Bogota_2_5.png" /> Pasadena<br />\
    <img src="styles/legend/Nodos_Bogota_2_6.png" /> Suba<br />\
    <img src="styles/legend/Nodos_Bogota_2_7.png" /> Sur Oriente<br />\
    <img src="styles/legend/Nodos_Bogota_2_8.png" /> Toberín<br />' });
var format_SectorCatastral_3 = new ol.format.GeoJSON();
var features_SectorCatastral_3 = format_SectorCatastral_3.readFeatures(json_SectorCatastral_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectorCatastral_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectorCatastral_3.addFeatures(features_SectorCatastral_3);
var lyr_SectorCatastral_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SectorCatastral_3,
maxResolution:14.00223307613098,
 
                style: style_SectorCatastral_3,
                popuplayertitle: 'Sector Catastral',
                interactive: true,
                title: '<img src="styles/legend/SectorCatastral_3.png" /> Sector Catastral'
            });
var format_Areas_demanda_4 = new ol.format.GeoJSON();
var features_Areas_demanda_4 = format_Areas_demanda_4.readFeatures(json_Areas_demanda_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_demanda_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_demanda_4.addFeatures(features_Areas_demanda_4);
var lyr_Areas_demanda_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_demanda_4, 
                style: style_Areas_demanda_4,
                popuplayertitle: 'Areas_demanda',
                interactive: true,
                title: '<img src="styles/legend/Areas_demanda_4.png" /> Areas_demanda'
            });
var format_Malla_Vial_Integral_5 = new ol.format.GeoJSON();
var features_Malla_Vial_Integral_5 = format_Malla_Vial_Integral_5.readFeatures(json_Malla_Vial_Integral_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malla_Vial_Integral_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malla_Vial_Integral_5.addFeatures(features_Malla_Vial_Integral_5);
var lyr_Malla_Vial_Integral_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malla_Vial_Integral_5,
maxResolution:7.00111653806549,
 
                style: style_Malla_Vial_Integral_5,
                popuplayertitle: 'Malla_Vial_Integral',
                interactive: true,
    title: 'Malla_Vial_Integral<br />\
    <img src="styles/legend/Malla_Vial_Integral_5_0.png" /> 1<br />\
    <img src="styles/legend/Malla_Vial_Integral_5_1.png" /> 2<br />\
    <img src="styles/legend/Malla_Vial_Integral_5_2.png" /> 3<br />\
    <img src="styles/legend/Malla_Vial_Integral_5_3.png" /> 4<br />\
    <img src="styles/legend/Malla_Vial_Integral_5_4.png" /> 5<br />\
    <img src="styles/legend/Malla_Vial_Integral_5_5.png" /> 6<br />\
    <img src="styles/legend/Malla_Vial_Integral_5_6.png" /> 7<br />' });
var format_Lotes_6 = new ol.format.GeoJSON();
var features_Lotes_6 = format_Lotes_6.readFeatures(json_Lotes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_6.addFeatures(features_Lotes_6);
var lyr_Lotes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_6,
maxResolution:7.00111653806549,
 minResolution:0.002800446615226196,

                style: style_Lotes_6,
                popuplayertitle: 'Lotes',
                interactive: true,
                title: '<img src="styles/legend/Lotes_6.png" /> Lotes'
            });
var format_Placa_Domiciliaria_7 = new ol.format.GeoJSON();
var features_Placa_Domiciliaria_7 = format_Placa_Domiciliaria_7.readFeatures(json_Placa_Domiciliaria_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Placa_Domiciliaria_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Placa_Domiciliaria_7.addFeatures(features_Placa_Domiciliaria_7);
var lyr_Placa_Domiciliaria_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Placa_Domiciliaria_7,
maxResolution:0.7001116538065492,
 
                style: style_Placa_Domiciliaria_7,
                popuplayertitle: 'Placa_Domiciliaria',
                interactive: true,
                title: '<img src="styles/legend/Placa_Domiciliaria_7.png" /> Placa_Domiciliaria'
            });
var format_Puntos_nodos_8 = new ol.format.GeoJSON();
var features_Puntos_nodos_8 = format_Puntos_nodos_8.readFeatures(json_Puntos_nodos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_nodos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_nodos_8.addFeatures(features_Puntos_nodos_8);
var lyr_Puntos_nodos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_nodos_8, 
                style: style_Puntos_nodos_8,
                popuplayertitle: 'Puntos_nodos',
                interactive: true,
                title: '<img src="styles/legend/Puntos_nodos_8.png" /> Puntos_nodos'
            });
var format_Puntos_propios_9 = new ol.format.GeoJSON();
var features_Puntos_propios_9 = format_Puntos_propios_9.readFeatures(json_Puntos_propios_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_propios_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_propios_9.addFeatures(features_Puntos_propios_9);
var lyr_Puntos_propios_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntos_propios_9, 
                style: style_Puntos_propios_9,
                popuplayertitle: 'Puntos_propios',
                interactive: true,
                title: '<img src="styles/legend/Puntos_propios_9.png" /> Puntos_propios'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Nodos_propuestos_1.setVisible(true);lyr_Nodos_Bogota_2.setVisible(true);lyr_SectorCatastral_3.setVisible(true);lyr_Areas_demanda_4.setVisible(true);lyr_Malla_Vial_Integral_5.setVisible(true);lyr_Lotes_6.setVisible(true);lyr_Placa_Domiciliaria_7.setVisible(true);lyr_Puntos_nodos_8.setVisible(true);lyr_Puntos_propios_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Nodos_propuestos_1,lyr_Nodos_Bogota_2,lyr_SectorCatastral_3,lyr_Areas_demanda_4,lyr_Malla_Vial_Integral_5,lyr_Lotes_6,lyr_Placa_Domiciliaria_7,lyr_Puntos_nodos_8,lyr_Puntos_propios_9];
lyr_Nodos_propuestos_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FacilityID': 'FacilityID', 'SUM_FacilityID': 'SUM_FacilityID', 'MAX_Name': 'Nombre', 'SUM_FromBreak': 'SUM_FromBreak', 'SUM_ToBreak': 'SUM_ToBreak', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Nodos_Bogota_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nodo': 'Nodo', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SectorCatastral_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SCaCodigo': 'Identificador unico del sector catastral', 'SCaTipo': 'Tipo de sector catastral', 'SCaNombre': 'Nombre del sector catastral', 'Areas': 'Areas', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Areas_demanda_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CLUSTER_ID': 'CLUSTER_ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Malla_Vial_Integral_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MVICCalzad': 'Codigo de Identificacion de Calzada', 'MVICCat': 'Codigo identificador UAECD', 'MVITCla': 'Tipo de clasificacion', 'MVITipo': 'Tipo de via', 'MVINombre': 'Nombre de la via', 'MVINAltern': 'Nombre alternativo de la via', 'MVINPrinci': 'Nomenclatura principal', 'MVINGenera': 'Nomenclatura generadora', 'MVINAntigu': 'Nomenclatura antigua', 'MVIEtiquet': 'Etiqueta', 'MVISVia': 'Sentido de la via', 'MVICIV': 'Codigo de Identificacion Vial', 'MVICodigo': 'Identificador único del eje vial', 'MVINumC': 'Carriles por calzada', 'MVIVelReg': 'Velocidad Reglamentaria', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Lotes_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Lote_LOTCODIGO': 'Lote codigo', 'Lote_MANZCODIGO': 'MANZCODIGO', 'PREDIO_PRENBARRIO': 'Nombre barrio', 'PREDIO_PRECHIP': 'Chip', 'PREDIO_PRECEDCATA': 'Cedula catastral', 'PREDIO_PRENUPRE': 'N predio', 'PREDIO_PREDIRECC': 'Dirección', 'PREDIO_PREMDIRECC': 'PREMDIRECC', 'PREDIO_PRETDIRECC': 'PRETDIRECC', 'PREDIO_PRECDESTIN': 'Destino económico', 'PREDIO_PRECUSO': 'Uso económico', 'PREDIO_PREAUSO': 'PREAUSO', 'PREDIO_PREAPISOS': 'PREAPISOS', 'PREDIO_BARMANPRE': 'BARMANPRE', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Placa_Domiciliaria_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PDoCodigo': 'Identificador unico de la placa', 'PDoTexto': 'Texto de la placa', 'PDoCInteri': 'Codigo del interior', 'PDoAngulo': 'Angulo de la etiqueta', 'PDoNVial': 'Nomenclatura vial', 'PDoCLote': 'Codigo del Lote', 'PDoTipo': 'Tipo de placa', });
lyr_Puntos_nodos_8.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Nodo': 'Nodo', 'Name': 'Name', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'Tipificaci': 'Tipificaci', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'POINT_Z': 'POINT_Z', 'POINT_M': 'POINT_M', });
lyr_Puntos_propios_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_Nodos_propuestos_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FacilityID': 'Range', 'SUM_FacilityID': 'TextEdit', 'MAX_Name': 'TextEdit', 'SUM_FromBreak': 'TextEdit', 'SUM_ToBreak': 'TextEdit', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Nodos_Bogota_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nodo': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_SectorCatastral_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'SCaCodigo': 'TextEdit', 'SCaTipo': 'TextEdit', 'SCaNombre': 'TextEdit', 'Areas': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Areas_demanda_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'CLUSTER_ID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Malla_Vial_Integral_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'MVICCalzad': 'Range', 'MVICCat': 'TextEdit', 'MVITCla': 'TextEdit', 'MVITipo': 'TextEdit', 'MVINombre': 'TextEdit', 'MVINAltern': 'TextEdit', 'MVINPrinci': 'TextEdit', 'MVINGenera': 'TextEdit', 'MVINAntigu': 'TextEdit', 'MVIEtiquet': 'TextEdit', 'MVISVia': 'TextEdit', 'MVICIV': 'Range', 'MVICodigo': 'Range', 'MVINumC': 'Range', 'MVIVelReg': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_Lotes_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Lote_LOTCODIGO': 'TextEdit', 'Lote_MANZCODIGO': 'TextEdit', 'PREDIO_PRENBARRIO': 'TextEdit', 'PREDIO_PRECHIP': 'TextEdit', 'PREDIO_PRECEDCATA': 'TextEdit', 'PREDIO_PRENUPRE': 'TextEdit', 'PREDIO_PREDIRECC': 'TextEdit', 'PREDIO_PREMDIRECC': 'TextEdit', 'PREDIO_PRETDIRECC': 'TextEdit', 'PREDIO_PRECDESTIN': 'TextEdit', 'PREDIO_PRECUSO': 'TextEdit', 'PREDIO_PREAUSO': 'TextEdit', 'PREDIO_PREAPISOS': 'TextEdit', 'PREDIO_BARMANPRE': 'TextEdit', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Placa_Domiciliaria_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'PDoCodigo': 'TextEdit', 'PDoTexto': 'TextEdit', 'PDoCInteri': 'TextEdit', 'PDoAngulo': 'TextEdit', 'PDoNVial': 'TextEdit', 'PDoCLote': 'TextEdit', 'PDoTipo': 'TextEdit', });
lyr_Puntos_nodos_8.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'Nodo': 'TextEdit', 'Name': 'TextEdit', 'SymbolID': 'Range', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'Range', 'Tipificaci': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'POINT_Z': 'TextEdit', 'POINT_M': 'TextEdit', });
lyr_Puntos_propios_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'Range', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'Range', });
lyr_Nodos_propuestos_1.set('fieldLabels', {'OBJECTID': 'no label', 'FacilityID': 'no label', 'SUM_FacilityID': 'no label', 'MAX_Name': 'no label', 'SUM_FromBreak': 'no label', 'SUM_ToBreak': 'no label', });
lyr_Nodos_Bogota_2.set('fieldLabels', {'OBJECTID': 'no label', 'Nodo': 'no label', });
lyr_SectorCatastral_3.set('fieldLabels', {'OBJECTID': 'no label', 'SCaCodigo': 'no label', 'SCaTipo': 'no label', 'SCaNombre': 'no label', 'Areas': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Areas_demanda_4.set('fieldLabels', {'OBJECTID': 'no label', 'CLUSTER_ID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Malla_Vial_Integral_5.set('fieldLabels', {'OBJECTID': 'no label', 'MVICCalzad': 'no label', 'MVICCat': 'no label', 'MVITCla': 'no label', 'MVITipo': 'no label', 'MVINombre': 'no label', 'MVINAltern': 'no label', 'MVINPrinci': 'no label', 'MVINGenera': 'no label', 'MVINAntigu': 'no label', 'MVIEtiquet': 'no label', 'MVISVia': 'no label', 'MVICIV': 'no label', 'MVICodigo': 'no label', 'MVINumC': 'no label', 'MVIVelReg': 'no label', 'SHAPE_Length': 'no label', });
lyr_Lotes_6.set('fieldLabels', {'OBJECTID': 'no label', 'Lote_LOTCODIGO': 'no label', 'Lote_MANZCODIGO': 'no label', 'PREDIO_PRENBARRIO': 'no label', 'PREDIO_PRECHIP': 'no label', 'PREDIO_PRECEDCATA': 'no label', 'PREDIO_PRENUPRE': 'no label', 'PREDIO_PREDIRECC': 'no label', 'PREDIO_PREMDIRECC': 'no label', 'PREDIO_PRETDIRECC': 'no label', 'PREDIO_PRECDESTIN': 'no label', 'PREDIO_PRECUSO': 'no label', 'PREDIO_PREAUSO': 'no label', 'PREDIO_PREAPISOS': 'no label', 'PREDIO_BARMANPRE': 'no label', });
lyr_Placa_Domiciliaria_7.set('fieldLabels', {'OBJECTID': 'no label', 'PDoCodigo': 'no label', 'PDoTexto': 'no label', 'PDoCInteri': 'no label', 'PDoAngulo': 'no label', 'PDoNVial': 'no label', 'PDoCLote': 'no label', 'PDoTipo': 'no label', });
lyr_Puntos_nodos_8.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Nodo': 'no label', 'Name': 'inline label - visible with data', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'Tipificaci': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'POINT_Z': 'no label', 'POINT_M': 'no label', });
lyr_Puntos_propios_9.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_Puntos_propios_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});