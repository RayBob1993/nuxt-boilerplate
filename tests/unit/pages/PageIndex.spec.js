import { mount } from '@vue/test-utils';
import Index from '@/pages/index.vue';

describe('index.vue', () => {
  test('Является экземпляром Vue', () => {
    const wrapper = mount(Index);

    expect(wrapper.vm).toBeTruthy();
  });
});
