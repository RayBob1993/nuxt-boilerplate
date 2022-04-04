import { config } from '@vue/test-utils';

config.stubs.nuxt = {
  template: '<div />'
};

config.stubs['nuxt-link'] = {
  template: '<a><slot /></a>'
};

config.stubs['client-only'] = {
  template: '<span><slot /></span>'
};
