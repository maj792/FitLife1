
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>O MENI</Text>

        <Image
          source={require('../../assets/images/jaz.jpeg')}
          style={styles.profileImage}
          resizeMode="cover"
        />

        <Text style={styles.name}>Maj Jelen</Text>
        <Text style={styles.subtitle}>
          Avtor aplikacije FitLife
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>KDO SEM?</Text>
          <Text style={styles.description}>
            Sem dijak računalništva in rad se ukvarjam
            s športom, predvsem s fitnesom in boksom.
            Fitnes je eden mojih najljubših hobijev,
            saj mi omogoča razvijanje moči,
            vzdržljivosti in discipline.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>O APLIKACIJI</Text>
          <Text style={styles.description}>
            Aplikacijo FitLife sem izdelal v ogrodju
            React Native z uporabo Expo.
            Namen aplikacije je predstaviti moj hobi
            in pomen redne telesne aktivnosti.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101820',
  },
  content: {
    padding: 25,
    alignItems: 'center',
  },
  title: {
    color: '#A3E635',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  profileImage: {
    width: 230,
    height: 300,
    borderRadius: 20,
    marginBottom: 20,
  },
  name: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#A3E635',
    fontSize: 16,
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#1D2935',
    padding: 22,
    borderRadius: 18,
    marginBottom: 20,
    width: '100%',
    maxWidth: 600,
  },
  cardTitle: {
    color: '#A3E635',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    color: '#D1D5DB',
    fontSize: 15,
    lineHeight: 25,
  },
});
