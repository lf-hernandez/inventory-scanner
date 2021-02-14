import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CameraScanner from '../screens/CameraScanner/CameraScanner';
import ExternalScanner from '../screens/ExternalScanner/ExternalScanner';
import Search from '../screens/Search/Search';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <Navigator
            initialRouteName="ScanGun"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, showLabel: false }}
        >
            <Screen
                name="Camera"
                component={CameraScannerScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-camera" color={color} />,
                }}
            />
            <Screen
                name="ScanGun"
                component={ScanGunScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-barcode" color={color} />,
                }}
            />
            <Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
                }}
            />
        </Navigator>
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

const SearchStack = createStackNavigator<TabThreeParamList>();

function SearchScreen() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="SearchScreen" component={Search} options={{ headerTitle: 'Search' }} />
        </SearchStack.Navigator>
    );
}

//NEW SEARCH STACK NAVIGATOR
//SEARCH SCREENS (2X SCREEN --- SEARCH SCREEN /// SEARCH RESULT SCREEN)
//ADD SEARCH TO BOTTOM TAB NAVIGATION
