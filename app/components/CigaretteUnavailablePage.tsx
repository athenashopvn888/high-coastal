import CigaretteUnavailable from "./CigaretteUnavailable";
import Footer from "./Footer";
import Navbar from "./Navbar";

/** Stable cigarette URLs render this at 200. Coded mode still redirects. */
export default function CigaretteUnavailablePage() {
  return (
    <main>
      <Navbar />
      <CigaretteUnavailable />
      <Footer />
    </main>
  );
}
