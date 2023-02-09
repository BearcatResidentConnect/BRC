import { TestBed } from '@angular/core/testing';

import { RentallistingsService } from './rentallistings.service';

describe('UserlistingsService', () => {
    let userlistingsService: RentallistingsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RentallistingsService],
        });
        userlistingsService = TestBed.inject(RentallistingsService);
    });

    
});
