cornerstone-test-image-loader
=============================

This respository contains a cornerstone image loader that produces test images client side.  This is really
useful for supporting development activities and examples as no server is required.

WARNING: This image loader base 64 encodes the pixel data so cornerstone can view images without requiring
a server (for development and example use cases).  A better option that base 64 encoding your pixel data
is to serve up the DICOM P10 via HTTP server and load it using the
[cornerstoneWADOImageLoader](https://github.com/chafey/cornerstoneWADOImageLoader)

Images
------

* ctexample://1 - CT chest image
* example://1 - MRI head image #1 (coronal)
* example://2 - MRI head image #2 (coronal)


