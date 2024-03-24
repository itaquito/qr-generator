'use client';

import type { TabProps } from '@/types/components/Tabs/Tabs';

function URL({ setContent }: TabProps) {
  return (
    <input
      className='border-border rounded border-2 px-2 shadow'
      type='url'
      id='URL'
      name='URL'
      placeholder='Write here your link'
      onChange={(e) => setContent(e.target.value)}
    />
  );
}

export default URL;
