import type { ClassValue } from 'class-variance-authority/types';
import { cx } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export const cn = (...args: ClassValue[]) => twMerge(cx(args));
