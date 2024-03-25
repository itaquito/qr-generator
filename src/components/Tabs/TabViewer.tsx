'use client';

import type { TabViewerProps } from '@/types/components/Tabs/TabViewer';
import type { Tabs } from '@/types/components/Tabs/Tabs';

import classNames from 'classnames';
import { Tab } from '@headlessui/react';

import URL from './URL';
import Text from './Text';
import Contact from './Contact';
import Email from './Email';
import WiFi from './WiFi';
import IcRoundLink from '../Icon/IcRoundLink';
import IcBaselineEdit from '../Icon/IcBaselineEdit';
import IcBaselineAssignmentInd from '../Icon/IcBaselineAssignmentInd';
import IcBaselineEmail from '../Icon/IcBaselineEmail';
import IcBaselineWifi from '../Icon/IcBaselineWifi';

import Size from '../Parameter/Size';
import Color from '../Parameter/Color';
import ErrorCorrectionLevel from '../Parameter/ErrorCorrectionLevel';

export const TABS: Tabs = [
  {
    name: 'URL',
    description: 'Opens the URL after scanning.',
    Component: URL,
    Icon: IcRoundLink,
  },
  {
    name: 'Text',
    description: 'Displays a plain text after scanning.',
    Component: Text,
    Icon: IcBaselineEdit,
  },
  {
    name: 'Email',
    description: 'Sends a predefined email after scanning.',
    Component: Email,
    Icon: IcBaselineEmail,
  },
  {
    name: 'WiFi',
    description: 'Allows people to connect to a WiFi network after scanning.',
    Component: WiFi,
    Icon: IcBaselineWifi,
  },
  {
    name: 'Contact',
    description: 'Shows your contact details after scanning.',
    Component: Contact,
    Icon: IcBaselineAssignmentInd,
  },
];

function TabViewer({ setContent, parameters, setParameters }: TabViewerProps) {
  return (
    <Tab.Group
      className='flex flex-grow space-x-4'
      as='div'
      vertical
      onChange={() => setContent('')}
    >
      <Tab.List className='flex flex-col bg-white shadow'>
        {TABS.map(({ name, description, Icon }, i) => (
          <Tab
            className={({ selected }) =>
              classNames(
                'flex items-center border-l-4 border-primary px-6 py-4 outline-none transition-all',
                {
                  'border-primary text-primary': selected,
                  'border-transparent hover:border-indigo-100': !selected,
                }
              )
            }
            title={description}
            key={i}
          >
            <Icon className='mr-2 h-[30px] w-[30px]' /> {name}
          </Tab>
        ))}
      </Tab.List>

      <Tab.Panels className='w-full'>
        {TABS.map(({ name, description, Component, Icon }, i) => (
          <Tab.Panel key={i}>
            <div className='rounded bg-white p-2 shadow'>
              <h2 className='flex items-center text-xl font-bold text-primary'>
                <Icon className='mr-2 h-[30px] w-[30px]' /> {name}
              </h2>

              <p className='text-justify'>{description}</p>

              <div className='mt-2 space-y-4'>
                <Component setContent={setContent} />
              </div>
            </div>

            <div className='w-full space-y-4 py-4'>
              <Size parameters={parameters} setParameters={setParameters} />

              <Color parameters={parameters} setParameters={setParameters} />

              <ErrorCorrectionLevel
                parameters={parameters}
                setParameters={setParameters}
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default TabViewer;
