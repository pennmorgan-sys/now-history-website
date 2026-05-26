// Image mapping for Lilah & Lila's NOW History Website
// These images are extracted directly from the user's PDF plan and stored in /home/ubuntu/now_site_assets
// We uploaded them using `manus-upload-file --webdev` and reference them here.

export interface ArchivalImage {
  src: string;
  caption: string;
  alt: string;
}

export const ARCHIVAL_IMAGES = {
  // Page 1: Early members and supporters of NOW during second wave feminism.
  homepageHero: {
    src: "/manus-storage/pdf_image-000_c6e78568.png",
    caption: "Early members and supporters of the National Organization for Women (NOW) gather to advocate for equal rights.",
    alt: "Early members and supporters of NOW during second-wave feminism."
  },
  // Page 3: Betty Friedan, one of the founders of the National Organization for Women
  bettyFriedan: {
    src: "/manus-storage/pdf_image-001_676757b5.png",
    caption: "Betty Friedan, pioneering feminist, author of 'The Feminine Mystique', and co-founder of the National Organization for Women.",
    alt: "Betty Friedan, one of the founders of the National Organization for Women"
  },
  // Page 4: Poster promoting the Women’s Strike for Equality protest.
  womensStrikePoster: {
    src: "/manus-storage/pdf_image-002_5644beb8.png",
    caption: "Archival poster promoting the historic 'Women's Strike for Equality' protest organized by NOW on August 26, 1970.",
    alt: "Poster promoting the Women’s Strike for Equality protest."
  },
  // Page 5: NOW feminists protesting for the Equal Rights Amendment in Washing, D.C.
  eraProtest: {
    src: "/manus-storage/pdf_image-003_0543f4ae.png",
    caption: "NOW feminists and allies rally in Washington, D.C., demanding the ratification of the Equal Rights Amendment (ERA).",
    alt: "NOW feminists protesting for the Equal Rights Amendment in Washington, D.C."
  },
  // Page 6: NOW protestors advocating for reproductive rights during second wave feminism.
  reproductiveRightsProtest: {
    src: "/manus-storage/pdf_image-004_749df909.png",
    caption: "NOW demonstrators assemble to advocate for reproductive freedom, birth control access, and bodily autonomy.",
    alt: "NOW protestors advocating for reproductive rights during second-wave feminism."
  },
  // Page 7: NOW activists used demonstrations and public protests to raise awareness about gender inequality.
  activismProtest: {
    src: "/manus-storage/pdf_image-005_e4f6b8ed.png",
    caption: "Activists carry signs during a public demonstration organized by NOW to highlight systemic gender inequality.",
    alt: "NOW activists using demonstrations and public protests to raise awareness."
  },
  // Page 8: Betty Friedan lobbying and advocating for stronger legal protections to government officials.
  bettyLobbying: {
    src: "/manus-storage/pdf_image-006_dea73dc0.png",
    caption: "Betty Friedan lobbies government officials and advocates for stronger legal protections and enforcement of anti-discrimination laws.",
    alt: "Betty Friedan lobbying and advocating for stronger legal protections to government officials."
  },
  // Page 8/9: Beverly Morgan photo on the Interview page
  beverlyMorgan: {
    src: "/manus-storage/pasted_file_h81DzV_IMG_8108_a63f09e9.jpeg",
    caption: "Beverly Morgan",
    alt: "Beverly Morgan Interview Photo"
  },
  // Page 10: NOW supporters protesting to protect reproductive rights in the United States
  conclusionProtest: {
    src: "/manus-storage/pdf_image-008_4911a0a1.png",
    caption: "NOW supporters rally to protect reproductive rights and maintain the legal precedents established during second-wave feminism.",
    alt: "NOW supporters protesting to protect reproductive rights in the United States"
  }
};
