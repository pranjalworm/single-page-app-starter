import { h, Component, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'blog-page',
  styleUrl: 'blog-page.scss',
  shadow: true
})
export class BlogPage implements ComponentInterface {

  render() {
    return (
      <div class="blog-page-root">
        this is the blog page
      </div>
    )
  }
}