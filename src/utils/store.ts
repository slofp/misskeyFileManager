import { writable } from 'svelte/store';
import type { UserData } from './types';

export const userTokens = writable([] as UserData[]);

export const currentUserIndex = writable(0);
