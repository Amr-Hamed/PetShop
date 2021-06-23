import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { PSInput, PSButton, PSLoadingOverlay } from '../../../../Components'
import { strings, icons } from '../../../../Assets'
import styles from './Signup.styles'
import { Types, SCREENS } from '../../../../Utils'

const INPUT_LENGTH = 1

const checkIfInputsAreValid = (phone, name, email, password, confirmPassword, setAreInputsValid) => {
    if(phone.length >= INPUT_LENGTH
        && name.length >= INPUT_LENGTH
        && email.length >= INPUT_LENGTH
        && password.length >= INPUT_LENGTH
        && confirmPassword.length >= INPUT_LENGTH
    ) {
        setAreInputsValid(true)
    }else {
        setAreInputsValid(false)
    }
}

const onSignupPress = (phone, name, email, password, confirmPassword, setIsLoading, navigation) => {
    setIsLoading(true)
    setTimeout( () => {
        setIsLoading(false)
        navigation.push(SCREENS.Home)
    }
    , 3000)
}

export default function Signup({ navigation }) {
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [areInputsValid, setAreInputsValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        checkIfInputsAreValid(phone, name, email, password, confirmPassword, setAreInputsValid)
    }, [
        phone,
        name,
        email,
        password,
        confirmPassword
     ])

    return (
        <View style={styles.container}>
            <PSInput
                value={phone}
                leftIconName={icons.signupTabPhoneNumberInput}
                placeholder={strings.signupTabPhoneInput}
                onChange={phone => setPhone(phone)}
            />
             <PSInput
                value={name}
                leftIconName={icons.signupTabNameInput}
                placeholder={strings.signupTabNameInput}
                onChange={name => setName(name)}
                containerStyle={styles.inputContainer}
            />
            <PSInput
                value={email}
                leftIconName={icons.signupTabEmailInput}
                placeholder={strings.signupTabEmailInput}
                onChange={email => setEmail(email)}
                containerStyle={styles.inputContainer}
            />
             <PSInput
                value={password}
                leftIconName={icons.signupTabPasswordInputLeft}
                placeholder={strings.signupTabPasswordInput}
                onChange={password => setPassword(password)}
                withRightIcon
                containerStyle={styles.inputContainer}
                type={Types.INPUT_TYPES.PASSWORD}
            />
             <PSInput
                value={confirmPassword}
                leftIconName={icons.signupTabConfirmPasswordInputLeft}
                placeholder={strings.signupTabConfirmPasswordInput}
                onChange={confirmPassword => setConfirmPassword(confirmPassword)}
                withRightIcon
                containerStyle={styles.inputContainer}
                type={Types.INPUT_TYPES.PASSWORD}

            />
            <PSButton
                text={strings.signupTabButton}
                style={styles.signupButton}
                textStyle={styles.signupButtonText}
                disabled={!areInputsValid}
                onPress={() => onSignupPress(phone, name, email, password, confirmPassword, setIsLoading, navigation)}
            />
            {isLoading && <PSLoadingOverlay /> }
        </View>
    )
}
