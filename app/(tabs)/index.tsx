import { StyleSheet } from 'react-native';


import { Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chukuka 👋</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Try it</Text>
        <Text style={styles.cardText}>
          Edit <Text style={styles.bold}>app/(tabs)/index.tsx</Text> and see changes instantly.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Explore</Text>
        <Text style={styles.cardText}>
          Check out other screens and features in the app.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Explore</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Reset</Text>
        <Text style={styles.cardText}>
          Run <Text style={styles.bold}>npm run reset-project</Text> for a fresh start.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0f172a', // dark blue vibe
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#38bdf8',
    marginBottom: 5,
  },
  cardText: {
    color: '#cbd5f5',
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#38bdf8',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0f172a',
    fontWeight: 'bold',
  },
});