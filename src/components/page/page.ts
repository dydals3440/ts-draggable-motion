export class PageComponent {
  // element라는 내부 state가 있음. 생성자 안에서 원하는 돔요소르 만들어주고, attachTo라는 함수를 만들어줘야 붙여주는 일 가능!
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
