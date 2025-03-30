import { Test, TestingModule } from '@nestjs/testing';
import { MenuconfigController } from './menuconfig.controller';
import { MenuconfigService } from './menuconfig.service';

describe('MenuconfigController', () => {
  let controller: MenuconfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuconfigController],
      providers: [MenuconfigService],
    }).compile();

    controller = module.get<MenuconfigController>(MenuconfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
