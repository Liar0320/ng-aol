/*
 * @Author: lich 
 * @Date: 2020-03-15 21:18:06 
 * @Last Modified by: lich
 * @Last Modified time: 2020-03-15 22:40:53
 */
/** 一个将xxx-xx 转换为 xxxXx的方法 */
function transfer(str:string) {
   return str.replace(/-./g,word=>String.fromCharCode(word.charCodeAt(1) - 32));      
}

interface IComponent extends ng.IComponentOptions{
   selector:string,
}

function Component(options?:IComponent) {
   options.selector = transfer(options.selector); 
   return function (target:any) {
       Object.assign(target.__ngaoloptions,options)
       target.__ngaoloptions.controller = target;
       target.create = function () {
           return  target.__ngaoloptions;
       }
   }
}

function Input(params?:'required') {
    return function Input(target: any, propertyKey: string) {
        let options:IComponent = target.constructor.__ngaoloptions || ( target.constructor.__ngaoloptions = {});
        // console.log(this,target,propertyKey,this[propertyKey],options);
        if( !options.bindings )   options.bindings = {};
         options.bindings[propertyKey] = params === "required" ? '<':'<?';
    }
}


function Output(params?:'required') {
    return function Output(target: any, propertyKey: string) {
        let options:IComponent = target.constructor.__ngaoloptions || ( target.constructor.__ngaoloptions = {});
        // console.log(this,target,propertyKey,this[propertyKey],options);
        if( !options.bindings )   options.bindings = {};
         options.bindings[propertyKey] = params === "required" ? '&':'&?';
    }
}

// function Host(params?:'required') {
//     return function Output(target: any, propertyKey: string) {
//         let options:IComponent = target.constructor.__ngaoloptions || ( target.constructor.__ngaoloptions = {});
//         // console.log(this,target,propertyKey,this[propertyKey],options);
//         if( !options.require )   options.bindings = {};
//          options.require[propertyKey] = params === "required" ? '^${aolMap.name}':'&?';
//     }
// }






@Component({
   selector:'aol-d-d',
})
 class C {
   // @Host() 
   @Input('required')  distance:number = 2;
   @Input()  distancef:number = 2;
   @Output('required')  outdistance:Function = ()=>{};
   @Output()  outdistancedd:Function = ()=>{};
   constructor(private host:B){}
}

class B{
   a:number = 1;
}

