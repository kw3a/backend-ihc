import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('level')
      table.string('mode')
      table.integer('duration')
      table.string('doc_url')
      table.string('image_url')
      table.integer('cost')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
