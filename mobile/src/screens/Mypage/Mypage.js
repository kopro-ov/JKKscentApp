import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//ThirdParty
import AsyncStorage from '@react-native-community/async-storage';

//Redux
import {updateUser} from '@modules/actions/userActions';
import {useDispatch} from 'react-redux';

function Mypage() {

  const dispatch = useDispatch();

  const _onPressLogout = () => {
    AsyncStorage.removeItem('data');
    dispatch(updateUser(null));
  };


  return (
    <View>
      <Text>Mypage</Text>
      <TouchableOpacity
        onPress={() => {
          _onPressLogout();
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>      
    </View>
  );
}

export default Mypage;
