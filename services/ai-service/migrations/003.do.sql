CREATE TABLE IF NOT EXISTS chapters (
  id INTEGER PRIMARY KEY, 
  chapterid TEXT NOT NULL UNIQUE, 
  bookid TEXT REFERENCES books(bookid), 
  projectid TEXT REFERENCES projects(projectid), 
  name TEXT, 
  lastadapted INTEGER, 
  versecount INTEGER
);