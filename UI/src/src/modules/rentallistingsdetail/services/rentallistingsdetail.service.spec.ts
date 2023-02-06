import { TestBed } from '@angular/core/testing';

import { RentallistingsdetailService } from './rentallistingsdetail.service';

describe('RentallistingsdetailService', () => {
    let rentallistingsdetailService: RentallistingsdetailService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RentallistingsdetailService],
        });
        rentallistingsdetailService = TestBed.inject(RentallistingsdetailService);
    });

    
});
