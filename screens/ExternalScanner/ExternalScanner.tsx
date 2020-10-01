import React, { FunctionComponent } from 'react';
import { Button, TextInput, StyleSheet, View, Text } from 'react-native';

const ExternalScanner: FunctionComponent = () => {
    const [quantity, setQuantity] = React.useState(0);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity - 1);

    const quantityInputHandler = (value: string) => {
        const parsedValue = parseInt(value);
        setQuantity(parsedValue);
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.barcodeInput} placeholder="Barcode" clearButtonMode="always" />
            </View>

            <View style={styles.quantitySelector}>
                <Button
                    onPress={incrementQuantity}
                    title="+"
                    color="cyan"
                />

                <TextInput
                    style={styles.quantityInput}
                    onChangeText={quantityInputHandler}
                    value={quantity.toString()}
                />
                <Button
                    onPress={decrementQuantity}
                    title="-"
                    color="cyan"
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
    quantitySelectorButton: {
        borderColor: 'cyan'
    },
    barcodeInput: {
        width: 200,
        padding: 10,
        borderBottomColor: 'cyan',
        borderBottomWidth: 1
    },
    quantityInput: {
        width: 50,
        padding: 10,
        borderBottomColor: 'cyan',
        borderBottomWidth: 1,
        textAlign: 'center'
    }
});

export default ExternalScanner;
