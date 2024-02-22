import { Text, SafeAreaView, StyleSheet, Image, View, ScrollView  } from 'react-native';

export default function Cacreme() {
  return (
    <SafeAreaView style={styles.container}>
      
    <View style={styles.content}>
      <Image source={require('../assets/logoCacreme.png')} style={styles.imgscreme}></Image>

    <View style={styles.line}></View>

      <Text style={styles.paragraph}>
      <Text style={styles.highlight}>Cacau Show </Text>is a Brazilian chocolate manufacturer based in Itapevi, São Paulo. 
      The company was founded by seventeen-year-old Alexandre Tadeu da Costa in 1988
      from his sales of chocolate Easter eggs using door-to-door catalogs.
      </Text>

      <View style={styles.line}></View>

        <View style={styles.founder}>
            <Text style={styles.title}>Alê Costa (founder)</Text>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/alecosta.webp')} style={styles.image} />
            </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
  content:{
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  line:{
    width: '100%',
    height: 1,
    margin: 10,
    backgroundColor: '#000'
  },
  paragraph: {
    marginVertical: 10, 
    paddingHorizontal: 20, 
    fontSize: 16,
    fontWeight: '400', 
    lineHeight: 24, 
    textAlign: 'justify', 
    color: '#333',
  },
  highlight:{
    color: '#811701'
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333', 
    letterSpacing: 1, 
    textAlign: 'center', 
    marginBottom: 20, 
  },
  imageContainer: {
    borderWidth: 4,
    borderColor: '#811701', 
    borderRadius: 10, 
    padding: 5, 
  },
  image: {
    width: 200,
    height: 200, 
    resizeMode: 'cover', 
    borderRadius: 8, 
  }
});
