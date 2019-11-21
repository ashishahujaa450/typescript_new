import { Collection } from "./../Model/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = "";

    const template = document.createElement("template");

    for (let model of this.collection.model) {
      const wrapperElement = document.createElement("div");

      this.renderItem(model, wrapperElement);

      template.content.append(wrapperElement);
    }

    this.parent.append(template.content);
  }
}
