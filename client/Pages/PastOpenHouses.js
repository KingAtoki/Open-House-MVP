import React, { Component } from "react";
import CustomText from "../Components/CustomText";
import TitleClose from "../Components/TitleClose";
import { landscape, portrait } from "./Style/past-open-style.js";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { dateTranslator } from "../Assets/helper";

const { height, width } = Dimensions.get("window");
const aspectRatio = height / width;
const changeScreenOrientation = () => {
  Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
};
let styles;
if (aspectRatio > 1.6) {
  styles = portrait;
  console.log("IPHONE");
} else {
  styles = landscape;
  changeScreenOrientation();
  console.log("IPAD");
}

export default class extends Component {
  constructor() {
    super();
  }

  render() {
    const {state} = this.props.navigation
    console.log('PARAMS: ' + JSON.stringify(state.params));
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          {/*<View style={styles.logo}>*/}
          <Image source={require("../Assets/logo.png")} style={styles.logo} />
          {/*</View>*/}
        </View>
        <View style={styles.contentContainer}>
          <TitleClose
            navigation={this.props.navigation}
            nextLocation="OpenHouses"
            title="PAST OPEN HOUSE"
          />
          <View style={styles.leadsContainer}>
            <View style={styles.dateAddressContainer}>
              <View style={styles.dateAddressLeft}>
                <CustomText font="bold" style={{ color: "#454545" }}>
                  {dateTranslator(state.params.lead.date)}
                </CustomText>
                <CustomText>{state.params.lead.property.address} - {state.params.lead.guests} guests</CustomText>
              </View>
              <View style={styles.dateAddressRight}>
                <TouchableOpacity
                  style={styles.buttonContainer1}
                  underlayColor="#fff"
                >
                  <CustomText style={styles.buttonText} font="bold">
                    RELAUNCH
                  </CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonContainer2}
                  underlayColor="#89C541"
                  onPress={
                    () => {this.props.navigation.navigate('OpenHouses')}}
                >
                  <CustomText style={styles.buttonText} font="bold">
                    EXPORT
                  </CustomText>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.labelContainer}>
              <CustomText style={styles.label} font="bold">
                NAME
              </CustomText>
              <CustomText style={styles.label} font="bold">
                EMAIL
              </CustomText>
              <CustomText style={styles.label} font="bold">
                PHONE
              </CustomText>
              <CustomText style={styles.label} font="bold">
                AGENT
              </CustomText>
              <CustomText style={styles.label} font="bold">
                SOURCE
              </CustomText>
            </View>
            <FlatList
              style={{ height: "100%" }}
              data={state.params.lead.leads}
              renderItem={({ item }) => (
                <View style={styles.leadContainer}>
                  <CustomText style={styles.lead}>
                    {item.name}
                  </CustomText>
                  <CustomText style={styles.lead}>
                    {item.email}
                  </CustomText>
                  <CustomText style={styles.lead}>
                    {item.phone}
                  </CustomText>
                  <CustomText style={styles.lead}>
                    {item.agent}
                  </CustomText>
                  <CustomText style={styles.lead}>
                    {item.source}
                  </CustomText>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

const list = [
  {
    name: "Dash Rendar",
    email: "dash.rendar@gmail.com",
    phone: "(555) 123-4567",
    agent: "Clark Kent",
    source: "Google"
  },
  {
    name: "Dash Rendar",
    email: "dash.rendar@gmail.com",
    phone: "(555) 123-4567",
    agent: "Clark Kent",
    source: "Google"
  },
  {
    name: "Dash Rendar",
    email: "dash.rendar@gmail.com",
    phone: "(555) 123-4567",
    agent: "Clark Kent",
    source: "Google"
  },
  {
    name: "Dash Rendar",
    email: "dash.rendar@gmail.com",
    phone: "(555) 123-4567",
    agent: "Clark Kent",
    source: "Google"
  },
]