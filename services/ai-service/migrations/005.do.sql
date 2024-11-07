CREATE TABLE IF NOT EXISTS targetunits (
  id INTEGER primary key,
  tuid TEXT NOT NULL UNIQUE,
  projectid TEXT REFERENCES projects(projectid),
  source TEXT,
  mn INTEGER,
  f TEXT,
  refstring TEXT,
  timestamp TEXT,
  user TEXT,
  isGloss INTEGER
);