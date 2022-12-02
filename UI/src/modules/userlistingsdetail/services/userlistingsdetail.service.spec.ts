import { TestBed } from '@angular/core/testing';

import { UserlistingsdetailService } from './userlistingsdetail.service';

describe('UserlistingsService', () => {
    let userlistingsdetailService: UserlistingsdetailService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserlistingsdetailService],
        });
        userlistingsdetailService = TestBed.inject(UserlistingsdetailService);
    });
});
