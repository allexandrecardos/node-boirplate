import { EnviromentInitializer } from "../@core/env"

const initEnv = () => {
  EnviromentInitializer({
    pathEnv: '.env.local',
    encoding: 'utf8',
    debug: true,
    override: true
  })
}

export { initEnv }

