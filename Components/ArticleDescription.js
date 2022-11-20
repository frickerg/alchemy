import * as React from 'react';
import { List } from 'react-native-paper';

const ArticleDescription = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      title={props.title}
      expanded={expanded}
      onPress={handlePress}
      titleStyle={{ fontWeight: 'bold' }}
      style={{ backgroundColor: 'white' }}>
      <List.Item title={props.value} titleNumberOfLines={6} titleStyle={{ color: 'gray', fontStyle: 'italic' }} />
    </List.Accordion>
  );
};

export default ArticleDescription;
