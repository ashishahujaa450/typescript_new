import {Model} from './../Models/Model'

export abstract class View<T extends Model<K>, K>{
    regions: { [key: string]: Element} = {}

    constructor(public parent: Element, public model: T){
        this.bindModel()
    }

    abstract template():string;

    regionsMap(): { [key : string]:string} {
        return {}
    }

    eventsMap():{ [key: string]: () => void }{
        return {}
    }


    //bind model to ui
    bindModel(){
        this.model.on('change', () => {
            this.render()
        })
    }

    
    //event binder
    bindEvent(fragment: DocumentFragment):void{
        const eventMap = this.eventsMap();

        for(let eventKey in eventMap){
            const [selector, eventName] = eventKey.split(':')

            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventMap[eventKey])
            })
        }
    }

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap()

        for(let key in regionsMap){
            const selector = regionsMap[key];

            const element = fragment.querySelector(selector)

            if(element){
                this.regions[key] = element;
            }
        }
    }

    onRender():void{
        
    }

    
    render():void{
        this.parent.innerHTML = ''

        //creating tempalte
        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template();


        // binding event to the html components
        this.bindEvent(templateElement.content)

        //region 
        this.mapRegions(templateElement.content)

        //render all views nesting
        this.onRender()

        //appending html to the dom using the parent
        this.parent.append(templateElement.content)
    }
}