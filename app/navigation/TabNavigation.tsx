import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from 'Themes/style';
import { Home, FlightList, Info } from 'Screens';
import { SimpleLineIcons, EntypoIcon } from 'Assets/icons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    switch (route.name) {
                        case 'Home':
                            return <EntypoIcon name="home" color={color} size={size} />;
                        case 'Flights':
                            return <SimpleLineIcons name="plane" color={color} size={size} />;
                        case 'Info':
                            return <SimpleLineIcons name="info" color={color} size={size} />
                    }
                },
                tabBarActiveTintColor: COLORS.PRIMARY_COLOR,
                tabBarInactiveTintColor: COLORS.DISABLE,
                headerShown: false,
                tabBarItemStyle: { backgroundColor: COLORS.BLACK }
            })
            }
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Flights" component={FlightList} />
            <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator>
    );
}

export default TabNavigation;