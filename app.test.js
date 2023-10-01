// BEGIN: 4f5a3b2c1d0e
import { mount } from '@vue/test-utils'
import App from './app.vue'

describe('App', () => {
  it('renders the correct user information', () => {
    const wrapper = mount(App, {
      data() {
        return {
          firstName: 'John',
          lastName: 'Doe',
          email: 'John@gmail.com',
          gender: 'Male',
          picture: 'https://randomuser.me/api/portraits/men/11.jpg'
        }
      }
    })

    expect(wrapper.find('.first-name').text()).toBe('John')
    expect(wrapper.find('.last-name').text()).toBe('Doe')
    expect(wrapper.find('.email').text()).toBe('John@gmail.com')
    expect(wrapper.find('.gender').text()).toBe('Male')
    expect(wrapper.find('.picture').attributes('src')).toBe('https://randomuser.me/api/portraits/men/11.jpg')
  })
})
// END: 4f5a3b2c1d0e