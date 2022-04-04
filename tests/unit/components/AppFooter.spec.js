import { mount } from '@vue/test-utils';
import AppFooter from '@/components/AppFooter.vue';

describe('AppFooter.vue', () => {
  test('Является экземпляром Vue', () => {
    const wrapper = mount(AppFooter);

    expect(wrapper.vm).toBeTruthy();
  });

  test('Рендер прошёл успешно', () => {
    const wrapper = mount(AppFooter);

    expect(wrapper.vm).toBeTruthy();
  });
});
