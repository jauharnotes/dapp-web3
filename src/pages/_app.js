import "@/styles/globals.css";

// INTERNAL IMPORT
import { TrackingProvider } from "../../Conetxt/Tracking";
import { Footer, NavBar } from "../../Componets/Index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <TrackingProvider>
        <Component {...pageProps} />
      </TrackingProvider>
      <Footer />
    </>
  );
}
