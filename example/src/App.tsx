import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-uangcermat-icon';

export default function App() {
  return (
    <View style={styles.container}>
      <Icon name="logoutDuotone" size={180} />
      <View style={styles.spacer} />
      <Icon name="logoutFill" size={180} />
      <View style={styles.spacer} />
      <Icon name="logoutOutline" size={180} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  spacer: {
    height: 20,
  },
});
