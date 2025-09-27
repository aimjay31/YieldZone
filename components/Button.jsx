import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Linking } from 'react-native';
import { green, darkGreen } from '../constants/Colors';

function Button({ name, link }) {
    const handlePress = () => {
        if (link) {
            Linking.openURL(link);
        } else {
            console.log('Button pressed!');
        }
    };

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
        >
            <Text style={styles.text}>{name || 'Click Me'}</Text>
        </TouchableOpacity>
    );
}

    const styles = StyleSheet.create({

      button: {
        padding: 10,
        backgroundColor: green, 
        borderRadius: 50,
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      },
      text: {
 
      }
    });

export default Button;