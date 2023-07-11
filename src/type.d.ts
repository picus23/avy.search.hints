export interface GlobalSearchHintsResponse {
  filter:   Array<FilterSearchHintResponse> | undefined,
  code:     Array<CodeSearchHintResponse> | undefined,
  series:   Array<SeriesSearchHintResponse> | undefined,
  category: Array<CategorySearchHintResponse> | undefined,
  file:     Array<FileSearchHintResponse> | undefined,
}
  
export interface FilterSearchHintResponse {
  title: string,
  subtitle: string
}

export interface CodeSearchHintResponse {
  title: string,
  price: number,
  amount: number,
}

export interface SeriesSearchHintResponse {
  title: string,
  subtitle: string,
  characteristics: Array<SeriesCharacteristicsSearchHintResponse> | undefined
}

export interface SeriesCharacteristicsSearchHintResponse {
  title: string[],
  subtitle: string[],
}

export interface CategorySearchHintResponse {
  seriaId: number,
  value: string,
  value_highlighted: string
}

export interface FileSearchHintResponse {
  originName: string,
  subtitle: string,
  suggestText: string,
}

export type SearchHandler = (phrase: string, context: string|null) => void