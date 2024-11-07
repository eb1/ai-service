/**
 * User
 * A User
 */
declare interface User {
    id?: number;
    alloweditblanksp?: number | null;
    bookmarks?: string | null;
    copysource?: number | null;
    createdAt?: string | null;
    darkmode?: number | null;
    defaultfttarget?: number | null;
    password: string;
    showtranslationchecks?: number | null;
    stopatboundaries?: number | null;
    uilang?: number | null;
    username: string;
    wordspacing?: number | null;
    wrapusfm?: number | null;
}
export { User };
