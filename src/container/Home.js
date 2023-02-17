/* eslint-disable prettier/prettier */

import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Renderer from "../helpers/renderer";

const BoxConfig = [
    {
        component: "stack",
        children: [
            {
                component: "box",
                children: [
                    {
                        component: "center",
                        children: [{
                            component: "text",
                            children: "Hello There",
                            props: {
                                style: {
                                    color: 'white'
                                },
                                fontSize: "3xl" //Native Base styling
                            }

                        }]
                    },
                ],
                props: {
                    style: {
                        height: 100,
                        padding: 16,
                        backgroundColor: 'gray',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 16
                    }
                }
            }
        ],
        props: {
            style: {
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }

    }
];

const HomeScreen = () => {
    return (
        <SafeAreaView>
            {BoxConfig.map(config => Renderer(config))}
        </SafeAreaView >
    );
};

export default HomeScreen;

