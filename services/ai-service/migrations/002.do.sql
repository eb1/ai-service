CREATE TABLE IF NOT EXISTS books (
  id INTEGER primary key, 
  bookid TEXT NOT NULL UNIQUE, 
  scrid TEXT, 
  projectid TEXT REFERENCES projects(projectid),
  name TEXT, 
  filename TEXT, 
  chapters TEXT
);
