// Full content database for Lilah & Lila's NOW History Website
// Hyphenated 'second-wave feminism' throughout to respect preferences.

import { ARCHIVAL_IMAGES, ArchivalImage } from "./images";

export interface PageSection {
  id: string;
  title: string;
  shortTitle: string;
  heroTitle?: string;
  content: string[];
  image?: ArchivalImage;
  secondaryImage?: ArchivalImage;
  quotes?: { text: string; author: string; context?: string }[];
  primarySources?: { title: string; description: string; url?: string }[];
  secondarySources?: { title: string; description: string; url?: string }[];
}

export const SECTIONS: PageSection[] = [
  {
    id: "thesis",
    title: "How the National Organization for Women Drove Social Reform During Second-Wave Feminism",
    shortTitle: "Thesis",
    heroTitle: "How the National Organization for Women Drove Social Reform During Second-Wave Feminism",
    image: ARCHIVAL_IMAGES.homepageHero,
    content: [
      "Second-wave feminism was a movement from the 1960s to the 1980s that focused on expanding women’s rights in areas such as workplace equality, reproductive rights, and political representation. One of the most important organizations involved in this movement was the National Organization for Women, otherwise known as NOW, which was founded in 1966 and is still active today. NOW used protests, political activism, legal action, and public pressure to fight for equal opportunities for women in the United States.",
      "This website explores how NOW drove social reform during second-wave feminism through workplace equality, reproductive rights activism, protests, and political advocacy, while also examining criticisms."
    ]
  },
  {
    id: "background",
    title: "Why NOW was Created",
    shortTitle: "Background",
    image: ARCHIVAL_IMAGES.bettyFriedan,
    content: [
      "During the 1960s, women faced discrimination in many areas of society. Women were often paid less than men, had fewer job opportunities, and experienced discrimination in education and the workplace. The Civil Rights Movement inspired many women to become more politically active and fight for equal rights.",
      "NOW was founded in 1966 by activists, including Betty Friedan, to fight for women’s equality through political action and legal reform. The organization focused on changing laws and public attitudes surrounding gender equality."
    ],
    quotes: [
      {
        text: "The movement grew from frustration with discrimination and inequality women were constantly experiencing within society.",
        author: "Jo Freeman",
        context: "The Origins of the Women’s Liberation Movement"
      },
      {
        text: "Second-wave feminism significantly changed American society by challenging traditional gender roles and expanding opportunities for women.",
        author: "Sara Evans",
        context: "Re-Viewing the Second Wave"
      }
    ]
  },
  {
    id: "reform",
    title: "Social Reform & Political Organization",
    shortTitle: "Reform",
    image: ARCHIVAL_IMAGES.womensStrikePoster,
    content: [
      "The National Organization for Women helped create social reform during second-wave feminism by fighting for equal rights and opportunities for women in the United States. NOW focused on issues such as workplace equality, reproductive rights, and political representation.",
      "Through protests, legal action, lobbying, and public activism, the organization helped bring attention to discrimination women faced in society. NOW pushed for stronger enforcement of anti-discrimination laws and supported equal pay and better job opportunities for women.",
      "The organization also advocated for reproductive rights and supported legal efforts connected to abortion rights and birth control access. Public protests and demonstrations organized by NOW helped spread awareness and pressure politicians to support women’s rights legislation.",
      "These efforts helped create long-term social and political changes for women in the United States. Although NOW faced criticism and opposition, the organization still played a major role in expanding women’s rights and changing public conversation about gender equality."
    ],
    quotes: [
      {
        text: "Feminist organizations became more politically organized during this period and worked to influence laws and public policy.",
        author: "Nancy F. Cott",
        context: "Feminist Politics in the 1970s"
      }
    ]
  },
  {
    id: "workplace",
    title: "Workplace Equality",
    shortTitle: "Workplace",
    image: ARCHIVAL_IMAGES.eraProtest,
    content: [
      "One major goal of NOW was improving workplace equality for women. Women often faced discrimination in hiring, promotions, and wages. NOW pushed for equal opportunities and stronger enforcement of anti-discrimination laws.",
      "NOW helped pressure the government to enforce Title VII of the Civil Rights Act, which prohibited workplace discrimination based on sex.",
      "The organization also supported equal pay and better career opportunities for women. Through protests, lobbying, and public activism, NOW helped increase awareness about workplace discrimination and pushed for social reform."
    ],
    quotes: [
      {
        text: "Feminist organizations became more politically organized during this period and worked to influence laws and public policy.",
        author: "Nancy F. Cott",
        context: "Feminist Politics in the 1970s"
      }
    ]
  },
  {
    id: "reproductive",
    title: "Reproductive Rights",
    shortTitle: "Reproductive Rights",
    image: ARCHIVAL_IMAGES.reproductiveRightsProtest,
    content: [
      "NOW also played an important role in reproductive rights activism during second-wave feminism. The organization advocated for women’s access to birth control and abortions.",
      "NOW supported legal efforts connected to reproductive freedom and argued that women should have greater control over decisions involving their own bodies. Reproductive rights became one of the most controversial issues connected to second-wave feminism.",
      "The Supreme Court case 'National Organization for Women, Inc. v. Scheidler' demonstrates NOW’s involvement in legal activism connected to abortion rights and protests. Through legal action and political advocacy, NOW helped influence conversations about reproductive rights in the United States."
    ]
  },
  {
    id: "activism",
    title: "Political Activism & Protests",
    shortTitle: "Activism",
    image: ARCHIVAL_IMAGES.activismProtest,
    secondaryImage: ARCHIVAL_IMAGES.bettyLobbying,
    content: [
      "NOW used protests, marches, demonstrations, and political activism to create social change. Public demonstrations helped raise awareness about gender inequality and pressured politicians to support women’s rights legislation.",
      "One important primary source is Bernard Gotfryd’s photograph 'N.O.W. demonstration for Iranian women’s rights' from 1979. The image shows NOW members participating in protests supporting women’s rights internationally. This demonstrates how NOW used activism and public demonstrations to spread awareness and encourage reform.",
      "The 'Women’s Strike, August 26' image also shows how feminist organizations organized large public protests demanding equality for women. These demonstrations helped bring attention to issues such as equal pay, discrimination, and reproductive rights.",
      "NOW also supported the Equal Rights Amendment and worked to influence lawmakers through lobbying and political pressure."
    ]
  },
  {
    id: "interview",
    title: "Beverly Morgan Interview",
    shortTitle: "Interview",
    image: ARCHIVAL_IMAGES.beverlyMorgan,
    content: [
      "This interview with Beverly Morgan provides a personal perspective from someone who supported the National Organization for Women during second-wave feminism. Her experiences demonstrate discrimination many women faced during the 1950s–1980s and help explain why feminist activism became so important.",
      "During this interview, Morgan explained that one of the issues that mattered most to her was 'equal pay for equal work.' She described how women were often treated unfairly even when they had a career and their own income. While discussing her experiences, she shared a story about attempting to buy furniture, but the store refused to let her make payments without her husband signing for it. Morgan states, 'My husband had to come and sign for it…why is his credit more worthy than mine?' This experience demonstrates the unequal treatment women experienced during this time period.",
      "Morgan also discussed how limited women’s opportunities were before second-wave feminism expanded women’s rights. She explained, 'In my generation, you were either a nun, a nurse, or a teacher,' showing how restricted career opportunities were for women at the time. She later became the first female sales manager in her company, but explained that some male coworkers reacted negatively to women entering leadership positions. Morgan stated that one man 'was really mad that I got the manager’s position, and he didn’t get it,' and eventually quit the company after she was promoted.",
      "She also described backlash against feminism and women in leadership positions, explaining that 'there was a lot of slander' directed toward feminists. Morgan explained that some people believed women should not have careers or leadership positions because those roles traditionally belonged to men. Even members of her own family held these beliefs. After receiving her management position, Morgan recalled that her father told her, 'You ought to be ashamed of yourself, taking that job away from a man.'",
      "Despite these challenges, Morgan believed feminist activism helped create long-term social change for women in the United States. Reflecting on the impact of the movement, she states, 'We kind of laid the groundwork for women to have a job and a family.' Her interview helps connect historical research to real experiences and demonstrates how second-wave feminism and NOW influenced opportunities, expectations, and rights for women in American society."
    ],
    quotes: [
      {
        text: "In my generation, you were either a nun, a nurse, or a teacher.",
        author: "Beverly Morgan",
        context: "On career limitations for women"
      },
      {
        text: "You ought to be ashamed of yourself, taking that job away from a man.",
        author: "Beverly Morgan's father",
        context: "After she received her management position"
      },
      {
        text: "We kind of laid the groundwork for women to have a job and a family.",
        author: "Beverly Morgan",
        context: "Reflecting on the impact of second-wave feminism"
      }
    ]
  },
  {
    id: "criticism",
    title: "Criticism of the Movement",
    shortTitle: "Criticism",
    content: [
      "Although NOW helped create major social reform, the movement was not without criticism. Some historians and activists argued that NOW mainly represented middle-class women and did not fully address issues reflecting women of color or working-class women.",
      "Katherine Turk explains in 'The Women of NOW' that there are disagreements within the organization about race, sexuality, and political strategy. These conflicts demonstrate that social reforms are often complicated and involve different perspectives.",
      "Even though NOW faced criticism, the organization still played a major role in expanding women’s rights and influencing public discussions about gender equality."
    ],
    quotes: [
      {
        text: "Disagreements within the organization about race, sexuality, and political strategy demonstrate that social reforms are often complicated and involve different perspectives.",
        author: "Katherine Turk",
        context: "The Women of NOW"
      }
    ]
  },
  {
    id: "conclusion",
    title: "Conclusion",
    shortTitle: "Conclusion",
    image: ARCHIVAL_IMAGES.conclusionProtest,
    content: [
      "The National Organization for Women played a major role in driving social reform during second-wave feminism. Through workplace equality activism, reproductive rights advocacy, protests, and political organizing, NOW helped expand opportunities and rights for women in the United States.",
      "Although the movement faced criticism and internal disagreements, NOW still influenced laws, public opinion, and conversations about gender equality that continue today. The organization’s activism demonstrates how a political movement and public pressure can create long-term social change."
    ]
  },
  {
    id: "sources",
    title: "Sources & Bibliography",
    shortTitle: "Sources",
    content: [
      "The following primary and secondary sources were utilized to construct this historical analysis of the National Organization for Women and its impact on second-wave feminism."
    ],
    primarySources: [
      {
        title: "Gotfryd, Bernard, Photographer. N.O.W. demonstration for Iranian women’s rights.",
        description: "New York, New York State, United States, 1979. Photograph. Library of Congress.",
        url: "https://www.loc.gov/item/2020737318/"
      },
      {
        title: "Rehnquist, William H., and Supreme Court of the United States. U.S. Reports: National Organization for Women, Inc. v. Scheidler, 510 U.S. 249.",
        description: "1993. Government document. Library of Congress.",
        url: "https://www.loc.gov/item/usrep510249/"
      },
      {
        title: "August 26 Women’s Strike Committee, Sponsor/Advertiser. Women’s Strike, August 26.",
        description: "New York, United States, New York State, 1971. Photograph. Library of Congress.",
        url: "https://www.loc.gov/item/2015648058/"
      },
      {
        title: "Friedan, Betty. Photograph. 1975.",
        description: "Library of Congress Prints and Photographs Division.",
        url: "https://www.loc.gov/pictures/item/96502198/"
      },
      {
        title: "Morgan, Beverly. Interview by Lila Morgan and Lilah Pantallion.",
        description: "Conducted May 2026. Oral History Transcript."
      }
    ],
    secondarySources: [
      {
        title: "Freeman, Jo. 1973. “The Origins of the Women’s Liberation Movement.”",
        description: "American Journal of Sociology 78, no. 4: 792–811.",
        url: "https://www.jstor.org/stable/189984"
      },
      {
        title: "Evans, Sara M. 1995. “Re-Viewing the Second Wave.”",
        description: "Feminist Studies 21, no. 3: 533–540.",
        url: "https://www.jstor.org/stable/3178740"
      },
      {
        title: "Cott, Nancy F. 1987. “Feminist Politics in the 1970s.”",
        description: "Signs 12, no. 4: 809–815.",
        url: "https://www.jstor.org/stable/1407409"
      },
      {
        title: "“National Organization for Women Forms to Protect Women’s Rights.” n.d.",
        description: "EBSCO Research Starters. Accessed May 11, 2026.",
        url: "https://www.ebsco.com/research-starters/women-s-studies-and-feminism/national-organization-women-forms-protect-womens"
      },
      {
        title: "Turk, Katherine. 2023. The Women of NOW: How Feminists Built an Organization That Transformed America.",
        description: "New York: Farrar, Straus and Giroux."
      },
      {
        title: "National Organization for Women. “The Intertwining History of NOW and the ERA.”",
        description: "Accessed May 24, 2026.",
        url: "https://now.org/the-intertwining-history-of-now-and-the-era/"
      },
      {
        title: "“About NOW.” National Organization for Women.",
        description: "Accessed May 24, 2026.",
        url: "https://now.org/about/"
      },
      {
        title: "“Women’s Movement.” Encyclopaedia Britannica.",
        description: "Accessed May 24, 2026.",
        url: "https://www.britannica.com/event/womens-movement"
      },
      {
        title: "“The Day in History the National Organization for Women Was Founded.”",
        description: "Obama White House Archives, June 30, 2015.",
        url: "https://obamawhitehouse.archives.gov/blog/2015/06/30/day-history-national-organization-women-was-founded/"
      },
      {
        title: "“National Organization for Women.” Library of Congress Exhibitions.",
        description: "Accessed May 24, 2026.",
        url: "https://www.loc.gov/exhibitions/join-in-voluntary-associations-in-america/about-this-exhibition/a-nation-of-joiners/changing-america/national-organization-for-women/"
      },
      {
        title: "“Roe v. Wade Is the Floor, Not the Ceiling.” Jewish Women’s Archive.",
        description: "Accessed May 24, 2026.",
        url: "https://jwa.org/blog/roe-v-wade-floor-not-ceiling"
      }
    ]
  }
];
