import styled from 'styled-components';

interface Props {
  type?: string;
}

export default styled.span<Props>`
  font-size: ${({ type }) => {
    const lowerType = type?.toLowerCase();
    if (lowerType === 'large') {
      return '48px';
    }
    if (lowerType === 'small') {
      return '16px';
    }
    return '32px';
  }};
`;
