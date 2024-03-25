'use client';

import type { TabProps } from '@/types/components/Tabs/Tabs';

import Input from '../Form/Input';

function Text({ setContent }: TabProps) {
  return (
    <Input
      label='Text'
      type='text'
      id='text'
      name='text'
      placeholder='Write your text content here'
      onChange={(e) => setContent(e.target.value)}
    />
  );
}

export default Text;
