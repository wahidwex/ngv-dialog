import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';

export const NGV_DIALOG_CLOSE_TOKEN = new InjectionToken<Subject<void>>('');
