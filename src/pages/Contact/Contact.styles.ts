import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const ContactContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.black[0]};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ContactTitle = styled.h1`
  width: 60%;
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${theme.color.black[700]};
  margin-bottom: 2rem;
  text-align: start;
  border-bottom: 2px solid ${theme.color.primary[500]};
  padding-bottom: 1rem;
`;

export const ContactDescription = styled.p`
  width: 60%;
  text-align: start;
  color: ${theme.color.black[700]};
  line-height: 1.6;
  margin-bottom: 3rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const FormGroup = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.black[700]};

  & > span {
    color: ${({ theme }) => theme.color.danger[500]};
    margin-left: 2px;
  }
`;

interface InputProps {
  hasError?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 48px;
  padding: 0 1rem;
  border: 1.5px solid ${({ hasError, theme }) => (hasError ? theme.color.danger[500] : theme.color.black[200])};
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.black[900]};
  background-color: white;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ hasError, theme }) => (hasError ? theme.color.danger[500] : theme.color.primary[500])};
  }

  &:focus {
    outline: none;
    border-color: ${({ hasError, theme }) => (hasError ? theme.color.danger[500] : theme.color.primary[500])};
    box-shadow: 0 0 0 3px ${({ hasError, theme }) => (hasError ? theme.color.danger[100] : theme.color.primary[100])};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.black[400]};
  }
`;

export const TextArea = styled.textarea<InputProps>`
  width: 100%;
  min-height: 150px;
  padding: 1rem;
  border: 1.5px solid ${({ hasError, theme }) => (hasError ? theme.color.danger[500] : theme.color.black[200])};
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.black[900]};
  background-color: white;
  resize: vertical;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ hasError, theme }) => (hasError ? theme.color.danger[500] : theme.color.primary[500])};
  }

  &:focus {
    outline: none;
    border-color: ${({ hasError, theme }) => (hasError ? theme.color.danger[500] : theme.color.primary[500])};
    box-shadow: 0 0 0 3px ${({ hasError, theme }) => (hasError ? theme.color.danger[100] : theme.color.primary[100])};
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
  color: ${({ theme }) => theme.color.danger[500]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '!';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.color.danger[500]};
    color: white;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const FileDropZone = styled.div<{ isDragging: boolean; hasError?: boolean }>`
  width: 100%;
  min-height: ${({ isDragging }) => (isDragging ? '200px' : '120px')};
  border: 2px dashed
    ${({ isDragging, hasError, theme }) =>
      hasError ? theme.color.danger[500] : isDragging ? theme.color.primary[500] : theme.color.black[200]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${({ isDragging, hasError, theme }) =>
    hasError ? theme.color.danger[50] : isDragging ? theme.color.primary[50] : theme.color.black[50]};

  &:hover {
    border-color: ${({ hasError, theme }) => (hasError ? theme.color.danger[500] : theme.color.primary[500])};
    background-color: ${({ hasError, theme }) => (hasError ? theme.color.danger[50] : theme.color.primary[50])};
  }
`;

export const DropzoneContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FileInput = styled.input`
  display: none;
`;

export const DropzoneText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const FileDescription = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.color.black[400]};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const FileList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 300px;
  overflow-y: auto;
  padding: 0.5rem;
  margin: 0.5rem 0;
  background-color: white;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.black[100]};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.black[100]};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.black[300]};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.black[400]};
  }
`;

export const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.color.black[50]};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.black[100]};

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
  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileSize = styled.span`
  color: ${({ theme }) => theme.color.black[500]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  white-space: nowrap;
`;

export const DeleteButton = styled.button`
  padding: 0.4rem 0.8rem;
  background-color: ${({ theme }) => theme.color.danger[500]};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.danger[600]};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.danger[700]};
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  background-color: ${theme.color.primary[500]};
  color: ${theme.color.black[0]};
  border: none;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.color.primary[600]};
  }

  &:active {
    background-color: ${theme.color.primary[700]};
  }
`;
