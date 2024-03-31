import defaultConfig from './toolbox.config';

export function initializeConfig(userConfig = {}){
  console.log(userConfig)
  return {...defaultConfig, ...userConfig};
}
