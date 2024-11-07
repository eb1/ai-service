import { Book } from './Book'
import { Bookmark } from './Bookmark'
import { Chapter } from './Chapter'
import { Project } from './Project'
import { Sourcephrase } from './Sourcephrase'
import { Targetunit } from './Targetunit'
import { User } from './User'
  
interface EntityTypes  {
  Book: Book
    Bookmark: Bookmark
    Chapter: Chapter
    Project: Project
    Sourcephrase: Sourcephrase
    Targetunit: Targetunit
    User: User
}
  
export { EntityTypes, Book, Bookmark, Chapter, Project, Sourcephrase, Targetunit, User }