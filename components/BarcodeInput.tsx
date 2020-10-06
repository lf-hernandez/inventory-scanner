import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

type BarcodeInputProps = {
    barcode: string;
    setBarcode: (barcode: string) => void
    barcodeHandler: () => void;
}

export default function BarcodeInput(props: BarcodeInputProps) {
    // TODO: update barcode state and emit event => handle modal visibility logic in parent on event triggered
    // const barcodeHandler = (value: string) => {
    //     props.setBarcode(value);
    //
    // };

    return (
        <View>
            <TextInput
                value={props.barcode}
                onChangeText={props.barcodeHandler}
                style={styles.input}
                placeholder="Barcode"
                clearButtonMode="always" />
        </View>
    )
}

const styles  = StyleSheet.create({
    input: {
        width: 200,
        padding: 10,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1,
        color: 'black'
    }
});
