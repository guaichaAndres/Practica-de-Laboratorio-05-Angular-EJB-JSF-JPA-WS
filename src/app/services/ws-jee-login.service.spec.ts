import { TestBed } from '@angular/core/testing';

import { WsJeeLoginService } from './ws-jee-login.service';

describe('WsJeeLoginService', () => {
  let service: WsJeeLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsJeeLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
