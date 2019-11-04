import {Collection} from './../Models/Collection'

export abstract class CollectionView<T, K>{
    constructor(public parent : Element, public collection: Collection<T, K>){}

    abstract renderItem(model: T, itemParent: Element):void;

    render():void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template')

        for(let model of this.collection.model){
            const wrapperElement = document.createElement('div')
            
            this.renderItem(model, wrapperElement)
            templateElement.append(wrapperElement)
        }

        this.parent.append(templateElement.content)
    }
}