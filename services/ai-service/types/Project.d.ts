/**
 * Project
 * A Project
 */
declare interface Project {
    id?: number;
    autoCapitalization?: string | null;
    casePairs?: string | null;
    copyPunctuation?: string | null;
    customFilters?: string | null;
    filterMarkers?: string | null;
    name?: string | null;
    navDir?: string | null;
    navigationColor?: string | null;
    navigationFont?: string | null;
    navigationFontSize?: string | null;
    projectid: string;
    punctPairs?: string | null;
    retranslationColor?: string | null;
    sourceColor?: string | null;
    sourceDir?: string | null;
    sourceFont?: string | null;
    sourceFontSize?: string | null;
    sourceHasUpperCase?: string | null;
    sourceLanguageCode?: string | null;
    sourceLanguageName?: string | null;
    sourceVariant?: string | null;
    specialTextColor?: string | null;
    targetColor?: string | null;
    targetDir?: string | null;
    targetFont?: string | null;
    targetFontSize?: string | null;
    targetLanguageCode?: string | null;
    targetLanguageName?: string | null;
    targetVariant?: string | null;
    textDifferencesColor?: string | null;
}
export { Project };
