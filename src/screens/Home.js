import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {icons, SIZES, standard} from '../constants';
import {FlatGrid} from 'react-native-super-grid';
import {
  AppLabel,
  franchise,
  links,
  personalcare,
  Products,
} from '../constants/strings';

const DATA = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1620&q=80',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1620&q=80',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1620&q=80',
  },
];

const categoryData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1620&q=80',
    cname: 'T-Shirt',
    colors: 'blue',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1620&q=80',
    cname: 'T-Shirt',
    colors: 'red',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1620&q=80',
    cname: 'T-Shirt',
    colors: 'green',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1620&q=80',
    cname: 'T-Shirt',
    colors: 'yellow',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1620&q=80',
    cname: 'T-Shirt',
    colors: 'skyblue',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1620&q=80',
    cname: 'T-Shirt',
    colors: 'green',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1620&q=80',
    cname: 'T-Shirt',
    colors: 'red',
  },
];

const deals = [
  {
    id: 1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFvzXOunBcSf_Y7DuO5UuxfD4aChd_TaqFw&usqp=CAU',
    label:
      'Lenovo IdeaPad 3 15IGL05 Intel Celeron (15.6 inch, 8GB, 256GB, Windows 11, MS Office 2021, Intel UHD Graphics, FHD Display, Platinum Grey, 81WQ00MQIN)',
    price: '₹100000',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFvzXOunBcSf_Y7DuO5UuxfD4aChd_TaqFw&usqp=CAU',
    label:
      'Lenovo IdeaPad 3 15IGL05 Intel Celeron (15.6 inch, 8GB, 256GB, Windows 11, MS Office 2021, Intel UHD Graphics, FHD Display, Platinum Grey, 81WQ00MQIN)',
    price: '₹100000',
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFvzXOunBcSf_Y7DuO5UuxfD4aChd_TaqFw&usqp=CAU',
    label:
      'Lenovo IdeaPad 3 15IGL05 Intel Celeron (15.6 inch, 8GB, 256GB, Windows 11, MS Office 2021, Intel UHD Graphics, FHD Display, Platinum Grey, 81WQ00MQIN)',
    price: '₹100000',
  },
  {
    id: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFvzXOunBcSf_Y7DuO5UuxfD4aChd_TaqFw&usqp=CAU',
    label:
      'Lenovo IdeaPad 3 15IGL05 Intel Celeron (15.6 inch, 8GB, 256GB, Windows 11, MS Office 2021, Intel UHD Graphics, FHD Display, Platinum Grey, 81WQ00MQIN)',
    price: '₹100000',
  },
];

// Filled Star. You can also give the path from local
const starImageFilled =
  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
// Empty Star. You can also give the path from local
const starImageCorner =
  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const flatListRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the next index
      const nextIndex = (currentIndex + 1) % DATA.length;
      setCurrentIndex(nextIndex);
      // Auto swipe to the next image
      flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
    }, 4000); // Auto-swipe every 3 seconds (adjust as needed)

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const renderDot = index => {
    return (
      <View
        style={[
          styles.dot,
          {backgroundColor: 'transparent'},
          {width: index === currentIndex ? 25 : 12},
        ]}
      />
    );
  };

  const Separator = () => <View style={{width: SIZES.padding}}></View>;

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImageFilled}
                    : {uri: starImageCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const ListFooter = ({titleHeader, categoryData}) => {
    let data = [];

    if (categoryData === 'links') {
      data = links;
    } else if (categoryData === 'franchise') {
      data = franchise;
    } else if (categoryData === 'Products') {
      data = Products;
    } else if (categoryData === 'personalcare') {
      data = personalcare;
    }

    return (
      <View>
        <Text
          

          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'red',
            marginVertical: SIZES.padding * 2,
            
          }}>
          {titleHeader}
        </Text>
        {data.map((item, index) => (
          <Text
            key={index}
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: 'red',
              marginVertical: SIZES.padding,
            }}>
            {item}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{paddingBottom: SIZES.padding * 2}}
      showsVerticalScrollIndicator={false}>
      {/* HEADER VIEW */}
      <View>
        <FlatList
          ref={flatListRef}
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEventThrottle={20}
          onMomentumScrollEnd={event => {
            const contentOffset = event.nativeEvent.contentOffset.x;
            const newIndex = Math.floor(contentOffset / SIZES.width);
            setCurrentIndex(newIndex);
          }}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1}}>
                <Image
                  source={{uri: item.img}}
                  style={{
                    width: SIZES.width,
                    height: SIZES.height - 150,
                    resizeMode: 'cover',
                  }}
                />
              </View>
            );
          }}
        />

        {/* DOTS */}
        <View style={styles.dotsContainer}>
          {DATA.map((_, index) => renderDot(index))}
        </View>
      </View>

      {/* CATEGORIES */}
      <FlatList
        data={categoryData}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          paddingVertical: SIZES.padding * 3,
          paddingHorizontal: SIZES.padding,
        }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                style={[styles.category, {backgroundColor: item.colors}]}
                activeOpacity={0.7}>
                <Image
                  source={{uri: item.img}}
                  style={{width: '70%', height: '70%', zIndex: 1}}
                />
              </TouchableOpacity>
              <View
                style={{alignItems: 'center', marginVertical: SIZES.padding}}>
                <Text>{item.cname}</Text>
              </View>
            </View>
          );
        }}
      />

      {/* DEALS FOR THE DAY */}

      <View style={{marginHorizontal: SIZES.padding * 2}}>
        <View>
          <Text>{AppLabel.deal}</Text>
        </View>

        <FlatList
          data={deals}
          keyExtractor={item => item.id}
          horizontal
          style={{marginTop: SIZES.padding * 2}}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: SIZES.width / 1.5,
                  height: SIZES.height / 2,
                  backgroundColor: 'black',
                  borderRadius: 10,
                }}>
                <Image
                  source={icons.heart}
                  style={{
                    position: 'absolute',
                    width: 20,
                    height: 20,
                    right: 20,
                    top: 20,
                    tintColor: 'white',
                    resizeMode: 'contain',
                  }}
                />

                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    marginTop: SIZES.radius * 2,
                  }}>
                  <Image
                    source={{uri: item.img}}
                    style={{width: 200, height: 150, resizeMode: 'contain'}}
                  />

                  <Text
                    style={{color: 'white', fontWeight: '600'}}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {item.label}
                  </Text>

                  <Text
                    style={{
                      color: 'white',
                      alignSelf: 'flex-start',
                      marginVertical: SIZES.padding,
                      fontSize: 20,
                      marginLeft: SIZES.padding,
                      fontWeight: 'bold',
                    }}>
                    {item.price}
                  </Text>

                  <CustomRatingBar />
                </View>
              </View>
            );
          }}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ListFooter titleHeader={'USEFUL LINKS'} categoryData="links" />
          <ListFooter titleHeader={'PRODUCTS'} categoryData="Products" />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ListFooter
            titleHeader={`Franchise\nOpportunity`}
            categoryData="franchise"
          />
          <ListFooter
            titleHeader={'Gromming & Personal\ncare'}
            categoryData="personalcare"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: standard.white,
  },
  category: {
    width: SIZES.radius * 5,
    height: SIZES.radius * 5,
    borderRadius: (SIZES.radius * 5) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  starImageStyle: {
    width: 18,
    height: 18,
    resizeMode: 'cover',
  },
  customRatingBarStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: SIZES.padding,
  },
});
