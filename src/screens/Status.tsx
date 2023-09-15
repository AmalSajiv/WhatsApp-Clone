import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import STATUSDATA from '../data/StatusData'
import { FontAwesome5 } from 'react-native-vector-icons'
import { idText } from 'typescript'

const Status = () => {

  const [statusData, setStatusData] = useState(STATUSDATA)

  useEffect(() => {
    setStatusData(STATUSDATA)
  }, [])

  const combinedStatusData = [
    {
      'title': 'Recent updates', data: statusData.filter(item => item.viewed === false)
    },
    {
      'title': 'Viewed updates', data: statusData.filter(item => item.viewed === true)
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.myStatusContainer}>
        <View>
          <Image src='https://i.postimg.cc/nhWzDDPt/Whatsapp-DP-115.jpg' style={styles.image} />
        </View>
        <View>
          <Text style={styles.myStatusHeading}>My status</Text>
          <Text style={styles.myStatusSubtext}>Tap to add status update</Text>
        </View>
      </View>

      <FlatList data={combinedStatusData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <Text style={styles.viewedStatus}>{item.title}</Text>
            <FlatList data={item.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.viewedStatusContainer}>
                  <View>
                  <Image src={item.imageUrl} style={styles.image} />
                  </View>
                  <View>
                    <Text style={styles.myStatusHeading}>{item.name}</Text>
                    <Text style={styles.myStatusSubtext}>{item.time}</Text>
                  </View>
                </View>
              )}
            />
          </>
        )}
        />
        <TouchableOpacity style={styles.writeButton} onPress={() => ('#')}>
          <FontAwesome5 name='pen' size={18} color='grey' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraButton} onPress={() => ('#')}>
          <FontAwesome5 name='camera' size={18} color='white' />
        </TouchableOpacity>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    myStatusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16
    },
    myStatusHeading: {
      fontSize: 16,
      fontWeight: '600'
    }, 
    myStatusSubtext: {
      fontSize: 14,
      color: 'grey'
    },
    viewedStatus: {
      fontSize: 14,
      fontWeight: '600',
      color: 'grey',
      marginTop: 5,
      marginLeft: 16,
      marginBottom: 5
    },
    viewedStatusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12
    },
    writeButton: {
      position: 'absolute',
      bottom: 100,
      right: 28,
      backgroundColor: '#e8e8e8',
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center'
    },
    cameraButton: {
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