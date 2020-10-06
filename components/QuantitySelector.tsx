import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

type QuantitySelectorProps = {
    quantity: number;
    setQuantity: (quantity: number) => void;
};

export default function QuantitySelector(props: QuantitySelectorProps) {
    const isDecButtonDisabled = () => props.quantity <= 1;
    const incrementQuantity = () => props.setQuantity(props.quantity + 1);
    const decrementQuantity = () => {
        if (props.quantity > 1) {
            props.setQuantity(props.quantity - 1);
        }
    };
    const quantityInputHandler = (value: string) => {
        let parsedValue = parseInt(value);
        if (isNaN(parsedValue)) {
            parsedValue = 1;
        }
        props.setQuantity(parsedValue);
    };

    return (
        <View style={styles.quantitySelector}>
            <Button
                onPress={decrementQuantity}
                title="-"
            />
            <TextInput
                style={styles.quantityInput}
                onChangeText={quantityInputHandler}
                value={props.quantity.toString()}
                keyboardType="number-pad"
                maxLength={4}
            />
            <Button
                onPress={incrementQuantity}
                title="+"
                disabled={isDecButtonDisabled()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    quantitySelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50
    },
    quantityInput: {
        width: 50,
        padding: 10,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1,
        textAlign: 'center'
    }
});
