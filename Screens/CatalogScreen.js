import React, { Component } from 'react';
import CustomCard from '../Components/Card';
import SearchBar from '../Components/SearchBar';
import ArticleDescription from '../Components/ArticleDescription';
import medication from '../CustomProperties/Medication';
import { Button, List, Card, Appbar, Snackbar } from 'react-native-paper';
import { StyleSheet, ScrollView, View, Text, Modal } from 'react-native';

class CatalogRoute extends Component {
  constructor(props) {
    super(props);
    this.state = { entity: null, visible: false, counter: 1, snackbar: false };
  }

  plus() {
    if (this.state.counter < this.state.entity.stock) {
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  minus() {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  showModal(entity) {
    this.setState({ entity: entity, visible: true, counter: entity.stock > 0 ? 1 : 0 });
  }

  placeOrder() {
    let updatedEntity = this.state.entity;
    updatedEntity.stock = this.state.entity.stock - this.state.counter;
    this.setState({ entity: updatedEntity, snackbarVisible: true });
    this.hideModal();
  }

  hideModal() {
    this.setState({ entity: null, visible: false, counter: 1 });
  }

  handleDismissSnackbar = () => {
    this.setState({
      snackbarVisible: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <ScrollView style={{ paddingBottom: 15 }}>
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
        <Snackbar
          style={{ borderRadius: 5, backgroundColor: '#455A64' }}
          visible={this.state.snackbarVisible}
          onDismiss={() => this.handleDismissSnackbar()}>
          Deine Bestellung war erfolgreich. Die Spitalapotheke meldet sich bei dir, sobald die Medikation für deine
          Abteilung zur Abholung bereitsteht.
        </Snackbar>

        <Modal transparent={false} animationType={'slide'} visible={this.state.visible}>
          <Appbar.Header>
            <Appbar.BackAction onPress={this.hideModal.bind(this)} />
            <Appbar.Content title="Zurück" />
          </Appbar.Header>
          {this.state.entity && (
            <ScrollView style={{ flex: 1, padding: 20 }}>
              <Text style={{ marginHorizontal: 10, fontWeight: 'bold', fontSize: 28 }}>{this.state.entity.title}</Text>
              <Text style={{ marginHorizontal: 10, fontStyle: 'italic', color: 'gray' }}>
                {this.state.entity.manufacturer}
              </Text>
              {this.state.entity.uri && ( // only show image if one is provided
                <Card style={{ padding: 20 }} elevation={0}>
                  <Card.Cover style={styles.img} source={{ uri: this.state.entity.uri }} resizeMode={'contain'} />
                </Card>
              )}
              <List.Section style={{ width: '100%' }}>
                <ArticleDescription title="Beschreibung" value={this.state.entity.description} />
                <ArticleDescription title="Charakteristika" value={this.state.entity.characteristics} />
                <ArticleDescription title="Zusammensetzung" value={this.state.entity.composition} />
                <ArticleDescription title="Therapie" value={this.state.entity.therapy} />
                <ArticleDescription title="Indikation" value={this.state.entity.indication} />
                <ArticleDescription title="Dosierung" value={this.state.entity.dosage} />
                <ArticleDescription title="Kontraindikation" value={this.state.entity.contraindication} />
              </List.Section>
            </ScrollView>
          )}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'white',
              borderTopColor: 'silver',
              marginTop: 20,
              borderWidth: 1,
              padding: 5
            }}>
            <Button mode="text" labelStyle={{ fontSize: 32, fontWeight: 'bold' }} onPress={this.minus.bind(this)}>
              &#65293;
            </Button>
            <Text style={{ fontSize: 28, fontWeight: 'bold', paddingHorizontal: 45 }}>{this.state.counter}</Text>
            <Button mode="text" labelStyle={{ fontSize: 32, fontWeight: 'bold' }} onPress={this.plus.bind(this)}>
              &#65291;
            </Button>
          </View>
          <View style={{ margin: 20, marginTop: 0 }}>
            <Button
              mode="contained"
              disabled={this.state.counter == 0}
              labelStyle={{ color: 'white' }}
              style={{ padding: 10, textColor: 'white' }}
              onPress={this.placeOrder.bind(this)}>
              Jetzt bestellen
            </Button>
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
    alignItems: 'left'
  },
  img: {
    width: '100%',
    backgroundColor: 'white'
  },
  modalInsideView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left'
  }
});
