import {
  Header,
  HeroSection,
  AboutSection,
  SkillsSection,
  WorkSection,
  FAQSection,
  ContactSection,
  Footer,
  FloatSocialIcons,
} from "./components/index";

import GlobalSpotlight from "./components/GlobalSpotlight";

function App() {
  // testing new email
  return (
    <>
      <GlobalSpotlight />
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatSocialIcons />
    </>
  );
}

export default App;