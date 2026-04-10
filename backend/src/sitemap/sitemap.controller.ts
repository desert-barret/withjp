import { Controller, Get, Header } from '@nestjs/common';
import { SitemapService } from './sitemap.service';

@Controller()
export class SitemapController {
  constructor(private service: SitemapService) {}

  @Get('sitemap.xml')
  @Header('Content-Type', 'application/xml')
  @Header('Cache-Control', 'public, max-age=3600')
  getSitemap() {
    return this.service.generate();
  }
}
