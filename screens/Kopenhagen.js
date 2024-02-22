import { Text, SafeAreaView, StyleSheet, Image, View, ScrollView  } from 'react-native';

export default function Lindt() {
  return (
    <SafeAreaView style={styles.container}>
      
    <View style={styles.content}>
      <Image source={require('../assets/kopeLogo.png')} style={styles.imglogo}></Image>

    <View style={styles.line}></View>

      <Text style={styles.paragraph}>
      <Text style={styles.highlight}>Kopenhagen </Text> is a Brazilian food company. 
      Best known for manufacturing and selling chocolates, it also manufactures candies
      and confectionery, offering more than 300 items, in addition to an institutional
      line that personalizes products, commemorative baskets, Easter and Christmas lines,
      among others.
      </Text>

      <View style={styles.line}></View>

        <View style={styles.founder}>
            <Text style={styles.title}>David Kopenhagen (founder)</Text>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/davidKope.webp')} style={styles.image} />
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
    color: '#cea074',
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
    borderColor: '#cea074', 
    borderRadius: 10, 
    padding: 5, 
  },
  image: {
    width: 250,
    height: 250, 
    resizeMode: 'cover', 
    borderRadius: 8, 
  }
});
