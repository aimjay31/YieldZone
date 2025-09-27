import React from 'react';
import { TouchableOpacity, Text, Linking } from 'react-native';

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
            style={{ padding: 10, backgroundColor: '#007AFF', borderRadius: 5 }}
            onPress={handlePress}
        >
            <Text style={{ color: '#fff' }}>{name || 'Click Me'}</Text>
        </TouchableOpacity>
    );
}

export default Button;