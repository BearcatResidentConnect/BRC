import { TestBed } from '@angular/core/testing';

import { MyuserlistingsService } from './myuserlistings.service';

describe('MyuserlistingsService', () => {
    let myuserlistingsService: MyuserlistingsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MyuserlistingsService],
        });
        myuserlistingsService = TestBed.inject(MyuserlistingsService);
    });
});
