import * as React from 'react';

import { List } from 'react-native-paper';
import theme from '../CustomProperties/Theme';

const ArticleDescription = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  if (props.value) {
    return (
      <List.Accordion
        title={props.title}
        expanded={expanded}
        onPress={handlePress}
        titleStyle={{ fontWeight: 'bold' }}
        style={{ backgroundColor: 'white' }}>
        <List.Item
          title={props.value}
          titleNumberOfLines={6}
          titleStyle={{ color: theme.colors.subtitle, fontStyle: 'italic' }}
        />
      </List.Accordion>
    );
  }
};

export default ArticleDescription;
