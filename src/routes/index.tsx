import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Nav } from "@/components/portfolio/Nav";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { StackSection } from "@/components/portfolio/StackSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Felipe — Full-Stack Developer & Builder" },
      {
        name: "description",
        content:
          "Portfólio do Felipe: full-stack developer focado em sistemas reais — PACTO, POS St. John's, Verthien, Luminor/TARS e PDV Tatu.",
      },
      { property: "og:title", content: "Felipe — Full-Stack Developer & Builder" },
      {
        property: "og:description",
        content: "Sistemas que funcionam — do banco de dados à interface. Foco em performance, segurança e lógica de negócio real.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main className="relative">
        <Hero />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
