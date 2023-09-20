import { useRuntimeConfig } from '#imports';

export const useTargetRepository = () => {
  const config = useRuntimeConfig();

  return `${config.targetOrganization}/${config.targetRepository}`;
};
