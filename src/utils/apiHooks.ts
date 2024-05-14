import { useQuery } from '@tanstack/react-query';
import { getCategories, getTags } from './fetch';

export const useCategories = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return { data, ...rest };
};

export const useTags = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
  });

  return { data, ...rest };
};
