import { shallowMount } from '@vue/test-utils'
import { MyComponent } from '@/components/HelloWorld.tsx'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(MyComponent, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
