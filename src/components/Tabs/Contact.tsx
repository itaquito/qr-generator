'use client';

import type { ChangeEvent } from 'react';

import type { TabProps } from '@/types/components/Tabs/Tabs';
import type { ContactValues } from '@/types/components/Tabs/Contact';

import { useState, useEffect } from 'react';

import Input from '../Form/Input';
import TextArea from '../Form/TextArea';

function Contact({ setContent }: TabProps) {
  const [values, setValues] = useState<ContactValues>({
    name: '',
    organization: '',
    address: '',
    phone: '',
    email: '',
    note: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (values.name === '') {
      return setContent('');
    }

    setContent(
      `MECARD:N:${values.name};${values.organization ? `ORG:${values.organization};` : ''}${values.address ? `ADR:${values.address};` : ''}${values.phone ? `TEL:${values.phone};` : ''}${values.email ? `EMAIL:${values.email};` : ''}${values.note ? `NOTE:${values.note};` : ''};`
    );
  }, [values, setContent]);

  return (
    <>
      <Input
        label='Name'
        type='text'
        id='name'
        name='name'
        placeholder='Write your name here'
        onChange={handleChange}
      />

      <Input
        label='Organization'
        type='text'
        id='organization'
        name='organization'
        placeholder='Write your organization here'
        onChange={handleChange}
      />

      <Input
        label='Address'
        type='text'
        id='address'
        name='address'
        placeholder='Write your address here'
        onChange={handleChange}
      />

      <Input
        label='Phone'
        type='tel'
        id='phone'
        name='phone'
        placeholder='Write your phone number here'
        onChange={handleChange}
      />

      <Input
        label='Email'
        type='email'
        id='email'
        name='email'
        placeholder='Write your email here'
        onChange={handleChange}
      />

      <TextArea
        label='Notes'
        name='note'
        id='note'
        placeholder='Write any notes for your contact here'
        onChange={handlleTextAreaChange}
      />
    </>
  );
}

export default Contact;
