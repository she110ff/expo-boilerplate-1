import React, { useState } from 'react';
import { PinCode, PinCodeT } from '@anhnch/react-native-pincode';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import { useStores } from '../../stores';
import { observer } from 'mobx-react';

const InitPinCodeScreen = observer(({ navigation }) => {
  const { pinStore } = useStores();
  return (
    <PinCode
      pin={pinStore.code}
      visible={true}
      mode={PinCodeT.Modes.Set}
      options={{
        backSpace: <Icon name='backspace' size={24} color='white' />,
        lockIcon: <Icon name='lock' size={24} color='white' />,
        retryLockDuration: 1000,
        maxAttempt: 5,
      }}
      textOptions={customTexts}
      styles={customStyles}
      onSet={(newPin) => {
        pinStore.setCode(newPin);
        pinStore.setMode(PinCodeT.Modes.Enter);
        navigation.navigate('PhoneAuth');
      }}
      onSetCancel={() => navigation.goBack()}
    />
  );
});

const customTexts = {
  enter: {
    subTitle: 'Enter PIN to access.',
  },
  set: {
    subTitle: 'Enter {{pinLength}} digits.',
  },
  locked: {
    title: 'Locked',
    subTitle: `Wrong PIN {{maxAttempt}} times.\nTemporarily locked in {{lockDuration}}.`,
  },
};

const EnterAndSet = {
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 100,
  },
  title: { fontSize: 24 },
};

const customStyles = {
  main: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 99,
    backgroundColor: 'blue',
  },
  enter: {
    ...EnterAndSet,
    buttonTextDisabled: { color: 'gray' },
  },
  set: EnterAndSet,
  locked: {
    countdown: { borderColor: 'black' },
    countdownText: { color: 'black' },
  },
  reset: {
    confirmText: { color: 'red' },
  },
};

export default InitPinCodeScreen;
