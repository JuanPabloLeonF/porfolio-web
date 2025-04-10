import { trigger, transition, style, query, group, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'translateX(100%)'
      })
    ], { optional: true }),
    query(':enter', [
      animate('200ms ease', style({ opacity: 1, transform: 'translateX(0)' }))
    ], { optional: true }),
    query(':leave', [
      animate('200ms ease', style({ opacity: 0, transform: 'translateX(-100%)' }))
    ], { optional: true })
  ])
]);