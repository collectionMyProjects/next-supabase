import { cache } from 'react';
import { createClient as createBrowserClient } from './supabase/client';
import { createClient as createServerClient } from './supabase/server';

export const getCategories = cache(async () => {
  const supabase =
    typeof window === 'undefined'
      ? createServerClient()
      : createBrowserClient();
  const { data } = await supabase.from('Post').select('category');
  return Array.from(new Set(data?.map((d) => d.category))) as string[];
});

export const getTags = cache(async () => {
  const supabase =
    typeof window === 'undefined'
      ? createServerClient()
      : createBrowserClient();
  const { data } = await supabase.from('Post').select('tags');
  return Array.from(
    new Set(data?.flatMap((d) => JSON.parse(d.tags))),
  ) as string[];
});
