import React from 'react'
import { View, Text, Modal, StyleSheet, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


function genList(listobj, changeVisiblety) {
    return Object.keys(listobj).map((title, ind) => {
        { console.log(title) }
        return (
            <TouchableWithoutFeedback key={ind} onPress={() => {
                listobj[title]()
                changeVisiblety(false)
            }}>
                <View style={styles.listTitle}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>)
    })
}

const ModelList = ({ optionListObj, visibleOpt, changeVisiblety }) => {
    return (
        <SafeAreaView>
            <Modal visible={visibleOpt} transparent animationType='fade'>
                <View style={styles.modelbc}>
                    <View style={styles.option}>
                        <View style={styles.list}>
                            <TouchableWithoutFeedback onPress={() => changeVisiblety(false)}>
                                <View style={styles.listTitle}>
                                    <Icon name='arrow-back-sharp' size={30} color='black' style={styles.text} />
                                </View>
                            </TouchableWithoutFeedback>
                            {genList(optionListObj, changeVisiblety)}
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    modelbc: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .6)'
    },
    option: {
        position: 'absolute',
        right: 0,
        top: 0,
        minWidth: 150,
        padding: 2,
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 5
    },
    list: {
        borderRadius: 5
    },
    listTitle: {

    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        padding: 4,
    }
})

export default ModelList