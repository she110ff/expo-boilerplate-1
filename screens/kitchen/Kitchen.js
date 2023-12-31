import React, { useState } from 'react';
import {
  AddIcon,
  Box,
  Button,
  ButtonIcon,
  VStack,
  Heading,
  Text,
  ButtonText,
} from '@gluestack-ui/themed';
import BiometricAuthScreen from './BiometricAuthScreen';
import HandelAuthentication from './HandelAuthentication';
import ModalScreen from './ModalScreen';
import { PinCodeT } from '@anhnch/react-native-pincode';
import { useStores } from '../../stores';
import { AUTH_STATE } from '../../stores/user.store';
import { autorun } from 'mobx';
import { observer } from 'mobx-react';

// export default function Kitchen({ navigation }) {
const Kitchen = observer(({ navigation }) => {
  const { pinStore, userStore } = useStores();
  function initAuth() {
    console.log('initAuth');
    userStore.setAuthState(AUTH_STATE.INIT);
    console.log('userStore :', userStore);
  }

  function goToAuthScreen(nextScreen) {
    console.log('goToAuthScreen');
    pinStore.setMode('enter');
    pinStore.setSuccessEnter(false);
    pinStore.setNextScreen(nextScreen);
    pinStore.setNeedPinCode(true);
  }
  //
  // autorun(() => {
  //   if (!pinStore.needPinCode) {
  //     if (pinStore.successEnter) navigation.navigate(pinStore.nextScreen);
  //   }
  // });

  return (
    <Box flex={1} justifyContent='center' bg='$primary950'>
      <VStack p='$12' reversed={false}>
        <Box space='md'>
          <Heading mb='$4' color='white'>
            Sign in form using formik -:
          </Heading>
          <Button my='$2' onPress={() => navigation.navigate('Temp')}>
            <ButtonText>Go to Temp </ButtonText>
            <ButtonIcon as={AddIcon} />
          </Button>
          <Button my='$2' onPress={() => navigation.navigate('Detail')}>
            <ButtonText>Go to Detail </ButtonText>
            <ButtonIcon as={AddIcon} />
          </Button>

          <Button my='$2' onPress={() => goToAuthScreen('About')}>
            <ButtonText>Go to PinCode </ButtonText>
            <ButtonIcon as={AddIcon} />
          </Button>
          <Button
            my='$2'
            size='md'
            variant='solid'
            action='primary'
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => navigation.navigate('SignIn')}>
            <ButtonText>Go to SignIn </ButtonText>
            <ButtonIcon as={AddIcon} />
          </Button>
          <Button
            my='$2'
            size='md'
            variant='solid'
            action='primary'
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => navigation.navigate('BiometricAuthScreen')}>
            <ButtonText>Go to Biometric AuthScreen </ButtonText>
            <ButtonIcon as={AddIcon} />
          </Button>
          <Button
            my='$2'
            size='md'
            variant='solid'
            action='primary'
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => navigation.navigate('HandelAuthentication')}>
            <ButtonText>Go to Handle Authentication </ButtonText>
            <ButtonIcon as={AddIcon} />
          </Button>
          <Button
            my='$2'
            size='md'
            variant='solid'
            action='primary'
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => navigation.navigate('ModalScreen')}>
            <ButtonText>Go to ModalScreen </ButtonText>
            <ButtonIcon as={AddIcon} />
          </Button>

          <Button
            my='$2'
            size='md'
            variant='solid'
            action='primary'
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => initAuth()}>
            <ButtonText>Reset Init State </ButtonText>
            <ButtonIcon as={AddIcon} />
          </Button>
        </Box>
      </VStack>
    </Box>
  );
});

export default Kitchen;
