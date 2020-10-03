import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input, ViewContainerRef, ViewChildren, QueryList, ComponentRef } from '@angular/core';
import { LoginComponent } from '../inicio/login/login.component';
import { SignupComponent } from '../inicio/signup/signup.component';
import { IncrusterDirective } from '../../directives/incruster/incruster.directive';
import { IonSlide, IonSlides } from '@ionic/angular';
import { Mapper } from '../maper';



@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss'],
})
export class ContenedorComponent implements OnInit {

  @Input() componentes : any [];
  @Input() pagina = '';
  //@ViewChild('appIncruster', {read: ViewContainerRef, static: true}) incruster: ViewContainerRef[];
  //@ViewChild('appLog', {read: ViewContainerRef, static: true}) incrusters: ViewContainerRef;

  @ViewChildren( 'appIncruster',{read: ViewContainerRef} ) els : QueryList<ViewContainerRef>;
  @ViewChild( IonSlides, {static: false} ) sp : IonSlides;

  
  constructor( private compResolver: ComponentFactoryResolver, private compFactory: ComponentFactoryResolver ) { }

  ngAfterViewInit(){

  

    /*
    console.log( this.componentes );

    let a = this.els.toArray();
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory( LoginComponent );

    let componentFactorys = this.componentFactoryResolver.resolveComponentFactory( SignupComponent );


    console.log(a);

    this.els.forEach( (item, index )=>{
      item.createComponent(componentFactory);
      item.createComponent(componentFactorys);
    } );*/
    this.cargarComponentes();


  }

   cargarComponentes() {

    this.componentes.forEach( async(value, i) =>{
      const d = this.els.toArray();

    

      const map = new Mapper();

      let s = map.maps[value];

      let ref : ComponentRef< any>;


     let cf = this.compFactory.resolveComponentFactory(s);
     ref = d[i].createComponent(cf);
    
    
    
     ref.instance.emisor.subscribe( (data)=>{
       console.log('dddddd', data)
       this.papa();
       this.sp.slideNext();
     })

     ref.instance.atras.subscribe( (data)=>{
      console.log('dddddd', data)
      this.papa();
      this.sp.slidePrev();
    })

      console.log( '-----------',  ref.instance.emisor);

      

    })
    
  
   // console.log(k);
    //this.compResolver.resolveComponentFactory(el);

  }

  papa(){
    console.log('haciendo algo desde el papa');
  }

  ngOnInit() {

  //  const comps = [ LoginComponent, SignupComponent ];


   // let componentFactory = this.componentFactoryResolver.resolveComponentFactory( LoginComponent );
   // let componentFactorys = this.componentFactoryResolver.resolveComponentFactory( SignupComponent );


    //let s = this.incruster.viewContainerRef;

   // this.incruster.createComponent( componentFactory );
    //this.incrusters.createComponent( componentFactorys );


    console.log( this.els );

   // viewContainerRef.createComponent( componentFactory );


  }

}
