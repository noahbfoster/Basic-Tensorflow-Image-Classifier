Basic TensorFlow

If you want to try out this program, you will need to download index.html and index.js to the same directory, then open index.html in your browser.
The model can be trained by "uploading" images, then choosing the category (A, B, or C) that the image fits in.
You then upload more images in the same fashion, pressing their respective category button. 
After some training, the guess at the top of the page will begin to reflect the image's category, and it will display a probability.
This model is good at telling "positive" and "negative" tests apart, but doesn't do very well with granularity.
You can really train this program to tell anything apart, given enough images. I first tested it by training it to recognize the color of an apple.

WARNING: Refreshing the page will clear all training, you will have to start over. This is really just a proof of concept.

Used this resource as a guide to TensorFlow: https://codelabs.developers.google.com/codelabs/tensorflowjs-teachablemachine-codelab/index.html#0