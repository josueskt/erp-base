import { Test, TestingModule } from '@nestjs/testing';
import { MenuconfigService } from './menuconfig.service';

describe('MenuconfigService', () => {
  let service: MenuconfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuconfigService],
    }).compile();

    service = module.get<MenuconfigService>(MenuconfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
