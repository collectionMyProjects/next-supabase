import { Database } from './supabase';

export type Post = Omit<Database['public']['Tables']['Post']['Row'], 'tags'> & {
  tags: string[]; // tags의 타입을 바꾸기 위해 사용한다.
};

export type PostRequest = Database['public']['Tables']['Post']['Insert'];
