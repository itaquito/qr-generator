'use client';

import type { ChangeEvent } from 'react';

import type { TabProps } from '@/types/components/Tabs/Tabs';
import type {
  WiFiEncryptionTypes,
  WiFiEncryptionTypesWithLabel,
  WiFiValues,
} from '@/types/components/Tabs/WiFi';

import { useState, useEffect } from 'react';

import Input from '../Form/Input';
import Select from '../Form/Select';
import Checkbox from '../Form/Checkbox';

const WIFI_ENCRYPTION_TYPES: WiFiEncryptionTypesWithLabel = {
  nopass: 'No password',
  WPA: 'WPA',
  WEP: 'WEP',
};

function WiFi({ setContent }: TabProps) {
  const [values, setValues] = useState<WiFiValues>({
    ssid: '',
    password: '',
    encryption: 'WPA',
    hidden: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (value: WiFiEncryptionTypes) => {
    setValues((prev) => ({
      ...prev,
      encryption: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  useEffect(() => {
    if (values.ssid === '' || values.password === '') {
      return setContent('');
    }

    setContent(
      `WIFI:T:${values.encryption};S:${values.ssid};P:${values.password};H:${values.hidden};;`
    );
  }, [values, setContent]);

  return (
    <>
      <Input
        label='SSID'
        type='text'
        id='ssid'
        name='ssid'
        placeholder='Write the name of your network here'
        onChange={handleChange}
      />

      <Input
        label='Password'
        type='text'
        id='password'
        name='password'
        placeholder='Write the password of your network here'
        onChange={handleChange}
      />

      <Select
        label='Encryption'
        value={values.encryption}
        onChange={handleSelectChange}
        CurrenyDisplayValue={({ value }: { value: WiFiEncryptionTypes }) =>
          WIFI_ENCRYPTION_TYPES[value]
        }
        options={WIFI_ENCRYPTION_TYPES}
      />

      <Checkbox
        label='Hidden?'
        id='hidden'
        name='hidden'
        checked={values.hidden}
        onChange={handleCheckboxChange}
      />
    </>
  );
}

export default WiFi;
