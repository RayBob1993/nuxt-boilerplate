import { mount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader.vue', () => {
  test('Является экземпляром Vue', () => {
    const wrapper = mount(AppHeader);

    expect(wrapper.vm).toBeTruthy();
  });

  test('Рендер прошёл успешно', () => {
    const wrapper = mount(AppHeader);

    expect(wrapper.vm).toBeTruthy();
  });
});
