import {FlatList, Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import VideoPlayerComponent from '../components/VideoPlayerComponent';
import {COLORS} from '../Themes/Theme';
import CustomModels from '../Common/CustomModels';

const Data = [
  {
    id: 1,
    Title: 'sdfefw',
    subtitle: 'sdfewfwe',
    timer: '4:24',
  },
  {
    id: 2,
    Title: 'sdfefw',
    subtitle: 'sdfewfwe',
    timer: '4:24',
  },
  {
    id: 3,
    Title: 'sdfefw',
    subtitle: 'sdfewfwe',
    timer: '4:24',
  },
  {
    id: 4,
    Title: 'sdfefw',
    subtitle: 'sdfewfwe',
    timer: '4:24',
  },
  {
    id: 5,
    Title: 'sdfefw',
    subtitle: 'sdfewfwe',
    timer: '4:24',
  },
];

const TrackPlayer = () => {

    const[isVisiable,setIsVisiable]= useState(false);

    const HandlePress = (id)=>{
console.log("id",id);
setIsVisiable(true);
    }
    
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Playlist</Text>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <VideoPlayerComponent
            Id={item.id}
            Title={item.Title}
            subTitle={item.subtitle}
            timer={item.timer}
            Press={(props) => HandlePress(props)}
          />
        )}
      />
      <CustomModels isModalVisible={isVisiable} >
            <TouchableOpacity onPress={()=> setIsVisiable(!isVisiable)}>
            <Text style={styles.Header}>Playlist</Text>
            </TouchableOpacity>
      </CustomModels>
    </View>
  );
};

export default TrackPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  Header: {
    color: COLORS.black,
    fontSize: 24,
    marginTop: '5%',
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
