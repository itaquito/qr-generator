'use client';

import type { TabProps } from '@/types/components/Tabs/Tabs';

import TextArea from '../Form/TextArea';

function Text({ setContent }: TabProps) {
  return (
    <TextArea
      label='Text'
      id='text'
      name='text'
      placeholder='Write your text content here'
      onChange={(e) => setContent(e.target.value)}
    />
  );
}

export default Text;
