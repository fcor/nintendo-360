# **Nintendo 360**

Nintendo 360 is a WebVR demo that shows different 3D models from Nintendo games.

[Live version](http://possible-pull.surge.sh/)

<p align="center">
 <img src="https://user-images.githubusercontent.com/21111451/54040535-a5d97280-4193-11e9-8e26-aeba767c074e.png" alt="A-Frame">
</p>

**Features**
- Shows 3D models according to user's selection
- Cylindrical UI optimized for VR
- Built with React-360
- 3D animations built with requestAnimationFrame and Animated library.

## Installation guide

Follow this instructions to run this project on your local machine.

### Prerequisites

To run this project all you need to have installed is node.js. It was created using this version:
```sh
node --version
v8.11.2
 ``` 

 ### Install & Local development

```sh
git clone https://github.com/fcor/nintendo-360.git  # Clone the repository.
cd nintendo-360 && npm install  # Install dependencies.
npm start  # Start the local development server.
 ``` 

 Then, go to your browser ```http:localhost:8081/``` and see the application alive.

 At the moment of building this app, React-360 package didn't include `scaleZ` support for 3D models. So in order to render the models, you have to 
 manually include the fix, that's included in the latest code. Copy the content of this [file](https://github.com/facebook/react-360/blob/c3e7e7f75abe39bcb90623e8c74963afa483149f/Libraries/VRReactOverrides/processTransform.vr.js#L75) into `node_modules/react-360/Libraries/VRReactOverrides/processTransform.vr.js`.

