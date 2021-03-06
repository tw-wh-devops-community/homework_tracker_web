export const ENV = {
  DEV: 'development',
  TEST: 'test',
  PROD: 'production',
}

export const APP_ENV = process.env.NODE_ENV

const localServer = 'http://localhost:5678/api'

export const HOST = {
  DEV: localServer,
  TEST: localServer,
  PROD: 'http://54.223.64.0:5678/api',
}

const ApiHost = () => {
  switch (APP_ENV) {
    case ENV.DEV:
      return HOST.DEV
    case ENV.TEST:
      return HOST.TEST
    case ENV.PROD:
      return HOST.PROD
    default:
      return HOST.PROD
  }
}

export default ApiHost
