import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,  View, ScrollView, Image,  TouchableOpacity } from 'react-native';

export default function Profile() {
  return (
    <View> 
     <ScrollView>
       <View style={{width:'100%',backgroundColor:'#ffffff',height:150,padding:10,}}>
            
       </View>
    <View style ={{alignContent:'center',marginLeft:20,}} >
       <Image source = {require('../assets/profile.png')}  style = {{width:140,height:140,borderRadius:100,marginTop:-70}}/>
       <Text style={{fontSize:25,fontWeight:'bold',padding:10}}>Full Name</Text>
       <Text style={{fontSize:15,fontWeight:'bold',color:'grey', marginLeft:10}}>20, Student</Text>
    </View>
    <View  style ={{alignSelf:'center'
                      ,flexDirection:'row',
                      justifyContent:'center',
                      backgroundColor:'#fff'
                      ,width:'90%',
                      padding:20,
                      paddingBottom:22,
                      borderRadus:10,
                      shadowOpacity:80,
                      elevation:15,
                      marginTop:20
            }} > 
      <Image source = {require('../assets/lock.png')}  style = {{width:20,height:20}}/>
      <Text style={{fontSize:15,color:'#818181',fontWeight:'bold'}}>Work Place </Text>
    </View>
    <View  style ={{alignSelf:'center'
                      ,flexDirection:'row',
                      justifyContent:'center',
                      backgroundColor:'#fff'
                      ,width:'90%',
                      padding:20,
                      paddingBottom:22,
                      borderRadus:10,
                      shadowOpacity:80,
                      elevation:15,
                      marginTop:20
            }} > 
      <Image source = {require('../assets/user.png')}  style = {{width:20,height:20}}/>
      <Text style={{ fontSize:15,color:'#818181',fontWeight:'bold'}}>Home Adresse </Text>
    </View>
        <TouchableOpacity  style ={{alignSelf:'center'
                      ,flexDirection:'row',
                      justifyContent:'center',
                      backgroundColor:'#1FB2AC'
                      ,width:'90%',
                      padding:20,
                      paddingBottom:22,
                      borderRadus:10,
                      shadowOpacity:80,
                      elevation:15,
                      marginTop:20,
                      marginBottom:40
            }} > 
      <Text style={{fontSize:15,color:'#fff',fontWeight:'bold'}}>EXIT</Text>
        </TouchableOpacity>
     </ScrollView>  
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});