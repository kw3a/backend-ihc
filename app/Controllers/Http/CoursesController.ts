import Application from '@ioc:Adonis/Core/Application'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'

export default class CoursesController {
  public async index( {}: HttpContextContract){
    const res = Course.all()
    return res
  }

  public async create({request}: HttpContextContract){
    const doc = request.file('doc', {
      size: '2mb',
      extnames: ['pdf'],
    })!

    const image = request.file('image', {
      size: '2mb',
      extnames: ['png', 'jpg', 'jpeg'],
    })!

    await doc.moveToDisk('./')
    await image.moveToDisk('./')

    let doc_url = doc.fileName
    let image_url = image.fileName


    const created = await Course.create({
      'name': request.input('name'),
      'duration': request.input('duration'),
      'level': request.input('level'),
      'mode': request.input('mode'),
      'doc_url': doc_url,
      'image_url': image_url,
      'area': request.input('area')
    })

    return created

  }

  public async show({ request }: HttpContextContract) {
    const course = await Course.findOrFail(request.param('id'))
    return course
  }

  public async showFile({ params, response }) {
    
    const filePath = Application.tmpPath(`uploads/${params.id}`)
    response.download(filePath, true, (error) => {
      if (error.code === 'ENOENT') {
        return ['File does not exists', 404]
      }

      return ['Cannot download file', 400]
    })
  }
}
