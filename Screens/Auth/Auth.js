import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { PSScreen, PSButton } from '../../Components'
import { Images, strings } from '../../Assets'
import { Types } from '../../Utils'
import { Login, Signup } from './Containers'
import styles from './Auth.styles'

const tabs = Object.freeze({
    LOGIN: 'LOGIN',
    SIGNUP: 'SIGNUP'
})

const selectActiveTab = (tab, setActiveTab) => {
    setActiveTab(tab)
}

export default function Auth ({ navigation }) {
    const [activeTab, setActiveTab] = useState(tabs.LOGIN)
    return (
        <PSScreen containerStyle={styles.container}>
            <Image
                source={Images.logo}
                style={styles.logo}
            />
            <View style={styles.buttonsContainer}>
                <PSButton
                    text={strings.authLoginTab}
                    type={activeTab === tabs.LOGIN ?  Types.BUTTON_TYPES.PRIMARY : Types.BUTTON_TYPES.SECONDARY}
                    onPress={activeTab === tabs.LOGIN ? null : () => selectActiveTab(tabs.LOGIN, setActiveTab)}
                    style={styles.tab}
                    textStyle={styles.tabText}
                />
                <PSButton
                    text={strings.authSignupTab}
                    type={activeTab === tabs.SIGNUP ?  Types.BUTTON_TYPES.PRIMARY : Types.BUTTON_TYPES.SECONDARY}
                    onPress={activeTab === tabs.SIGNUP ? null : () => selectActiveTab(tabs.SIGNUP, setActiveTab)}
                    style={styles.tab}
                    textStyle={styles.tabText}
                />
            </View>
            {activeTab === tabs.LOGIN && <Login navigation={navigation} />}
            {activeTab === tabs.SIGNUP && <Signup navigation={navigation} />}
        </PSScreen>
    )
}
