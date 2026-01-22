import HomePage from "./homePage";
import StatsSection from "./box_num";
import QuesPage from "./qustionPage";
import CardPage from "./fetures";
import RedoAt from "./redo";
import ConectPage from "../../ConectPage"
import { useInViewAnimation } from "../../useInViewAnimation";

export default function WelcomPage() {
  const [homeRef, homeInView] = useInViewAnimation();
  const [statsRef, statsInView] = useInViewAnimation();
  const [quesRef, quesInView] = useInViewAnimation();
  const [cardRef, cardInView] = useInViewAnimation();
  const [redoRef, redoInView] = useInViewAnimation();
  const [conectRef, conectInView] = useInViewAnimation();

  return (
    <>
     
        <HomePage />
      

      <div
        ref={statsRef}
        style={{
          opacity: statsInView ? 1 : 0,
          transform: statsInView ? "translateY(0px)" : "translateY(50px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <StatsSection />
      </div>

      <div
        ref={quesRef}
        style={{
          opacity: quesInView ? 1 : 0,
          transform: quesInView ? "translateY(0px)" : "translateY(50px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <QuesPage />
      </div>

      <div
        ref={cardRef}
        style={{
          opacity: cardInView ? 1 : 0,
          transform: cardInView ? "translateY(0px)" : "translateY(50px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <CardPage />
      </div>

      <div
        ref={redoRef}
        style={{
          opacity: redoInView ? 1 : 0,
          transform: redoInView ? "translateY(0px)" : "translateY(50px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <RedoAt />
      </div>

      <div
        ref={conectRef}
        style={{
          opacity: conectInView ? 1 : 0,
          transform: conectInView ? "translateY(0px)" : "translateY(50px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <ConectPage />
      </div>
    </>
  );
}
