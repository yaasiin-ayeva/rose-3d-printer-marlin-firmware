
(function() {
  var newClient = 'https://secure-cdn.mplxtms.com/s/newClient/ctm.min.js';
  var oldClient = 'https://secure-cdn.mplxtms.com/s/oldClient/ctm.min.js';
  var migratedSiteIds = {
    '636': true,
    '1040': true,
    '1044': true,
    '1908': true,
    '1932': true,
    '3201': true,
    '1821': true,
    '1456': true,
    '1774': true,
    '977': true,
    '980': true,
    '1873': true,
    '2085': true,
    '1300': true,
    '1362': true,
    '1643': true,
    '708': true,
    '1182': true,
    '1314': true,
    '1720': true
  };
  var ourScript = document.querySelector('script[src*=\'MasterTMS\']');
  var ourSrc;
  var siteId;
  var tmsScript;
  var tmsUrl;
  if (ourScript !== null && ourScript !== undefined) {
    ourSrc = ourScript.src;
    if (ourSrc.indexOf('#') !== -1) {
      siteId = ourSrc.split('#')[1];
      if (migratedSiteIds[siteId]) {
        tmsUrl = newClient;
      } else {
        tmsUrl = oldClient;
      }
      tmsScript = document.createElement('script');
      tmsScript.type = 'text/javascript';
      tmsScript.async = true;
      tmsScript.src = tmsUrl + '#' + siteId;
      ourScript.parentNode.insertBefore(tmsScript, ourScript);
    }
  }
})();
