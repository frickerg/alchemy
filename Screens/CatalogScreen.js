import * as React from "react";
import CustomCard from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import medication from "../CustomProperties/Medication";
import { ScrollView } from "react-native";

const CatalogRoute = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <ScrollView style={{ marginBottom: 15 }}>
        {medication.map((entity) => (
          <CustomCard
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
    </React.Fragment>
  );
};

export default CatalogRoute;
