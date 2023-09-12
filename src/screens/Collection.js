import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../utils/theme-context';
import {icons, SIZES} from '../constants';
import {FlatGrid} from 'react-native-super-grid';
import {useDispatch, useSelector} from 'react-redux';
import { setMessage } from '../redux/slices';


const Collection = ({navigation}) => {
  const [items, setItems] = React.useState([
    {name: 'TURQUOISE', code: '#2ecc71', img: icons.category},
    {name: 'EMERALD', code: '#2ecc71', img: icons.category},
    {name: 'PETER RIVER', code: '#3498db', img: icons.category},
    {name: 'AMETHYST', code: '#9b59b6', img: icons.category},
    {name: 'WET ASPHALT', code: '#34495e', img: icons.category},
    {name: 'GREEN SEA', code: '#16a085', img: icons.category},
    {name: 'NEPHRITIS', code: '#27ae60', img: icons.category},
    {name: 'BELIZE HOLE', code: '#2980b9', img: icons.category},
    {name: 'WISTERIA', code: '#8e44ad', img: icons.category},
    {name: 'MIDNIGHT BLUE', code: '#2c3e50', img: icons.category},
    {name: 'SUN FLOWER', code: '#f1c40f', img: icons.category},
    {name: 'CARROT', code: '#e67e22', img: icons.category},
    {name: 'ALIZARIN', code: '#e74c3c', img: icons.category},
    {name: 'CLOUDS', code: '#ecf0f1', img: icons.category},
    {name: 'CONCRETE', code: '#95a5a6', img: icons.category},
    {name: 'ORANGE', code: '#f39c12', img: icons.category},
    {name: 'PUMPKIN', code: '#d35400', img: icons.category},
    {name: 'POMEGRANATE', code: '#c0392b', img: icons.category},
    {name: 'SILVER', code: '#bdc3c7', img: icons.category},
    {name: 'ASBESTOS', code: '#7f8c8d', img: icons.category},
  ]);

  const {theme} = useContext(ThemeContext);
  const styles = getStyles(theme);

  // testing redux
  const dispatch = useDispatch();
  const {message} = useSelector(state => state.message);

  const handlePress = () => {
    dispatch(setMessage('Message from Component'));
  };

  // testing redux

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: SIZES.radius,
          paddingTop: 5,
        }}>
        <Text>Home</Text>
        <Text style={{marginLeft: SIZES.radius * 0.5}}>. Best seller</Text>
      </View>

      {/* CATEGORY TITLE */}

      <View style={styles.catViewContainer}>
        <Text style={styles.catTitle}>Drawer Title</Text>
      </View>

      {/* CATEGORY IMAGES */}

      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({item}) => (
          <React.Fragment>
            <View style={styles.itemContainer}>
              <Image
                source={item.img}
                style={{
                  width: '100%',
                  height: SIZES.height / 2.8,
                }}
              />
            </View>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
            </View>
          </React.Fragment>
        )}
      />

      {/* REDUX */}
      <View
        style={{
          height: 60,
          backgroundColor: 'blue',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
        <Text style={styles.text}>{message}</Text>
        <Button title={'Set Message'} onPress={handlePress} />
      </View>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    catViewContainer: {
      width: SIZES.width,
      height: 80,
      marginTop: SIZES.radius * 0.3,
      backgroundColor: theme.base1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    catTitle: {
      fontSize: 25,
      color: theme.text,
    },
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: SIZES.height / 2.8,
    },
    itemName: {
      fontSize: 16,
      color: '#000',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#000',
    },
  });

export default Collection;

const styles = StyleSheet.create({});
