import type { PlatformaticApp, PlatformaticDBMixin, PlatformaticDBConfig, Entity, Entities, EntityHooks } from '@platformatic/db'
import { EntityTypes, Book,Bookmark,Chapter,Project,Sourcephrase,Targetunit,User } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Book' | 'Bookmark' | 'Chapter' | 'Project' | 'Sourcephrase' | 'Targetunit' | 'User'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

interface AppEntities extends Entities {
  book: Entity<Book>,
    bookmark: Entity<Bookmark>,
    chapter: Entity<Chapter>,
    project: Entity<Project>,
    sourcephrase: Entity<Sourcephrase>,
    targetunit: Entity<Targetunit>,
    user: Entity<User>,
}

interface AppEntityHooks {
  addEntityHooks(entityName: 'book', hooks: EntityHooks<Book>): any
    addEntityHooks(entityName: 'bookmark', hooks: EntityHooks<Bookmark>): any
    addEntityHooks(entityName: 'chapter', hooks: EntityHooks<Chapter>): any
    addEntityHooks(entityName: 'project', hooks: EntityHooks<Project>): any
    addEntityHooks(entityName: 'sourcephrase', hooks: EntityHooks<Sourcephrase>): any
    addEntityHooks(entityName: 'targetunit', hooks: EntityHooks<Targetunit>): any
    addEntityHooks(entityName: 'user', hooks: EntityHooks<User>): any
}

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticDBConfig> &
      PlatformaticDBMixin<AppEntities> &
      AppEntityHooks
  }
}
