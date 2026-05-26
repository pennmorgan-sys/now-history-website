import { useState, useEffect } from "react";
import { SECTIONS, PageSection } from "../lib/content";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [activeSectionId, setActiveSectionId] = useState<string>("thesis");

  // Scroll to top of page when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      {/* Top Header & Navigation Bar */}
      <header className="bg-[#2f6c68] text-[#faf8f2] shadow-md sticky top-0 z-50">
        {/* Title Bar */}
        <div className="max-w-7xl mx-auto px-4 py-2.5 text-center md:text-left">
          <p className="font-sans font-semibold text-xs sm:text-sm tracking-tight text-[#faf8f2]/90 leading-tight">
            How the National Organization for Women Drove Social Reform During Second Wave Feminism
          </p>
        </div>

        {/* Tabbed Navigation Bar */}
        <div className="border-t border-[#faf8f2]/10 overflow-x-auto scrollbar-none bg-[#1e4b47]">
          <nav className="max-w-7xl mx-auto px-4 flex space-x-1 sm:space-x-1.5 py-1.5">
            {SECTIONS.map((section) => {
              const isActive = section.id === activeSectionId;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`px-3 py-1 rounded-sm text-[11px] sm:text-xs font-sans font-medium transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? "bg-[#faf8f2] text-[#2f6c68] font-semibold shadow-sm"
                      : "text-[#faf8f2]/80 hover:text-[#faf8f2] hover:bg-[#2f6c68]/40"
                  }`}
                >
                  {section.shortTitle}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Thin Burnt Orange Accent Line */}
        <div className="h-[3px] bg-[#d28a2d] w-full" />
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Render Thesis Hero Section if active */}
        {activeSectionId === "thesis" ? (
          <div className="space-y-8">
            {/* Title / Thesis Page Hero block */}
            <div className="relative w-full border border-[#border] rounded-sm overflow-hidden bg-black">
              {/* Archival Protest Image */}
              <div className="aspect-[16/9] w-full relative">
                <img
                  src={activeSection.image?.src}
                  alt={activeSection.image?.alt}
                  className={`w-full h-full object-cover ${
                    activeSectionId === "thesis" ? "filter grayscale contrast-125 brightness-95" : "brightness-95"
                  }`}
                />
                {/* Subtle Teal Overlay */}
                <div className="absolute inset-0 bg-[#2f6c68]/30 mix-blend-multiply" />
                
                {/* White Serif Title placed over the image */}
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-12 text-center bg-black/25">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#faf8f2] leading-tight max-w-3xl drop-shadow-md">
                    How the National Organization for Women Drove Social Reform During Second Wave Feminism
                  </h1>
                </div>
              </div>
            </div>

            {/* Introductory text below hero */}
            <div className="bg-[#faf8f2] p-2 sm:p-4 space-y-6">
              {activeSection.paragraphs.map((para, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#1f2421] leading-relaxed text-justify">
                  {para}
                </p>
              ))}
            </div>

            {/* Archival Image Caption directly below the introductory section */}
            {activeSection.image && (
              <div className="text-center pt-4 border-t border-[#border]/40">
                <p className="text-xs text-[#muted-foreground] italic">
                  {activeSection.imageCaption}
                </p>
              </div>
            )}
          </div>
        ) : (
          /* General Chapter Page Layout matching screenshots */
          <div className="space-y-8">
            {/* Chapter Heading */}
            <div className="border-b border-[#border] pb-4">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#2f6c68]">
                {activeSection.title}
              </h2>
            </div>

            {/* Page Archival Image */}
            {activeSection.image && (
              <div className="border border-[#border] p-2 bg-white rounded-sm shadow-sm max-w-2xl mx-auto">
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-black/5">
                  <img
                    src={activeSection.image.src}
                    alt={activeSection.image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center pt-2.5 mt-2 border-t border-[#border]/30">
                  <p className="text-xs text-[#muted-foreground] italic">
                    {activeSection.imageCaption}
                  </p>
                </div>
              </div>
            )}

            {/* Chapter Paragraphs */}
            <div className="space-y-6 prose prose-stone max-w-none">
              {activeSection.paragraphs.map((para, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#1f2421] leading-relaxed text-justify">
                  {para}
                </p>
              ))}
            </div>

            {/* Specific Quote styling for Beverly Morgan Interview */}
            {activeSection.quotes && activeSection.quotes.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-[#border]/40 max-w-2xl mx-auto">
                {activeSection.quotes.map((quote, idx) => (
                  <div key={idx} className="border-l-4 border-[#e06a3b] pl-4 py-1 bg-white/50 p-4 rounded-r-sm border border-l-0 border-[#border]/30">
                    <p className="text-sm sm:text-base italic text-[#1f2421] leading-relaxed">
                      “{quote.text}”
                    </p>
                    <p className="text-xs text-[#muted-foreground] mt-2 font-sans font-semibold">
                      — {quote.author}, {quote.context}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Sources List if on Sources section */}
            {activeSectionId === "sources" && (
              <div className="space-y-8 pt-4">
                {/* Primary Sources */}
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-[#e06a3b] font-bold border-b border-[#border] pb-2 mb-4">
                    Primary
                  </h3>
                  <ul className="space-y-4">
                    {activeSection.primarySources?.map((source, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-[#1f2421] leading-relaxed">
                        <span className="font-semibold text-[#0d5c56]">{source.title}</span> {source.description}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Secondary Sources */}
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-[#0d5c56] font-bold border-b border-[#border] pb-2 mb-4">
                    Secondary
                  </h3>
                  <ul className="space-y-4">
                    {activeSection.secondarySources?.map((source, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-[#1f2421] leading-relaxed">
                        <span className="font-semibold text-[#0d5c56]">{source.title}</span> {source.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Previous and Next Navigation at the Bottom of Pages */}
        <div className="mt-12 pt-6 border-t border-[#border] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`w-full sm:w-auto font-sans text-xs uppercase tracking-wider px-4 py-2 border-[#2f6c68]/20 text-[#2f6c68] hover:bg-[#2f6c68] hover:text-[#faf8f2] transition-colors duration-150 ${
              activeIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            ← {activeIndex > 0 ? SECTIONS[activeIndex - 1].shortTitle : "Start"}
          </Button>

          <span className="font-sans text-xs text-[#muted-foreground] font-medium">
            Page {activeIndex + 1} of {SECTIONS.length}
          </span>

          <Button
            variant="outline"
            onClick={handleNext}
            disabled={activeIndex === SECTIONS.length - 1}
            className={`w-full sm:w-auto font-sans text-xs uppercase tracking-wider px-4 py-2 border-[#2f6c68]/20 text-[#2f6c68] hover:bg-[#2f6c68] hover:text-[#faf8f2] transition-colors duration-150 ${
              activeIndex === SECTIONS.length - 1 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            {activeIndex < SECTIONS.length - 1 ? SECTIONS[activeIndex + 1].shortTitle : "End"} →
          </Button>
        </div>
      </main>

      {/* Page Footer */}
      <footer className="bg-[#2f6c68] text-[#faf8f2] py-6 border-t border-[#d28a2d]/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
          <p className="text-xs sm:text-sm font-sans font-medium">
            Lilah Pantallion & Lila Morgan
          </p>
          <p className="text-[10px] sm:text-xs text-[#faf8f2]/60 font-sans">
            National History Day 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
