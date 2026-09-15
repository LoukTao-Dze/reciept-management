import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';
import { SupabaseService } from '../../database/supabase/supabase.service';

describe('MenusController', () => {
  let controller: MenusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenusController],
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

    controller = module.get<MenusController>(MenusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
