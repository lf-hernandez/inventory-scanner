import React, {useEffect, useState} from 'react';
import { StyleSheet, Button, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';

type NewItemModalProps = {
    isModalVisible: boolean;
    setModalVisible: (isVisible: boolean) => void;
    itemName: string;
    setItemName: (itemName: string) => void;
    itemDescription: string;
    setItemDescription: (itemDescription: string) => void;
    price: number;
    setPrice: (price: number) => void;
    total: number;
    setTotal: (price: number) => void;
    min: number;
    setMin: (min: number) => void;
}

export default function NewItemModal(props: NewItemModalProps) {
    const parseNumber = (value: string) => {
        let parsedValue = parseInt(value);

        if (isNaN(parsedValue) || parsedValue < 0) {
            parsedValue = 0;
        }
        
        return parsedValue;
    };

    const itemNameInputHandler = (value: string) => props.setItemName(value);
    const itemDescriptionHandler = (value: string) => props.setItemDescription(value);
    const itemPriceHandler = (value: string) => props.setPrice(parseNumber(value));
    const totalHandler = (value: string) => props.setTotal(parseNumber(value));
    const minHandler = (value: string) => props.setMin(parseNumber(value));


    const cancelSubmission = () => props.setModalVisible(false);
    const submitNewItem = () => console.log('submission');

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isModalVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text style={styles.heading}>Add New Inventory Item</Text>
                    
                    <TextInput
                        style={styles.input}
                        onChangeText={itemNameInputHandler}
                        value={props.itemName}
                        placeholder="Item name"
                        placeholderTextColor="black">
                    </TextInput>

                    <TextInput
                        style={styles.input}
                        onChangeText={itemDescriptionHandler}
                        value={props.itemDescription}
                        placeholder="Item description"
                        placeholderTextColor="black">
                    </TextInput>

                    <TextInput
                        style={styles.input}
                        onChangeText={itemPriceHandler}
                        value={props.price.toString()}
                        placeholder="Price"
                        placeholderTextColor="black"></TextInput>   
                    
                    <TextInput
                        style={styles.input}
                        onChangeText={totalHandler}
                        value={props.total.toString()}
                        placeholder="Total value"
                        placeholderTextColor="black"></TextInput>   

                    <TextInput
                        style={styles.input}
                        onChangeText={minHandler}
                        value={props.min.toString()}
                        placeholder="Min"
                        placeholderTextColor="black"></TextInput>   


                    <View style={styles.actionsContainer}>
                        <Button
                            onPress={cancelSubmission}
                            title="Cancel"
                        />
                        <Button
                            onPress={cancelSubmission}
                            title="Save"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: '#E0E0E0',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    input: {
        width: 200,
        padding: 10,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1,
        color: 'black',
        marginVertical: 8
    },
    actionsContainer: {
        flexDirection: 'row',
        marginTop: 20
    },

    button: {
        marginTop: 35,
        backgroundColor: 'blue',
        padding: 8,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
});
