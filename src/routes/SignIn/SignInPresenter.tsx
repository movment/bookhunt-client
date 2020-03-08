import React from 'react';
import Form from '../../components/Form';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Button from '../../components/Button';
import SLink from '../../components/SLink';

interface IProps {
  input: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
const SignInPresenter: React.SFC<IProps> = ({ input, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Title>BOOKHUNT</Title>
      <Title type="small">로그인</Title>
      <Input
        name="email"
        placeholder="이메일"
        value={input.email}
        onChange={onChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        value={input.password}
        onChange={onChange}
      />
      <Button style={{ width: '100%' }}>로그인</Button>
      <div>
        <Text>계정이 없으신가요? </Text>
        <SLink to="/signup">회원가입</SLink>
      </div>
    </Form>
  );
};

export default SignInPresenter;
