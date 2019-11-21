import { Model } from "./../Model/Model";

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }
  abstract template(): string;

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  regionsMap = (): { [key: string]: string } => {
    return {};
  };

  bindModel = (): void => {
    this.model.on("change", () => {
      this.render();
    });
  };

  eventsBind(fragment: DocumentFragment): void {
    const eventMap = this.eventsMap();

    for (let eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach(elment => {
        elment.addEventListener(eventName, eventMap[eventKey]);
      });
    }
  }

  mapRegions = (fragment: DocumentFragment): void => {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      this.regions[key] = fragment.querySelector(selector);
    }
  };

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.eventsBind(templateElement.content);

    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
