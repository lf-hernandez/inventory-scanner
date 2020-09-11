import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CameraScanner from '../screens/CameraScanner/CameraScanner';
import ExternalScanner from '../screens/ExternalScanner/ExternalScanner';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Camera"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, showLabel: false }}
        >
            <BottomTab.Screen
                name="Camera"
                component={CameraScannerScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-camera" color={color} />
                }}
            />
            <BottomTab.Screen
                name="ScanGun"
                component={ScanGunScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-barcode" color={color} />
                }}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const CameraScannerStack = createStackNavigator<TabOneParamList>();

function CameraScannerScreen() {
    return (
        <CameraScannerStack.Navigator>
            <CameraScannerStack.Screen
                name="CameraScannerScreen"
                component={CameraScanner}
                options={{ headerTitle: 'Camera Scanner' }}
            />
        </CameraScannerStack.Navigator>
    );
}

const ScanGunStack = createStackNavigator<TabTwoParamList>();

function ScanGunScreen() {
    return (
        <ScanGunStack.Navigator>
            <ScanGunStack.Screen
                name="ScanGunScreen"
                component={ExternalScanner}
                options={{ headerTitle: 'Scan Gun' }}
            />
        </ScanGunStack.Navigator>
    );
}
