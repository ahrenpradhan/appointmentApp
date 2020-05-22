import React, { Component } from "react";
import {
  Container,
  Header,
  Text,
  Icon,
  View,
  Tab,
  TabHeading,
  Tabs,
  List,
  ListItem,
} from "native-base";
import { Col, Row } from 'react-native-easy-grid';
import { ScrollView } from "react-native";

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
        booking : false,
    };
  }
  render() {
    // console.log(this.props.eventData)
    return (
      <Container style={{marginTop:4}}>
        <Header hasTabs style={{backgroundColor:"white", height:5, marginBottom:-20, padding:0}}/>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Event Details</Text></TabHeading>}>
            <ScrollView>
                <Row style={{paddingHorizontal:16,height:70 ,marginTop:16}}>
                    <Col style={{width:"30%"}}><Text>Id : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{this.props.eventData.id}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"30%"}}><Text>Name : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{this.props.eventData.Name}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"30%"}}><Text>Description : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{this.props.eventData.Description}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"30%"}}><Text>Start Date : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{new Date(this.props.eventData.StartDate).toLocaleDateString()}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"30%"}}><Text>End Date : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{new Date(this.props.eventData.EndDate).toLocaleDateString()}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"30%"}}><Text>Start Time : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{this.props.eventData.StartTime}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"30%"}}><Text>End Time : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{this.props.eventData.EndTime}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"30%"}}><Text>Timezone : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{this.props.eventData.Timezone}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"30%"}}><Text>Duration : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{this.props.eventData.Duration}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"30%"}}><Text>Event Type : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{this.props.eventData.Type}</Text></ScrollView></Col>
                </Row>
                {
                    this.props.eventData.Type!="One-to-One" &&
                    <Row style={{paddingHorizontal:16,height:70}}>
                        <Col style={{width:"30%"}}><Text>Max Invitee Count : </Text></Col>
                        <Col style={{width:"70%"}}><ScrollView><Text>{this.props.eventData.MaxInviteeCount}</Text></ScrollView></Col>
                    </Row>
                }
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"30%"}}><Text>Location Type : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{this.props.eventData.LocationType}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"30%"}}><Text>Organizer : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{this.props.eventData.Organizer}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"30%"}}><Text>Manager Email : </Text></Col>
                    <Col style={{width:"70%"}}><ScrollView><Text>{this.props.eventData.EventManager}</Text></ScrollView></Col>
                </Row>
            </ScrollView>
          </Tab>
          <Tab heading={ <TabHeading><Text>Event Policies</Text></TabHeading>}>
          <ScrollView>
                <Row style={{paddingHorizontal:16, height:70 ,marginTop:16}}>
                    <Col style={{width:"60%"}}><Text>Email Reminder : </Text></Col>
                    <Col style={{width:"40%"}}><ScrollView><Text>{(this.props.eventData.isEmailReminder)?"yes":"no"}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"60%"}}><Text>Email Follow Up : </Text></Col>
                    <Col style={{width:"40%"}}><ScrollView><Text>{(this.props.eventData.IsEmailFollowUp)?"yes":"no"}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"60%"}}><Text>Email Confirmation : </Text></Col>
                    <Col style={{width:"40%"}}><ScrollView><Text>{(this.props.eventData.IsEmailConfirmed)?"yes":"no"}</Text></ScrollView></Col>
                </Row>
                <Row style={{paddingHorizontal:16,height:70}}>
                    <Col style={{width:"60%"}}><Text>Cancellation : </Text></Col>
                    <Col style={{width:"40%"}}><ScrollView><Text>{(this.props.eventData.IsCancellation)?"yes":"no"}</Text></ScrollView></Col>
                </Row>
            </ScrollView>
          </Tab>
          {
              this.state.booking.length!=0 && 
              <Tab heading={ <TabHeading><Text>Bookings ({this.props.booking.length})</Text></TabHeading>}>
                <Text>Total booking count : {this.props.booking.length}</Text>
                <Text>Total upcoming booking count : {this.props.booking.filter(e=>new Date(e.StartTime)>new Date()).length}</Text>
                <Text>Total on going booking count : {this.props.booking.filter(e=>(new Date(e.StartTime)>new Date() && new Date(e.EndTime)<new Date())).length}</Text>
                <Text>Total past booking count : {this.props.booking.filter(e=>new Date(e.EndTime)<new Date()).length}</Text>
                <ScrollView>
                    <List>
                        {
                            this.props.booking.map(e=>{
                                return (
                                    <ListItem style={{display:"flex"}}>
                                        <View style={{flex: 1}}>
                                            <Text>
                                                {e.FullName}{"\n"}
                                                {e.Email}{"\n"}
                                                {new Date(e.StartTime).toLocaleDateString()}{"\n"}
                                                {new Date(e.StartTime).toLocaleTimeString()} - {new Date(e.EndTime).toLocaleTimeString()}{"\n"}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text>
                                                {
                                                    (new Date(e.StartTime)>new Date())?"Upcoming":( (new Date(e.EndTime)>new Date())?"On going":"Done" )
                                                }
                                            </Text>
                                        </View>
                                    
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </ScrollView>
                </Tab>
          }
        </Tabs>
        
      </Container>
    );
  }
}
