import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { EditorialNavbar } from "@/components/editorial/Navbar";
import { EditorialHero } from "@/components/editorial/Hero";
import { EditorialCaseStudy } from "@/components/editorial/CaseStudy";
import { EditorialEngineering } from "@/components/editorial/Engineering";
import { EditorialMoreWork } from "@/components/editorial/MoreWork";
import { EditorialAboutExperience } from "@/components/editorial/AboutExperience";
import { EditorialContact } from "@/components/editorial/Contact";
import { EditorialFooter } from "@/components/editorial/Footer";
import { ModernNavbar } from "@/components/modern/Navbar";
import { ModernHero } from "@/components/modern/Hero";
import { ModernCaseStudy } from "@/components/modern/CaseStudy";
import { ModernEngineering } from "@/components/modern/Engineering";
import { ModernMoreWork } from "@/components/modern/MoreWork";
import { ModernAboutExperience } from "@/components/modern/AboutExperience";
import { ModernContact } from "@/components/modern/Contact";
import { ModernFooter } from "@/components/modern/Footer";

const editorialContainer = "mx-auto w-full max-w-[1280px] px-8 xl:px-16";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      {/* Phone & tablet (< 1024px): modern bento design. */}
      <div className="lg:hidden">
        <ModernNavbar />
        <main id="m-main" className="relative mx-auto w-full max-w-[1200px] overflow-x-clip px-4 sm:px-6">
          <ModernHero />
          <ModernCaseStudy />
          <ModernEngineering />
          <ModernMoreWork />
          <ModernAboutExperience />
          <ModernContact />
        </main>
        <ModernFooter />
      </div>

      {/* PC (≥ 1024px): editorial design. `display: none` keeps the other tree out of
          the accessibility tree, and its lazy images are never downloaded. */}
      <div className="hidden lg:block">
        <EditorialNavbar />
        <main id="main">
          <div className={editorialContainer}>
            <EditorialHero />
            <EditorialCaseStudy />
          </div>
          <EditorialEngineering />
          <div className={editorialContainer}>
            <EditorialMoreWork />
            <EditorialAboutExperience />
            <EditorialContact />
          </div>
        </main>
        <EditorialFooter />
      </div>
    </>
  );
}
