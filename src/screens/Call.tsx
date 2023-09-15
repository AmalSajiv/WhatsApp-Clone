import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons, Fontisto, MaterialIcons } from 'react-native-vector-icons'
import CALLDATA from '../data/CallData'

const Call = () => {

  const [callData, setCallData] =useState(CALLDATA)

  useEffect(() => {
    setCallData(CALLDATA)
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.callContainer}>
          <View style={styles.linkContainer}>
            <Fontisto name='link' size={22} color='white' />
          </View>
          <View>
            <Text style={styles.callLink}>Create a call link</Text>
            <Text style={styles.callSubtext}>Share a link for your whatsApp call</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.recentText}>Recent</Text>
      <FlatList data={callData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.callContainer}>
            <Image src={item.imageUrl} style={styles.image} />
            <View style={styles.callIconContainer}>
              <View>
                <Text  style={styles.callName}>{item.name}</Text>
                <View style={styles.callDetails}>
                  <MaterialCommunityIcons name='call-received' size={15} color='#075e54' />
                  <Text  style={styles.callTime}>{item.time}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <MaterialIcons name='call' size={22} color='#075e54' />
            </TouchableOpacity>
          </View>
        )}
       />
       <TouchableOpacity style={styles.callButton} onPress={() => ('#')}>
          <MaterialIcons name='add-call' size={22} color='white' />
        </TouchableOpacity>
    </View>
  )
}

export default Call

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    callContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: 16
    },
    linkContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#128c7e',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16
    },
    callLink: {
      fontSize: 16,
      fontWeight: '600'
    },
    callSubtext: {
      fontSize: 16,
      color: 'grey'
    },
    recentText: {
      fontSize: 16,
      fontWeight: '600',
      color: 'grey',
      marginVertical: 10,
      marginLeft: 16
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16
    }, 
    callIconContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      flex: 1
    }, 
    callName: {
      fontSize: 16,
      fontWeight: '600'
    }, 
    callDetails: {
      alignItems: 'center',
      flexDirection: 'row',
    }, 
    callTime: { 
      fontSize: 14,
      color: 'grey',
      marginLeft: 5
    },
    callButton: {
      position: 'absolute',
      bottom: 30,
      right: 20,
      backgroundColor: '#0e806a',
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });