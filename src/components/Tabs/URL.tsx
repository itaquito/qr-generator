'use client';

import type { TabProps } from '@/types/components/Tabs/Tabs';

import Input from '../Form/Input';

function URL({ setContent }: TabProps) {
  return (
    <Input
      label='URL'
      type='url'
      id='URL'
      name='URL'
      placeholder='Write your link here'
      onChange={(e) => setContent(e.target.value)}
    />
  );
}

export default URL;
