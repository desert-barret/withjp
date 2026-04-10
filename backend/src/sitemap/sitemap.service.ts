import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../courses/course.entity';
import { Post } from '../blog/post.entity';

@Injectable()
export class SitemapService {
  constructor(
    @InjectRepository(Course)
    private courseRepo: Repository<Course>,
    @InjectRepository(Post)
    private postRepo: Repository<Post>,
  ) {}

  async generate(): Promise<string> {
    const baseUrl = 'https://withjp.ai';
    const now = new Date().toISOString().split('T')[0];

    const courses = await this.courseRepo.find({
      where: { active: true },
      select: ['slug', 'updatedAt'],
    });

    const posts = await this.postRepo.find({
      where: { published: true },
      select: ['slug', 'updatedAt'],
    });

    const staticPages = [
      { loc: '/', priority: '1.0', changefreq: 'weekly' },
      { loc: '/about', priority: '0.8', changefreq: 'monthly' },
      { loc: '/whatsapp', priority: '0.9', changefreq: 'monthly' },
      { loc: '/academia', priority: '0.8', changefreq: 'weekly' },
      { loc: '/cursos', priority: '0.8', changefreq: 'weekly' },
      { loc: '/blog', priority: '0.7', changefreq: 'weekly' },
      { loc: '/legal/privacidad', priority: '0.3', changefreq: 'yearly' },
      { loc: '/legal/terminos', priority: '0.3', changefreq: 'yearly' },
      { loc: '/legal/cookies', priority: '0.3', changefreq: 'yearly' },
      { loc: '/legal/whatsapp-policy', priority: '0.3', changefreq: 'yearly' },
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

    for (const page of staticPages) {
      xml += `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es${page.loc}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${page.loc}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.loc}"/>
  </url>
`;
    }

    for (const course of courses) {
      if (!course.slug) continue;
      const lastmod = course.updatedAt
        ? new Date(course.updatedAt).toISOString().split('T')[0]
        : now;
      xml += `  <url>
    <loc>${baseUrl}/cursos/${course.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es/cursos/${course.slug}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/cursos/${course.slug}"/>
  </url>
`;
    }

    for (const post of posts) {
      const lastmod = post.updatedAt
        ? new Date(post.updatedAt).toISOString().split('T')[0]
        : now;
      xml += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es/blog/${post.slug}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/blog/${post.slug}"/>
  </url>
`;
    }

    xml += '</urlset>';
    return xml;
  }
}
