import React from "react"
import { View, Text } from "react-native"

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: "row"}}>
                <View style={{width: "100%", height: 75, backgroundColor: "powderblue"}}>
                    <Text style={{textAlign: "center", fontSize: 18, marginTop: 75/2}}>NavBar</Text>
                </View>
            </View>
        )
    }
}