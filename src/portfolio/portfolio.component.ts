import { Component } from '@angular/core';

interface IProduct {
  imgSrc:string,
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  cards:IProduct[] = [
    {imgSrc:'/poert1.png'},
    {imgSrc:'/port2.png'},
    {imgSrc:'/port3.png'},

    {imgSrc:'/poert1.png'},
    {imgSrc:'/port2.png'},
    {imgSrc:'/port3.png'},



  ]
}
