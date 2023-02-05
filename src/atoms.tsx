import { atomWithStorage, createJSONStorage } from "jotai/utils";
import type { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";

let seshStorage;
if (typeof window !== "undefined") {
  seshStorage = createJSONStorage(() => sessionStorage);
}

export const catImagesAtom = atomWithStorage<catImage[]>(
  "session",
  [],
  seshStorage as SyncStorage<catImage[]>
);

export type catImage = {
  breeds: Breed[];
  height: number;
  id: string;
  url: string;
  width: number;
};

export type Breed = {
  adaptability: number;
  affection_level: number;
  alt_names: string;
  cfa_url: string;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  child_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  id: string;
  indoor: number;
  intelligence: number;
  lap: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vcahospitals_url: string;
  vetstreet_url: string;
  vocalisation: number;
  weight: { imperial: string; metric: string };
  wikipedia_url: string;
};

export const breedListAtom = atomWithStorage<Breed[]>("breeds", []);
export const top10Atom = atomWithStorage("top10", []);
