import { useEffect, useRef, useState } from 'react';

import Button from '../../components/common/Button/Button';
import PageLayout from '../../components/common/PageLayout/PageLayout';
import * as S from './Contact.styles';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  content: string;
  files: File[];
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  content?: string;
}

function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    content: '',
    files: [],
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [showErrors, setShowErrors] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRefs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    subject: useRef<HTMLInputElement>(null),
    content: useRef<HTMLTextAreaElement>(null),
  };

  const MAX_FILES = 5;
  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  const MAX_TOTAL_SIZE = 30 * 1024 * 1024;

  // 파일 에러 자동 제거
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (fileError) {
      timeoutId = setTimeout(() => {
        setFileError(null);
      }, 3000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [fileError]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (showErrors) {
      timeoutId = setTimeout(() => {
        setShowErrors(false);
      }, 3000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [showErrors]);

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return '이메일을 입력해주세요';
    }

    const basicEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!basicEmailRegex.test(email)) {
      return '올바른 이메일 형식이 아닙니다';
    }

    const [localPart, domain] = email.split('@');

    if (localPart.length > 64 || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(localPart)) {
      return '이메일 주소의 @ 앞부분이 올바르지 않습니다';
    }

    if (domain.length > 255 || !/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain)) {
      return '이메일 도메인이 올바르지 않습니다';
    }

    return undefined;
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    if (!form.name.trim()) {
      errors.name = '이름을 입력해주세요';
      isValid = false;
    }

    const emailError = validateEmail(form.email);
    if (emailError) {
      errors.email = emailError;
      isValid = false;
    }

    if (!form.subject.trim()) {
      errors.subject = '제목을 입력해주세요';
      isValid = false;
    }

    if (!form.content.trim()) {
      errors.content = '내용을 입력해주세요';
      isValid = false;
    }

    setFormErrors(errors);
    setShowErrors(true);

    // 에러가 있는 첫 번째 필드로 스크롤
    if (!isValid) {
      const firstErrorField = Object.keys(errors)[0] as keyof FormErrors;
      formRefs[firstErrorField]?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    alert('문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
    setForm({
      name: '',
      email: '',
      subject: '',
      content: '',
      files: [],
    });
    setFormErrors({});
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));

    // 이메일 필드의 경우 실시간 유효성 검사
    if (name === 'email' && value.trim()) {
      const emailError = validateEmail(value);
      setFormErrors(prev => ({
        ...prev,
        email: emailError,
      }));
    } else if (formErrors[name as keyof FormErrors]) {
      // 다른 필드는 기존처럼 에러 메시지 제거
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    setFileError(null);

    // 최대 파일 개수 체크
    if (form.files.length + newFiles.length > MAX_FILES) {
      setFileError(`파일은 최대 ${MAX_FILES}개까지만 첨부 가능합니다.`);
      return;
    }

    // 총 파일 크기 체크
    const currentTotalSize = form.files.reduce((acc, file) => acc + file.size, 0);
    const newTotalSize = newFiles.reduce((acc, file) => acc + file.size, 0);
    if (currentTotalSize + newTotalSize > MAX_TOTAL_SIZE) {
      setFileError('총 파일 크기가 30MB를 초과할 수 없습니다.');
      return;
    }

    const validFiles = newFiles.filter(file => isValidFile(file));

    if (validFiles.length > 0) {
      setForm(prev => ({
        ...prev,
        files: [...prev.files, ...validFiles],
      }));
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteFile = (index: number) => {
    setForm(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const isValidFile = (file: File) => {
    const validExtensions = ['.jpg', '.jpeg', '.png', '.pdf', '.doc', '.docx'];
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();

    if (!validExtensions.includes(fileExtension)) {
      setFileError('지원하지 않는 파일 형식입니다.');
      return false;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError('파일 크기는 10MB를 초과할 수 없습니다.');
      return false;
    }

    return true;
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setFileError(null);

    const newFiles = Array.from(e.dataTransfer.files || []);

    // 최대 파일 개수 체크
    if (form.files.length + newFiles.length > MAX_FILES) {
      setFileError(`파일은 최대 ${MAX_FILES}개까지만 첨부 가능합니다.`);
      return;
    }

    // 총 파일 크기 체크
    const currentTotalSize = form.files.reduce((acc, file) => acc + file.size, 0);
    const newTotalSize = newFiles.reduce((acc, file) => acc + file.size, 0);
    if (currentTotalSize + newTotalSize > MAX_TOTAL_SIZE) {
      setFileError('총 파일 크기가 30MB를 초과할 수 없습니다.');
      return;
    }

    const validFiles = newFiles.filter(file => isValidFile(file));

    if (validFiles.length > 0) {
      setForm(prev => ({
        ...prev,
        files: [...prev.files, ...validFiles],
      }));
    }
  };

  return (
    <PageLayout>
      <S.Title>문의하기</S.Title>
      <S.Description>
        BrainBrain과 함께 성장하는 여정에 여러분의 소중한 의견이 필요합니다.
        <br />
        서비스 개선 제안, 버그 리포트, 결제 관련 문의, 또는 단순히 궁금한 점이 있으시다면 언제든 편하게 문의해 주세요.
        <br />
        빠른 시일 내에 답변 드리겠습니다.
      </S.Description>
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
          <S.Label htmlFor="name">
            이름<span>*</span>
          </S.Label>
          <S.Input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="홍길동"
            ref={formRefs.name}
            hasError={!!formErrors.name}
          />
          <S.ErrorContainer>{formErrors.name && <S.ErrorMessage>{formErrors.name}</S.ErrorMessage>}</S.ErrorContainer>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="email">
            이메일<span>*</span>
          </S.Label>
          <S.Input
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            ref={formRefs.email}
            hasError={!!formErrors.email}
          />
          <S.ErrorContainer>{formErrors.email && <S.ErrorMessage>{formErrors.email}</S.ErrorMessage>}</S.ErrorContainer>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="subject">
            제목<span>*</span>
          </S.Label>
          <S.Input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="문의 제목을 입력해주세요"
            ref={formRefs.subject}
            hasError={!!formErrors.subject}
          />
          <S.ErrorContainer>
            {formErrors.subject && <S.ErrorMessage>{formErrors.subject}</S.ErrorMessage>}
          </S.ErrorContainer>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="content">
            내용<span>*</span>
          </S.Label>
          <S.TextArea
            id="content"
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="문의하실 내용을 입력해주세요"
            ref={formRefs.content}
            hasError={!!formErrors.content}
          />
          <S.ErrorContainer>
            {formErrors.content && <S.ErrorMessage>{formErrors.content}</S.ErrorMessage>}
          </S.ErrorContainer>
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>첨부파일 (결제 내역 등)</S.Label>
          <S.FileDropZone
            isDragging={isDragging}
            hasError={!!fileError}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleFileButtonClick}
          >
            <S.FileInput
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
              multiple
            />
            <S.DropzoneContent>
              {form.files.length === 0 ? (
                <S.DropzoneText>
                  파일을 드래그하여 놓거나 클릭하여 선택하세요
                  <S.FileDescription>
                    * 첨부 가능한 파일: jpg, jpeg, png, pdf, doc, docx
                    <br />
                    * 파일당 최대 10MB, 총 30MB까지 첨부 가능
                    <br />* 최대 5개까지 첨부 가능
                  </S.FileDescription>
                </S.DropzoneText>
              ) : (
                <S.FileList>
                  {form.files.map((file, index) => (
                    <S.FileItem key={`${file.name}-${index}`}>
                      <S.FileInfo>
                        <S.FileName>{file.name}</S.FileName>
                        <S.FileSize>({(file.size / 1024 / 1024).toFixed(2)} MB)</S.FileSize>
                      </S.FileInfo>
                      <S.DeleteButton
                        onClick={e => {
                          e.stopPropagation();
                          handleDeleteFile(index);
                        }}
                      >
                        삭제
                      </S.DeleteButton>
                    </S.FileItem>
                  ))}
                </S.FileList>
              )}
            </S.DropzoneContent>
          </S.FileDropZone>
          {fileError && <S.ErrorMessage>{fileError}</S.ErrorMessage>}
        </S.FormGroup>
        <Button type="submit">보내기</Button>
      </S.Form>
    </PageLayout>
  );
}

export default Contact;
