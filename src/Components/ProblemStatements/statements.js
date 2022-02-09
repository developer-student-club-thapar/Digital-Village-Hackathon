const problemStatements = [
  {
    id: 1,
    title:
      "Develop a learning-based disease detection system that can identify the class of disease based on the Rice crop.",
    content: {
      des: `Crop diseases are a major threat to food security, but their rapid identification remains difficult in many parts of the world due to the lack of the necessary infrastructure. Overall, the approach of training models on increasingly large and publicly available image datasets presents a challenge in crop disease diagnosis on a huge scale globally.
This problem focuses on designing a system for disease diagnosis in rice crop using a public dataset of images of diseased and healthy rice crop collected either from the internet or directly from fields under varying conditions. The students can use machine learning, deep learning, computer vision or any of the technique they find suitable to achieve this task of disease identification in images of rice crop. The model will be evaluated on various parameters like accuracy, detection time, false positive rate etc.
`,
      data: `You will be provided a publically available dataset of images of diseased and healthy rice crop collected either from the internet or directly from fields under varying conditions. Other than the images of healthy and diseased rice crop, there will be annotation files that the students can study to understand about the classes of rice crop diseases and their distribution in the dataset. Based on this data, a model is to be trained to classify images that have healthy rice crop and ones that have diseased rice crop and the diseased crop section of image needs to be identified along with the class of disease.
`,
      link: `<dataset link>`,
      eval: `The submitted solution will be evaluated on various evaluation parameters like accuracy of detection, correctness of the classification, time taken in detection, rate of false positives etc. Other than these parameters, the novelty of idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 2,
    title:
      "Develop a learning-based disease detection system that can identify the class of disease based on the Wheat crop.",
    content: {
      des: `Crop diseases are a major threat to food security, but their rapid identification remains difficult in many parts of the world due to the lack of the necessary infrastructure. Overall, the approach of training models on increasingly large and publicly available image datasets presents a challenge in crop disease diagnosis on a huge scale globally.
This problem focuses on designing a system for disease diagnosis in wheat crop using a public dataset of images of diseased and healthy wheat crop collected either from the internet or directly from fields under varying conditions. The students can use machine learning, deep learning, computer vision or any of the technique they find suitable to achieve this task of disease identification in images of wheat crop. The model will be evaluated on various parameters like accuracy, detection time, false positive rate etc.
`,
      data: `You will be provided a publically available dataset of images of diseased and healthy wheat crop collected either from the internet or directly from fields under varying conditions. Other than the images of healthy and diseased wheat crop, there will be annotation files that the students can study to understand about the classes of wheat crop diseases and their distribution in the dataset. Based on this data, a model is to be trained to classify images that have healthy wheat crop and ones that have diseased wheat crop and the diseased crop section of image needs to be identified along with the class of disease.`,
      link: `<dataset link>`,
      eval: `The submitted solution will be evaluated on various evaluation parameters like accuracy of detection, correctness of the classification, time taken in detection, rate of false positives etc. Other than these parameters, the novelty of idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 3,
    title:
      "Develop a learning-based Weed detection system that can identify the class of weed based on Rice crop and Wheat Crop.",
    content: {
      des: `Weeds are harmful, sometimes poisonous plants that grow in a crop field where they are not desired. They negatively impact the growth of the crop, and eventually, it affects the quality and quantity of production. The aim of this problem statement is to create an artificial intelligence powered system that detects weeds in rice and wheat crop, when the input is in the form of images. By detection, we mean detecting the weed in an image either in the form of segments or bounded boxes and classifying its correct class. Using the dataset which contains images of rice and wheat with weeds, and annotations giving details of classes of weeds, the teams need to create a model that identifies weeds’ locations in an image and their classes, correctly and optimally, employing any of the available techniques like machine learning, deep learning, computer vision, etc.`,
      data: `You will be provided a publically available dataset of images of wheat and rice crop along with weeds, collected either from the internet or directly from fields under varying conditions. Other than the images of crops and weeds, there will be annotation files that the students can study to understand about the classes of weeds in rice and wheat crop and their distribution in the dataset. Using this data, a model is to be created to detect weeds and their classes in images.`,
      link: `<dataset link>`,
      eval: `The submitted solution will be evaluated on various evaluation parameters like accuracy of detection, correctness of the classification, time taken in detection, rate of false positives etc. Other than these parameters, the novelty of idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 4,
    title:
      "Develop a smart App for PA (precision agriculture) to generate irrigation schedule recommendations based on real-time weather and short-term forecasted data to better meet the plant water needs of a given period, conserving water while also minimizing nutrient leaching from the root zone due to excessive irrigation.",
    content: {
      des: `With challenges like resource scarcity, climate change, etc. it has become imperative that the requirements of any crop like the amount of water needed for irrigation, amount of nutrients to be supplied to the crop throughout its life cycle etc. be calculated precisely. 
This problem statement is formulated to create an application that gives information about irrigation requirements for a crop. The application obtains values of parameters that affect irrigation requirements of a crop using remote and on-ground sensors and then using suitable methods and known knowledge, calculates the quantity of water required for irrigation daily or as required regularly. The input parameters include soil moisture, temperature, pressure, humidity and luminosity (sunlight). The teams need to derive relation between these parameters and the water need of the crop such that the yield of the crop is maximized and resource utilization is optimal. Keep in mind the other parameters that affect the final result like the crop type and its growth stage. And on that basis, the application should provide the time/schedule of irrigation and amount of irrigation needed. 
`,
      data: `The teams will be provided a dataset link. The dataset will be in the form of a CSV file that contains values of 5 parameters, soil moisture, humidity, air temperature, luminosity and air pressure for different days and times. These parameters’ values are obtained regularly through on ground sensors. These parameters can be used as input values by the application in the form of APIs. And similarly after the output values of irrigation requirement are calculated they can be provided to be displayed on the application in the form of an API.`,
      link: `<dataset link>`,
      eval: `The submitted solution will be evaluated on various evaluation parameters like mean square error, time complexity of the prediction algorithm and how optimal the prediction is. Other than these parameters, the novelty of the idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 5,
    title:
      "Develop a forecasting model based on remote sensing data to predict yield. This remote sensing data will be mapped with sensor data to build an AI-based system.",
    content: {
      des: `Forecasting environmental parameters like temperature, soil moisture, humidity etc. is an important task in precision agriculture as these parameters affect the yield of crops. The accurate prediction of these parameters can help a farmer plan well in terms of irrigation needs and other requirements so as to maximize crop yield both in terms of quality as well as quantity. This problem statement is formulated with a twofold aim in mind. First, to study existing patterns of environmental parameters like humidity, air temperature etc. using data collected through on ground sensors or remote sensing, across a time series to predict future values of these environmental parameters. And second, to formulate the relationship between these parameters and the yield of crop. To be precise, the teams are expected to predict yield values based on these input parameters.`,
      data: `The teams will be provided a link to the dataset. The dataset will be a CSV file that contains environmental parameter values soil moisture, humidity, temperature, pressure, luminosity (sunlight) collected through on ground sensors in regular intervals. The teams have to analyze this data to make a time series prediction model that predicts values of these parameters for the next interval. Also, the teams have to predict yield of the crop based on these parameters. The teams are free to use any model or technique to achieve the task.`,
      link: `<dataset link>`,
      eval: `The forecasting model will be evaluated on various evaluation parameters like mean squared error, mean absolute error, etc. Other than these parameters, the novelty of idea behind the proposed model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 6,
    title:
      "Develop a learning-based automatic labeling system on images for specified classes. This will help us to create labeled data for AI systems.",
    content: {
      des: `The task of labeling an image dataset is an essential step in a variety of problems like classification, object detection, etc. More precise labeling leads to better training of any classification or any artificial intelligence-powered model. This problem statement aims to develop a system for labeling/annotating an image dataset. This means identifying the objects in images (weeds or crops etc.) and labeling them with the correct class. The data provided will be a set of objects and their classes. And a dataset of images that needs to be labeled. The model will be evaluated on the correctness of labeling.`,
      data: `You will be provided two publically available datasets. One contains images of objects, specifically weeds and crops, along with information on their class. Using this data, you have to create a labeling system based on machine learning or deep learning, or any other suitable technique. The other dataset contains images that have multiple objects in them. The goal is to label each image in this dataset, meaning identifying objects (weeds and crops), and labeling with the correct class.`,
      link: `<dataset link>`,
      eval: `The submitted solution will be evaluated on various evaluation parameters like correctness of labeling, time complexity, etc. Other than these parameters, the novelty of idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 7,
    title: "Open challenges of precision agriculture.",
    content: {
      des: `As the name suggests, this problem statement is formulated to tackle any open challenge of precision agriculture domain. The students can choose any such problem and formulate a solution for the same. The problem can be related to farm management software or hardware, smart farming, robotics, data analysis etc. Students can choose to work on any public dataset or create one of their own.`,
      data: `Any public dataset can be chosen by students to work on or they can create a dataset of their own.`,
      link: `<dataset link>`,
      eval: `The chosen problem and how it solves existing issues of precision farming will be a major criteria of evaluation. Depending on the problem, the submitted solution will be evaluated on conventional parameters like accuracy, mean square error, correlation etc. in regression problem, specificity, sensitivity, ROC etc. in classification problem and other relevant evaluation parameters according to open problem selected by the team. The novelty of idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
];

export default problemStatements;
