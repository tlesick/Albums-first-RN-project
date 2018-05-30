//import libraires for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
//always make the component the same name as the file name

const Header = (props) => {
    // describe what styles is 
    const { textStyle, viewStyle } = styles;
    // use the style in the Jax tag

    return (
        <View style={viewStyle}>
        {/* passing properties  */}
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// camelCase for properties
// justifyContent to position elements vertically, flex-box
// alignItems to position elements horizontally
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//make the component avaiable to other parts of the the app
export default Header;