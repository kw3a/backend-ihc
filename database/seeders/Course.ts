import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Course from 'App/Models/Course'

export default class CourseSeeder extends BaseSeeder {
  public async run () {
    await Course.createMany([
      {
        'name': 'Diplomado en /completar',
        'level': 'Diplomado',
        'mode': 'virtual',
        'duration': 6,
        'doc_url': '/completar',
        'image_url': 'http://',
        'cost': 7000 
      },
      {
        'name': 'Diplomado en /completar',
        'level': 'Diplomado',
        'mode': 'virtual',
        'duration': 12,
        'doc_url': '/completar',
        'image_url': 'http://',
        'cost': 8000 
      },
      {
        'name': 'Diplomado en /completar',
        'level': 'Diplomado',
        'mode': 'presencial',
        'duration': 6,
        'doc_url': '/completar',
        'image_url': 'http://',
        'cost': 7500 
      },
      {
        'name': 'Maestria en /completar',
        'level': 'Maestria',
        'mode': 'presencial',
        'duration': 18,
        'doc_url': '/completar',
        'image_url': 'http://',
        'cost': 7200 
      },
      {
        'name': 'Diplomado en /completar',
        'level': 'Diplomado',
        'mode': 'hibrido',
        'duration': 6,
        'doc_url': '/completar',
        'image_url': 'http://',
        'cost': 6000 
      },
      {
        'name': 'Diplomado en /completar',
        'level': 'Diplomado',
        'mode': 'presencial',
        'duration': 12,
        'doc_url': '/completar',
        'image_url': 'http://',
        'cost': 7000 
      },
    ])
  }
}
