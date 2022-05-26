import { Test, TestingModule } from '@nestjs/testing';
import { SpreadsController } from './spreads.controller';
import { SpreadsService } from './spreads.service';

describe('SpreadsController', () => {
  let controller: SpreadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpreadsController],
      providers: [SpreadsService],
    }).compile();

    controller = module.get<SpreadsController>(SpreadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
