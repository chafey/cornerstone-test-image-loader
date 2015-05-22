// WARNING: This image loader base 64 encodes the pixel data so cornerstone can view images without requiring
// a server (for development and example use cases).  A better option that base 64 encoding your pixel data
// is to serve up the DICOM P10 via HTTP server and load it using the cornerstoneWADOImageLoader here:
// https://github.com/chafey/cornerstoneWADOImageLoader

(function (cs, ctil) {

    "use strict";

    if(ctil === undefined) {
        ctil = {};
    }

    var image1PixelData = ctil.getPixelData(ctil.base64Images.image108Base64);
    var image2PixelData = ctil.getPixelData(ctil.base64Images.image109Base64);

    function getExampleImage(imageId) {

        var width = 256;
        var height = 256;

        function getPixelData()
        {
            if(imageId == 'example://1')
            {
                return image1PixelData;
            }
            else if(imageId = 'example://2')
            {
                return image2PixelData;
            }
            throw "unknown imageId";
        }

        var image = {
            imageId: imageId,
            minPixelValue : 0,
            maxPixelValue : 257,
            slope: 1.0,
            intercept: 0,
            windowCenter : 127,
            windowWidth : 256,
            render: cs.renderGrayscaleImage,
            getPixelData: getPixelData,
            rows: height,
            columns: width,
            height: height,
            width: width,
            color: false,
            columnPixelSpacing: .8984375,
            rowPixelSpacing: .8984375,
            sizeInBytes: width * height * 2
        };

        if(imageId === 'example://1') {
            $.ajax('assets/')

        } else if(imageId === 'example://2') {

        }

        var deferred = $.Deferred();
        deferred.resolve(image);
        return deferred;
    }


    // register our imageLoader plugin with cornerstone
    cs.registerImageLoader('example', getExampleImage);

}(cornerstone, cornerstoneTestImageLoader));