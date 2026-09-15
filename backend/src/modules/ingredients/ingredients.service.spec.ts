import { Test, TestingModule } from '@nestjs/testing';
import { SupabaseService } from '../../database/supabase/supabase.service';
import { IngredientsService } from './ingredients.service';

describe('IngredientsService', () => {
  let service: IngredientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IngredientsService,
        {
          provide: SupabaseService,
          useValue: { getClient: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<IngredientsService>(IngredientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
