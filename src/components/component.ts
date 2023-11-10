export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

/**
 * Encapsulate the HTML element creation
 */
export class BaseComponent<T extends HTMLElement> implements Component {
  // 외부에서 볼 수 없고, 그것을 상속하는 자식 클래스에서만 접근 가능! (읽기만 가능)
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
