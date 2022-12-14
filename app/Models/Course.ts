import { DateTime } from 'luxon'
import { 
  BaseModel, 
  column, 
} from '@ioc:Adonis/Lucid/Orm'

export default class Course extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public level: string

  @column()
  public mode: string

  @column()
  public duration: number

  @column()
  public doc_url: string

  @column()
  public image_url: string

  @column()
  public area: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
