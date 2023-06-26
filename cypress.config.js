const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl:'',
    setupNodeEvents(on, config) {
      on('task',{
        log(message){
          console.log('mensaje del console log del task' + message)
          return null
        }
      })
    },
    testIsolation:false
  },
});
