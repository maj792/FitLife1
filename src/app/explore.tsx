
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TrainingScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Vrste treningov</Text>

        <Text style={styles.intro}>
          Pri fitnesu poznamo več različnih vrst treningov.
          Vsak ima svoje prednosti in drugačen namen.
          Najpogosteje se uporabljajo treningi za moč,
          kardio treningi in vaje za gibljivost.
        </Text>

        <View style={styles.card}>
          <Text style={styles.heading}>Trening za moč</Text>
          <Text style={styles.description}>
            Pri treningu za moč uporabljamo uteži,
            naprave ali lastno telesno težo.
            Tak trening pomaga pri razvoju mišic
            in povečanju moči.
          </Text>
          <Text style={styles.description}>
            Nekatere najbolj poznane vaje so bench press,
            počepi, mrtvi dvig in različne vaje za hrbet.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Kardio trening</Text>
          <Text style={styles.description}>
            Kardio trening je namenjen predvsem
            izboljšanju kondicije in vzdržljivosti.
            Med kardio aktivnosti spadajo tek,
            kolesarjenje, plavanje in hitra hoja.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Boks</Text>
          <Text style={styles.description}>
            Boks je šport, pri katerem potrebujemo
            hitrost, moč in dobro koordinacijo.
            Treningi vključujejo delo na boksarski vreči,
            tehniko udarcev in različne kondicijske vaje.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Počitek in regeneracija</Text>
          <Text style={styles.description}>
            Poleg treningov je pomemben tudi počitek.
            Mišice potrebujejo čas za regeneracijo,
            zato sta kakovosten spanec in primerna
            prehrana pomembna dela treninga.
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  intro: {
    color: '#D1D5DB',
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#1D2935',
    padding: 22,
    borderRadius: 12,
    marginBottom: 18,
  },
  heading: {
    color: '#A3E635',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    color: '#E5E7EB',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 12,
  },
});
