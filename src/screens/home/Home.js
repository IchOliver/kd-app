import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Colors from '../../constants/color'
import {Icon} from 'native-base'
import Event from '../event/Event'
import Stand from '../stand/Stand';
import Information from '../information/Information';
import Setting from '../setting/Setting';


const Home = createBottomTabNavigator(
    {
       event:{
           screen:Event,
           navigationOptions:()=>({
               title:'Event',
               tabBarIcon:({tintColor})=><View>
                  <Icon type="Entypo" name="home" style={{fontSize:20,color:tintColor}}/>
               </View>
           })
       },
       stand:{
        screen:Stand,
        navigationOptions:()=>({
            title:'Stand',
            tabBarIcon:({tintColor})=><View>
               <Icon type="FontAwesome" name="th-large" style={{fontSize:20,color:tintColor}}/>
            </View>
        })
       },
       information:{
           screen:Information,
           navigationOptions:()=>({
               title:'Information',
               tabBarIcon:({tintColor})=><View>
                  <Icon type="AntDesign" name="clockcircle" style={{fontSize:20,color:tintColor}}/>
               </View>
           })
       },
       setting:{
           screen:Setting,
           navigationOptions:()=>({
            title:'Setting',
            tabBarIcon:({tintColor})=><View>
                 <Icon type="MaterialIcons" name="settings" style={{fontSize:22,color:tintColor}}/>
            </View>
           })
       }

    },
    {
        defaultNavigationOptions: props => {

            return {
                tabBarOptions: {
                    style: {
                        height: 50,
                        elevation: 0,
                      
                    },
                    activeTintColor: Colors.Blue,
                    inactiveTintColor: 'grey',
                },
            };
        },
    }
    
)

export default Home;
