function serializeSvgUrl(svgUrl) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', svgUrl, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var svgContent = xhr.responseText;
          // var parser = new DOMParser();
          // var svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
          var serializer = new XMLSerializer();
          var serializedSvg = serializer.serializeToString(svgContent);
          // var serializedSvg = serializer.serializeToString(svgDoc.documentElement);
          resolve(serializedSvg);
        } else {
          reject(new Error('Failed to fetch SVG content'));
        }
      }
    };
    xhr.send();
  });
}
 