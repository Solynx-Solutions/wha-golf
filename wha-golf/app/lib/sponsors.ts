// ─── Sponsor Data ─────────────────────────────────────────────────────────────
// Edit this file to update sponsors each year.
// Tier priority order: platinum → gold → silver → hole
// To add a logo: drop the image in /public and set the `logo` field to the path.
// To show a placeholder: set `logo: null`

export type SponsorTier = "platinum" | "gold" | "silver" | "hole";

export interface Sponsor {
  name: string;
  website: string;
  tier: SponsorTier;
  /** Path relative to /public (e.g. "/Evergreen_SQ.png"), or null for placeholder */
  logo: string | null;
}

export const TIER_ORDER: SponsorTier[] = ["platinum", "gold", "silver", "hole"];

// ─── 2025 Sponsors ────────────────────────────────────────────────────────────

export const sponsors: Sponsor[] = [
  // ── Platinum ──────────────────────────────────────────────────────────────
  {
    name: "Evergreen Supply",
    website: "https://evergreensupplyonline.com/",
    tier: "platinum",
    logo: "/Evergreen_SQ.png",
  },
  {
    name: "SiteOne",
    website: "https://www.siteone.com/en/",
    tier: "platinum",
    logo: "/SiteOne_SQ.png",
  },
  {
    name: "Belgard",
    website: "https://www.belgard.com/",
    tier: "platinum",
    logo: "/Belgard_SQ.png",
  },
  {
    name: "Basalite",
    website: "https://basalite.com/",
    tier: "platinum",
    logo: "/Basalite_SQ.png",
  },

  // ── Gold ──────────────────────────────────────────────────────────────────
  {
    name: "Techniseal",
    website: "https://techniseal.com/pro_en_us/",
    tier: "gold",
    logo: "/Techniseal_SQ.png",
  },
  {
    name: "Resource Building Materials",
    website: "http://www.resourcebuildingmaterials.com/",
    tier: "gold",
    logo: "/RBM_SQ.png",
  },
  {
    name: "Heritage Landscape Supply Group",
    website: "https://www.heritagelandscapesupplygroup.com/en/",
    tier: "gold",
    logo: "/Heritage_SQ.png",
  },

  // ── Silver ────────────────────────────────────────────────────────────────
  {
    name: "Pacific Builder Materials",
    website: "https://pbm1923.com/",
    tier: "silver",
    logo: "/PBM_SQ.png",
  },
  {
    name: "Acker-Stone",
    website: "https://www.ackerstone.com/",
    tier: "silver",
    logo: "/Ackerstone_SQ.png",
  },
  {
    name: "Keystone Hardscapes",
    website: "https://www.keystonehardscapes.com/",
    tier: "silver",
    logo: "/Keystone_SQ.png",
  },
  {
    name: "Garden Supply Hardscapes",
    website: "https://gardensupplyhardscapes.com/",
    tier: "silver",
    logo: "/Garden Supply_SQ.png",
  },
  {
    name: "MSI Surfaces",
    website: "https://www.msisurfaces.com/",
    tier: "silver",
    logo: "/MSI_SQ.png",
  },
  {
    name: "Alliance Gator",
    website: "https://alliancegator.com/",
    tier: "silver",
    logo: "/logo-pos-alliance-en.png",
  },

  // ── Hole ──────────────────────────────────────────────────────────────────
  {
    name: "SOLYNX",
    website: "https://solynx.solutions/",
    tier: "hole",
    logo: "/solynx-logo-v2.png",
  },
  {
    name: "Central Home Supply",
    website: "https://www.centralhomesupply.com/",
    tier: "hole",
    logo: "/Central Home Supply_SQ.png",
  },
  {
    name: "BP Pro",
    website: "https://www.bppro.biz/",
    tier: "hole",
    logo: "/BP PRO_SQ.png",
  },
  {
    name: "Aardwolf USA",
    website: "https://aardwolfusa.com/",
    tier: "hole",
    logo: "/Transparent_Aardwolf logo.png.png",
  },
  {
    name: "Bartell Global",
    website: "https://www.bartellglobal.com/",
    tier: "hole",
    logo: "/Bartell_SQ.png",
  },
  {
    name: "Terra Stone",
    website: "https://terrastoneco.com/",
    tier: "hole",
    logo: "/Terra Stone_SQ.png",
  },
];
