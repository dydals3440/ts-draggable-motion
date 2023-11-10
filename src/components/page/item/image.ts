import { BaseComponent } from '../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    // 생성자를 통해서, 부모 클래스에서 this element를 만든 후, 필요한 데이터를 업데이트 해주면 된다!
    super(`<section class="image">
            <div class="image__holder"><img class="image__thumbnail"></div>
            <h2 class="image__title"></h2>
          </section>`);

    // 그 후, 필요한 타이틀과 url 업데이트
    const imageElement = this.element.querySelector(
      '.image__thumbnail'
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      '.image__title'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}

// export class ImageComponent {
//   // 내부적으로 element가 있음, HTML element
//   private element: HTMLElement;
//   // 생성자안에서는 페이지와는 다르게, 어떤 이미지를 할껀지 데이터를 받아와야함!
//   constructor(title: string, url: string) {
//     const template = document.createElement('template');
//     template.innerHTML = `<section class="image">
//   <div class="image_holder">
//     <img class="image__thumbnail" />
//     <p class="image__title"></p>
//   </div>
// </section>`;
//     this.element = template.content.firstElementChild! as HTMLElement;

//     const imageElement = this.element.querySelector(
//       '.image__thumbnail'
//     )! as HTMLImageElement;
//     imageElement.src = url;
//     imageElement.alt = title;

//     const titleElement = this.element.querySelector(
//       '.image__title'
//     )! as HTMLParagraphElement;
//     titleElement.textContent = title;
//   }
//   attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
//     parent.insertAdjacentElement(position, this.element);
//   }
// }
