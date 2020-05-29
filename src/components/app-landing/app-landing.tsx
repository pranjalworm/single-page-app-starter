import {
  h,
  Component,
  ComponentInterface
} from '@stencil/core';


@Component({
  tag: 'app-landing',
  shadow: true
})
export class AppLanding implements ComponentInterface {
  

  render() {

    return (
      <div id="landing-root">

        This is a dummy landing page
        
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo unde, animi ad dolore dolorem eius veritatis quisquam quo illum incidunt, quasi at voluptatum odio esse nostrum error est fugiat sequi!
      </div>
    );
  }
}
