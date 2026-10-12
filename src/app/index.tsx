
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>FitLife</Text>
        <Text style={styles.subtitle}>
          Fitnes in trening
        </Text>

        <Image
          source={require('../../assets/images/fitnes.jpg')}
          style={styles.gymImage}
          resizeMode="cover"
        />

        <Text style={styles.heading}>O aplikaciji</Text>
        <Text style={styles.description}>
          FitLife je aplikacija, v kateri predstavljam
          svoj najljubši hobi, fitnes. S fitnesom se
          ukvarjam, ker rad treniram in izboljšujem
          svojo telesno pripravljenost.
        </Text>

        <Text style={styles.description}>
          V aplikaciji so predstavljene različne
          vrste treningov, njihove značilnosti
          in prednosti redne telesne aktivnosti.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Zakaj fitnes?</Text>
          <Text style={styles.description}>
            Fitnes je dobra oblika telesne aktivnosti,
            saj lahko z rednim treningom izboljšamo
            moč, vzdržljivost in splošno počutje.
            Poleg tega nas uči discipline in vztrajnosti.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Kaj najdeš v aplikaciji?</Text>
          <Text style={styles.description}>
            Na strani Treningi so opisane različne
            vrste vadbe, kot so trening za moč,
            kardio in boks.
          </Text>
          <Text style={styles.description}>
            Na strani O meni pa lahko izveš več
            o avtorju aplikacije.
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
    paddingTop: 90,
    paddingBottom: 50,
    maxWidth: 750,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    color: '#A3E635',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: '#D1D5DB',
    fontSize: 18,
    marginBottom: 25,
  },
  gymImage: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    marginBottom: 30,
  },
  heading: {
    color: '#A3E635',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    color: '#E5E7EB',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#1D2935',
    padding: 22,
    borderRadius: 12,
    marginTop: 12,
    marginBottom: 10,
  },
  cardTitle: {
    color: '#A3E635',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
