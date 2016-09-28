var getTag = function(videoPath, callback) {
  var fs = require('fs');
  fs.stat(videoPath, function(err, stat) {
    if(err == null) {
      var hmmt = require('codem-isoboxer').parseBuffer(new Uint8Array(fs.readFileSync(videoPath)).buffer).fetch('HMMT');
      if (hmmt == undefined)
      {
        typeof callback === 'function' && callback([], 'This wasn\'t GoPro video');
        return;
      }
      var HNum = hmmt._raw.getUint8(11);
      var hightlights = [];
      for (var i = 0; i < HNum; i++)
      {
        hightlights.push(hmmt._raw.getUint32(12 + (i * 4)));
      }
      typeof callback === 'function' && callback(hightlights);
      return;
    } else if(err.code == 'ENOENT') {
      typeof callback === 'function' && callback([], 'File not found');
      return;
    } else {
      typeof callback === 'function' && callback([], 'fs - ' + err.code);
      return;
    }
  });
}
exports.getTag  = getTag;