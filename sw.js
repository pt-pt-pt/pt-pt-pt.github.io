'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","Algiz_down.html","Algiz-up.html","Ansus_down.html","Ansus_up.html","Berkana_down.html","Berkana_up.html","Dagaz.html","Ehwaz_down.html","Ehwaz_up.html","Eihwaz.html","Fehu_down.html","Fehu_up.html","Gebo.html","Hagalaz.html","Inguz.html","Isa.html","Jera.html","Kano_down.html","Kano_up.html","Laguz-down.html","Laguz-up.html","Mannaz_down.html","Mannaz_up.html","Nauthiz_down.html","Nauthiz_up.html","Othil_down.html","Othil_up.html","Perth_down.html","Perth_up.html","Raido_down.html","Raido_up.html","Sowelu.html","Teiwaz_down.html","Teiwaz_up.html","Thurisaz_down.html","Thurisaz_up.html","Uruz_down.html","Uruz_up.html","Wunjo_down.html","Wunjo_up.html","Wyrd.html","style/style.css"]);

 toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
