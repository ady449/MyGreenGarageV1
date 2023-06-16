import React from "react";
// import _ from "lodash";
import { View, Dimensions } from "react-native";
import Camera360 from "../stuff/Camera360";
// import Image360Viewer from "@hauvo/react-native-360-image-viewer";

const { width, height } = Dimensions.get("window");

// const images = _.reverse([
//   // require('../img/car2/IMG_4149.png'),
//   // require('../img/car2/IMG_4159.png'),
//   // require('../img/car2/IMG_4160.png'),
//   // require('../img/car2/IMG_4161.png'),
//   // require('../img/car2/IMG_4162.png'),
//   // require('../img/car2/IMG_4163.png'),
//   // require('../img/car2/IMG_4164.png'),
//   // require('../img/car2/IMG_4165.png'),
//   // require('../img/car2/IMG_4166.png'),
//   // require('../img/car2/IMG_4167.png'),
//   // require('../img/car2/IMG_4168.png'),
//   // require('../img/car2/IMG_4169.png'),
//   // require('../img/car2/IMG_4170.png'),
//   // require('../img/car2/IMG_4171.png'),
//   // require('../img/car2/IMG_4172.png'),
//   // require('../img/car2/IMG_4173.png'),
//   // require('../img/car2/IMG_4174.png'),
//   // require('../img/car2/IMG_4175.png'),
//   // require('../img/car2/IMG_4176.png'),
//   // require('../img/car2/IMG_4177.png'),
//   // require('../img/car2/IMG_4178.png'),
//   // require('../img/car2/IMG_4179.png'),
//   // require('../img/car2/IMG_4180.png'),
//   // require('../img/car2/IMG_4181.png'),
//   // require('../img/car2/IMG_4182.png'),
//   // require('../img/car2/IMG_4183.png'),
//   // require('../img/car2/IMG_4184.png'),
//   // require('../img/car2/IMG_4185.png'),

//   // require('../img/car2/IMG_4186.png'),
//   // require('../img/car2/IMG_4187.png'),
//   // require('../img/car2/IMG_4189.png'),
//   // require('../img/car2/IMG_4190.png'),
//   // require('../img/car2/IMG_4191.png'),
//   // require('../img/car2/IMG_4192.png'),
//   // require('../img/car2/IMG_4193.png'),
//   // require('../img/car2/IMG_4194.png'),
//   // require('../img/car2/IMG_4195.png'),
//   // require('../img/car2/IMG_4196.png'),
//   // require('../img/car2/IMG_4197.png'),
//   // require('../img/car2/IMG_4198.png'),
//   // require('../img/car2/IMG_4199.png'),
//   // require('../img/car2/IMG_4200.png'),
//   // require('../img/car2/IMG_4201.png'),
//   // require('../img/car2/IMG_4202.png'),
//   // require('../img/car2/IMG_4203.png'),
//   // require('../img/car2/IMG_4204.png'),
//   // require('../img/car2/IMG_4205.png'),
//   // require('../img/car2/IMG_4206.png'),
//   // require('../img/car2/IMG_4207.png'),
//   // require('../img/car2/IMG_4208.png'),
//   // require('../img/car2/IMG_4209.png'),
//   // require('../img/car2/IMG_4210.png'),
//   // require('../img/car2/IMG_4211.png'),
//   // require('../img/car2/IMG_4212.png'),
//   // require('../img/car2/IMG_4213.png'),
//   // require('../img/car2/IMG_4214.png'),
//   // require('../img/car2/IMG_4215.png'),
//   // require('../img/car2/IMG_4216.png'),
//   // require('../img/car2/IMG_4217.png'),
//   // require('../img/car2/IMG_4218.png'),
//   // require('../img/car2/IMG_4219.png'),
//   // require('../img/car2/IMG_4220.png'),
//   // require('../img/car2/IMG_4221.png'),
//   // require('../img/car2/IMG_4222.png'),
//   // require('../img/car2/IMG_4223.png'),
//   // require('../img/car2/IMG_4224.png'),
//   // require('../img/car2/IMG_4225.png'),
//   // require('../img/car2/IMG_4226.png'),
//   // require('../img/car2/IMG_4227.png'),
//   // require('../img/car2/IMG_4228.png'),
//   // require('../img/car2/IMG_4229.png'),

//   require("../img/car2/IMG_4264.png"),
//   require("../img/car2/IMG_4265.png"),
//   require("../img/car2/IMG_4266.png"),
//   require("../img/car2/IMG_4267.png"),
// ]);

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", marginLeft: width / 6 }}>
      {/* <Image360Viewer
        srcset={images}
        width={width / 1.5}
        height={height / 1.5}
      /> */}
      <Camera360 style={}
      dimensions={{}}
      inputType="mono"
      imageURL=""/>
    </View>
  );
};

export default App;
