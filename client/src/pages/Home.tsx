import { useState, useEffect } from "react";
import { SECTIONS, PageSection } from "../lib/content";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen, Quote, Award, Link as LinkIcon, FileText } from "lucide-react";

export default function Home() {
  const [activeSectionId, setActiveSectionId] = useState<string>("thesis");

  // Scroll to top of the content container when changing pages
  useEffect(() => {
    const mainContent = document.getElementById("academic-content-canvas");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeSectionId]);

  const activeIndex = SECTIONS.findIndex((s) => s.id === activeSectionId);
  const activeSection = SECTIONS[activeIndex] || SECTIONS[0];

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveSectionId(SECTIONS[activeIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (activeIndex < SECTIONS.length - 1) {
      setActiveSectionId(SECTIONS[activeIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f2] text-[#1f2421] font-body flex flex-col selection:bg-[#e06a3b]/20 selection:text-[#0d5c56]">
      {/* 1. Deep Teal Top Navigation Bar */}
      <header className="bg-[#0d5c56] text-[#faf8f2] shadow-md sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            {/* Title banner */}
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-[#e06a3b] flex-shrink-0" />
              <span className="font-display font-bold text-sm sm:text-base md:text-lg tracking-tight leading-tight line-clamp-1">
                National Organization for Women & Second-Wave Feminism
              </span>
            </div>
            
            {/* Project Authors / Metadata */}
            <div className="text-right text-[10px] sm:text-xs text-[#faf8f2]/80 font-sans border-t border-[#faf8f2]/10 md:border-0 pt-1 md:pt-0">
              <p className="font-medium">Lilah Pantallion & Lila Morgan</p>
              <p className="text-[9px] sm:text-[10px] text-[#faf8f2]/60">National History Day 2026</p>
            </div>
          </div>
        </div>

        {/* Top Tabbed Navigation Bar */}
        <div className="border-t border-[#faf8f2]/10 overflow-x-auto scrollbar-none bg-[#0a4d47]">
          <nav className="max-w-7xl mx-auto px-4 flex space-x-1 sm:space-x-2 py-2">
            {SECTIONS.map((section) => {
              const isActive = section.id === activeSectionId;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-sans font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-[#faf8f2] text-[#0d5c56] shadow-sm font-semibold scale-105"
                      : "text-[#faf8f2]/80 hover:text-[#faf8f2] hover:bg-[#0d5c56]/50"
                  }`}
                >
                  {section.shortTitle}
                </button>
              );
            })}
          </nav>
        </div>

        {/* 2. Thin Burnt Orange Accent Line */}
        <div className="h-1 bg-[#e06a3b] w-full" />
      </header>

      {/* Main Container */}
      <main className="flex-grow">
        {/* Render Title/Thesis Hero if on Thesis page */}
        {activeSectionId === "thesis" ? (
          <div className="relative w-full bg-[#0d5c56] overflow-hidden border-b border-[#border]">
            {/* 3. Large Hero Image using Archival Protest Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={activeSection.image?.src}
                alt={activeSection.image?.alt}
                className="w-full h-full object-cover object-center filter grayscale contrast-125"
              />
              {/* 4. Subtle Teal Overlay or Tint over the Hero Image */}
              <div className="absolute inset-0 bg-[#0d5c56]/85 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d5c56] via-transparent to-transparent opacity-60" />
            </div>

            {/* Hero Text Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 sm:py-28 lg:py-36 text-center">
              {/* 5. Large White Serif Headline placed over the image */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#faf8f2] leading-tight max-w-4xl mx-auto drop-shadow-sm">
                {activeSection.heroTitle}
              </h1>
              <div className="mt-6 h-1 w-24 bg-[#e06a3b] mx-auto rounded-full" />
              <p className="mt-4 font-sans text-xs sm:text-sm uppercase tracking-widest text-[#faf8f2]/70 font-semibold">
                An Archival Digital History Monograph
              </p>
            </div>
          </div>
        ) : (
          /* Mini Banner for other content sections */
          <div className="bg-gradient-to-r from-[#0d5c56] to-[#0a4d47] text-[#faf8f2] py-10 border-b border-[#e06a3b]/30">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <span className="font-sans text-xs uppercase tracking-widest text-[#e06a3b] font-bold">
                Chapter {activeIndex}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#faf8f2] mt-1">
                {activeSection.title}
              </h1>
            </div>
          </div>
        )}

        {/* 6. Cream or Soft Off-White Content Section below the Hero */}
        <div id="academic-content-canvas" className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Primary Content Column */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* 7. Short Introductory Paragraph (or Chapter Paragraphs) */}
              <div className="prose prose-stone max-w-none">
                {activeSection.content.map((paragraph, idx) => {
                  const isFirstParagraph = idx === 0;
                  return (
                    <p
                      key={idx}
                      className={`text-[#1f2421] leading-relaxed text-justify ${
                        isFirstParagraph
                          ? "text-base sm:text-lg md:text-xl font-light text-[#0d5c56]/90 border-l-4 border-[#e06a3b] pl-4 sm:pl-6 py-1 mb-8"
                          : "text-sm sm:text-base mb-6 font-normal"
                      }`}
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Quotes styling - if section has quotes */}
              {activeSection.quotes && activeSection.quotes.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-[#border]">
                  <h3 className="font-sans text-xs uppercase tracking-widest text-[#0d5c56] font-bold flex items-center gap-2">
                    <Quote className="h-4 w-4 text-[#e06a3b]" /> Historical Voices & Perspectives
                  </h3>
                  <div className="grid gap-6">
                    {activeSection.quotes.map((quote, idx) => (
                      <blockquote
                        key={idx}
                        className="bg-[#faf8f2] border-l-4 border-[#e06a3b] p-5 rounded-r-sm shadow-sm border border-l-0 border-[#border]/40"
                      >
                        <p className="text-sm sm:text-base italic font-medium text-[#1f2421] leading-relaxed">
                          “{quote.text}”
                        </p>
                        <footer className="mt-3 text-xs sm:text-sm font-sans text-[#0d5c56] font-semibold flex items-center justify-between">
                          <span>— {quote.author}</span>
                          {quote.context && (
                            <span className="text-[10px] sm:text-xs text-[#muted-foreground] font-normal italic">
                              {quote.context}
                            </span>
                          )}
                        </footer>
                      </blockquote>
                    ))}
                  </div>
                </div>
              )}

              {/* Sources layout if on Sources page */}
              {activeSectionId === "sources" && (
                <div className="space-y-10 pt-4">
                  {/* Primary Sources */}
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-[#e06a3b] font-bold flex items-center gap-2 border-b border-[#border] pb-2 mb-6">
                      <Award className="h-4 w-4" /> Primary Sources
                    </h3>
                    <ul className="space-y-6">
                      {activeSection.primarySources?.map((source, idx) => (
                        <li key={idx} className="group border-l-2 border-[#0d5c56]/30 pl-4 py-1 hover:border-[#0d5c56] transition-colors duration-200">
                          <p className="font-sans font-bold text-sm text-[#0d5c56] leading-snug">
                            {source.title}
                          </p>
                          <p className="text-xs text-[#muted-foreground] mt-1">
                            {source.description}
                          </p>
                          {source.url && (
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] font-sans text-[#e06a3b] hover:text-[#0d5c56] mt-2 font-semibold transition-colors duration-150"
                            >
                              <LinkIcon className="h-3 w-3" /> View Archive Record
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Secondary Sources */}
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-[#0d5c56] font-bold flex items-center gap-2 border-b border-[#border] pb-2 mb-6">
                      <FileText className="h-4 w-4 text-[#e06a3b]" /> Secondary Literature
                    </h3>
                    <ul className="space-y-6">
                      {activeSection.secondarySources?.map((source, idx) => (
                        <li key={idx} className="group border-l-2 border-[#e06a3b]/30 pl-4 py-1 hover:border-[#e06a3b] transition-colors duration-200">
                          <p className="font-sans font-bold text-sm text-[#1f2421] leading-snug">
                            {source.title}
                          </p>
                          <p className="text-xs text-[#muted-foreground] mt-1">
                            {source.description}
                          </p>
                          {source.url && (
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] font-sans text-[#0d5c56] hover:text-[#e06a3b] mt-2 font-semibold transition-colors duration-150"
                            >
                              <LinkIcon className="h-3 w-3" /> View Literature Record
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Right Archival Media Sidebar Column */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-36">
              
              {/* Main Archival Image Card */}
              {activeSection.image && (
                <div className="bg-[#faf8f2] border border-[#border] p-3 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative overflow-hidden group rounded-sm bg-black/5 aspect-[4/3] flex items-center justify-center">
                    <img
                      src={activeSection.image.src}
                      alt={activeSection.image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-[1.1]"
                    />
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#border]/50">
                    <span className="font-sans text-[10px] uppercase tracking-wider text-[#e06a3b] font-bold block mb-1">
                      Archival Document
                    </span>
                    <p className="text-xs text-[#muted-foreground] leading-relaxed italic text-justify">
                      {activeSection.image.caption}
                    </p>
                  </div>
                </div>
              )}

              {/* Secondary Archival Image (e.g. on Activism page) */}
              {activeSection.secondaryImage && (
                <div className="bg-[#faf8f2] border border-[#border] p-3 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative overflow-hidden group rounded-sm bg-black/5 aspect-[4/3] flex items-center justify-center">
                    <img
                      src={activeSection.secondaryImage.src}
                      alt={activeSection.secondaryImage.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-[1.1]"
                    />
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#border]/50">
                    <span className="font-sans text-[10px] uppercase tracking-wider text-[#0d5c56] font-bold block mb-1">
                      Lobbying & Advocacy
                    </span>
                    <p className="text-xs text-[#muted-foreground] leading-relaxed italic text-justify">
                      {activeSection.secondaryImage.caption}
                    </p>
                  </div>
                </div>
              )}

              {/* Educational Context Panel */}
              <div className="bg-[#0d5c56]/5 border border-[#0d5c56]/15 p-5 rounded-sm">
                <h4 className="font-sans text-xs uppercase tracking-widest text-[#0d5c56] font-bold mb-2">
                  Historical Context
                </h4>
                <p className="text-xs text-[#1f2421]/80 leading-relaxed text-justify">
                  {activeSectionId === "thesis" && "Founded in October 1966, the National Organization for Women was created by 28 women who sought to bring women into full participation in the mainstream of American society."}
                  {activeSectionId === "background" && "The mid-20th century witnessed legal constraints where women could not obtain credit cards, buy houses, or enter certain professions without a male co-signer."}
                  {activeSectionId === "reform" && "The 1970s represented a massive spike in legislative pressure, as NOW championed the Equal Rights Amendment and equal educational opportunities under Title IX."}
                  {activeSectionId === "workplace" && "Title VII of the 1964 Civil Rights Act originally had sex-based discrimination added as a joke or poison pill, but feminist groups ensured its active enforcement."}
                  {activeSectionId === "reproductive" && "NOW's reproductive campaign was foundational, establishing legal funds to support women and clinics against blockades and legislative restrictions."}
                  {activeSectionId === "activism" && "From the 1970 Women's Strike to international solidarity campaigns, public marches served as NOW's most visible and powerful democratic tool."}
                  {activeSectionId === "interview" && "Oral histories like Beverly Morgan's connect broad societal trends with local realities, highlighting the domestic, professional, and financial struggles of the era."}
                  {activeSectionId === "criticism" && "Scholars like Katherine Turk emphasize that while NOW was highly successful, its initial leadership was primarily white and middle-class, prompting intersectional critiques."}
                  {activeSectionId === "conclusion" && "The structural foundations laid down by second-wave feminists directly enable contemporary gender conversations, legal protections, and professional opportunities."}
                  {activeSectionId === "sources" && "This project relies heavily on archival materials from the Library of Congress and first-hand oral history records to maintain historical integrity."}
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* 59. Previous and Next Navigation at the Bottom of Pages */}
      <footer className="bg-[#0a4d47] text-[#faf8f2] border-t border-[#e06a3b]/30 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Previous Button */}
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`w-full sm:w-auto font-sans text-xs uppercase tracking-wider px-5 py-2 flex items-center justify-center gap-2 border-[#faf8f2]/20 text-[#faf8f2] hover:bg-[#0d5c56] hover:text-[#faf8f2] transition-all duration-200 ${
                activeIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeft className="h-4 w-4" /> Previous: {activeIndex > 0 ? SECTIONS[activeIndex - 1].shortTitle : "Start"}
            </Button>

            {/* Page indicator */}
            <span className="font-sans text-xs text-[#faf8f2]/60 font-medium">
              Page {activeIndex + 1} of {SECTIONS.length}
            </span>

            {/* Next Button */}
            <Button
              variant="outline"
              onClick={handleNext}
              disabled={activeIndex === SECTIONS.length - 1}
              className={`w-full sm:w-auto font-sans text-xs uppercase tracking-wider px-5 py-2 flex items-center justify-center gap-2 border-[#faf8f2]/20 text-[#faf8f2] hover:bg-[#0d5c56] hover:text-[#faf8f2] transition-all duration-200 ${
                activeIndex === SECTIONS.length - 1 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              Next: {activeIndex < SECTIONS.length - 1 ? SECTIONS[activeIndex + 1].shortTitle : "End"} <ChevronRight className="h-4 w-4" />
            </Button>

          </div>

          <div className="mt-8 pt-6 border-t border-[#faf8f2]/10 text-center">
            <p className="text-[10px] sm:text-xs text-[#faf8f2]/40 font-sans">
              © 2026 Lilah Pantallion & Lila Morgan. Created for National History Day. All archival materials sourced from the Library of Congress.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
