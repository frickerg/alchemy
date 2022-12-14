import * as React from 'react';

import { Card, Paragraph, Text } from 'react-native-paper';
import { Linking, StyleSheet } from 'react-native';

import theme from '../CustomProperties/Theme';

const CustomCard = (props) => {
  // generate uri for atc linking
  const link = 'https://compendium.ch/register/atc/' + props.atc.substring(0, props.atc.indexOf(' '));

  return (
    <React.Fragment>
      <Card style={styles.container} onPress={props.onClick}>
        <Card.Content style={{ flexDirection: 'row' }}>
          <Paragraph style={{ marginTop: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{props.title}</Text>
          </Paragraph>
        </Card.Content>
        <Card.Content>
          <Paragraph
            style={{ color: theme.colors.primary }}
            onPress={() => {
              Linking.openURL(link);
            }}>
            {props.atc}
          </Paragraph>
          <Paragraph style={styles.subtitle}>{props.composition.substring(0, 100)}</Paragraph>
        </Card.Content>
        {props.uri && ( // only show image if one is provided
          <Card.Cover style={styles.img} source={{ uri: props.uri }} resizeMode={'contain'} />
        )}
        <Card.Actions>
          <Card.Content style={styles.contentEnd}>
            <Text style={[styles.stock, props.stock > 0 ? styles.stockActive : styles.stockOutOfStock]}>
              {props.stock > 0 ? props.stock : 'nicht'} an Lager
            </Text>
          </Card.Content>
        </Card.Actions>
      </Card>
    </React.Fragment>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  img: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 20,
    alignSelf: 'center'
  },
  contentEnd: {
    flex: 1
  },
  subtitle: {
    fontStyle: 'italic',
    color: theme.colors.subtitle
  },
  stock: {
    paddingVertical: 10,
    borderRadius: 20,
    textAlign: 'center'
  },
  stockActive: {
    backgroundColor: theme.colors.light
  },
  stockOutOfStock: {
    backgroundColor: 'whitesmoke'
  }
});
