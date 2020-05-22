import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  DatePicker,
  Form,
  Content,
  Item,
  Label,
  Input,
  Textarea,
  Icon,
  Text,
  Picker,
  Body,
} from "native-base";

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StartDate: new Date(),
      EndDate: new Date(),
      selected2: undefined
    };
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
  }
  setStartDate(StartDate) {
    this.setState({ StartDate });
  }
  setEndDate(EndDate) {
    this.setState({ EndDate });
  }
  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Event Name</Label>
              <Input placeholder="name" />
            </Item>
            <Item fixedLabel>
              <Label>Start Date</Label>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date()}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select start date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setStartDate}
                disabled={false}
              />
            </Item>
            <Item fixedLabel>
              <Label>End Date</Label>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date()}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select end date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setEndDate}
                disabled={false}
              />
            </Item>
            <Text>TimeZone</Text>
            <Item fixedLabel>
              <Label>Start Time</Label>
              <Input placeholder="Start Time" />
            </Item>
            <Item fixedLabel>
              <Label>End Time</Label>
              <Input placeholder="End Time" />
            </Item>
            <Item fixedLabel>
              <Label>Event Duration</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Event Duration"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Event Duration" value="key0" />
                <Picker.Item label="15 mins" value="key1" />
                <Picker.Item label="30 mins" value="key2" />
                <Picker.Item label="45 mins" value="key3" />
                <Picker.Item label="60 mins" value="key4" />
              </Picker>
            </Item>
            <Item >
                <Label>Description</Label>
                <Textarea style={{marginLeft:35 ,flex:1}} rowSpan={5} bordered placeholder="Textarea" />
            </Item>
            <Item fixedLabel>
              <Label>Event Type</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Event Type"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Event Duration" value="key0" />
                <Picker.Item label="15 mins" value="key1" />
                <Picker.Item label="30 mins" value="key2" />
                <Picker.Item label="45 mins" value="key3" />
                <Picker.Item label="60 mins" value="key4" />
              </Picker>
            </Item>
            <Item fixedLabel last>
                <Label>Max Invitee Count</Label>
                <Input placeholder="Max Invitee Count" />
            </Item>
          </Form>
          <View style={{width:"100%", display:"flex", justifyContent:"space-between"}}>
                <View>
                    <Button style={{width:100}}><Text>Submit</Text></Button>    
                </View>
                <View>
                    <Button style={{width:100}}><Text>Submit</Text></Button>    
                </View>
          </View>
        </Content>
      </Container>
    );
  }
}
