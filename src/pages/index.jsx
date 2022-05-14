// libraries:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
import Header from "../components/header";
import Footer from "../components/footer";
import Section from "../components/section";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
//= =============================================================================

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="h-full md:mx-10">
        <div className="flex flex-col h-full">
          <div className="md:p-6 relative z-20">
            <Header />
          </div>
          <div className="h-3/4">
            <Section />
          </div>
          <div className="lg:mx-20 xl:w-1/2 py-4 relative z-20">
            <Footer />
          </div>
        </div>
      </div>
      <video autoPlay muted loop className="bg-video">
        <source src="/videos/medusa_01.webm" type="video/webm" />
      </video>
    </div>
  );
}
