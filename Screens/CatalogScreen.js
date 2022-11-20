import React, { Component } from 'react';
import CustomCard from '../Components/Card';
import SearchBar from '../Components/SearchBar';
import medication from '../CustomProperties/Medication';
import { StyleSheet, ScrollView, Text, Button, Modal, View } from 'react-native';

class CatalogRoute extends Component {
  constructor(props) {
    super(props);
    this.state = { entity: null, visible: false };
  }

  showModal(entity) {
    this.setState({ entity: entity, visible: true });
  }

  hideModal() {
    this.setState({ entity: null, visible: false });
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <ScrollView style={{ marginBottom: 15 }}>
          {medication.map((entity) => (
            <CustomCard
              onClick={() => this.showModal(entity)}
              key={entity.id}
              title={entity.title}
              manufacturer={entity.manufacturer}
              atc={entity.atc}
              composition={entity.composition}
              uri={entity.uri}
              stock={entity.stock}
            />
          ))}
        </ScrollView>
        <Modal transparent={false} animationType={'slide'} visible={this.state.visible}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.modalInsideView}>
              {this.state.entity && <Text>{this.state.entity.title}</Text>}
              <Button title="Hide Modal" style={{ backgroundColor: 'primary' }} onPress={this.hideModal.bind(this)} />
            </View>
          </View>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CatalogRoute;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalInsideView: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
