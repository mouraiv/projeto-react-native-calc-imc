import React from 'react';
import {
  View,
} from 'react-native';

import EStylesheet from 'react-native-extended-stylesheet';

import Bar from '../../component/bar/'
import SpeedMeter from '../../component/speedmeter';
import Ratio from '../../component/ratio';
import Result from '../../component/result';
import List from '../../component/list/';
import Footer from '../../component/footer/';

function Imc({route, navigation}){
    const { imc, idade, genero, peso } = route.params 

    return(
        <View style={styles.container}>

                <Bar />
        
            <View style={styles.containerAnimed}>

                <SpeedMeter/>
                <Result imc={imc}/>
            

            </View>

                <Ratio imc={imc} genero={genero} idade={idade} peso={peso}/>

            <View style={styles.containerResult} >

                <List imc={imc} genero={genero} idade={idade} />
                <Footer />

            </View>

    </View>  
    )
}

const styles = EStylesheet.create({
    container:{
      height:'100%', 
    },
    containerAnimed:{
      height:'30%' 
    },
    containerResult:{
      borderRadius: 15,  
      margin:'3%',  
      padding: '3%',
      height:'58%',
      backgroundColor:'rgb(255, 255, 255)' 
    },
})

EStylesheet.build()

export default Imc;