import React from 'react'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import NavigationService from './navigation/NavigationService'
import SignIn from './screens/signin/SignIn'
import CompanyPin from './screens/company-pin/CompanyPin'
import Home from './screens/home/Home'
import Page from './screens/page/Page'
import Company from './screens/company/Company'
import ViewMap from './screens/view-map/ViewMap'
import ViewSocial from './screens/view-social/ViewSocial'


console.disableYellowBox = true;


const MainStack = createStackNavigator(
    {
        
        SignIn:{screen:SignIn},
        CompanyPin:{screen:CompanyPin},
        Home:{screen:Home},
        Page:{screen:Page},
        Company:{screen:Company},
        ViewMap:{screen:ViewMap},
        ViewSocial:{screen:ViewSocial}
    
       
    },
    {
        defaultNavigationOptions:({navigation})=>{
            return{
                headerShown:false
            }
        }
    },
    // {
  //     drawerWidth: Dimensions.deviceWidth*0.5,
  //     contentComponent: Menu
  //   }
)

const RootStack = createDrawerNavigator(
    {
        MainStack:{
            screen:MainStack,
               // defaultNavigationOptions:{
          //     drawerLockMode: 'locked-open',
          // }
        }
    }
)

const AppMain =()=>{
    const Apps = createAppContainer(RootStack);
    return (
        <Apps
         ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
    )
}

export default AppMain