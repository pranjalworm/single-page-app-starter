import { h, Component, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'about-page',
  styleUrl: 'about-page.scss',
  shadow: true
})
export class AboutPage implements ComponentInterface {


  render() {

    return (
      <div id="about-page-root">

        <p>This is the about page</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi, delectus sed iste est rerum illo eos ab incidunt iusto obcaecati, perferendis dignissimos impedit quos! Neque ad molestiae amet et.</p>
      </div>
    )
  }
}