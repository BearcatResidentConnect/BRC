import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AuthService } from '../../../auth/services/auth.service';
@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    form: any = {
        username: null,
        sid: null,
        firstname: null,
        lastname: null,
        email: null,
        password: null,
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService) {}

    ngOnInit(): void {}

    onSubmit(): void {
        const { username, sid, firstname, lastname, email, password } = this.form;

        this.authService.register(username, sid, firstname, lastname, email, password).subscribe({
            next: (data: any) => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
            },
            error: (err: { error: { message: string } }) => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            },
        });
    }
}
