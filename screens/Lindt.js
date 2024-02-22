import { Text, SafeAreaView, StyleSheet, Image, View, ScrollView  } from 'react-native';

export default function Lindt() {
  return (
    <SafeAreaView style={styles.container}>
      
    <View style={styles.content}>
      <Image source={require('../assets/logoLindt.png')} style={styles.imglogo}></Image>

    <View style={styles.line}></View>

      <Text style={styles.paragraph}>
      <Text style={styles.highlight}>Chocoladefabriken Lindt & Sprüngli AG </Text> doing business as Lindt,
       is a Swiss chocolatier and confectionery company founded in 1845 and known for its chocolate 
       truffles and chocolate bars, among other sweets.
      </Text>

      <View style={styles.line}></View>

        <View style={styles.founder}>
            <Text style={styles.title}>Rodolphe Lindt (founder)</Text>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/rodolpheLindt.jpg')} style={styles.image} />
            </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  imglogo:{
    width: '100%',
    height: 150
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
    color: '#dfbd77',
    fontWeight: '900'
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
    borderColor: '#dfbd77', 
    borderRadius: 10, 
    padding: 5, 
  },
  image: {
    width: 220,
    height: 220, 
    resizeMode: 'cover', 
    borderRadius: 8, 
  }
});
