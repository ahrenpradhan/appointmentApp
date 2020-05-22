import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Button,
  Form,
  Icon,
  Text,
  Picker,
  Body,
} from "native-base";
import { getEventDetails, getBookingDetails } from "../helper/apiCalls";
import Event from "./event";
import CreateEvent from "./createEvent";

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0",
      selectedEvent: null,
      mode: "View Mode",
      result: [],
      booking: [],
    };
  }
  componentDidMount() {
    getEventDetails().then((result) => {
      this.setState({ result });
      this.onValueChange(result[0].id);
    });
  }
  onValueChange(value) {
    const t = this.state.result.filter((e) => e.id == value);
    getBookingDetails(value).then((booking) => {
      console.log(booking);
      this.setState({ booking, selected: value, selectedEvent: t[0] });
    });
  }
  render() {
    return (
      <View style={{ backgroundColor: "green", width: "100%", height: "100%" }}>
        <Container>
          <Header>
            <Body>
              <Button
                onPress={() => {
                  this.setState((prev) => ({
                    mode:
                      prev.mode == "View Mode" ? "Create Mode" : "View Mode",
                  }));
                }}
                light
                textStyle={{textAlign:"center"}}
                style={{ width: 130, backgroundColor:"transparent", borderRadius:5, borderWidth:1, borderColor:"black", height:38 }}              
              >
                <Text>{this.state.mode}</Text>
              </Button>
            </Body>
            {this.state.mode == "View Mode" && (
              <Form
                style={{
                  marginVertical: 4,
                  marginHorizontal: 4,
                  borderWidth: 1,
                }}
              >
                <Picker
                  iosIcon={<Icon name="arrow-down" />}
                  textStyle={{ width: 200, overflow: "visible" }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Create an Event" value="key0" />
                  {this.state.result.length > 0 &&
                    this.state.result
                      .filter((e) => e.Name != "string")
                      .map(function (item, i) {
                        return (
                          <Picker.Item label={item.Name} value={item.id} />
                        );
                      })
                      .reverse()}
                </Picker>
              </Form>
            )}
          </Header>
          {
              this.state.mode=="Create Mode" && <CreateEvent />
          }
          {this.state.mode=="View Mode" && this.state.selected != "key0" && (
            <Event
              eventData={this.state.selectedEvent}
              booking={this.state.booking}
            />
          )}
        </Container>
      </View>
    );
  }
}
