import React, { FunctionComponent } from 'react';
import { Button, TextInput, StyleSheet, View, Text } from 'react-native';

const ExternalScanner: FunctionComponent = () => {
    const [quantity, setQuantity] = React.useState(0);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity - 1);

    const quantityInputHandler = (value: string) => {
        const parsedValue = parseInt(value);
        setQuantity(parsedValue);
    };

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.barcodeInput} placeholder="Barcode" clearButtonMode="always" />
            </View>

            <View style={styles.quantitySelector}>
                <Button
                    onPress={decrementQuantity}
                    title="-"
                />
                <TextInput
                    style={styles.quantityInput}
                    onChangeText={quantityInputHandler}
                    value={quantity.toString()}
                    keyboardType="number-pad"
                    maxLength={4}
                />
                <Button
                    onPress={incrementQuantity}
                    title="+"
                />
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
    quantitySelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50
    },
    barcodeInput: {
        width: 200,
        padding: 10,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1
    },
    quantityInput: {
        width: 50,
        padding: 10,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1,
        textAlign: 'center'
    }
});

export default ExternalScanner;
