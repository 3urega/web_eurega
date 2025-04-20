export default {
  routes: [
    {
      method: 'POST',
      path: '/contact',
      handler: 'contact.send',
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
}; 