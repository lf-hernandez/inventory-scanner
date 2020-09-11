import React, { FunctionComponent, useEffect } from 'react';
import { Keyboard, TextInput, StyleSheet, View, Text } from 'react-native';

const ExternalScanner: FunctionComponent = () => {
    const [value, onChangeText] = React.useState(' Scanned Code...');

    return (
        <View style={styles.container}>
            <Text style={styles.formLabel}>Scan Item</Text>
            <View>
                <TextInput style={styles.formInput} placeholder="Barcode" clearButtonMode="always" />
                <TextInput style={styles.formInput} placeholder="Quantity" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50
    },

    formLabel: {
        fontSize: 20,
        color: '#fff',
        alignSelf: 'flex-start',
        marginLeft: 25
    },
    formInput: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50
    }
});

export default ExternalScanner;
