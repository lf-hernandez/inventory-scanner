import React, { FunctionComponent } from 'react';
import { Button, TextInput, StyleSheet, View, Modal } from 'react-native';

const ExternalScanner: FunctionComponent = () => {
    const [quantity, setQuantity] = React.useState(1);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    };
    const isDisabled = () => quantity <= 1;

    const quantityInputHandler = (value: string) => {
        let parsedValue = parseInt(value);
        if(isNaN(parsedValue)) {
            parsedValue = 1;
        }
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
                    disabled={isDisabled()}
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
