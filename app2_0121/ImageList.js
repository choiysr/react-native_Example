import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';


const ImageList = ({arr}) => {

    const list = arr.map(obj=> <Image key={obj.no} source={obj.src}></Image>) 

    return(
        <View>
            <ScrollView horizontal={true}>
            {list}
            </ScrollView>
        </View>
    )
}

export default ImageList