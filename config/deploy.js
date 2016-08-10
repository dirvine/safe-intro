module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'safe-intro',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
