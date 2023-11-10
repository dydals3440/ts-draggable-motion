export class PageComponent {
  private element: HTMLUListElement;
  // 우리가 필요한 페이지의 컴포넌트 요소를 만들어줌
  constructor() {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is PageComponent';
  }

  // 외부에서 페이지 컴포넌트를 만들어서, 필요한 곳에다 추가할 수 있는 것을 만들자!
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
