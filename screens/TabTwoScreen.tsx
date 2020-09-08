import React, { useEffect } from 'react';
import { Keyboard, TextInput, StyleSheet } from 'react-native';

export default function TabTwoScreen() {
    const [value, onChangeText] = React.useState(' Scanned Code...');

    return <TextInput style={styles.input} placeholder="Scanned code goes here ..." clearButtonMode="always" />;
}

const styles = StyleSheet.create({
    input: {
        margin: 60,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 4
    }
});
