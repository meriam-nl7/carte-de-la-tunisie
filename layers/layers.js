var wms_layers = [];

var format_tunisie_0 = new ol.format.GeoJSON();
var features_tunisie_0 = format_tunisie_0.readFeatures(json_tunisie_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tunisie_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tunisie_0.addFeatures(features_tunisie_0);
var lyr_tunisie_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tunisie_0, 
                style: style_tunisie_0,
                interactive: true,
    title: 'tunisie<br />\
    <img src="styles/legend/tunisie_0_0.png" /> Ariana<br />\
    <img src="styles/legend/tunisie_0_1.png" /> Beja<br />\
    <img src="styles/legend/tunisie_0_2.png" /> Ben Arous<br />\
    <img src="styles/legend/tunisie_0_3.png" /> Bizerte<br />\
    <img src="styles/legend/tunisie_0_4.png" /> Gabes<br />\
    <img src="styles/legend/tunisie_0_5.png" /> Gafsa<br />\
    <img src="styles/legend/tunisie_0_6.png" /> Jendouba<br />\
    <img src="styles/legend/tunisie_0_7.png" /> Kairouan<br />\
    <img src="styles/legend/tunisie_0_8.png" /> Kasserine<br />\
    <img src="styles/legend/tunisie_0_9.png" /> Kebili<br />\
    <img src="styles/legend/tunisie_0_10.png" /> Le Kef<br />\
    <img src="styles/legend/tunisie_0_11.png" /> Mahdia<br />\
    <img src="styles/legend/tunisie_0_12.png" /> Manouba<br />\
    <img src="styles/legend/tunisie_0_13.png" /> Medenine<br />\
    <img src="styles/legend/tunisie_0_14.png" /> Monastir<br />\
    <img src="styles/legend/tunisie_0_15.png" /> Nabeul<br />\
    <img src="styles/legend/tunisie_0_16.png" /> Sfax<br />\
    <img src="styles/legend/tunisie_0_17.png" /> Sidi Bou Zid<br />\
    <img src="styles/legend/tunisie_0_18.png" /> Siliana<br />\
    <img src="styles/legend/tunisie_0_19.png" /> Sousse<br />\
    <img src="styles/legend/tunisie_0_20.png" /> Tataouine<br />\
    <img src="styles/legend/tunisie_0_21.png" /> Tozeur<br />\
    <img src="styles/legend/tunisie_0_22.png" /> Tunis<br />\
    <img src="styles/legend/tunisie_0_23.png" /> Zaghouan<br />\
    <img src="styles/legend/tunisie_0_24.png" /> <br />'
        });

lyr_tunisie_0.setVisible(true);
var layersList = [lyr_tunisie_0];
lyr_tunisie_0.set('fieldAliases', {'IDG': 'IDG', 'NOMG': 'NOMG', 'IDPAYS': 'IDPAYS', });
lyr_tunisie_0.set('fieldImages', {'IDG': 'TextEdit', 'NOMG': 'TextEdit', 'IDPAYS': 'TextEdit', });
lyr_tunisie_0.set('fieldLabels', {'IDG': 'no label', 'NOMG': 'no label', 'IDPAYS': 'no label', });
lyr_tunisie_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});