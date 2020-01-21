import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


//3.5

const DisplayWeather = ({weather}) => (
	<View style={styles.header}>

        {weather == null ?  
            <Text style={styles.headerText}>
                NOT YET
		    </Text>
        :
            <View>
            <Text style={styles.headerText}>
                {weather.desc}
		    </Text>
            <Text style={styles.current}>
			    현재 : {weather.current}
		    </Text>
            <Text style={styles.min}>
			    최저 : {weather.min}
		    </Text>
            <Text style={styles.max}>
			    최고 : {weather.max}
		    </Text>
            </View>
        }

	</View>
)

const styles = StyleSheet.create({
	header: {
		marginTop: 50
	},
	headerText: {
		textAlign: 'center',
		fontSize: 40,
		color: 'yellow',
		fontWeight: '100'
    },
    current: {
        textAlign: 'center',
		fontSize: 30,
		color: 'white',
		fontWeight: '100'
    },
    min: {
        textAlign: 'center',
		fontSize: 30,
		color: 'white',
		fontWeight: '100'
    },
    max: {
        textAlign: 'center',
		fontSize: 30,
		color: 'white',
		fontWeight: '100'
    }
    
})

export default DisplayWeather
