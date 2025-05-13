import styled, { css } from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 2rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[0]};
  box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
`;

export const ContactTitle = styled.h1`
  width: 60%;
  margin-bottom: 2rem;
  padding-bottom: 1rem;

  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: start;
  border-bottom: 2px solid ${({ theme }) => theme.color.primary[500]};
`;

export const ContactDescription = styled.p`
  width: 60%;
  margin-bottom: 3rem;

  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.6;
  text-align: start;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  width: 60%;
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  & > span {
    margin-left: 2px;

    color: ${({ theme }) => theme.color.error[500]};
  }
`;

interface InputProps {
  hasError?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 48px;
  padding: 0 1rem;
  border: 1.5px solid ${({ hasError, theme }) => (hasError ? theme.color.error[500] : theme.color.black[200])};
  border-radius: 6px;

  background-color: white;
  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.base};

  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ hasError, theme }) => (hasError ? theme.color.error[500] : theme.color.primary[500])};
  }

  &:focus {
    outline: none;

    border-color: ${({ hasError, theme }) => (hasError ? theme.color.error[500] : theme.color.primary[500])};

    box-shadow: 0 0 0 3px ${({ hasError, theme }) => (hasError ? theme.color.error[100] : theme.color.primary[100])};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.black[400]};
  }
`;

export const TextArea = styled.textarea<InputProps>`
  width: 100%;
  min-height: 150px;
  padding: 1rem;
  border: 1.5px solid ${({ hasError, theme }) => (hasError ? theme.color.error[500] : theme.color.black[200])};
  border-radius: 6px;

  background-color: white;
  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.base};

  transition: all 0.2s ease;
  resize: vertical;

  &:hover {
    border-color: ${({ hasError, theme }) => (hasError ? theme.color.error[500] : theme.color.primary[500])};
  }

  &:focus {
    outline: none;

    border-color: ${({ hasError, theme }) => (hasError ? theme.color.error[500] : theme.color.primary[500])};

    box-shadow: 0 0 0 3px ${({ hasError, theme }) => (hasError ? theme.color.error[100] : theme.color.primary[100])};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.black[400]};
  }
`;

export const ErrorContainer = styled.div`
  min-height: 20px;
  margin-top: 0.25rem;
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.color.error[500]};
  font-size: ${({ theme }) => theme.fontSize.sm};

  &::before {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 16px;
    height: 16px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.color.error[500]};
    color: white;
    font-size: 12px;
    font-weight: bold;
    content: '!';
  }
`;

export const FileDropZone = styled.div<{ isDragging: boolean; hasError?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: ${({ isDragging }) => (isDragging ? '200px' : '120px')};
  padding: 1.5rem;
  border: 2px dashed
    ${({ isDragging, hasError, theme }) =>
      hasError ? theme.color.error[500] : isDragging ? theme.color.primary[500] : theme.color.black[200]};
  border-radius: 8px;

  background-color: ${({ isDragging, hasError, theme }) =>
    hasError ? theme.color.error[50] : isDragging ? theme.color.primary[50] : theme.color.black[50]};

  transition: all 0.2s ease;

  cursor: pointer;

  &:hover {
    border-color: ${({ hasError, theme }) => (hasError ? theme.color.error[500] : theme.color.primary[500])};

    background-color: ${({ hasError, theme }) => (hasError ? theme.color.error[50] : theme.color.primary[50])};
  }
`;

export const DropzoneContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
`;

export const FileInput = styled.input`
  display: none;
`;

export const DropzoneText = styled.div`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-align: center;
`;

export const FileDescription = styled.div`
  margin-top: 0.5rem;

  color: ${({ theme }) => theme.color.black[400]};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;

  width: 100%;
  max-height: 300px;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.black[100]};
  border-radius: 4px;

  background-color: white;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;

    background: ${({ theme }) => theme.color.black[100]};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;

    background: ${({ theme }) => theme.color.black[300]};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.black[400]};
  }
`;

export const FileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.color.black[100]};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.color.black[50]};

  &:hover {
    background-color: ${({ theme }) => theme.color.black[100]};
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
`;

export const FileName = styled.span`
  overflow: hidden;

  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FileSize = styled.span`
  color: ${({ theme }) => theme.color.black[500]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  white-space: nowrap;
`;

export const DeleteButton = styled.button`
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.color.error[500]};
  color: white;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  transition: background-color 0.2s ease;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.error[600]};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.error[700]};
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.black[0]};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};

  transition: background-color 0.2s ease;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary[600]};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.primary[700]};
  }
`;
