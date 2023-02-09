import { TestBed } from '@angular/core/testing';

import { UserlistingsService } from './userlistings.service';

describe('UserlistingsService', () => {
    let userlistingsService: UserlistingsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserlistingsService],
        });
        userlistingsService = TestBed.inject(UserlistingsService);
    });
});
