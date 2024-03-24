'use client';

import type { TabViewerProps } from '@/types/components/Tabs/TabViewer';
import type { Tabs } from '@/types/components/Tabs/Tabs';

import { Tab } from '@headlessui/react';

import URL from './URL';
import Text from './Text';
import VCard from './VCard';
import Email from './Email';
import WiFi from './WiFi';

export const TABS: Tabs = [
  {
    name: 'URL',
    description: 'Opens the URL after scanning.',
    Component: URL,
  },
  {
    name: 'Text',
    description: 'Displays a plain text after scanning.',
    Component: Text,
  },
  {
    name: 'vCard',
    description: 'Shows your contact details after scanning.',
    Component: VCard,
  },
  {
    name: 'Email',
    description: 'Sends a predefined email after scanning.',
    Component: Email,
  },
  {
    name: 'WiFi',
    description: 'Allows people to connect to a WiFi network after scanning.',
    Component: WiFi,
  },
];

function TabViewer({ setContent }: TabViewerProps) {
  return (
    <Tab.Group className='flex flex-grow space-x-4' as='div' vertical>
      <Tab.List className='flex flex-col space-y-4 font-bold'>
        {TABS.map(({ name, description }, i) => (
          <Tab
            className={({ selected }) =>
              `rounded border-l-4 border-primary p-2 text-left shadow transition-all ${selected ? 'bg-primary text-white' : 'bg-white hover:bg-indigo-100'}`
            }
            title={description}
            key={i}
          >
            {name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className='w-full'>
        {TABS.map(({ name, description, Component }, i) => (
          <Tab.Panel
            className='rounded bg-white p-2 shadow'
            key={i}
            unmount={false}
          >
            <h1 className='rounded border-l-4 border-primary px-4 text-3xl font-bold text-primary'>
              {name}
            </h1>

            <p className='my-2 text-justify'>{description}</p>

            <Component setContent={setContent} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default TabViewer;
