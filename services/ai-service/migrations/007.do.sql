CREATE TABLE IF NOT EXISTS bookmarks (
  id INTEGER primary key,
  bookmarkid TEXT NOT NULL UNIQUE,
  bookname TEXT,
  bookid INTEGER REFERENCES books(bookid),
  chapterid INTEGER REFERENCES chapters(chapterid),
  spid TEXT REFERENCES sourcephrases(spid),
  userid INTEGER REFERENCES users(id)
);