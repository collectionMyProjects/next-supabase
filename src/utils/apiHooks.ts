import { useQuery } from '@tanstack/react-query';
import { getCategories, getTags } from './fetch';

export const useCategories = () => {
  const { data: existingCategories, ...rest } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return { existingCategories, ...rest };
};

export const useTags = () => {
  const { data: existingTags, ...rest } = useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
  });

  return { existingTags, ...rest };
};
