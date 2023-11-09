import { ConfigurableModuleBuilder } from '@nestjs/common';
import { ConfigModuleOptions } from './interfaces';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<ConfigModuleOptions>()
    .setClassMethodName('forRoot') // default is `register`
    .setExtras(
      {
        isGlobal: true,
      },
      (definition, extras) => ({
        ...definition, // present for (providers, exports, module, global....)
        global: extras.isGlobal, // override global prop
      }),
    )
    .build();
