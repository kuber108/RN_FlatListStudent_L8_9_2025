import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "@/styles/colors";
import defaultStyles from "@/styles/defaultStyles";
import { useState } from "react";
import ListItemSeparator from "@/components/ListItemSeperator";
import { dataType, DATA } from "@/data/appData";
import ListItem from "@/components/ListItem";

export default function Index() {
  
  const [selectedId, setSelectedId] = 
      useState<string>('1');

      // call this when they click on an item
      const selectedList = (item: dataType) =>{
        console.log(item.title);
        setSelectedId(item.id)
      }
  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
           
          data={DATA}
          keyExtractor={(item: dataType) =>item.id}
          extraData={selectedId}
          ItemSeparatorComponent={() => (<ListItemSeparator color='navy'/>)}
          renderItem={({ item }) =>(
            <ListItem 
            item={item}
            isSelected = {item.id === selectedId}
            onPress={selectedList}/>
          )
        }
          />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },

  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

});
