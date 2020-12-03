import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './components/Styles';
import ScreenView from './Screen/Screen.js';
import SearchBar from './components/SearchBar';
import BlockCard from './components/CardNews';
import FeaturedNews from './components/FeaturedNews';
import SmallCard from './components/SmallCard';
import BreakingNews from './components/BreakingNews';
import TechNews from './components/TechNews';

import data from './components/DataDummy';
 /*
<NavigationContainer><MainPayment/>
  </NavigationContainer>
  <LoginScreen/>
      <LoginScreen/>
     <NavigationContainer>
      <MainStackMenu/>
</NavigationContainer>

      */


const App = () => {  
   const breakingNewss = data.filter(item => item.category === 'breaking-news');
   const techNewss = data.filter(item =>item.category === 'tech');
   return (
      <ScreenView>
         <SearchBar />
         <FeaturedNews item={{
               id: '7',
               title: 'This is the title no seven.',
               desc:
                 'Desc is the short form of description and this format is the actual same as our real database.',
               thumbnail: 'http://lorempixel.com/400/200/',
         }}/>
         <BreakingNews data={breakingNewss}/>
         <TechNews data={techNewss}/>
      </ScreenView>
      
   );
}

export default App;