import { sharedA } from '@nxtest/shared-a';

export function sharedB(): string {
  return 'shared-b';
}

export function sharedBA(): string {
  return `shared A [${sharedA()}] from [${sharedB()}]`;
}
