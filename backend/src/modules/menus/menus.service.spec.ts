import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { MenusService } from './menus.service';
import { SupabaseService } from '../../database/supabase/supabase.service';

describe('MenusService', () => {
  let service: MenusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MenusService,
        {
          provide: SupabaseService,
          useValue: { getClient: jest.fn() },
        },
        {
          provide: HttpService,
          useValue: { post: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<MenusService>(MenusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
