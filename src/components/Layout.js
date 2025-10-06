import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 65px); 
  padding: 2rem 1rem;
`;

export const HomeLayout = styled(PageWrapper)`
  background: linear-gradient(135deg, var(--background-white) 0%, #fff0f1 100%);
`;

export const AdminLayout = styled(PageWrapper)`
  background: linear-gradient(to bottom, #f5efed 0%, var(--background-white) 100%);
`;

export const LoginLayout = styled(PageWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, #fff0f1 0%, var(--background-white) 80%);
`;