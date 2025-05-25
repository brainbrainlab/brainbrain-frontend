import styled from 'styled-components';

export const Title = styled.h1`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.base};
  border-bottom: 2px solid ${({ theme }) => theme.color.primary[500]};

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Description = styled.p`
  width: 100%;

  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  white-space: pre-wrap;
  word-break: keep-all;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};

  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  color: ${({ theme }) => theme.color.black[700]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const RequiredMark = styled.span`
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.color.error[500]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  height: 4.8rem;
  padding: 0 ${({ theme }) => theme.spacing.base};
  border: 1.5px solid ${({ hasError, theme }) => (hasError ? theme.color.error[500] : theme.color.black[200])};
  border-radius: 6px;

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;

    box-shadow: 0 0 0 3px ${({ hasError, theme }) => (hasError ? theme.color.error[100] : theme.color.primary[100])};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.black[400]};
  }
`;

export const TextArea = styled.textarea<{ hasError: boolean }>`
  width: 100%;
  min-height: 15rem;
  padding: ${({ theme }) => theme.spacing.base};
  border: 1.5px solid ${({ hasError, theme }) => (hasError ? theme.color.error[500] : theme.color.black[200])};
  border-radius: 6px;

  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1.6;
  resize: vertical;

  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;

    box-shadow: 0 0 0 3px ${({ hasError, theme }) => (hasError ? theme.color.error[100] : theme.color.primary[100])};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.black[400]};
  }
`;

export const ErrorContainer = styled.div`
  min-height: 2rem;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.error[500]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const FileDropZone = styled.label<{ isDragging?: boolean; hasError?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.base};

  min-height: ${({ isDragging }) => (isDragging ? '20rem' : '12rem')};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 2px dashed ${({ theme }) => theme.color.black[200]};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.color.black[50]};
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-align: center;

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary[500]};

    background-color: ${({ theme }) => theme.color.primary[50]};
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const DropzoneContent = styled.div`
  width: 100%;
`;

export const DropzoneText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base};
`;

export const FileDescription = styled.p`
  color: ${({ theme }) => theme.color.black[500]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
`;

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  overflow-y: auto;

  width: 100%;
  max-height: 30rem;
  padding: ${({ theme }) => theme.spacing.base};
  border: 1px solid ${({ theme }) => theme.color.black[100]};
  border-radius: 4px;
`;

export const FileItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.color.black[50]};
`;

export const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const FileName = styled.span`
  color: ${({ theme }) => theme.color.black[900]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const FileSize = styled.span`
  color: ${({ theme }) => theme.color.black[600]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const DeleteButton = styled.button`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.base};
  border: none;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.color.error[500]};
  color: ${({ theme }) => theme.color.black[0]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.error[600]};
  }
`;
