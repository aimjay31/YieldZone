import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function Button() {
    return (
        <TouchableOpacity style={{ padding: 10, backgroundColor: '#007AFF', borderRadius: 5 }}>
            <Text style={{ color: '#fff' }}>Click Me</Text>
        </TouchableOpacity>
    );
}

export default Button;