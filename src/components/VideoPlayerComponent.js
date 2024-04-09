import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {FlexBox} from '../Common/GlobalCSS';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS, Icons, Images} from '../Themes/Theme';

const VideoPlayerComponent = ({Id,Title, subTitle, timer,Press}) => {
  return (
    <Pressable 
    style={styles.Contaier}
    onPress={()=>Press(Id)}
    >
      <View style={styles.IconStyleContainer}>
        <Image
          source={Icons.Play}
          resizeMode="cover"
          style={styles.IconStyle}
        />
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.Title}>{Title}</Text>

        <View style={styles.TextBlock}>
          <Text style={styles.Subtitle}>{subTitle}</Text>

          <Text style={styles.Subtitle}>{timer}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default VideoPlayerComponent;

const styles = StyleSheet.create({
  Contaier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  TextBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  IconStyleContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 50,
    borderColor: COLORS.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconStyle: {
    height: 5,
    width: 5,
    tintColor: COLORS.primary,
    padding: 20,
  },
  TextContainer: {
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  Subtitle: {
    fontSize: 14,
    color: Colors.gray1,
  },
});
