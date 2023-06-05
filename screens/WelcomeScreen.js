import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [message, setMessage] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    async function message() {
      const resp = await axios.get(
        "https://app-auth-c8cc9-default-rtdb.firebaseio.com/auth-app.json?auth=" +
          token,
        {}
      );

      setMessage(resp.data.message);
    }
    message();
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
