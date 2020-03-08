import React from 'react';
import Form from './Form';
import GlobalStyle from '../GlobalStyle';
import Input from '../Input';
import Title from '../Title';
import Button from '../Button';
import Text from '../Text';
import TLink from '../TLink';

export default {
  title: 'Form',
  component: Form,
};

export const Default = () => {
  return (
    <>
      <GlobalStyle />
      <Form>
        <Title>BOOKHUNT</Title>
        <Title type="small">로그인</Title>
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" />
        <Button style={{ width: '100%' }}>로그인</Button>
        <div>
          <Text>계정이 없으신가요? </Text>
          <TLink>회원가입</TLink>
        </div>
      </Form>
    </>
  );
};
