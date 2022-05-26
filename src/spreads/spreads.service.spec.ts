import { Test, TestingModule } from '@nestjs/testing';
import { SpreadsService } from './spreads.service';

describe('SpreadsService', () => {
  let service: SpreadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpreadsService],
    }).compile();

    service = module.get<SpreadsService>(SpreadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
