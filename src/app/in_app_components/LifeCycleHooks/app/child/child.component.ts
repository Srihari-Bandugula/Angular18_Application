import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [NgTemplateOutlet,CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  //To store the data from the ParentComponent
  @Input() inputData!: string;

  @ContentChild('projectedContent') projectedTemplate!: TemplateRef<any>; //For the reference of <ng-content>
  @ViewChild('viewElement') viewElement!: ElementRef; //For the reference of ViewElement in the DOM
  hookMessages: string[] = []; //to store the messages upon hooks triggered
  showMessages:boolean=false; //To show/hide the messages in UI
  buttonName='Show'

  // by default contructor will be called first after the component creation
  constructor() {
    let message:string='Constructor called';
    console.log(message);
    this.printHooks(message)
  }

  //On every change of variable inputData it will be called
  ngOnChanges(changes: SimpleChanges) {
    let message:string='ngOnChanges called';
    console.log(message, changes);
    this.printHooks(message)
  }

  //It will be called on initializing the all components
  ngOnInit() {
    let message:string='ngOnInit called';
    console.log(message);
    this.printHooks(message)
  }


  //It will be called on every change detection
  ngDoCheck() {
    let message:string='ngDoCheck called';
    console.log(message);
    this.printHooks(message)
  }

  //It will be called after <ng-content> initialization
  ngAfterContentInit() {
    let message:string='ngAfterContentInit called';
    console.log(message);
    this.printHooks(message)
  }

  //It will be called after change detection in the <ng-content> 
  ngAfterContentChecked() {
    let message:string='ngAfterContentChecked called';
    console.log(message);
    this.printHooks(message)
  }

  //It will be called after the View/DOM initializes
  ngAfterViewInit() {
    let message:string='ngAfterViewInit called';
    console.log(message);
    console.log('View Element:', this.viewElement.nativeElement);
    this.printHooks(message)
  }

  //It will be called after every change/check in the view
  ngAfterViewChecked() {
    let message:string='ngAfterViewChecked called';
    console.log(message);
    this.printHooks(message)
  }

  //It will be called after destroying the component (ChildComponent)
  ngOnDestroy() {
    let message:string='ngOnDestroy called';
    console.log(message);
    this.printHooks(message)
  }

  printHooks(hookCalled:string){
    this.hookMessages.push(hookCalled);
  }

  showHookMessages(){
    // this.showMessages=true;
    if (this.showMessages) {
      this.showMessages=false;
      this.buttonName='Show'

    } else {
      this.showMessages=true;
      this.buttonName='Hide'
    }
  }
}
