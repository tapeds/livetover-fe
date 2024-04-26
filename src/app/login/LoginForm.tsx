'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import Input from '@/components/Input';
import api from '@/lib/api';
import { LoginProps } from '@/types/auth';

export default function LoginForm({
  userRole,
}: {
  userRole: 'konsumen' | 'restoran';
}) {
  const methods = useForm<LoginProps>();
  const { handleSubmit } = methods;
  const router = useRouter();

  const { mutate } = useMutation<
    AxiosResponse,
    AxiosError<ApiError>,
    LoginProps
  >({
    mutationFn: async (data) => {
      return api.post(`/${userRole}/login`, data);
    },
    onSuccess: () => {
      toast.success('Login success');
      router.push('/');
    },
    onError: (error) => {
      toast.error(error.response?.data.message || 'An error occurred');
    },
  });

  const onSubmit: SubmitHandler<LoginProps> = (data) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-[300px] flex-col gap-6 max-[300px]:w-[200px] sm:w-[400px] min-[1300px]:w-[500px]'
      >
        <Input
          id='email'
          label='Email'
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          }}
          placeholder='Enter your email'
        />
        <Input
          id='password'
          label='Password'
          validation={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          placeholder='Enter your password'
          type='password'
        />
        <Button type='submit'>Login</Button>
      </form>
    </FormProvider>
  );
}
