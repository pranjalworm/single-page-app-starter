import {
  h,
  Component,
  ComponentInterface,
} from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
  shadow: true,
})
export class AppFooter implements ComponentInterface {

  render() {

    return (
      <div id='app-footer-root'>

        <div class='section'>
          Footer Section 1
        </div>

        <div class='section'>
          Footer Section 2
        </div>
      </div>
    );
  }
}
