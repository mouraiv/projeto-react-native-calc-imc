import React from 'react';
import {
  View,
} from 'react-native';

import EStylesheet from 'react-native-extended-stylesheet';
import Svg, { Path, Text as SvgText, G } from 'react-native-svg'

function SpeedMeter() {
  return (

      <View style={styles.speedStyle}>

      <Svg width="100%" height="100%" viewBox="0 0 132 132" preserveAspectRatio="xMidYMax meet">
      <G transform="translate(-172,-120)"> 
        <Path fill="rgb(50,205,50)" d="M 118.28 264.863 C 117.677 237.109 132.412 197.038 152.273 180.24 L 193.345 223.082 C 180.244 237.035 175.587 259.296 177.057 265.571 L 118.28 264.863 Z"/>
        <Path fill="rgb(255,215,0)" d="M 152.973 179.391 L 193.954 222.223 C 211.162 204.535 231.025 204.453 237.213 204.436 L 237.273 144.387 C 207.749 143.577 176.734 154.694 152.973 179.391 Z"/>
        <Path fill="rgb(255, 0, 0)" d="M 280.534 180.675 C 279.931 208.429 293.036 244.152 314.636 265.298 L 357.059 223.807 C 342.445 209.706 339.268 191.567 339.311 181.475 L 280.534 180.675 Z" transform="matrix(-1, 0, 0, -1, 637.573059, 445.972992)"/>
        <Path fill="rgb(255, 140, 0)" d="M 238.384 185.723 L 280.716 144.242 C 294.047 157.486 310.636 160.584 322.045 161.064 L 321.912 221.306 C 289.556 219.03 263.459 209.846 238.384 185.723 Z" transform="matrix(-1, 0, 0, -1, 560.429016, 365.548004)"/>
        <SvgText fill="rgb(0, 0, 0)" fontWeight='bold' fontFamily='sans-serif-light' transform="matrix(0.341878, -0.939744, 0.939744, 0.341878, -64.588371, 288.816345)" x="117.293" y="172.115">BAIXO</SvgText>
        <SvgText fill="rgb(0, 0, 0)" fontWeight='bold' fontFamily='sans-serif-light' transform="matrix(0.921104, -0.389316, 0.389316, 0.921104, 5.641595, 60.816177)" x="118.293" y="172.115">MÉDIO</SvgText>
        <SvgText fill="rgb(0, 0, 0)" fontWeight='bold' fontFamily='sans-serif-light' transform="matrix(0.923597, 0.383365, -0.383365, 0.923597, 225.360291, -41.276188)" x="115.293" y="172.115">ALTO</SvgText>
        <SvgText fill="rgb(0, 0, 0)" fontWeight='bold' fontFamily='sans-serif-light' transform="matrix(0.356224, 0.934401, -0.934401, 0.356224, 447.123962, 38.390083)" x="107.293" y="172.115">CRÍTICO</SvgText>
      </G>
      </Svg>

      </View>
  )
};

const styles = EStylesheet.create({
  speedStyle:{
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});

EStylesheet.build()

export default SpeedMeter;