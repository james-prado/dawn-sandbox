import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

const customGlobals = {
  'assets/global.js': {
    getFocusableElements: 'readonly',
    SectionId: 'readonly',
    HTMLUpdateUtility: 'readonly',
    trapFocus: 'readonly',
    focusVisiblePolyfill: 'readonly',
    pauseAllMedia: 'readonly',
    removeTrapFocus: 'readonly',
    onKeyUpEscape: 'readonly',
    QuantityInput: 'readonly',
    debounce: 'readonly',
    throttle: 'readonly',
    fetchConfig: 'readonly',
    MenuDrawer: 'readonly',
    HeaderDrawer: 'readonly',
    ModalDialog: 'readonly',
    BulkModal: 'readonly',
    ModalOpener: 'readonly',
    DeferredMedia: 'readonly',
    SliderComponent: 'readonly',
    SlideshowComponent: 'readonly',
    VariantSelects: 'readonly',
    ProductRecommendations: 'readonly',
    AccountIcon: 'readonly',
    BulkAdd: 'readonly',
  },
  'assets/animations.js': {
    initializeScrollAnimationTrigger: 'readonly',
  },
  'assets/constants.js': {
    ON_CHANGE_DEBOUNCE_TIMER: 'readonly',
    PUB_SUB_EVENTS: 'readonly',
  },
  'assets/pubsub.js': {
    subscribe: 'readonly',
    publish: 'readonly',
  },
  'assets/magnify.js': {
    enableZoomOnHover: 'readonly',
  },
  'assets/cart.js': {
    CartItems: 'readonly',
  },
  'assets/customer.js': {
    CustomerAddresses: 'readonly',
  },
  'assets/details-disclosure.js': {
    DetailsDisclosure: 'readonly',
  },
  'assets/details-modal.js': {
    DetailsModal: 'readonly',
  },
  'assets/search-form.js': {
    SearchForm: 'readonly',
  },
  'layout/theme.liquid': {
    shopUrl: 'readonly',
    routes: 'readonly',
    cartStrings: 'readonly',
    variantStrings: 'readonly',
    quickOrderListStrings: 'readonly',
    accessibilityStrings: 'readonly',
  },
};

export default [
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        Shopify: 'readonly',
        ...globals.browser,
        ...customGlobals['assets/global.js'],
        ...customGlobals['assets/animations.js'],
        ...customGlobals['assets/constants.js'],
        ...customGlobals['assets/pubsub.js'],
        ...customGlobals['assets/magnify.js'],
        ...customGlobals['assets/cart.js'],
        ...customGlobals['assets/customer.js'],
        ...customGlobals['assets/details-disclosure.js'],
        ...customGlobals['assets/details-modal.js'],
        ...customGlobals['assets/search-form.js'],
        ...customGlobals['layout/theme.liquid'],
      },
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
        },
      ],
    },
  },
];
