/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native";

export default class HomeActivity extends Component {
  render() {

    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 9) / 16);
    let imageWidth = dimensions.width;
    let screenHeight = Math.round(Dimensions.get('window').height);
    let screenWidth = Math.round(Dimensions.get('window').width);
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
              style={{ height: screenHeight -100  ,  
              margin: 25,
              backgroundColor : '#21435C',
              width: screenWidth + 70,
              borderRadius: 20,  }}>
            <View style={styles.content}>
              <Image
                style={styles.imageWaterDrop}
                source={require("./img/drop.png")}
              />
              <Text style={styles.logoWaterText}>
                Clean Water
              </Text>
              <Image
                style={{ height: imageHeight, width: imageWidth }}
                style={styles.imageFamily}
                source={require("./img/FamilyPic.png")}
              />
              <Text style={styles.powerByText}>
                Powered by Cent to Change
              </Text>
              <Image 
                source={require("./img/hand.png")} 
                style={styles.imageHand}
              />
              <Text style={styles.descriptionText}>
                Help families living in Baseco, Tondo to have access to safe and clean drinking water.
              </Text>
              <View  style={{flexDirection:  "row", justifyContent: "center" ,alignItems:"center", padding: 10}}>
              <Text style={styles.counter}>
                3
              </Text>
              <Image
                style={{ height: 45, width: 45 }}
                source={require("./img/humanicon.png")}
              />
              <View style={styles.progressBar}></View>
              </View>
              <View style={styles.remainingBar}></View>
              <Text style={styles.remaining}>
                P100.23 left to help one more family.
              </Text>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>
                  Give Water
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
              style={{ height: screenHeight -100  ,  
              margin: 25,
              backgroundColor : '#21435C',
              width: screenWidth + 70,
              borderRadius: 20,  }}>
            <View style={styles.content}>
              <Image
                style={styles.imageWaterDrop}
                source={require("./img/drop.png")}
              />
              <Text style={styles.logoWaterText}>
                Clean Water
              </Text>
              <Image
                style={{ height: imageHeight, width: imageWidth }}
                style={styles.imageFamily}
                source={require("./img/FamilyPic.png")}
              />
              <Text style={styles.powerByText}>
                Powered by Cent to Change
              </Text>
              <Image 
                source={require("./img/hand.png")} 
                style={styles.imageHand}
              />
              <Text style={styles.descriptionText}>
                Help families living in Baseco, Tondo to have access to safe and clean drinking water.
              </Text>
              <View  style={{flexDirection:  "row", justifyContent: "center" ,alignItems:"center", padding: 10}}>
              <Text style={styles.counter}>
                3
              </Text>
              <Image
                style={{ height: 45, width: 45 }}
                source={require("./img/humanicon.png")}
              />
              <View style={styles.progressBar}></View>
              </View>
              <View style={styles.remainingBar}></View>
              <Text style={styles.remaining}>
                P100.23 left to help one more family.
              </Text>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>
                  Give Water
                </Text>
              </TouchableOpacity>
            </View>
          </View><View
              style={{ height: screenHeight -100  ,  
              margin: 25,
              backgroundColor : '#21435C',
              width: screenWidth + 70,
              borderRadius: 20,  }}>
            <View style={styles.content}>
              <Image
                style={styles.imageWaterDrop}
                source={require("./img/drop.png")}
              />
              <Text style={styles.logoWaterText}>
                Clean Water
              </Text>
              <Image
                style={{ height: imageHeight, width: imageWidth }}
                style={styles.imageFamily}
                source={require("./img/FamilyPic.png")}
              />
              <Text style={styles.powerByText}>
                Powered by Cent to Change
              </Text>
              <Image 
                source={require("./img/hand.png")} 
                style={styles.imageHand}
              />
              <Text style={styles.descriptionText}>
                Help families living in Baseco, Tondo to have access to safe and clean drinking water.
              </Text>
              <View  style={{flexDirection:  "row", justifyContent: "center" ,alignItems:"center", padding: 10}}>
              <Text style={styles.counter}>
                3
              </Text>
              <Image
                style={{ height: 45, width: 45 }}
                source={require("./img/humanicon.png")}
              />
              <View style={styles.progressBar}></View>
              </View>
              <View style={styles.remainingBar}></View>
              <Text style={styles.remaining}>
                P100.23 left to help one more family.
              </Text>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>
                  Give Water
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#4398AB',
    flex : 1,
  },
  content: {
    margin: 10,
    backgroundColor : '#112A3B',
    borderRadius: 20,
  },
  imageFamily: {
   borderTopLeftRadius: 20,
   borderTopRightRadius: 20,
   zIndex: -1
  },
  imageWaterDrop: {
    position: "absolute",
    marginTop: 5,
    marginLeft: 15,
  },
  logoWaterText: {
    position: "absolute",
    marginTop: 5,
    marginLeft: 40,
    fontSize: 16,
    color: '#00C9D0',
  },
  powerByText: {
    position: "absolute",
    marginTop: 190,
    marginLeft: 150,
    fontSize: 12,
    color: '#0ACBDC',
    backgroundColor: '#0A1819',
    padding: 5,
    borderRadius: 20,
    fontStyle: 'italic',
    opacity: 0.9
  },
  imageHand: {
    borderRadius: 10,
    position: "absolute",
    marginTop: 185,
    marginLeft: 350,
    height: 40, 
    width: 40
   },
  descriptionText: {
    fontSize: 18,
    textAlign: "left",
    color: 'white',
    padding: 20,
  },
  counter: {
    padding: 5,
    fontSize: 20,
    color: '#FFEA81',
  },
  progressBar: {
    height: 30,
    width: '75%',
    backgroundColor: '#FFEA81',
    borderRadius: 20
  },
  remainingBar: {
    position: "absolute",
    marginLeft: 280,
    marginTop: 377,
    height: 30,
    width: '25%',
    backgroundColor: '#8A8051',
    borderColor: '#FFEA81',
    borderWidth: 3,
    borderLeftColor: '#FFEA81',
    borderRadius: 20
  },
  remaining: {
    fontSize: 16,
    textAlign: "center",
    color: '#FFEA81',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 20,
    padding: 10,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 25,
    marginBottom: 10,
    backgroundColor: '#00C9D0',
    borderRadius: 50,
    width: 325
  },
  footer: {
    height: 40,
    backgroundColor : '#112A3B',
  },
});