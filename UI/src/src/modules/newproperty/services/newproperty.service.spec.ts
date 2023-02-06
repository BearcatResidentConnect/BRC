import { TestBed } from '@angular/core/testing';

import { NewpropertyService } from './newproperty.service';

describe('NewpropertyService', () => {
    let newpropertyService: NewpropertyService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NewpropertyService],
        });
        newpropertyService = TestBed.inject(NewpropertyService);
    });

});
