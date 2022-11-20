import React, { useState } from 'react';
import CatalogRoute from './CatalogScreen';
import OrderRoute from './OrderScreen';
import AboutRoute from './AboutScreen';
import { BottomNavigation } from 'react-native-paper';

const Screen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'catalog',
      title: 'Katalog',
      icon: 'format-list-bulleted'
    },
    { key: 'orders', title: 'Bestellungen', icon: 'pill' },
    { key: 'about', title: 'Impressum', icon: 'account' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    catalog: CatalogRoute,
    orders: OrderRoute,
    about: AboutRoute
  });

  return <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />;
};

export default Screen;
