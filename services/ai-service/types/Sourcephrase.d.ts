/**
 * Sourcephrase
 * A Sourcephrase
 */
declare interface Sourcephrase {
    id?: number;
    chapterid?: string | null;
    flags?: string | null;
    follpuncts?: string | null;
    freetrans?: string | null;
    gloss?: string | null;
    markers?: string | null;
    midpuncts?: string | null;
    norder?: number | null;
    note?: string | null;
    orig?: string | null;
    prepuncts?: string | null;
    source?: string | null;
    spid: string;
    srcwordbreak?: string | null;
    target?: string | null;
    texttype?: number | null;
    tgtwordbreak?: string | null;
    vid?: string | null;
}
export { Sourcephrase };
