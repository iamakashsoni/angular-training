import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { SpyingService } from './services/spying.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

class MockUserService {
  getMissions() {
    const mockUsers = [
      { id: 1, fname: 'Sachin', lname: 'Tendulkar' },
      { id: 2, fname: 'Saurav', lname: 'Ganguly' },
    ];
    return of(mockUsers);
  }
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: SpyingService, useClass: MockUserService },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'unit-testing-demo' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-testing-demo');
  });
  
  it('should retrieve products', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const service = TestBed.inject(SpyingService);
    component.getProductsMission();
    tick();
    expect(component.products).toEqual([
      { id: 1, fname: 'Sachin', lname: 'Tendulkar' },
      { id: 2, fname: 'Saurav', lname: 'Ganguly' },
    ]);
  }));

  it('should also retrieve products', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const service = TestBed.inject(SpyingService);

    const mockUsers = [
      { id: 3, fname: 'Rahul', lname: 'Dravid' },
      { id: 4, fname: 'Yuvraj', lname: 'Singh' },
    ];
    const userServiceSpy = spyOn(service, 'getMissions').and.returnValue(
      of(mockUsers)
    );
    component.getProductsMission();
    tick();
    expect(component.products).toEqual(mockUsers);
    expect(userServiceSpy).toHaveBeenCalled();
  }));
});
