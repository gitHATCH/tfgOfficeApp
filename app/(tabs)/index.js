import { Main } from "../../components/Main";
import { AuthProvider } from "../../hooks/AuthContext";

export default function Index() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
