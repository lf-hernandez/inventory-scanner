import React, { FunctionComponent, useEffect } from 'react';
import { Button, TextInput, StyleSheet, View, Text } from 'react-native';

const ExternalScanner: FunctionComponent = () => {
    const [value, setValue] = React.useState(0);

    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value - 1);

    return (
        <View style={styles.container}>
            <Text style={styles.formLabel}>Scan Item</Text>
            <View>
                <TextInput style={styles.formInput} placeholder="Barcode" clearButtonMode="always" />
                <div style={styles.picker}>
                    <Button
                        onPress={increment}
                        title="+" />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        value={value.toString()}
                    />
                    <Button
                        onPress={decrement}
                        title="-"/>
                </div>

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

    picker: {
      flex: 1,
      flexDirection: 'row'
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
