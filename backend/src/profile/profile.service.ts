import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) { }

  async get(): Promise<Profile> {
    let profile = await this.profileRepository.findOne({ where: { id: 1 } });
    if (!profile) {
      profile = this.profileRepository.create({
        id: 1,
        name: 'Juan Pablo Guamán Rodríguez',
        title_es: 'Arquitecto de Software & Full Stack Developer',
        title_en: 'Software Architect & Full Stack Developer',
        bio_es: 'Arquitecto de Software e Ingeniero en Sistemas con más de 10 años de experiencia. Especialista en aplicaciones de movilidad y transporte. Instructor en Udemy con más de 25,000 estudiantes y un calificación de 4.3. Apasionado por construir soluciones escalables y compartir conocimiento.',
        bio_en: 'Software Architect and Systems Engineer with 10+ years of experience. Specialist in mobility and transportation applications. Udemy instructor with 25,000+ students and a 4.3 rating. Passionate about building scalable solutions and sharing knowledge.',
        avatar_url: 'https://yt3.googleusercontent.com/XVOs1QTXzcpx_vGVfYiX4_za9ZJ0e3rdU41tN4V-_fj1Zywhz2FBd6VZNBN4MQy288YA_Z9T=s900-c-k-c0x00ffffff-no-rj',
        location_es: 'Ecuador',
        location_en: 'Ecuador',
        email: 'info@withjp.ai',
        linkedin_url: 'https://www.linkedin.com/in/desertbarret/',
        youtube_url: 'https://www.youtube.com/@jp.desertbarret',
        udemy_url: 'https://www.udemy.com/user/juan-pablo-guaman-rodriguez/',
        skills: ['Flutter', 'NestJS', 'Kotlin', 'TypeScript', 'Node.js', 'React', 'MySQL', 'Docker'],
        technologies: ['Flutter', 'NestJS', 'React', 'Next.js', 'Kotlin', 'TypeScript', 'Node.js', 'Django', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Firebase', 'Docker', 'Socket IO'],
      });
      await this.profileRepository.save(profile);
    }
    return profile;
  }

  async update(data: Partial<Profile>): Promise<Profile> {
    await this.profileRepository.update(1, data);
    return this.get();
  }
}
