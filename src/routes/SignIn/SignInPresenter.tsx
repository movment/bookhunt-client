import React from 'react';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SignForm from '../../components/SignForm';
import Naver from '../../components/Naver';
import axios from 'axios';

interface IProps {
  input: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SignInPresenter: React.SFC<IProps> = ({ input, onChange, onSubmit }) => {
  return (
    <SignForm onSubmit={onSubmit}>
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
      {
        /* <div>
        <Text>계정이 없으신가요? </Text>
        <SLink to="/signup">회원가입</SLink>
      </div> */
        <Naver
          href="http://localhost:4000/auth/naver/signin"
          // target="_blank"
          onClick={() => {
            // axios
            //   .get('http://localhost:4000/auth/naver/signin', {
            //     withCredentials: true,
            //   })
            //   .then((res) => console.log(res));
          }}
        ></Naver>
      }
    </SignForm>
  );
};

export default SignInPresenter;
