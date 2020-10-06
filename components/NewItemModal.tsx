import React from 'react';
import { StyleSheet, Button, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

type NewItemModalProps = {
    isModalVisible: boolean;
    setModalVisible: (isVisible: boolean) => void;
    itemName: string;
    setItemName: (itemName: string) => void;
    itemDescription: string;
    setItemDescription: (itemDescription: string) => void;
}

export default function NewItemModal(props: NewItemModalProps) {
    const itemNameInputHandler = (value: string) => props.setItemName(value);
    const itemDescriptionHandler = (value: string) => props.setItemDescription(value);
    const cancelSubmission = () => props.setModalVisible(false);
    const submitNewItem = () => console.log('submission');

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

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Upload item photo</Text>
                    </TouchableOpacity>

                    <View style={styles.actionsContainer}>
                        <Button
                            onPress={cancelSubmission}
                            title="Cancel"
                        />
                        <Button
                            onPress={cancelSubmission}
                            title="Submit"
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
