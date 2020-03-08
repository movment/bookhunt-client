import React, { SFC } from 'react';
import Form from '../../components/Form';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Button from '../../components/Button';
import SLink from '../../components/SLink';

interface IProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  input: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpPresenter: SFC<IProps> = ({ onSubmit, input, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Title>BOOKHUNT</Title>
      <Title type="small">회원가입</Title>
      <Input
        name="name"
        placeholder="이름"
        value={input.name}
        onChange={onChange}
      />
      <Input
        name="email"
        placeholder="이메일"
        value={input.email}
        onChange={onChange}
      />
      <Input
        name="password"
        placeholder="비밀번호"
        value={input.password}
        onChange={onChange}
      />
      <Input
        name="verifyPassword"
        placeholder="비밀번호 확인"
        value={input.verifyPassword}
        onChange={onChange}
      />
      <Button style={{ width: '100%' }}>회원가입</Button>
      <div>
        <Text>이미 가입하셨나요? </Text>
        <SLink to="/signin">로그인</SLink>
      </div>
    </Form>
  );
};

export default SignUpPresenter;
