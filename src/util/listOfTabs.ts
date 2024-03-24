import URL from '@/components/Tabs/URL';
import Text from '@/components/Tabs/Text';
import VCard from '@/components/Tabs/VCard';
import Email from '@/components/Tabs/Email';
import WiFi from '@/components/Tabs/WiFi';

export type setTextType = (text: string) => void;

export interface tabComponentProps {
  setText: setTextType;
}

interface tabProps {
  name: string;
  description: string;
  Component: ({ setText }: tabComponentProps) => JSX.Element;
}

export const listOfTabs: tabProps[] = [
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
