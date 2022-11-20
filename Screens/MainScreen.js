import React, { useState } from 'react';

import AboutRoute from './AboutScreen';
import { BottomNavigation } from 'react-native-paper';
import CatalogRoute from './CatalogScreen';

const Screen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'catalog',
      title: 'Katalog',
      icon: 'medical-bag'
    },
    { key: 'about', title: 'Impressum', icon: 'account' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    catalog: CatalogRoute,
    about: AboutRoute
  });

  return <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />;
};

export default Screen;
