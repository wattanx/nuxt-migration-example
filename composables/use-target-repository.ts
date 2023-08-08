import { useContext } from '@nuxtjs/composition-api';

export const useTargetRepository = () => {
  const { $config } = useContext();

  return `${$config.targetOrganization}/${$config.targetRepository}`;
};
