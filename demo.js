var GoProTagger = require('gopro-tagging');
var videoFilePath = 'GOPR3334.MP4'; //replace your video path here
GoProTagger.getTag(videoFilePath, function(hilights, err){
    if (err != undefined)
    {
        console.log('GoPro-Tagging: Error - ', err);
    } 
    else
    {
        console.log('This video has ' + hilights.length + ' HiLight tag(s)');
        for(var i = 0;i < hilights.length;i++) {
            console.log('HiLight ' + i + ' @ ' + hilights[i] + ' millisecond');
        }
    }
});