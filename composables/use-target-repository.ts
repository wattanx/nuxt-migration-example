import { useRuntimeConfig } from '#imports';

export const useTargetRepository = () => {
  const config = useRuntimeConfig().public;

  return `${config.targetOrganization}/${config.targetRepository}`;
};
