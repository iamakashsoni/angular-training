import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';
// import { ServiceComponent } from './service/service.component';
// import { RatingComponent } from './about-us/rating/rating.component';
// import { FeedbackComponent } from './about-us/feedback/feedback.component';

// export const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//   },
//   {
//     path: 'about-us',
//     component: AboutUsComponent,
//     children: [
//       {
//         path: 'rating',
//         component: RatingComponent,
//       },
//       {
//         path: 'feedback',
//         component: FeedbackComponent,
//       },
//     ],
//   },
//   {
//     path: 'contact-us',
//     component: ContactUsComponent,
//   },
//   {
//     path: 'service/:id',
//     component: ServiceComponent,
//   },
// ];

//on-demand loading - also know as lazy loading
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./about-us/about-us.component').then((m) => m.AboutUsComponent),
    children: [
      {
        path: 'rating',
        loadComponent: () =>
          import('./about-us/rating/rating.component').then(
            (m) => m.RatingComponent
          ),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./about-us/feedback/feedback.component').then(
            (m) => m.FeedbackComponent
          ),
      },
    ],
  },
];
