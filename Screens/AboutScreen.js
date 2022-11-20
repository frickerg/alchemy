import * as React from 'react';

import { Avatar, Card, Title } from 'react-native-paper';
import { ScrollView, StyleSheet, Text } from 'react-native';

const AboutRoute = () => (
  <ScrollView>
    <Card style={styles.card}>
      <Card.Content style={{ alignItems: 'center' }}>
        <Avatar.Image size={124} source={require('../assets/portrait.jpg')} style={{ marginBottom: 10 }} />
        <Title style={{ padding: 10 }}>Hey! Ich heisse Guillaume</Title>
        <Text style={styles.text}>
          Ich habe dieses Projekt innerhalb von 24h aufgesetzt, konzipiert, designt und mit React Native umgesetzt.
          Einerseits möchte ich mit dieser App zeigen, was ich auf dem Kasten habe und möchte den Moment auch nutzen,
          etwas über mich zu erzählen.
        </Text>
        <Text style={styles.text}>
          Ich habe grosse Freude daran, neues auszuprobieren und kreativ zu sein. Als ambitionierter Software Entwickler
          bin ich immer bestrebt, besser zu werden und meine Fähigkeiten mit Eifer und Liebe zum Detail zu verschärfen.
          Dabei schliesse ich neue Freundschaften und erlebe Abenteuer mit gleichgesinnten und spannenden Menschen.
        </Text>
        <Text style={styles.text}>
          Gerne würde ich in einem Team arbeiten, in welchem man zusammen und mithilfe von modernen Technologien
          innovative Software erschaffen kann. Bin ich bei dir genau richtig?
        </Text>
      </Card.Content>
    </Card>
  </ScrollView>
);

export default AboutRoute;

const styles = StyleSheet.create({
  text: {
    padding: 5,
    textAlign: 'justify'
  },
  card: { margin: 20, padding: 10 }
});
