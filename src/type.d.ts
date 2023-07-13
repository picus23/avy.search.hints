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
  value: string,
  value_highlighted: string,
  image_url: string,
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
  value_highlighted: string,
  url: string,
}

export interface FileSearchHintResponse {
  fileName: string,
  suggestText: string,
  customId: string,
  originName: string,
}

export type SearchHandler = (phrase: string, context: string|null) => void