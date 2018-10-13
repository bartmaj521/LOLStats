export interface IndividualChampionResponse {
  type: string;
  format: string;
  version: string;
  data: Data;
}
export interface Data {
  Aatrox: FullChampionDto;
}
export interface FullChampionDto {
  id: string;
  key: string;
  name: string;
  title: string;
  image: Image;
  skins: (Skin)[];
  lore: string;
  blurb: string;
  allytips?: (string)[] | null;
  enemytips?: (string)[] | null;
  tags?: (string)[] | null;
  partype: string;
  info: Info;
  stats: Stats;
  spells?: (SpellsEntity)[] | null;
  passive: Passive;
  recommended?: (RecommendedEntity)[] | null;
}
export interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface Skin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}
export interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}
export interface Stats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedoffset: number;
  attackspeedperlevel: number;
}
export interface SpellsEntity {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: Leveltip;
  maxrank: number;
  cooldown?: (number)[] | null;
  cooldownBurn: string;
  cost?: (number)[] | null;
  costBurn: string;
  effect?: ((number)[] | null)[] | null;
  effectBurn?: (string | null)[] | null;
  vars?: (VarsEntity)[] | null;
  costType: string;
  maxammo: string;
  range?: (number)[] | null;
  rangeBurn: string;
  image: Image;
  resource: string;
}
export interface Leveltip {
  label?: (string)[] | null;
  effect?: (string)[] | null;
}
export interface VarsEntity {
  link: string;
  coeff: number;
  key: string;
}
export interface Passive {
  name: string;
  description: string;
  image: Image;
}
export interface RecommendedEntity {
  champion: string;
  title: string;
  map: string;
  mode: string;
  type: string;
  customTag: string;
  sortrank?: number | null;
  extensionPage: boolean;
  customPanel?: null;
  blocks?: (BlocksEntity)[] | null;
}
export interface BlocksEntity {
  type: string;
  recMath: boolean;
  recSteps: boolean;
  minSummonerLevel: number;
  maxSummonerLevel: number;
  showIfSummonerSpell: string;
  hideIfSummonerSpell: string;
  items?: (ItemsEntity)[] | null;
}
export interface ItemsEntity {
  id: string;
  count: number;
  hideCount: boolean;
}
