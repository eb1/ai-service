CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  copysource INTEGER,
  wrapusfm INTEGER,
  stopatboundaries INTEGER,
  alloweditblanksp INTEGER,
  showtranslationchecks INTEGER,
  defaultfttarget INTEGER,
  uilang INTEGER,
  darkmode INTEGER,
  bookmarks [],
  wordspacing INTEGER
);