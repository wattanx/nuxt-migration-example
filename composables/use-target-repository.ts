import { useContext } from '@nuxtjs/composition-api';
import { useRuntimeConfig } from '#imports';

export const useTargetRepository = () => {
  const config = useRuntimeConfig();
  console.log(config);

  return `${config.targetOrganization}/${config.targetRepository}`;
};
