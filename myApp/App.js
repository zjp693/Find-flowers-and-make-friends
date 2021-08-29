import React from 'react';

import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
// 获取设备的宽高
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// 在rn中默认容器 布局方式 但是flex
// 方向flex-direction：conlumm
// 在rn中样式 没有继承
// 单位
//   不用加px
//   不用加vw vh
//   可以加 百分比 “50%”
//

// const Index = () => (
//   <View>
//     {/* 样式 */}
//     {/* <Text>111111122222</Text>
//     <Text style={{color: 'red'}}>11111112221122</Text>
//     <View>
//       <Text
//         style={{
//           width: windowWidth / 2,
//           height: windowHeight / 2,
//           backgroundColor: 'yellow',
//         }}>
//         我是屏幕宽高的一半
//       </Text>
//     </View> */}
//     {/*  */}

//     {/* 切换 */}
//     {/* 里面加的数组 */}
//     <Text
//       style={{
//         backgroundColor: 'yellow',
//         transform: [{translateY: 200}, {scale: 2}],
//       }}
//     />
//   </View>
// );
//触摸透明度
const handlerPress = () => {
  alert('触屏');
};

const Index = () => (
  <TouchableOpacity onPress={handlerPress} activeOpacity={0.5}>
    <Text style={{backgroundColor: 'red'}}>TouchableOpacity</Text>
  </TouchableOpacity>
);

export default Index;
