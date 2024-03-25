'use client';

import type { TabProps } from '@/types/components/Tabs/Tabs';
import type { EmailValues } from '@/types/components/Tabs/Email';

import { ChangeEvent, useEffect, useState } from 'react';

import Input from '../Form/Input';
import TextArea from '../Form/TextArea';

function Email({ setContent }: TabProps) {
  const [values, setValues] = useState<EmailValues>({
    email: '',
    subject: '',
    body: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handlleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (values.email === '' || values.subject === '' || values.body == '') {
      return setContent('');
    }

    setContent(
      `MATMSG:TO:${values.email};SUB:${values.subject};BODY:${values.body};;`
    );
  }, [values, setContent]);

  return (
    <>
      <Input
        label='Email'
        type='email'
        id='email'
        name='email'
        placeholder='Write the receiver email here'
        onChange={handleChange}
      />

      <Input
        label='Subject'
        type='text'
        id='subject'
        name='subject'
        placeholder='Write the subject of the email here'
        onChange={handleChange}
      />

      <TextArea
        label='Body'
        name='body'
        id='body'
        placeholder='Write the body of the email here'
        onChange={handlleTextAreaChange}
      />
    </>
  );
}

export default Email;
