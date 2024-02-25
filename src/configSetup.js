
const defaultConfig = require('./toolbox.config.js');

export function initializeConfig(userConfig = {}){
  console.log(...userConfig)
  return {...defaultConfig, ...userConfig};
}
