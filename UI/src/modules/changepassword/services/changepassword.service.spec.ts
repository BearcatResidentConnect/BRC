import { TestBed } from '@angular/core/testing';

import { ChangepasswordService } from './changepassword.service';

describe('ChangepasswordService', () => {
    let changepasswordService: ChangepasswordService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ChangepasswordService],
        });
        changepasswordService = TestBed.inject(ChangepasswordService);
    });

});
