import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import { PSInput, PSButton, PSLoadingOverlay } from '../../../../Components'
import { strings, icons } from '../../../../Assets'
import { Types, SCREENS } from '../../../../Utils'
import styles from './Login.style'

const INPUT_LENGTH = 1

const checkIfInputsAreValid = (phone, password, setAreInputsValid) => {
    if(phone.length >= INPUT_LENGTH && password.length >= INPUT_LENGTH){
        setAreInputsValid(true)
    }else {
        setAreInputsValid(false)
    }
}

const onLoginPress = (phone, password, setIsLoading, navigation) => {
    setIsLoading(true)
    setTimeout( () => {
        setIsLoading(false)
        navigation.push(SCREENS.Home)
    }
    , 3000)
}

export default function Login ({ navigation }) {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [areInputsValid, setAreInputsValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () => {
        checkIfInputsAreValid(phone, password, setAreInputsValid)
    })

    return (
        <View style={styles.container}>
            <PSInput
                value={phone}
                leftIconName={icons.loginTabPhoneNumberInput}
                placeholder={strings.loginTabPhoneInput}
                onChange={phone => setPhone(phone)}
            />
            <PSInput
                value={password}
                leftIconName={icons.loginTabPasswordInputLeft}
                placeholder={strings.loginTabPasswordInput}
                type={Types.INPUT_TYPES.PASSWORD}
                withRightIcon
                containerStyle={styles.passwordContainer}
                onChange={password => setPassword(password)}
            />
            <PSButton
                text={strings.loginTabButton}
                style={styles.loginButton}
                textStyle={styles.loginButtonText}
                // disabled={!areInputsValid}
                onPress={() => onLoginPress(phone, password, setIsLoading, navigation)}
            />
            {isLoading && <PSLoadingOverlay navigation={navigation} /> }
        </View>
    )
}
