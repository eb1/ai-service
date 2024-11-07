/**
 * Chapter
 * A Chapter
 */
declare interface Chapter {
    id?: number;
    bookid?: string | null;
    chapterid: string;
    lastadapted?: number | null;
    name?: string | null;
    projectid?: string | null;
    versecount?: number | null;
}
export { Chapter };
