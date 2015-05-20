cornerstone-test-image-loader
=============================

This repository contains a cornerstone image loader that produces test images client side.  This is really
useful for supporting development activities and examples as no server is required.

WARNING: This image loader base 64 encodes the pixel data so cornerstone can view images without requiring
a server (for development and example use cases).  A better option that base 64 encoding your pixel data
is to serve up the DICOM P10 via HTTP server and load it using the
[cornerstoneWADOImageLoader](https://github.com/chafey/cornerstoneWADOImageLoader)

Image Loaders
-------------

example
-------
Produces MRI Head images:

* example://1 - MRI head image #1 (coronal)
* example://2 - MRI head image #2 (coronal)

ctexample
---------

Produces CT chest image:
* ctexample://1 - CT chest image


string
---------
Generates a 256x256 image with the specified string printed into the image:

* string://1 - Generates a 256x256 image with the string "1" rendered inside of it
* string://hello world - Generates a 256x256 image with the string "hello world" rendered inside of it

ramp
----
Generates a 256x256 image with a grayscale ramp based on the specified parameters (comma separated):
* parameter 0 = width (default 256)
* parameter 1 = height (default 256)
* parameter 2 = bitsStored (default 8)
* parameter 3 = columnPixelSpacing (default 1.0)
* parameter 5 = rowPixelSpacing (default 1.0)
* parameter 6 = slope (default 1.0)
* parameter 7 = intercept (default 0.0)

* ramp://256,256,8 - Generates a 256x256x1 image with a grayscale ramp covering 0-255 values
* ramp://256,256,10 - Generates a 256x256x2 image with a grayscale ramp covering 0-1023 values
* ramp://256,256,16 - Generates a 256x256x2 image with a grayscale ramp covering 0-65535 values
* ramp://512,512,16,0.5,0.5,1.0,-1024 - Generates a 512x512x2 image with a grayscale ramp covering 0-65535 values and pixel spacing 0.5/0.5, slope = 1.0, intercept -1024


