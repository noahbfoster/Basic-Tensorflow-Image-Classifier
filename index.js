let net;

async function app() {
    console.log('Loading mobilenet..');
    const classifier = knnClassifier.create();

    // Load the model.
    net = await mobilenet.load();
    console.log('Successfully loaded model');
    
    // Code to get our uploaded image to a class when a button is pressed
    const addExample = async classId => {
      const img = document.getElementById('output');

      const activation = net.infer(img, true);
      classifier.addExample(activation, classId);
    };
  
    // When clicking a button, add an example for that class.
    document.getElementById('class-a').addEventListener('click', () => addExample(0));
    document.getElementById('class-b').addEventListener('click', () => addExample(1));
    document.getElementById('class-c').addEventListener('click', () => addExample(2));
  
    // Our functional loop, Classifies uploaded images
    while (true) {
      if (classifier.getNumClasses() > 0) {
        const img = document.getElementById('output');

        // Get the activation from mobilenet
        const activation = net.infer(img, 'conv_preds');
        // Get the most likely class and confidence from the classifier module.
        const result = await classifier.predictClass(activation);
  
        const classes = ['A', 'B', 'C'];
        document.getElementById('console').innerText = `
          prediction: ${classes[result.label]}\n
          probability: ${result.confidences[result.label]}
        `;

      }
  
      await tf.nextFrame();
    }
  }

app();