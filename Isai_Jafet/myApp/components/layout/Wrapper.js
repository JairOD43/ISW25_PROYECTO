import { ScrollView } from "react-native";
export default function Wrapper({ children }) {
  return (
    <ScrollView>
      {children}
    </ScrollView>
  );
}
